import React from "react";
import { View, StyleSheet } from "react-native";

import Rating from "./Rating";
import Text from "../Text";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 25
    },
    content: {
        flexGrow: 1,
        marginLeft: 20,
        flexShrink: 1
    },
    date: {
        marginTop: 5
    },
    review: {
        marginTop: 5
    }
});

// createdAt needs to be in proper format, to be using date-fns library

const Description = ({ text, createdAt,
rating, user }) => {
    return (
        <View style={styles.container}>
            <Rating rating={rating} />
            <View style={styles.content}>
                <Text fontWeight="bold"
                fontSize="subheading">
                    {user.username}
                </Text>
                <Text color="textSecondary"
                style={styles.date}>
                    {createdAt}
                </Text>
                <Text style={styles.review}>
                    {text}
                </Text>
            </View>
        </View>
    );
};

export default Description;