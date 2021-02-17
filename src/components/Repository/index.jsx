import React from "react";

import RepositoryItem from "../RepositoryItem";

import useRepository from "../../hooks/useRepository";

const Repository = () => {
    const { repository }  = useRepository();

    return <RepositoryItem {...repository} />;
};

export default Repository;