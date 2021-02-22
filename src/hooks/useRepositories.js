import { useState, useEffect } from "react";
import { GET_REPOSITORIES } from "../graphql/queries";
import { useLazyQuery } from "@apollo/react-hooks";
import { useDebounce } from "use-debounce";

const useRepositories = ({orderBy, orderDirection, text}) => {
    const [repositories, setRepositories] = useState(undefined);
    const [delayedText] = useDebounce(text, 500);
    const [getRepositories, {loading}] = useLazyQuery(GET_REPOSITORIES, {
        fetchPolicy: 'cache-and-network',
        onCompleted: (data) => {
            setRepositories(data.repositories);
        }
    });

    const fetchRepositories = () => {
        getRepositories({ variables: { orderBy, orderDirection, text }});
    };

    const filteredRepositories = () => {
        getRepositories({ variables: { text: delayedText, orderBy, orderDirection } });
    };

    useEffect(() => {
        fetchRepositories();
    }, [orderBy, orderDirection]);

    useEffect(() => {
        filteredRepositories();
    }, [delayedText]);

    return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;