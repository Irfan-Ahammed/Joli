import React, {useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar, Image} from 'react-native';
import {Color, Fonts} from '../contants';
import images from '../contants/images';
import {Display} from '../utils';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={Color.BLUE} />
      <Text style={styles.LOGO}>JOLI</Text>
    </View>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.BLUE,
  },
  LOGO: {
    fontSize: 60,
    color: Color.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_BOLD,
  },
});
