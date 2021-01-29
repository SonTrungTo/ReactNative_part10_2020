import React from "react";
import { View, StyleSheet } from "react-native";

import theme from "./theme";
import Text from "./Text";
import Description from "./RepositoryListItem/Description";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.itemBackgroundColor,
        padding: 20
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
            <Description
                fullName={fullName}
                description={description}
                language={language}
                ownerAvatarUrl={ownerAvatarUrl}
            />
            <View style={styles.status}>
                <View style={{ flexDirection: 'column' }}>
                    <Text fontWeight="bold" fontSize="subheading">{forksCount >= 1000 ? Number(forksCount / 1000).toFixed(1) + 'k' : forksCount}</Text>
                    <Text color="textSecondary" fontSize="subheading">Forks</Text>
                </View>
                <Text>{stargazersCount} Stars</Text>
                <Text>{reviewCount} Reviews</Text>
                <Text>{ratingAverage} Rating</Text>
            </View>
        </View>
    );
};

export default RepositoryItem;