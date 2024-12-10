import {
  StatusBar,
  StyleSheet,
  Text,
  navigation,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Color, Fonts} from '../contants';
import {Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Display from '../utils/Display';

const ForgetPassword = () => {
  const navigation = useNavigation();

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

        <Text style={styles.headerTitle}>Forgot Password</Text>
      </View>

      <Text style={styles.content}>
        Enter your email, so that we can help you recover your password
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputSubContainer}>
          <Feather
            name="mail"
            size={20}
            color={Color.DEFAULT_BLACK}
            style={{marginRight: 10}}
          />
          <TextInput
            placeholder="email"
            placeholderTextColor={Color.DEFAULT_BLACK}
            selectionColor={Color.DEFAULT_BLACK}
            style={styles.inputText}
          />
        </View>
      </View>
      <Separator height={10} />

      <View>
        <TouchableOpacity style={styles.SigninButton}>
          <Text style={styles.SigninButtonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgetPassword;

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
    marginTop: 10,
    marginTop: 50,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  inputContainer: {
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 8,
    borderWidth: 1,
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
