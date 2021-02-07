import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";

import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
    separator: {
        height: 10
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories ?
    repositories.edges.map(edge => edge.node)
    : [];

    const renderRepo = ({ item }) => (
        <RepositoryItem {...item} />
    );

    return (
        <FlatList
            data={repositoryNodes}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={renderRepo}
            keyExtractor={item => item.id}
        />
    );
};

export default RepositoryList;