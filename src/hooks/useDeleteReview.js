import { DELETE_REVIEW } from "../graphql/mutations";
import { useMutation } from "@apollo/react-hooks";

const useDeleteReview = () => {
    const [mutate, { loading }] = useMutation(DELETE_REVIEW, {
        onError: (err) => {
            console.log(err);
        }
    });

    const deleteReview = (id) => {
        mutate({ variables: { id } });
    };

    return [deleteReview, loading];
};

export default useDeleteReview;