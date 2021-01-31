import React from "react";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
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
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'space-around',
        width: 750
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <ScrollView horizontal contentContainerStyle={styles.scrollView}>
                <AppBarTab name="Repositories" to="/" />
                <AppBarTab name="Sign In" to="/signin" />
                <AppBarTab name="About Me" />
            </ScrollView>
        </View>
    );
};

export default AppBar;