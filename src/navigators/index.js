import React, {useEffect} from 'react';
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
  HomeScreen,
} from '../screens';
import {useDispatch, useSelector} from 'react-redux';
import {GeneralAction} from '../actions';

const Stack = createStackNavigator();

const Navigators = () => {
  const {isAppLoading, token, isFirstTimeUse} = useSelector(
    state => state?.generalState,
  );
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(GeneralAction.appStart());
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isAppLoading ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : !token ? (
          <>
            {isFirstTimeUse && (
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
            )}
            <Stack.Screen name="Signin" component={SigninScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
            <Stack.Screen name="ForgotPass" component={ForgetPassword} />
            {/* <Stack.Screen name="RegisterPhone" component={RegisterPhone} />
          <Stack.Screen name="Verification" component={Verification} /> */}
          </>
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const mapStateToProps = state => {
//   return {
//     token: state.generalState.token,
//   };
// };

export default Navigators;
// export default connect(mapStateToProps)(Navigators);
//connect call cheydal adh return oru function terum adinte parameter Navigators
