import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import Line from './Line';
const Card = () => {
  const [year, setYear] = useState();
  const [condition, setCondition] = useState();
  const [country, setCountry] = useState();
  const [heading, setHeading] = useState();
  return (
    <View style={styles.mainView}>
      <View style={styles.secondryView}>
        <Image source={require('../Images/hello.jpg')} style={styles.image} />
        <Text style={styles.heading}>This is Heading...</Text>

        <Text style={styles.text}>Year : {year}</Text>
        <Text style={styles.text}>Condition : {condition}</Text>
        <Text style={styles.text}>country : {country}</Text>
        <Line color="black"></Line>
      </View>

      <View style={styles.bottomView}>
        <Image source={require('../Images/share.png')}></Image>
        <Image source={require('../Images/flag.png')}></Image>
        <Image source={require('../Images/wishlist.png')}></Image>
        <Image source={require('../Images/cart.png')}></Image>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  heading: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    color: 'black',
  },
  image: {
    width: 143,
    height: 116,
    resizeMode: 'contain',
  },
  mainView: {
    width: 167,
    height: 325,
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
    width: 143,
    height: 251,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 2},
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 143,
    height: 40,
    borderRadius: 8,
    borderRadius: 8,
    shadowColor: '#00000014',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
  },
});
