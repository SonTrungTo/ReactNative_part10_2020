import { AUTHORIZE } from "../graphql/mutations";
import { useMutation } from "@apollo/react-hooks";

const useSignIn = () => {
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