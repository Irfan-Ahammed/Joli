import React, {useRef, useState} from 'react';
import {View, Text, navigation, StyleSheet, StatusBar} from 'react-native';
import {
  PageOne,
  PageThree,
  PageTwo,
  ProgressBar,
  Separator,
  SignUpScreens,
} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Color, Fonts, General} from '../contants';
import Display from '../utils/Display';
import {createStackNavigator} from '@react-navigation/stack';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

const SignUpScreen = () => {
  const flatListRef = useRef(null); // Ref for FlatList
  const [currentPage, setCurrentPage] = useState(0); // Track current page
  const navigation = useNavigation();

  // Handle Page Change
  const handlePageChange = index => {
    flatListRef.current.scrollToIndex({index, animated: true});
    setCurrentPage(index);
  };

  // Handle Back Button
  const handleBack = () => {
    if (currentPage > 0) {
      handlePageChange(currentPage - 1); // Navigate to previous page
    } else {
      navigation.goBack(); // Exit the sign-up flow if on the first page
    }
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
          onPress={() => navigation.goBack()} // Navigate back
        />

        <Text style={styles.headerTitle}>Sign Up</Text>
      </View>
      <View style={styles.progressBar}>
        <ProgressBar currentPage={1} totalSteps={3} />
      </View>

      <Text style={styles.title}> Create Your Account</Text>
      <Text style={styles.content}>
        Start exploring job opportunities and connecting with employers
        effortlessly
      </Text>

      <Stack.Navigator
        initialRouteName="PageOne"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="PageOne" component={PageOne} />
        <Stack.Screen name="PageTwo" component={PageTwo} />
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
  progressBar: {
    alignItems: 'center',
  },
});

export default SignUpScreen;
