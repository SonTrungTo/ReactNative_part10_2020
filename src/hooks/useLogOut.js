import AuthStorageContext from "../contexts/AuthStorageContext";
import { useContext } from "react";
import { useApolloClient } from "@apollo/react-hooks";

const useLogOut = () => {
    const authStorage = useContext(AuthStorageContext);
    const apolloClient = useApolloClient();

    const logout = async () => {
        await authStorage.removeAccessToken();
        await apolloClient.resetStore();
    };

    return { logout };
};

export default useLogOut;