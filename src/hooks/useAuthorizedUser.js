import { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_AUTHORIZED_USER } from "../graphql/queries";

const useAuthorizedUser = () => {
    const [authorizedUser, setAuthorizedUser] = useState(undefined);
    const { data, loading } = useQuery(GET_AUTHORIZED_USER, {
        fetchPolicy: 'cache-and-network'
    });

    const fetchAuthorizedUser = () => {
        if (!loading) {
            setAuthorizedUser(data.authorizedUser);
        }
    };

    useEffect(() => {
        fetchAuthorizedUser();
    }, [loading]);

    return { authorizedUser, loading, refetch: fetchAuthorizedUser };
};

export default useAuthorizedUser;