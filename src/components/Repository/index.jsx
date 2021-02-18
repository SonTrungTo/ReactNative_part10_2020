import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import RepositoryItem from "../RepositoryItem";
import Description from "../ReviewListItem/Description";

import useRepository from "../../hooks/useRepository";
import useReviews from "../../hooks/useReviews";
import theme from "../theme";

const styles = StyleSheet.create({
    reviewItemContainer: {
        backgroundColor: theme.colors.itemBackgroundColor,
        padding: 20
    },
    separator: {
        height: 10
    },
    header: {
        marginBottom: 10
    }
});

const ReviewItemSeparator = () => <View style={styles.separator} />;

const RepositoryInfo = ({ repository }) => {
    return <RepositoryItem {...repository} displayLink />;
};

const ReviewItem = ({ review }) => {
    return (
        <View style={styles.reviewItemContainer}>
            <Description {...review} />
        </View>
    );
};

const Repository = () => {
    const { repository }  = useRepository();
    const { reviews } = useReviews();

    const reviewNodes = reviews ?
    reviews.edges.map(review => review.node) : [];

    return (
        <FlatList
        data={reviewNodes}
        ListHeaderComponent={ () => <RepositoryInfo repository={repository} /> }
        ListHeaderComponentStyle={styles.header}
        ItemSeparatorComponent={ReviewItemSeparator}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <ReviewItem review={item} />} />
    );
};

export default Repository;