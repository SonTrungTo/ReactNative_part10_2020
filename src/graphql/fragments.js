import { gql } from "apollo-boost";

export const BASIC_INFO = gql`
    fragment BASIC_INFO on Repository {
        id
        fullName
        stargazersCount
        forksCount
        ownerAvatarUrl
        reviewCount
        ratingAverage
        description
        language
    }
`;