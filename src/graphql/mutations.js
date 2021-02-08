import { gql } from 'apollo-boost';

export const AUTHORIZE = gql`
    mutation {
        authorize(credentials: {...AuthorizeInput}) {
            accessToken
        }
    }
`;