import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

const SearchItemsContainer = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Button 1 pressed')}>
            <Image
              source={require('../Images/image4.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={{color: 'black', marginTop: 8}}>Sale</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Button 1 pressed')}>
            <Image
              source={require('../Images/image4.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={{color: 'black', marginTop: 8}}>Sale</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Button 1 pressed')}>
            <Image
              source={require('../Images/image4.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={{color: 'black', marginTop: 8}}>Sale</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Button 1 pressed')}>
            <Image
              source={require('../Images/image4.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={{color: 'black', marginTop: 8}}>Sale</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Button 1 pressed')}>
            <Image
              source={require('../Images/image4.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={{color: 'black', marginTop: 8}}>Sale</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Button 1 pressed')}>
            <Image
              source={require('../Images/image4.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={{color: 'black', marginTop: 8}}>Sale</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Button 1 pressed')}>
            <Image
              source={require('../Images/image4.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text style={{color: 'black', marginTop: 8}}>Sale</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue', // Button background color
    width: 60, // Set width to make the button circular
    height: 60, // Set height to make the button circular
    borderRadius: 30, // Half of the width/height to make it circular
    marginHorizontal: 10, // Adjust spacing between buttons as needed
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Ensure the image is clipped to the circular button
  },
  image: {
    width: 60, // Adjust the size of the image to fit within the button
    height: 60, // Adjust the size of the image to fit within the button
    resizeMode: 'contain', // Ensure the image maintains its aspect ratio
  },
});

export default SearchItemsContainer;
