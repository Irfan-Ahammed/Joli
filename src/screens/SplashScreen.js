import React, { useEffect } from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import {Color, Fonts} from '../contants';
import images from '../contants/images';
import { Display } from '../utils';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Welcome');
      }, 1000);
    }, []);
  
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Color.DEFAULT_PRIMARY}
      />
      <Image
        style={styles.image}
        resizeMode="contain"
        source={images.LOGO_TITLE}
      />

    </View>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.DEFAULT_SECONDARY,
  },
  image: {
    height: Display.default.setHeight(30),
    width: Display.default.setWidth(25),
  },
 
});
