import React from "react";
import { View, StyleSheet } from "react-native";
import { Switch, Route, Redirect } from 'react-router-native';

import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import AppBar from "./AppBar";
import AboutMe from "./AboutMe";
import theme from "./theme";

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: theme.colors.mainBackgroundColor
    }
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route path='/' exact>
                    <RepositoryList />
                </Route>
                <Route path='/signin'>
                    <SignIn />
                </Route>
                <Route path='/aboutme'>
                    <AboutMe />
                </Route>
                <Redirect to='/' />
            </Switch>
        </View>
    );
};

export default Main;