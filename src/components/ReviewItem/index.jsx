import React from "react";
import { StyleSheet, View } from "react-native";

import Description from "../ReviewListItem/Description";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.itemBackgroundColor,
        padding: 20
    }
});

const ReviewItem = ({ review }) => {
    return (
        <View style={styles.container}>
            <Description {...review} />
        </View>
    );
};

export default ReviewItem;