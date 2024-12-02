import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {Color, Fonts, General} from '../contants';
import {WelcomeCard, Separator} from '../components';
import {Display} from '../utils';

const pageStyle = isactive =>
  isactive
    ? styles.page
    : {
        ...styles.page,
        backgroundColor: `rgba(${Color.DEFAULT_LIGHTGREY}, 0.2)`,
        borderRadius: 32,
      };

const Pagination = ({index}) => {
  return (
    <View style={styles.pageContainer}>
      {[...Array(General.WELCOME_CONTENTS.length).keys()].map((_, i) =>
        i === index ? (
          <View style={pageStyle(true)} key={i}></View>
        ) : (
          <View style={pageStyle(false)} key={i}></View>
        ),
      )}
    </View>
  );
};

const WelcomeScreen = ({navigation}) => {
  const [welcomelistIndex, setWelcomelistIndex] = useState(0);
  const welcomeList = useRef();
  const onViewRef = useRef(({changed}) => {
    setWelcomelistIndex(changed[0].index);
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});
  const pageScroll = () => {
    welcomeList.current.scrollToIndex({
      index: welcomelistIndex < 2 ? welcomelistIndex + 1 : welcomelistIndex,
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={Color.DEFAULT_WHITE}
        translucent
      />
      <Separator height={StatusBar.currentHeight} />
      <Separator height={Display.default.setHeight(8)} />
      <View style={styles.welcomeListContainer}>
        <FlatList
          ref={welcomeList}
          data={General.WELCOME_CONTENTS}
          keyExtractor={item => item.title}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          overScrollMode="never"
          viewabilityConfig={viewConfigRef.current}
          onViewableItemsChanged={onViewRef.current}
          renderItem={({item}) => <WelcomeCard {...item} />}
        />
      </View>
      <Separator height={Display.default.setHeight(8)} />
      <Pagination index={welcomelistIndex} />
      <Separator height={Display.default.setHeight(8)} />
      {welcomelistIndex === 2 ? (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Signin')}
          style={styles.gettingStartedButton}>
          <Text style={styles.gettingStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => welcomeList.current.scrollToEnd()}
            style={{marginLeft: 10}}>
            <Text style={styles.buttonText}>SKIP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => pageScroll()}>
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.DEFAULT_WHITE,
  },
  welcomeListContainer: {
    height: Display.default.setHeight(60),
  },
  pageContainer: {
    flexDirection: 'row',
  },
  page: {
    height: 8,
    width: 15,
    backgroundColor: Color.BLUE,
    borderRadius: 32,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Display.default.setWidth(90),
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontFamily: Fonts.POPPINS_SEMI_BOLD,
    // lineHeight:16*1.4,
  },
  button: {
    backgroundColor: `rgba(${Color.DEFAULT_LIGHTGREY}, 0.2)`,
    paddingVertical: 20,
    paddingHorizontal: 11,
    borderRadius: 32,
  },
  gettingStartedButton: {
    backgroundColor: Color.BLUE,
    borderRadius: 8,
    paddingHorizontal: 50,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    marginBottom: 20,
  },
  gettingStartedButtonText: {
    fontSize: 20,
    color: Color.DEFAULT_WHITE,
    lineHeight: 20 * 1.4,
    fontFamily:Fonts.POPPINS_MEDIUM
  },
});
