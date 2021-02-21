import React, { useState } from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import RepositoryItem from "../RepositoryItem";
import SortingRepositories from "../SortingRepositories";
import { useHistory } from "react-router-native";

import useRepositories from "../../hooks/useRepositories";
import theme from "../theme";

const styles = StyleSheet.create({
    separator: {
        height: 10
    },
    sortingRepositoriesHeader: {
        backgroundColor: theme.colors.mainBackgroundColor
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, setOption, option }) => {
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
            ListHeaderComponent={() => <SortingRepositories setOption={setOption} option={option} />}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={renderRepo}
            keyExtractor={item => item.id}
        />
    );
};

const RepositoryList = () => {
    const [orderArguments, setOrderArguments] = useState({});
    const { repositories } = useRepositories(orderArguments);

    return <RepositoryListContainer repositories={repositories}
    setOption={setOrderArguments} option={orderArguments} />;
};

export default RepositoryList;