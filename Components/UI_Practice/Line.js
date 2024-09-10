import { StyleSheet, View } from 'react-native';
import React from 'react';

const Line = (props) => {
  return (
    <View style={styles.lineContainer}>
      <View style={[styles.line, { backgroundColor: props.color }]} />
    </View>
  );
};

export default Line;

const styles = StyleSheet.create({
  lineContainer: {
    marginTop: 12,
    flexDirection: 'row', // Align items in a row
    alignItems: 'center', // Center align items vertically
    justifyContent: 'center', // Center align items horizontally
  },
  line: {
    width: '90%', // Full width of the container
    height: 0.3, // Thickness of the line
  },
});
