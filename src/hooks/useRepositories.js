import { useState, useEffect } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";
import { useLazyQuery } from "@apollo/react-hooks";

const useRepositories = ({orderBy, orderDirection}) => {
    const [repositories, setRepositories] = useState(undefined);
    const [getRepositories, { data, loading }] = useLazyQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network'
    });

    const fetchRepositories = () => {
        if (!loading) {
            setRepositories(data.repositories);
        }
    };

    useEffect(() => {
        getRepositories({ variables: { orderBy, orderDirection }});
    }, [orderBy, orderDirection]);

    useEffect(() => {
        fetchRepositories();
    }, [loading]);

    return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;