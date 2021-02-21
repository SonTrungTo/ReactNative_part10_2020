import React from "react";
import { Picker } from "@react-native-picker/picker";

const SortingRepositories = ({ setOption, option }) => {
    return (
        <Picker
        selectedValue={option}
        onValueChange={ (value) => setOption(value) }
        placeholder={'Select an item...'}>
            <Picker.Item label='Latest repositories' value={{orderBy: 'CREATED_AT'}} />
            <Picker.Item label='Highest rated repositories'
                value={{orderBy: 'RATING_AVERAGE', orderDirection: 'DESC'}} />
            <Picker.Item label='Lowest rated repositories'
                value={{orderBy: 'RATING_AVERAGE', orderDirection: 'ASC'}} />
        </Picker>
    );
};

export default SortingRepositories;