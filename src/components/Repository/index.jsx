import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import RepositoryItem from "../RepositoryItem";

import useRepository from "../../hooks/useRepository";

const Repository = () => {
    const { repository }  = useRepository();

    return <RepositoryItem {...repository} displayLink />;
};

const RepositoryInfo = ({ repository }) => {
    return <RepositoryItem {...repository} displayLink />;
};

const ReviewItem = ({ item }) => {
    
};

export default Repository;