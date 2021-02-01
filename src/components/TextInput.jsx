import React from "react";
import { StyleSheet, TextInput as NativeTextInput } from "react-native";

const styles = StyleSheet.create({
    container: {}
});

const TextInput = ({ style, ...props }) => {
    const styleTextInput = [
        styles.container,
        style
    ];

    return <NativeTextInput style={styleTextInput} {...props} />;
};

export default TextInput;