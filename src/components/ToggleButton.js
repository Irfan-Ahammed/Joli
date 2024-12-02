import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../contants';

const containerStyle = (size,isActive) => ({
  backgroundColor: isActive ? Color.BLUE : Color.DEFAULT_GREY,
  height: 32 * size,
  width: 64 * size,
  borderRadius: 32,
  padding: 4 * size,
});

const toggleStyle = (size, animatedValue) => ({
  height: 24 * size,
  width: 24 * size,
  backgroundColor: Color.DEFAULT_WHITE,
  borderRadius: 32,
  transform: [
    {
      translateX: animatedValue,
    },
  ],
});

const ToggleButton = ({size}) => {
  const [isActive, setisActive] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));
  const toggleHandle = () => {
    Animated.timing(animatedValue, {
      toValue: isActive ? 0 : 32 * size,
      duration: 250,
      easing: Easing.bounce,
      delay: 0,
      useNativeDriver: true,
    }).start();
    setisActive(!isActive);
  };
  return (
    <TouchableOpacity
      style={containerStyle(size,isActive)}
      onPress={() => toggleHandle()}>
      <Animated.View style={toggleStyle(size, animatedValue)} />
    </TouchableOpacity>
  );
};

export default ToggleButton;

