import { gql } from "apollo-boost";

import { BASIC_INFO } from "./fragments";
import { AUTHORIZED_USER } from "./fragments";

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges {
                node {
                    ...BASIC_INFO
                }
                cursor
            }
        }
    }
    ${ BASIC_INFO }
`;

export const GET_AUTHORIZED_USER = gql`
    query {
        authorizedUser {
            ...AUTHORIZED_USER
        }
    }
    ${ AUTHORIZED_USER }
`;