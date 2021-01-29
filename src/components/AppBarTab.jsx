import React from "react";
import { TouchableWithoutFeedback } from "react-native";

import Text from "./Text";


const AppBarTab = ({ name }) => {
    return (
        <TouchableWithoutFeedback>
            <Text fontWeight="bold"
            color="textBar">
                {name}
            </Text>
        </TouchableWithoutFeedback>
    );
};

export default AppBarTab;