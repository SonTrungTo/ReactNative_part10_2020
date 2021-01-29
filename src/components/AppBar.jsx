import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import theme from "./theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: theme.colors.appBarBackgroundColor,
        paddingBottom: 20
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab name="Repositories" />
            <AppBarTab name="About me" />
        </View>
    );
};

export default AppBar;