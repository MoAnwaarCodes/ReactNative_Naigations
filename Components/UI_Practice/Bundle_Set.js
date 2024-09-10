import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Line from './Line';
const BundleSet = () => {
  const [year, setYear] = useState();
  const [condition, setCondition] = useState();
  const [country, setCountry] = useState();
  const [heading, setHeading] = useState();
  return (
    <View style={styles.mainView}>
      <Image
        source={require('../Images/BundleIcon.png')}
        style={styles.image}
      />
      <Text style={styles.heading}>Title...</Text>
     <View style={{flexDirection:'row'}}>
    <Image source={require('../Images/album.png')}></Image>
     <Text style={styles.text}>3 sub items</Text>
    
     </View>
      <Line color="black"></Line>

      <View style={styles.secondryView}>
          <Image source={require('../Images/share.png')}></Image>
          <Image source={require('../Images/wishlist.png')}></Image>
          <Image source={require('../Images/cart.png')}></Image>
      </View>
    </View>
  );
};

export default BundleSet;

const styles = StyleSheet.create({
  heading: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    marginLeft: 10,
    color: 'black',
  },
  image: {
    width: 143,
    height: 116,
    resizeMode: 'contain',
  },
  mainView: {
    width: 167,
    height: 240,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    margin: 16,
  },
  secondryView: {
   flexDirection:'row',
   justifyContent:'space-between',
    padding:10,
    width: 143,
    height: 260,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 2},
  },
  bottomView: {
    width: 143,
    height: 18,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
  },
});
