import React from "react";
import { TouchableWithoutFeedback, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import Text from "./Text";
import theme from "./theme";

const styles = StyleSheet.create({
    appBarTab: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: theme.colors.primary
    }
});


const AppBarTab = ({ name, to }) => {
    return (
        <TouchableWithoutFeedback>
            <Link to={to || '/'}>
                <Text fontWeight="bold"
                color="textBar"
                style={styles.appBarTab}>
                    {name}
                </Text>
            </Link>
        </TouchableWithoutFeedback>
    );
};

export default AppBarTab;