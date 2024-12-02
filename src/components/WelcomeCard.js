import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Display} from '../utils';
import {Fonts, Images} from '../contants';

const WelcomeCard = ({title, description, image}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Images[image]} resizeMode="contain" />
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
    height: Display.default.setHeight(30),
    width: Display.default.setWidth(60),
  },
  titleText: {
    fontSize: 22,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  description: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_REGULAR,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});
