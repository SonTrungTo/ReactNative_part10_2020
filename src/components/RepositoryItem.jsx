import React from "react";
import { View, Text } from "react-native";

const RepositoryItem = ({ fullName,
description, language, forksCount,
stargazersCount, ratingAverage, reviewCount }) => {
    return (
        <View>
            <Text>Full name:  {fullName}</Text>
            <Text>Description: {description}</Text>
            <Text>Language: {language}</Text>
            <Text>Forks: {forksCount}</Text>
            <Text>Stars: {stargazersCount}</Text>
            <Text>Reviews: {reviewCount}</Text>
            <Text>Rating: {ratingAverage}</Text>
        </View>
    );
};

export default RepositoryItem;