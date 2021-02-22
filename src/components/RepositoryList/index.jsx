import React, { useState } from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import RepositoryItem from "../RepositoryItem";
import RepositoryListHeader from "../RepositoryListHeader";
import { useHistory } from "react-router-native";

import useRepositories from "../../hooks/useRepositories";
import theme from "../theme";

const styles = StyleSheet.create({
    separator: {
        height: 10
    },
    repositoryListHeader: {
        backgroundColor: theme.colors.mainBackgroundColor,
        padding: 10
    }
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
    renderHeader = () => {
        const { option, setOption } = this.props;

        return (
            <RepositoryListHeader
            option={option}
            setOption={setOption} />
        );
    };

    renderRepo = ({ item }) => {
        const { history } = this.props;

        return (
            <TouchableOpacity onPress={ () => history.push(`/${item.id}`) }>
                <RepositoryItem {...item} />
            </TouchableOpacity>
        );
    };

    render() {
        const { repositories } = this.props;

        const repositoryNodes = repositories ?
        repositories.edges.map(edge => edge.node)
        : [];

        return (
            <FlatList
                data={repositoryNodes}
                ListHeaderComponent={this.renderHeader}
                ListHeaderComponentStyle={styles.repositoryListHeader}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={this.renderRepo}
                keyExtractor={item => item.id}
            />
        ); 
    }
}

const RepositoryList = () => {
    const [orderArguments, setOrderArguments] = useState({});
    const { repositories } = useRepositories(orderArguments);
    const history = useHistory();

    return <RepositoryListContainer repositories={repositories}
    setOption={setOrderArguments} option={orderArguments} history={history} />;
};

export default RepositoryList;