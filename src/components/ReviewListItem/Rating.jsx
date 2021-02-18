import React from "react";
import { StyleSheet, View } from "react-native";

import Text from "../Text";

const styles = StyleSheet.create({
    ratingSize: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderStyle: 'solid',
        borderWidth: 1
    },
    container: {
        flexGrow: 0
    }
});

const Rating = ({ rating, style }) => {
    const ratingStyles = [
        styles.ratingSize,
        style
    ];

    return (
        <View style={styles.container}>
            <Text fontWeight="bold"
            color="primary"
            style={ratingStyles}>
                {rating}
            </Text>
        </View>
    );
};

export default Rating;