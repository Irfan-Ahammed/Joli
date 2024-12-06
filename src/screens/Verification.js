import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Color, Fonts} from '../contants';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import Display from '../utils/Display';

const Verification = ({
  route: {
    params: {phoneNumber},
  },
}) => {
  const navigation = useNavigation();
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});

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

        <Text style={styles.headerTitle}>OTP Verification</Text>
      </View>

      <Text style={styles.content}>
        Enter the OTP number just sent you at
        <Text style={styles.phoneNumberText}>{phoneNumber}</Text>
      </Text>
      <View style={styles.OTPContainer}>
        <View style={styles.OTPbox}>
          <TextInput
            placeholderTextColor={Color.DEFAULT_BLACK}
            selectionColor={Color.DEFAULT_BLACK}
            style={styles.OTPtext}
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChangeText={text => {
              setOtp({...otp, 1: text});
              text && secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.OTPbox}>
          <TextInput
            placeholderTextColor={Color.DEFAULT_BLACK}
            selectionColor={Color.DEFAULT_BLACK}
            style={styles.OTPtext}
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChangeText={text => {
              setOtp({...otp, 2: text});
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
          />
        </View>
        <View style={styles.OTPbox}>
          <TextInput
            placeholderTextColor={Color.DEFAULT_BLACK}
            selectionColor={Color.DEFAULT_BLACK}
            style={styles.OTPtext}
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText={text => {
              setOtp({...otp, 3: text});
              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
          />
        </View>
        <View style={styles.OTPbox}>
          <TextInput
            placeholderTextColor={Color.DEFAULT_BLACK}
            selectionColor={Color.DEFAULT_BLACK}
            style={styles.OTPtext}
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChangeText={text => {
              setOtp({...otp, 4: text});
              !text && thirdInput.current.focus();
            }}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.SigninButton}
          onPress={() => console.log(otp[1],otp[2],otp[3],otp[4])}>
          <Text style={styles.SigninButtonText}>Verify</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Verification;

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

  content: {
    fontSize: 18,
    marginHorizontal: 20,
    marginTop: 50,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  phoneNumberText: {
    fontSize: 18,
    fontFamily: Fonts.POPPINS_REGULAR,
    color: Color.DEFAULT_YELLOW,
  },
  OTPContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  OTPbox: {
    borderRadius: 8,
    borderColor: Color.BLUE,
    borderWidth: 1,
  },

  OTPtext: {
    fontSize: 25,
    color: Color.DEFAULT_BLACK,
    padding: 0,
    textAlign: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
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
});
