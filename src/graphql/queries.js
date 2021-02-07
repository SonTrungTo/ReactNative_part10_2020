import { gql } from "apollo-boost";

import { BASIC_INFO } from "./fragments";

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