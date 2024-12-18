import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {Separator} from '../../components';
import {Color, Fonts} from '../../contants';
import Display from '../../utils/Display';
import {signUpScreenOne} from '../../services/auth';

const PageOne = ({navigation, route}) => {
  const {setStatus, status} = route.params; // Access setStatus
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isEmailFilled, setIsEmailFilled] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    console.log(status); // Will log whenever `status` changes
  }, [status]);

  const successfullynavigate = () => {
    // setStatus(0.5)
    setError('');
    signUpScreenOne(email, password, navigation, setError);
    setIsEmailFilled(true);
  };
  return (
    <View style={styles.container}>
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
            textContentType="emailAddress"
            onSubmitEditing={() => {
              setIsEmailFilled(!isEmailFilled);
              setStatus(0.15); // Update status when email input is submitted
            }}
            placeholderTextColor={Color.DEFAULT_BLACK}
            selectionColor={Color.DEFAULT_BLACK}
            style={styles.inputText}
            value={email}
            onChangeText={setEmail}
            onEndEditing={() => setStatus(0.25)} // Ensure it updates on focus loss
          />
        </View>
      </View>
      <Separator height={15} />
      {isEmailFilled ? (
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
              textContentType="password"
              placeholderTextColor={Color.DEFAULT_BLACK}
              secureTextEntry={isPasswordShow ? false : true}
              selectionColor={Color.DEFAULT_BLACK}
              style={styles.inputText}
              value={password}
              onChangeText={setPassword}
              onSubmitEditing={() => setStatus(0.5)}
              onEndEditing={() => setStatus(0.5)}
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
      ) : null}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Text style={styles.privacyContainer}>
        By clicking Agree & Join or Countinue, you agree to the Joli
        <Text style={styles.privacy}> User Agreement, Privacy Policy </Text>and
        <Text style={styles.privacy}> Cookie Policy</Text>. For phone number
        signups we will send code via SMS
      </Text>
      <View>
        <TouchableOpacity
          style={styles.SigninButton}
          onPress={successfullynavigate}>
          <Text style={styles.SigninButtonText}>Agree & Join</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.accountText}>Already have an account?</Text>
        <Text
          onPress={() => navigation.navigate('Signin')}
          style={styles.signUpText}>
          Sign In
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
  privacyContainer: {
    fontSize: 12,
    marginHorizontal: 20,
    marginTop: 10,
  },
  privacy: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Color.BLUE,
  },
  errorText: {
    marginHorizontal: 20,
    textAlign: 'center',
    color: Color.DEFAULT_RED,
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 14,
    marginTop: 10,
  },
});

export default PageOne;
