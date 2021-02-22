import { useState, useEffect } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";
import { useLazyQuery } from "@apollo/react-hooks";

const useRepositories = ({orderBy, orderDirection}) => {
    const [repositories, setRepositories] = useState(undefined);
    const [getRepositories, {loading}] = useLazyQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        onCompleted: (data) => {
            setRepositories(data.repositories);
        }
    });

    const fetchRepositories = () => {
        getRepositories({ variables: { orderBy, orderDirection }});
    };

    useEffect(() => {
        fetchRepositories();
    }, [orderBy, orderDirection]);

    return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;