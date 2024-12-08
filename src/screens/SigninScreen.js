import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Separator, ToggleButton} from '../components';
import {Color, Fonts, Images} from '../contants';
import {useNavigation} from '@react-navigation/native';
import Display from '../utils/Display';
import {signIn} from '../services/auth';

const SigninScreen = ({navigation}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  console.log(error);

  const successfullyLogedIn = () => {
    setError('');
    signIn(email, password, navigation, setError);
  };
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
          onPress={() => navigation.goBack()}
        />

        <Text style={styles.headerTitle}>Sign In</Text>
      </View>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.content}>
        Enter your username and password, and start exploring job opportunities
        with Joli.
      </Text>
      <TouchableOpacity style={styles.facebookButton}>
        <View style={styles.socialButtonContainer}>
          <Image source={Images.FACEBOOK} style={styles.signinButtonLogo} />
          <Text style={styles.signinButtonText}>Connect with google</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.googleButton}>
        <View style={styles.socialButtonContainer}>
          <Image source={Images.GOOGLE} style={styles.signinButtonLogo} />
          <Text style={styles.signinButtonText}>Connect with facebook</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.orContainer}>
        <Text style={styles.orLeftRight} />
        <Text style={styles.orText}>or</Text>
        <Text style={styles.orLeftRight} />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="mail"
            size={20}
            color={Color.DEFAULT_BLACK}
            style={{marginRight: 10}}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={Color.DEFAULT_BLACK}
            selectionColor={Color.DEFAULT_BLACK}
            style={styles.inputText}
            value={email}
            onChangeText={setEmail}
          />
        </View>
      </View>
      <Separator height={15} />
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="lock"
            size={20}
            color={Color.DEFAULT_BLACK}
            style={{marginRight: 10}}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={Color.DEFAULT_BLACK}
            secureTextEntry={isPasswordShow ? false : true}
            selectionColor={Color.DEFAULT_BLACK}
            style={styles.inputText}
            value={password}
            onChangeText={setPassword}
          />
          <Feather
            name={isPasswordShow ? 'eye' : 'eye-off'}
            size={22}
            onPress={() => setIsPasswordShow(!isPasswordShow)}
            color={Color.DEFAULT_BLACK}
            style={{marginRight: 10}}
          />
        </View>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <View style={styles.forgetPasswordContainer}>
        <View style={styles.toggleContainer}>
          <ToggleButton size={0.5} />
          <Text style={styles.rememberText}>Remember me</Text>
        </View>
        <Text
          style={styles.forgotPasswordText}
          onPress={() => navigation.navigate('ForgotPass')}>
          Forgot Password
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={styles.SigninButton}
          onPress={successfullyLogedIn}>
          <Text style={styles.SigninButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.accountText}>Don't have an account?</Text>
        <Text
          onPress={() => navigation.navigate('SignUp')}
          style={styles.signUpText}>
          Sign Up
        </Text>
      </View>
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
  inputContainer: {
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: Color.DEFAULT_BLACK,
    justifyContent: 'center',
  },
  inputSubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputText: {
    fontSize: 14,
    textAlignVertical: 'center',
    padding: 0,
    height: Display.setHeight(6),
    color: Color.DEFAULT_BLACK,
    flex: 1,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  forgetPasswordContainer: {
    marginHorizontal: 20,
    marginTop: 16,
    width: Display.setWidth(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  rememberText: {
    marginLeft: 10,
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Color.DEFAULT_GREY,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  forgotPasswordText: {
    fontSize: 12,
    lineHeight: 12 * 1.4,
    color: Color.BLUE,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  SigninButton: {
    backgroundColor: Color.BLUE,
    borderRadius: 50,
    marginHorizontal: 20,
    height: Display.setHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  SigninButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Color.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  signUpContainer: {
    marginHorizontal: 20,
    justifyContent: 'center',
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: Display.setWidth(90),
  },
  accountText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Color.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  signUpText: {
    fontSize: 13,
    lineHeight: 13 * 1.4,
    color: Color.BLUE,
    marginLeft: 5,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },

  orLeftRight: {
    flex: 1,
    height: 1,
    backgroundColor: Color.DEFAULT_GREY,
    marginHorizontal: 20,
  },

  orText: {
    fontSize: 13,
    color: Color.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
    textAlign: 'center',
  },

  facebookButton: {
    paddingVertical: 12,
    marginHorizontal: 20,
    borderRadius: 50,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.DEFAULT_BLACK,
    borderWidth: 1,
  },
  googleButton: {
    paddingVertical: 12,
    marginHorizontal: 20,
    borderRadius: 50,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Color.DEFAULT_BLACK,
    borderWidth: 1,
  },
  signinButtonLogo: {
    height: 22,
    width: 22,
    marginRight: 5,
  },

  socialButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  signinButtonText: {
    color: Color.DEFAULT_BLACK,
    fontSize: 17,
    lineHeight: 17 * 1.4,
    fontWeight: '500',
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorText: {
    marginHorizontal: 20,
    textAlign: 'center',
    color: Color.DEFAULT_RED,
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 14,
    marginTop:7,
  },
});

export default SigninScreen;
