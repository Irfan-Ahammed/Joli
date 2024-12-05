import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {Color, CountryCode, Fonts} from '../contants';
import {FlagItem, Separator} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import Display from '../utils/Display';
import {StaticImageService} from '../services';

const getDropDownStyle = y => ({...styles.countryDropdown, top: y + 60});

const RegisterPhone = () => {
  const [selectedCountry, setSelectedCountry] = useState(
    CountryCode.find(country => country.code === 'IN'),
  );
  const [inputContainerY, setInputContainerY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownLayout, setDropdownLayout] = useState({});
  const navigation = useNavigation();

  const flagUrl = StaticImageService.getFlagIcon(
    selectedCountry.code,
    'flat',
    '64',
  );
  const closeDropdown = (pageX, pageY) => {
    if (isDropdownOpen) {
      if (
        pageX < dropdownLayout?.x ||
        pageX > dropdownLayout?.x + dropdownLayout?.width ||
        pageY < dropdownLayout?.y ||
        pageY > dropdownLayout?.y + dropdownLayout?.height
      ) {
        setIsDropdownOpen(false);
      }
    }
  };
  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={({nativeEvent: {pageX, pageY}}) =>
        closeDropdown(pageX, pageY)
      }>
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

        <Text style={styles.headerTitle}>Register</Text>
      </View>

      <Text style={styles.content}>
        Enter your registered phone number to login
      </Text>

      <View
        style={styles.inputContainer}
        onLayout={({
          nativeEvent: {
            layout: {y},
          },
        }) => setInputContainerY(y)}>
        <TouchableOpacity
          style={styles.countryListContainer}
          onPress={() => setIsDropdownOpen(!isDropdownOpen)}>
          <Image source={{uri: flagUrl}} style={styles.flatIcon} />
          <Text style={styles.countryCode}>{selectedCountry.dial_code}</Text>
          <MaterialIcon name="keyboard-arrow-down" size={18} />
        </TouchableOpacity>
        <View style={styles.phoneInputContainer}>
          <TextInput
            placeholder="Phone Number"
            placeholderTextColor={Color.DEFAULT_GREY}
            selectionColor={Color.DEFAULT_GREY}
            keyboardType="number-pad"
            style={styles.inputText}
          />
        </View>
      </View>
      {isDropdownOpen && (
        <View
          style={getDropDownStyle(inputContainerY)}
          onLayout={({
            nativeEvent: {
              layout: {x, y, height, width},
            },
          }) => setDropdownLayout({x, y, height, width})}>
          <FlatList
            data={CountryCode}
            keyExtractor={item => item.code}
            renderItem={({item}) => (
              <FlagItem
                {...item}
                onPress={country => {
                  setSelectedCountry(country);
                  setIsDropdownOpen(false);
                }}
              />
            )}
          />
        </View>
      )}
      <Separator height={10} />

      <View>
        <TouchableOpacity style={styles.SigninButton}>
          <Text style={styles.SigninButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterPhone;

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
    marginVertical: 50,
    fontFamily: Fonts.POPPINS_REGULAR,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  countryListContainer: {
    backgroundColor: Color.LIGHT_GREY,
    width: Display.setWidth(22),
    marginRight: 10,
    borderRadius: 8,
    height: Display.setHeight(6),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Color.LIGHT_GREY2,
    flexDirection: 'row',
  },
  phoneInputContainer: {
    backgroundColor: Color.LIGHT_GREY,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderColor: Color.LIGHT_GREY2,
    borderWidth: 0.5,
    justifyContent: 'center',
    flex: 1,
  },
  flatIcon: {
    width: 25,
    height: 25,
  },
  countryCode: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
    color: Color.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
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

  inputText: {
    fontSize: 18,
    textAlignVertical: 'center',
    padding: 0,
    height: Display.setHeight(6),
    color: Color.DEFAULT_BLACK,
  },
  countryDropdown: {
    backgroundColor: Color.LIGHT_GREY,
    position: 'absolute',
    width: Display.setWidth(95),
    height: Display.setHeight(50),
    marginHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.LIGHT_GREY,
    zIndex: 3,
  },
});
