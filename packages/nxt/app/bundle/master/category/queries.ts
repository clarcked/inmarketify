import {gql} from "@apollo/client";

export const GET_CATEGORIES = gql`
    query GetCategorys {
        categories {
            edges {
                node {
                    id
                    _id 
                    status
                    note
                    name
                }
            }
        }
    }
`;

export const GET_FULL_CATEGORIES = gql`
    query GetCategorys {
        categories {
            edges {
                node {
                    id
                    _id
                    createdAt
                    modifiedAt
                    status
                    note
                    name
                }
            }
        }
    }
`;

export const GET_CATEGORY = gql`
    query GetCategory($id: ID!) {
        category(id: $id) {
            id
            _id
            createdAt
            modifiedAt
            status
            note
            name
        }
    }`