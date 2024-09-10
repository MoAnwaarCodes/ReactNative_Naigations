import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import ScrollViewContainer from './TopScrollView';
import SearchItemsContainer from './SearchItems';
import Card from './Card';
import Line from './Line';
import BundleSet from './Bundle_Set';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Get the height of the device screen
const {height: screenHeight} = Dimensions.get('window');

// Calculate percentage height
const percentageHeight = (210 / screenHeight) * 100;

const MainScreen = () => {
  const textElements = Array.from({length: 4}, (_, index) => <Card></Card>);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.textWrapper}>
          <View style={styles.top}>
            <Image source={require('../Images/Ellips.png')} />
            <View style={{marginLeft: 18}}>
              <Text style={{fontWeight: 'bold', fontSize: 26}}>Store Name</Text>
              <Text style={{fontSize: 16}}>ID : S190-55-42255</Text>
            </View>
          </View>

          <Line color="white"></Line>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              margin: 26,
            }}>
            <View style={{alignItems: 'center', marginLeft: 25}}>
              <Text style={styles.headingText}>4.0</Text>
              <Text>Rating</Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.headingText}>Buisness</Text>
              <Text>Store Type</Text>
            </View>
            <View style={{alignItems: 'center', marginRight: 25}}>
              <Text style={styles.headingText}>50</Text>
              <Text>Item Sold</Text>
            </View>
          </View>
        </View>
        <ScrollViewContainer></ScrollViewContainer>
        <View>
          <Text style={styles.itemsText}>Search Items by category</Text>
          <SearchItemsContainer></SearchItemsContainer>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.itemsText}>Items on sale</Text>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 'auto',
              marginRight: 22,
            }}>
            View all
          </Text>
        </View>
        <View style={styles.CardView}>
          <Card></Card>
          <Card></Card>
        </View>
        <View style={styles.CardView}>
          <Card></Card>
          <Card></Card>
        </View>

        <View style={styles.CardView}>
          <BundleSet></BundleSet>
          <BundleSet></BundleSet>
        </View>
        <Image
          source={require('../Images/group.png')}
          style={styles.Image}></Image>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.itemsText}>Recently Published</Text>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 'auto',
              marginRight: 22,
            }}>
            View all
          </Text>
        </View>

        <View style={styles.CardView}>
          <Card></Card>
          <Card></Card>
        </View>
        <View style={styles.CardView}>
          <Card></Card>
          <Card></Card>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.itemsText}>Featured Items</Text>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 'auto',
              marginRight: 22,
            }}>
            View all
          </Text>
        </View>

        <View style={styles.CardView}>
          <Card></Card>
          <Card></Card>
        </View>

        <Image
          source={require('../Images/group.png')}
          style={styles.Image}></Image>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.itemsText}>Trade Items</Text>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 'auto',
              marginRight: 22,
            }}>
            View all
          </Text>
        </View>

        <View style={styles.CardView}>
          <Card></Card>
          <Card></Card>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.itemsText}>Action Items</Text>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              fontSize: 18,
              marginTop: 'auto',
              marginRight: 22,
            }}>
            View all
          </Text>
        </View>

        <View style={styles.CardView}>
          <Card></Card>
          <Card></Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  CardView: {
    flexDirection: 'row',
    margin: 'auto',
  },

  headingText: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  itemsText: {
    color: 'black',
    marginTop: 10,
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 22,
  },

  container: {
    flex: 1,
  },
  textWrapper: {
    height: hp(`${percentageHeight}%`), // Use percentage height
    backgroundColor: 'black',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    padding: 10, // Add some padding for better spacing
  },
  top: {
    flexDirection: 'row',
    marginBottom: 10,
    margin: 30,
  },
  Image: {
    width: wp('90%'),
    height: hp('28%'),
    resizeMode: 'contain',
    margin: 'auto',
  },
});
