import React, {useRef, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import Display from '../utils/Display';

const ProgressBar = ({progress, color}) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: progress, // Progress value between 0 and 1
      duration: 3000, // Slow animation duration in milliseconds
      useNativeDriver: false, // Set to false for layout properties
    }).start();
  }, [progress]);

  const animatedWidth = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.progressBar,
          {width: animatedWidth, backgroundColor: color},
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Display.setHeight(1.4),
    width: Display.setWidth(90),
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 20,
    alignSelf: 'center',
    borderWidth: 1,
    padding: 2,
  },
});
export default ProgressBar;
