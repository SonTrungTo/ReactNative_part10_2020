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