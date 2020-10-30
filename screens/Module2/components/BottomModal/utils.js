import Animated, { Easing, startClock } from 'react-native-reanimated';
const { Value, cond, set, clockRunning, stopClock, timing } = Animated;

export function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    frameTime: new Value(0),
    time: new Value(0),
  };

  const config = {
    toValue: new Value(0),
    duration: 300,
    easing: Easing.inOut(Easing.cubic),
  };

  return [
    cond(
      clockRunning(clock),
      [value],
      [
        set(state.finished, 0),
        set(state.frameTime, 0),
        set(state.time, 0),
        set(state.position, value),
        set(config.toValue, dest),
        startClock(clock),
      ],
    ),
    timing(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position,
  ];
}
