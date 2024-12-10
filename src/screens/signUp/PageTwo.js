import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Separator, ToggleButton} from '../../components';
import {Color, Fonts} from '../../contants';
import Display from '../../utils/Display';
import {signUpScreenTwo} from '../../services/auth';

const PageTwo = ({navigation, route}) => {
  const {setStatus} = route.params; // Access setStatus
  const [isEmailFilled, setIsEmailFilled] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  console.log(error);

  const navigateToPageTwo = () => {
    setError('');
    signUpScreenTwo(firstName, lastName, navigation, setError);
    
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
            value={firstName}
            onChangeText={setFirstName}
            onEndEditing={() => setStatus(0.75)} 
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
            value={lastName}
            onChangeText={setLastName}
            onEndEditing={() => setStatus(1)} 
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
              Learn more
            </Text>
          </Text>
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <TouchableOpacity
          style={styles.SigninButton}
          onPress={navigateToPageTwo}>
          <Text style={styles.SigninButtonText}>Continue</Text>
        </TouchableOpacity>
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
    marginTop: 10,
  },
  SigninButtonText: {
    fontSize: 18,
    lineHeight: 18 * 1.4,
    color: Color.DEFAULT_WHITE,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  errorText: {
    marginHorizontal: 20,
    textAlign: 'center',
    color: Color.DEFAULT_RED,
    fontFamily: Fonts.POPPINS_MEDIUM,
    fontSize: 14,
  },
});

export default PageTwo;
