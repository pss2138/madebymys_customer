import {FC, useState} from 'react';
import styles from './styles';
import {Image, StyleSheet, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type ZoomableImageProps = {
  uri: ReturnType<typeof require>;
};

const ZoomableImage: FC<ZoomableImageProps> = ({uri}) => {
  const scale = useSharedValue(1);
  const [isZooming, setIsZooming] = useState(false);

  const pinchGesture = Gesture.Pinch()
    .onStart(() => {
      runOnJS(setIsZooming)(true);
    })
    .onUpdate(e => {
      const clamped = Math.max(1, Math.min(e.scale, 3));
      scale.value = clamped;
    })
    .onEnd(() => {
      scale.value = withTiming(1, {duration: 200});
      runOnJS(setIsZooming)(false);
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  return (
    <GestureDetector gesture={pinchGesture}>
      <Animated.View
        style={[styles.container, animatedStyle, isZooming && {zIndex: 999}]}>
        <Image source={uri} style={styles.image} resizeMode="contain" />
      </Animated.View>
    </GestureDetector>
  );
};

export default ZoomableImage;
