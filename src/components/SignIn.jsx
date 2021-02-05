import React from "react";
import { View, TouchableWithoutFeedback,
    StyleSheet } from "react-native";

import { Formik } from "formik";

import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "./theme";

const initialValues = {
    username: '',
    password: ''
};

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
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => {
                return (
                    <SignInForm onSubmit={ handleSubmit } />
                );
            } }
        </Formik>
    );
};

export default SignIn;