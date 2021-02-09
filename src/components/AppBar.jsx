import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import { useQuery } from "@apollo/react-hooks";
import { GET_AUTHORIZED_USER } from "../graphql/queries";

import theme from "./theme";
import AppBarTab from "./AppBarTab";
import useLogOut from "../hooks/useLogOut";

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
        width: 600
    },
    signOutTab: {
        backgroundColor: theme.colors.error,
        borderColor: theme.colors.appBarBackgroundColor
    }
});

const AppBar = () => {
    const [authorizedUser, setAuthorizedUser] = useState(undefined);
    const { data, loading } = useQuery(GET_AUTHORIZED_USER, {
        fetchPolicy: 'cache-and-network'
    });
    const { logout } = useLogOut();
    useEffect(() => {
        if (!loading) {
            setAuthorizedUser(data.authorizedUser);
        }
    }, [loading]);

    return (
        <View style={styles.container}>
            <ScrollView horizontal contentContainerStyle={styles.scrollView}>
                <AppBarTab name="Repositories" to="/" />
                { !authorizedUser &&
                <AppBarTab name="Sign In" to="/signin" />
                }
                { authorizedUser &&
                <AppBarTab name="Sign Out"
                onSubmit={logout}
                style={styles.signOutTab}
                isButton />
                }
                <AppBarTab name="About Me" to="/aboutme" />
            </ScrollView>
        </View>
    );
};

export default AppBar;