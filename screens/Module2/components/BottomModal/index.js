import React, { Component } from 'react';
import Animated, { Easing, Clock } from 'react-native-reanimated';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { Dimensions, TouchableWithoutFeedback, View, StatusBar } from 'react-native';
import { runTiming } from './utils';
import { bottomModal as styles } from './styles';

const { container, backdropZone, backdropIcon, body, blur } = styles;
const { height } = Dimensions.get('window');
const backdrop = 30;

const {
  Extrapolate,
  Value,
  block,
  cond,
  eq,
  set,
  add,
  multiply,
  greaterThan,
  event,
  interpolate,
  or,
  call,
} = Animated;

export class BottomModal extends Component {
  constructor(props) {
    super(props);

    const { heightPreview = -backdrop, heightExtended = 300, opaque = true } = this.props;
    this.heightExtended = heightExtended;
    const preview = heightPreview || -backdrop;
    this.initialPosition = height - (preview + backdrop);
    this.finalPosition = height - (heightExtended + backdrop);

    this.menu = new Value(0);
    this.blurZone = new Value(opaque ? 1 : 0);
    this.gestureState = new Value(State.UNDETERMINED);
    this.offsetY = new Value(this.initialPosition);
    this.velocityY = new Value(0);
    this.translationY = new Value(0);
    const clockPan = new Clock();

    this.blurPosition = new Value(height);

    const { translationY, velocityY, offsetY, gestureState: state, menu, blurZone } = this;
    this.onSlide = event(
      [
        {
          nativeEvent: {
            translationY,
            velocityY,
            state,
          },
        },
      ],
      { useNativeDriver: true },
    );

    const finalTranslateY = add(add(translationY, offsetY), multiply(0.2, velocityY));
    const snapPoint = cond(
      greaterThan(finalTranslateY, this.initialPosition - 100),
      this.initialPosition,
      this.finalPosition,
    );

    this.tY = block([
      cond(
        eq(this.gestureState, State.END),
        [
          set(offsetY, runTiming(clockPan, add(translationY, offsetY), snapPoint)),
          cond(or(eq(offsetY, this.initialPosition), eq(offsetY, this.finalPosition)), [
            set(translationY, 0),
            set(state, State.UNDETERMINED),
          ]),
          cond(eq(offsetY, this.finalPosition), set(menu, 1)),
          cond(eq(offsetY, this.initialPosition), set(menu, 0)),
          offsetY,
        ],
        [
          cond(eq(offsetY, this.finalPosition), set(menu, 1)),
          cond(eq(offsetY, this.initialPosition), set(menu, 0)),
          add(offsetY, translationY),
        ],
      ),
    ]);

    this.bpY = cond(
      eq(this.tY, this.initialPosition),
      set(this.blurPosition, height),
      cond(eq(blurZone, 1), set(this.blurPosition, 0), set(this.blurPosition, height)),
    );

    this.toggleModal = () => {
      const dest = cond(menu, this.initialPosition, this.finalPosition);

      Animated.timing(this.offsetY, {
        toValue: dest,
        duration: 500,
        easing: Easing.inOut(Easing.ease),
      }).start();
    };
  }

  onPressBlurZone = () => {
    const onPress = this.props?.onPressBlurZone || this.toggleModal;
    onPress();
  };

  render() {
    const {
      props: { children },
      onPressBlurZone,
      heightExtended,
      onSlide,
      initialPosition,
      finalPosition,
      tY,
      bpY,
    } = this;

    const translateY = interpolate(tY, {
      inputRange: [finalPosition, initialPosition],
      outputRange: [finalPosition, initialPosition],
      extrapolate: Extrapolate.CLAMP,
    });

    const cardStyles = {
      style: [
        {
          transform: [{ translateY }],
          height: heightExtended + backdrop,
        },
        container,
      ],
    };

    const blurStyles = {
      style: [
        {
          opacity: interpolate(translateY, {
            inputRange: [finalPosition, initialPosition],
            outputRange: [0.6, 0],
          }),
          transform: [{ translateY: bpY }],
        },
        blur,
      ],
    };

    return (
      <>
        <StatusBar
          animated
          barStyle="dark-content"
          translucent={true}
          backgroundColor="transparent"
        />
        <TouchableWithoutFeedback onPress={onPressBlurZone}>
          <Animated.View {...blurStyles} />
        </TouchableWithoutFeedback>
        <PanGestureHandler onHandlerStateChange={onSlide} onGestureEvent={onSlide}>
          <Animated.View {...cardStyles}>
            <View style={backdropZone}>
              <View style={backdropIcon} />
            </View>
            <View style={body}>{children}</View>
          </Animated.View>
        </PanGestureHandler>
      </>
    );
  }
}
