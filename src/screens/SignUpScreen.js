import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {ProgressBar, Separator} from '../components';
import {Color, Fonts} from '../contants';
import Display from '../utils/Display';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {PageOne, PageTwo} from './index';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();
const PROGRESS_COLORS = {
  stepOne: '#00FFFF',
  stepTwo: '#008080',
  stepThree: '#00FF00',
  stepFour: '#32CD32',
};

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [status, setStatus] = useState(0.10); // Current progress step
  const progressColor =
    status === 0.25
      ? PROGRESS_COLORS.stepOne
      : status === 0.5
      ? PROGRESS_COLORS.stepTwo
      : status === 0.75
      ? PROGRESS_COLORS.stepThree
      : PROGRESS_COLORS.stepFour;
  // console.log(status);
  // console.log(progressColor);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Color.DEFAULT_WHITE}
      />
      <Separator height={StatusBar.currentHeight} />
      <View style={styles.headerContainer}>
        <Ionicons
          name="chevron-back"
          size={30}
          onPress={() => navigation.goBack()} // Navigate back
        />
        <Text style={styles.headerTitle}>Sign Up</Text>
      </View>
      <ProgressBar progress={status} color={progressColor} />
      <Text style={styles.title}>Create Your Account</Text>
      <Text style={styles.content}>
        Start exploring job opportunities and connecting with employers
        effortlessly
      </Text>
      <Stack.Navigator
        initialRouteName="PageOne"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="PageOne"
          component={PageOne}
          initialParams={{setStatus,status}}
        />
        <Stack.Screen
          name="PageTwo"
          component={PageTwo}
          initialParams={{setStatus}}
        />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.DEFAULT_WHITE,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
    width: Display.setWidth(80),
    textAlign: 'center',
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  title: {
    fontSize: 20,
    lineHeight: 20 * 1.4,
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 20,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  content: {
    fontSize: 15,
    marginHorizontal: 20,
    marginTop: 10,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
});
export default SignUpScreen;
