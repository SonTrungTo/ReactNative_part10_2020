import { useState, useEffect } from "react";
import { GET_REVIEWS } from "../graphql/queries";
import { useLazyQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-native";

const useReviews = () => {
    const { id } = useParams();
    const [reviews, setReviews] = useState(undefined);
    const [getReviews, { loading, data }] = useLazyQuery(GET_REVIEWS, {
        fetchPolicy: 'cache-and-network'
    });

    const fetchReviews = (id) => {
        getReviews({ variables: { id } });
    };

    useEffect(() => {
        fetchReviews(id);
    }, []);

    useEffect(() => {
        if (!loading && data) {
            setReviews(data.repository.reviews);
        }
    }, [loading]);

    return { reviews, loading, refetch: fetchReviews };
};

export default useReviews;