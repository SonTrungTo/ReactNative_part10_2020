import React from "react";
import { View, TouchableOpacity,
    StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import FormikTextInput from "../FormikTextInput";
import Text from "../Text";

const styles = StyleSheet.create({
    signupButton: {
        
    },
    container: {

    }
});

const inititalValues = {
    username: '',
    password: '',
    passwordConfirm: ''
};

const SignUpForm = ({ onSubmit }) => {
    return (
        <View>
            <FormikTextInput name="username"
            placeholder="Username" />
            <FormikTextInput name="password"
            placeholder="Password" />
            <FormikTextInput name="passwordConfirm"
            placeholder="Password confirmation" />
            <TouchableOpacity onPress={onSubmit}>
                <Text fontWeight="bold"
                color="textBar"
                style={}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const SignUp = () => {

};

export default SignUp;