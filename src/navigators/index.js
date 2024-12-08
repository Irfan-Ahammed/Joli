import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  SplashScreen,
  SigninScreen,
  SignUpScreen,
  WelcomeScreen,
  ForgetPassword,
  RegisterPhone,
  Verification,
} from '../screens';

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPass" component={ForgetPassword} />
        {/* <Stack.Screen name="RegisterPhone" component={RegisterPhone} />
        <Stack.Screen name="Verification" component={Verification} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
