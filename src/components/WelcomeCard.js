import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Display} from '../utils';
import {Fonts, Animations, Color} from '../contants';
import LottieView from 'lottie-react-native';

const WelcomeCard = ({title, description, image}) => {
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.image}
        source={Animations[image]}
        autoPlay
        loop
      />
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default WelcomeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Display.default.setWidth(100),
  },
  image: {
    height: Display.default.setHeight(40),
    width: Display.default.setWidth(90),
  },
  titleText: {
    fontSize: 19,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  description: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_REGULAR,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
