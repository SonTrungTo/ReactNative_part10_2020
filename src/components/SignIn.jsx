import React from "react";
import { View, StyleSheet } from "react-native";

import { Formik } from "formik";

import Text from "./Text";
import FormikTextInput from "./FormikTextInput";

const SignInForm = ({ onSubmit }) => {
    return (
        <View>
            <FormikTextInput />
        </View>
    );
};

const SignIn = () => {
    return (
        <Text>The sign in View</Text>
    );
};

export default SignIn;