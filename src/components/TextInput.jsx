import React from "react";
import { StyleSheet, TextInput as NativeTextInput } from "react-native";

import theme from "./theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.textBar,
        padding: 15,
        margin: 10,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1
    }
});

const TextInput = ({ style, ...props }) => {
    const styleTextInput = [
        styles.container,
        style
    ];

    return <NativeTextInput style={styleTextInput} {...props} />;
};

export default TextInput;