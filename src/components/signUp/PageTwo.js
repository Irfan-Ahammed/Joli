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
import {Separator, ToggleButton} from '../../components';
import {Color, Fonts, Images} from '../../contants';
import {useNavigation} from '@react-navigation/native';
import Display from '../../utils/Display';

const PageTwo = ({goToNextPage}) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isEmailFilled, setIsEmailFilled] = useState(false);

  const navigation = useNavigation();

  const navigateBackToPageOne = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <TextInput
            placeholder="First name"
            onSubmitEditing={() => setIsEmailFilled(!isEmailFilled)}
            placeholderTextColor={Color.DEFAULT_BLACK}
            selectionColor={Color.DEFAULT_BLACK}
            style={styles.inputText}
          />
        </View>
      </View>
      <Separator height={25} />

      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <TextInput
            placeholder="Last name"
            onSubmitEditing={() => setIsEmailFilled(!isEmailFilled)}
            placeholderTextColor={Color.DEFAULT_BLACK}
            selectionColor={Color.DEFAULT_BLACK}
            style={styles.inputText}
          />
        </View>
      </View>
      <Separator height={25} />
      <View>
        <View style={styles.rememberContainer}>
          <ToggleButton size={0.6} />
          <Text style={{fontSize: 14, marginLeft: 5}}>
            Remember me.
            <Text style={{fontSize: 14, fontWeight: '600', color: Color.BLUE}}>
              {' '}
              Learn more
            </Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.SigninButton}>
          <Text style={styles.SigninButtonText}  onPress={navigateBackToPageOne}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.accountText}>Already have an account?</Text>
        <Text
          onPress={() => navigation.navigate('Signin')||scrollPage()}
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
    marginTop: 20,
  },
  privacy: {
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    color: Color.BLUE,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
});

export default PageTwo;
