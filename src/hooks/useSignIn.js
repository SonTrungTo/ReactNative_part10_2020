import { AUTHORIZE } from "../graphql/mutations";
import { useMutation } from "@apollo/react-hooks";
import AuthStorageContext from '../contexts/AuthStorageContext';
import { useContext } from 'react';

const useSignIn = () => {
    const authStorage = useContext(AuthStorageContext);
    const [mutate, result] = useMutation(AUTHORIZE, {
        onCompleted: (result) => {
            return result;
        }
    });

    const signIn = async ({ username, password }) => {
        return await mutate({ variables: { credentials: { username, password } } });
    };

    return [signIn, result];
};

export default useSignIn;