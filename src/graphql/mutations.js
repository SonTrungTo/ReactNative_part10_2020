import { gql } from 'apollo-boost';

import { ACCESS_TOKEN } from './fragments';

export const AUTHORIZE = gql`
    mutation authorize($credentials: AuthorizeInput) {
        authorize(credentials: $credentials) {
            ...ACCESS_TOKEN
        }
    }
    ${ACCESS_TOKEN}
`;

export const CREATE_REVIEW = gql`
    mutation createReview($repositoryName: String!,
    $ownerName: String!, $rating: Int!, $text: String) {
        createReview(review: {
            repositoryName: $repositoryName,
            ownerName: $ownerName,
            rating: $rating,
            text: $text
        }) {
            repository {
                ownerName
                name
                id
            }
            user {
                username
            }
            rating
            createdAt
            text
        }
    }
`;