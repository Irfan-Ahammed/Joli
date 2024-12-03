import React from 'react';
import {View, StyleSheet} from 'react-native';
import Display from '../utils/Display';
import { Color } from '../contants';

const ProgressBar = ({currentPage, totalSteps}) => {
  const progressWidth = (currentPage / totalSteps) * 100;

  return (
    <View style={styles.progressContainer}>
      <View style={[styles.progressBar, {width: `${progressWidth}%`}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    overflow: 'hidden',
    justifyContent: 'center',
    marginVertical: 20,
    width: Display.setWidth(90),
  },
  progressBar: {
    height: '100%',
    backgroundColor: Color.DARK_SECONDARY,
  },
});

export default ProgressBar;
