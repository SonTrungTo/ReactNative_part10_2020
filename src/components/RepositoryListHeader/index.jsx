import React from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const RepositoryListHeader = ({ setOption, option }) => {
    return (
        <RNPickerSelect
        onValueChange={ (value) => {
            if (value) {
                setOption(value);
            }
        } }
        items={[
            {label: 'Latest repositories', value: {orderBy: 'CREATED_AT', orderDirection: 'DESC'}},
            {label: 'Highest rated repositories', value: {orderBy: 'RATING_AVERAGE', orderDirection: 'DESC'}},
            {label: 'Lowest rated repositories', value: {orderBy: 'RATING_AVERAGE', orderDirection: 'ASC'}}
        ]}
        value={option}
        />
    );
};

export default RepositoryListHeader;