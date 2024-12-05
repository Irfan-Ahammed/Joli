import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color, Fonts} from '../contants';
import {StaticImageService} from '../services';

const FlagItem = ({code, name, dial_code, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress({code, name, dial_code})}>
      <Image
        style={styles.flagImage}
        source={{uri: StaticImageService.getFlagIcon(code, 'flat', '64')}}
      />
      <Text style={styles.flagText}>{name}</Text>
      <Text style={styles.flagCode}>{`(${dial_code})`}</Text>
    </TouchableOpacity>
  );
};

export default FlagItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor:Color.DEFAULT_WHITE
  },
  flagImage: {
    height: 25,
    width: 25,
    marginRight: 15,
  },
  flagText: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
    color: Color.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_MEDIUM,
  },
  flagCode: {
    fontSize: 14,
    lineHeight: 14 * 1.4,
    color: Color.DEFAULT_BLACK,
    fontFamily: Fonts.POPPINS_LIGHT,
  },
});
