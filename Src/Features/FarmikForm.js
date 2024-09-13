import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo} from './Todo/todoSlice';
import CheckBox from '@react-native-community/checkbox';

const SignupForm = ({navigation}) => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const [initialValues, setInitialValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreedToTerms: agreedToTerms,
  });

  // const initialValues = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  //   agreedToTerms: agreedToTerms,
  // };

  // const validationSchema = Yup.object().shape({
  //   firstName: Yup.string().when('agreedToTerms', {
  //     is: val => console.log(val),
  //     then: () =>
  //       Yup.string()
  //         .min(2, 'First Name must be at least 2 characters')
  //         .max(50, 'First Name must be less than 50 characters')
  //         .required('First Name is required'),
  //     otherwise: () => Yup.string().notRequired(),
  //   }),

  //   lastName: Yup.string().when('agreedToTerms', {
  //     is: val => val === true,
  //     then: () =>
  //       Yup.string()
  //         .min(2, 'First Name must be at least 2 characters')
  //         .max(50, 'First Name must be less than 50 characters')
  //         .required('Last Name is required'),
  //     otherwise: () => Yup.string().notRequired(),
  //   }),

  //   email: Yup.string().when('agreedToTerms', {
  //     is: val => val === true,
  //     then: () =>
  //       Yup.string()
  //         .email('Invalid email address')
  //         .required('Email is required'),

  //     otherwise: () => Yup.string().notRequired(),
  //   }),

  //   password: Yup.string().when('agreedToTerms', {
  //     is: val => val === true,
  //     then: () =>
  //       Yup.string()
  //         .min(8, 'Password must be at least 8 characters')
  //         .required('Password is required'),
  //     otherwise: () => Yup.string().notRequired(),
  //   }),
  // });

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.todo.tasks);

  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-key');
      if (jsonValue != null) {
        const storedData = JSON.parse(jsonValue);
        setInitialValues(storedData);
      }
    } catch (e) {
      console.log('Error reading value:', e);
    }
  };

  useEffect(() => {
    console.log(tasks);
    loadData();
  }, []);

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('my-key', jsonValue);
      Alert.alert('Data saved successfully');
    } catch (e) {
      console.log('Error saving value:', e);
    }
  };

  const submitHandler = (values, actions) => {
    console.log(agreedToTerms);
    storeData(values);
    dispatch(addTodo(values));
    setInitialValues(values);
    navigation.navigate('User');
  };

  return (
    <Formik
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={yup.object().shape({
        firstName: yup.string().when('agreedToTerms', {
          is: val => val === true,
          then: () =>
            yup.string().required('First Name field cannot be left empty..'),
          otherwise: () => yup.string().notRequired(),
        }),
        lastName: yup.string().when('agreedToTerms', {
          is: val => val === true,
          then: () =>
            yup
              .string()
              .email()
              .required('Last Name field cannot be left empty..'),
          otherwise: () => yup.string().notRequired(),
        }),
        email: yup.string().when('agreedToTerms', {
          is: val => val === true,
          then: () =>
            yup.string().required('Email field cannot be left empty..'),
          otherwise: () => yup.string().notRequired(),
        }),
        password: yup.string().when('agreedToTerms', {
          is: val => val === true,
          then: () =>
            yup
              .string()
              .min(
                6,
                ({min}) => `Password must be at least ${min} character long`,
              )
              .max(12, 'Password cannot be longer then 12 characters')
              .required('Password field cannot be left empty..'),
          otherwise: () => yup.string().notRequired(),
        }),
      })}
      onSubmit={submitHandler}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <Text style={styles.heading}>SignUp Form</Text>
          <View style={styles.card}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="First Name"
                placeholderTextColor={'black'}
                style={styles.inputStyle}
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
              />
              {touched.firstName && errors.firstName ? (
                <Text style={styles.errorText}>{errors.firstName}</Text>
              ) : null}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Last Name"
                placeholderTextColor={'black'}
                style={styles.inputStyle}
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
              />
              {touched.lastName && errors.lastName ? (
                <Text style={styles.errorText}>{errors.lastName}</Text>
              ) : null}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Email"
                placeholderTextColor={'black'}
                style={styles.inputStyle}
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {touched.email && errors.email ? (
                <Text style={styles.errorText}>{errors.email}</Text>
              ) : null}
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Password"
                placeholderTextColor={'black'}
                style={styles.inputStyle}
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              {touched.password && errors.password ? (
                <Text style={styles.errorText}>{errors.password}</Text>
              ) : null}
            </View>

            <View style={styles.checkboxContainer}>
              <CheckBox
                tintColors={{true: 'black', false: 'black'}}
                value={agreedToTerms}
                onValueChange={setAgreedToTerms}
                style={styles.checkbox}
              />
              <Text style={styles.checkboxLabel}>Validation require</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

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
  errorText: {
    color: 'red',
    fontSize: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
    borderColor: 'black',
  },
  checkbox: {
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
    color: 'black',
  },
});

export default SignupForm;
