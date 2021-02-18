import React, { useContext } from "react";
import { View, StyleSheet,
    TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import FormikTextInput from "../FormikTextInput";

const styles = StyleSheet.create({
    container: {

    }
});

const CreateReviewForm = ({ onSubmit }) => {
    return (
        <View>
            <FormikTextInput name="repositoryOwner"
            placeholder="Repository owner name" />
            <FormikTextInput name="repositoryName"
            placeholder="Repository name" />
            <FormikTextInput name="rating"
            placeholder="Rating between 0 and 100" />
            <FormikTextInput name="text"
            placeholder="Review" multiline />
            <TouchableOpacity>
                
            </TouchableOpacity>
        </View>
    );
};