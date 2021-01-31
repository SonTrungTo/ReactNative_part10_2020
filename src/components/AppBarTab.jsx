import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Link } from "react-router-native";

import Text from "./Text";


const AppBarTab = ({ name, to }) => {
    return (
        <TouchableWithoutFeedback>
            <Link to={to || '/'}>
                <Text fontWeight="bold"
                color="textBar">
                    {name}
                </Text>
            </Link>
        </TouchableWithoutFeedback>
    );
};

export default AppBarTab;