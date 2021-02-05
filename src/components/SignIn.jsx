import React from "react";
import { View, TouchableWithoutFeedback,
    StyleSheet } from "react-native";

import { Formik } from "formik";
import * as yup from "yup";

import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "./theme";

const initialValues = {
    username: '',
    password: ''
};

const validationSchema = yup.object().shape({
    username: yup
    .string()
    .min(3, 'Username too short')
    .max(50, 'Username too long')
    .required('Username is required!'),
    password: yup
    .string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#%?$@&=]).{8,}$/,
    'Password must contain 1 digit, ' +
    '1 lowercase letter(a-z), 1 uppercase letter(A-Z), ' +
    'and 1 special character(!#%?$"&=) and at least 8 characters long.')
    .required('Password is required!')
});

const styles = StyleSheet.create({
    submitTouch: {
        backgroundColor: theme.colors.primary,
        textAlign: 'center',
        padding: 15,
        margin: 10,
        borderRadius: 5
    },
    container: {
        backgroundColor: theme.colors.textBar
    }
});

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password"
            secureTextEntry />
            <TouchableWithoutFeedback onPress={onSubmit}>
                <Text
                color="textBar"
                fontWeight="bold"
                style={styles.submitTouch}>
                    Sign In
                </Text>
            </TouchableWithoutFeedback>
        </View>
    );
};

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}
        validationSchema={validationSchema}>
            {({ handleSubmit }) => {
                return (
                    <SignInForm onSubmit={ handleSubmit } />
                );
            } }
        </Formik>
    );
};

export default SignIn;