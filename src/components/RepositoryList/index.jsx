import React from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import RepositoryItem from "../RepositoryItem";
import { useHistory } from "react-router-native";

import useRepositories from "../../hooks/useRepositories";

const styles = StyleSheet.create({
    separator: {
        height: 10
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {
    const history = useHistory();

    const repositoryNodes = repositories ?
    repositories.edges.map(edge => edge.node)
    : [];

    const renderRepo = ({ item }) => (
        <TouchableOpacity onPress={ () => history.push(`/${item.id}`) }>
            <RepositoryItem {...item} />
        </TouchableOpacity>
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

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;