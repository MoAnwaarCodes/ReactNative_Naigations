import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';

const ScrollViewContainer = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Button 1 pressed')}>
          <Text style={styles.buttonText}>Button 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Button 2 pressed')}>
          <Text style={styles.buttonText}>Button 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Button 3 pressed')}>
          <Text style={styles.buttonText}>Button 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Button 4 pressed')}>
          <Text style={styles.buttonText}>Button 4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert('Button 5 pressed')}>
          <Text style={styles.buttonText}>Button 5</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#666666', // Button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10, // Adjust spacing between buttons as needed
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ScrollViewContainer;
