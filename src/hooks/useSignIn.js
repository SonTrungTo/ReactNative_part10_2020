import { AUTHORIZE } from "../graphql/mutations";
import { useMutation } from "@apollo/react-hooks";

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHORIZE);

    const signIn = async ({ username, password }) => {
        mutate({ variables: { credentials: { username, password } } });
        return result;
    };

    return [signIn, result];
};

export default useSignIn;