import { useState, useEffect } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";
import { useQuery } from "@apollo/react-hooks";

const useRepositories = () => {
    const [repositories, setRepositories] = useState(undefined);
    const { data, loading } = useQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network'
    });

    const fetchRepositories = () => {
        if (!loading) {
            setRepositories(data.repositories);
        }
    };

    useEffect(() => {
        fetchRepositories();
    }, [loading]);

    return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;