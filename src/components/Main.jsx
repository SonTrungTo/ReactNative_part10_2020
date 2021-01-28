import React from "react";
import Constants from "expo-constants";
import { View, StyleSheet, SafeAreaView } from "react-native";
import RepositoryList from "./RepositoryList";

import Text from "./Text";

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1
    },
    repositoryList: {
        marginTop: 20
    }
});

const Main = () => {
    return (
        <View style={styles.container}>
            <Text fontWeight="bold">Rate Repository Application</Text>
            <SafeAreaView style={styles.repositoryList}>
                <RepositoryList />
            </SafeAreaView>
        </View>
    );
};

export default Main;