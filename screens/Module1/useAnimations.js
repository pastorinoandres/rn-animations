import { useRef, useState } from 'react';
import { Animated } from 'react-native';

const { Value, timing, spring } = Animated;

export const useAnimations = () => {
  const [transformed, setTransformed] = useState(false);

  const toogleAnimation = () => {
    if (transformed) {
      back();
    } else {
      go();
    }
    setTransformed(!transformed);
  };

  const valor = useRef(new Value(0)).current;

  const go = () => {
    Animated.sequence([
      timing(valor, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.delay(2000),
      timing(valor, {
        toValue: 2,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.delay(2000),
      timing(valor, {
        toValue: 3,
        duration: 2000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const back = () => {
    timing(valor, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const animation = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: valor.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 12],
      }),
    },
    shadowOpacity: valor.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 0.58],
    }),
    shadowRadius: valor.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 16],
    }),
    borderRadius: valor.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: [10, 50, 10, 10],
    }),
    backgroundColor: valor.interpolate({
      inputRange: [0, 1, 2, 3],
      outputRange: ['#FF8C8C', '#14D2B9', '#8C91FF', '#3B5998'],
    }),
    transform: [
      {
        rotate: valor.interpolate({
          inputRange: [0, 1, 2, 3],
          outputRange: ['0deg', '0deg', '45deg', '0deg'],
        }),
      },
      {
        scale: valor.interpolate({
          inputRange: [0, 1, 2, 3],
          outputRange: [1, 2, 1, 2],
        }),
      },
      {
        scaleX: valor.interpolate({
          inputRange: [0, 1, 2, 3],
          outputRange: [1, 1, 1, 0.5],
        }),
      },
      {
        scaleY: valor.interpolate({
          inputRange: [0, 1, 2, 3],
          outputRange: [1, 1, 1, 1.7],
        }),
      },
    ],
  };

  return { animation, toogleAnimation };
};
