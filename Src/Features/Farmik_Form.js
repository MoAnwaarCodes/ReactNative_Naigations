import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
const Farmik_Form = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    passwordLength: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    //  password: Yup.string().when('agreedToTerms', {
    //   is: true,
    //   then: Yup.string().required('Password is required'),
    //   otherwise: Yup.string(),
    // }),
  });

  return (
    <View>
      <Text style={{color: 'black', fontSize: '32'}}>Farmik_Form</Text>
      <Formik
        initialValues={{passwordLength: ''}}
        validationSchema={validationSchema}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}>
        onSubmit=
        {(values, errors) => {
          console.log(values);
          console.log(errors);
        }}
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </View>
  );
};

export default Farmik_Form;

const styles = StyleSheet.create({});
