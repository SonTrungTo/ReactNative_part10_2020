import React from "react";
import { View, StyleSheet, Image } from "react-native";

import theme from "./theme";
import Text from "./Text";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.itemBackgroundColor,
        padding: 20
    },
    basic: {
        flexDirection: 'row'
    },
    avatarSize: {
        width: 80,
        height: 80,
        flexGrow: 0
    },
    description: {
        flexGrow: 1,
        marginLeft: 20,
        flexShrink: 1
    },
    status: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});

const RepositoryItem = ({ fullName,
description, language, forksCount,
stargazersCount, ratingAverage, reviewCount,
ownerAvatarUrl }) => {
    return (
        <View style={ styles.container }>
            <View style={styles.basic}>
                <Image 
                style={styles.avatarSize}
                source={{
                    uri: ownerAvatarUrl
                }}
                />
                <View style={styles.description}>
                    <Text fontWeight="bold" fontSize="subheading">{fullName}</Text>
                    <Text color="textSecondary">{description}</Text>
                    <Text>{language}</Text>
                </View>
            </View>
            <View style={styles.status}>
                <Text>Forks: {forksCount}</Text>
                <Text>Stars: {stargazersCount}</Text>
                <Text>Reviews: {reviewCount}</Text>
                <Text>Rating: {ratingAverage}</Text>
            </View>
        </View>
    );
};

export default RepositoryItem;