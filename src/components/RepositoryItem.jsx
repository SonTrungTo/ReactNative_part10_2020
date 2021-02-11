import React from "react";
import { View, StyleSheet } from "react-native";

import theme from "./theme";
import Description from "./RepositoryListItem/Description";
import Statistics from "./RepositoryListItem/Statistics";

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.itemBackgroundColor,
        padding: 20
    }
});

const RepositoryItem = ({ fullName,
description, language, forksCount,
stargazersCount, ratingAverage, reviewCount,
ownerAvatarUrl }) => {
    return (
        <View style={ styles.container } testID="mainItem">
            <Description
                fullName={fullName}
                description={description}
                language={language}
                ownerAvatarUrl={ownerAvatarUrl}
            />
            <Statistics
                Stars={stargazersCount}
                Forks={forksCount}
                Reviews={reviewCount}
                Rating={ratingAverage}
            />
        </View>
    );
};

export default RepositoryItem;