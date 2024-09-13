import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {addTodo} from './Todo/todoSlice';
import {useDispatch, useSelector} from 'react-redux';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const tasks = useSelector(state => state.todo.tasks);

  useEffect(() => {
    console.log(tasks);
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('my-key');
        if (jsonValue != null) {
          const storedData = JSON.parse(jsonValue);
          setFirstName(storedData.firstName || '');
          setLastName(storedData.lastName || '');
          setEmail(storedData.email || '');
          setPassword(storedData.password || '');
        }
      } catch (e) {
        console.log('Error reading value:', e);
      }
    };
    getData();
  }, [tasks]); // Make sure the tasks state updates if changed

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('my-key', jsonValue);
      Alert.alert('Data saved successfully');
    } catch (e) {
      console.log('Error saving value:', e);
    }
  };

  const submitHandler = () => {
    const finalData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    storeData(finalData);
    dispatch(addTodo(finalData));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>SignUp Form</Text>
      <View style={styles.card}>
        <TextInput
          style={styles.inputStyle}
          placeholder="First Name"
          placeholderTextColor={'black'}
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Last Name"
          placeholderTextColor={'black'}
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          placeholderTextColor={'black'}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          placeholderTextColor={'black'}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity style={styles.button} onPress={submitHandler}>
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>{
            setFirstName('')
            setLastName('')
            setEmail('')
            setPassword('')
          }}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  heading: {
    color: 'blue',
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: 'white',
    color: 'black',
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 10,
  },
  card: {
    width: '95%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  button: {
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'blue',
    width: '35%',
    padding: 20,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});
