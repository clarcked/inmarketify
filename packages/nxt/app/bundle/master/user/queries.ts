import {gql} from "@apollo/client";

export const GET_USERS = gql`
    query GetUsers {
        users {
            edges {
                node {
                    id
                    _id 
                    status
                    note
                    username
                    email 
                }
            }
        }
    }
`;

export const GET_FULL_USERS = gql`
    query GetUsers {
        users {
            edges {
                node {
                    id
                    _id
                    createdAt
                    modifiedAt
                    status
                    note 
                    username
                    email 
                }
            }
        }
    }
`;

export const GET_USER = gql`
    query GetUser($id: ID!) {
        user(id: $id) {
            id
            _id
            createdAt
            modifiedAt
            status
            note
            username
            email 
        }
    }`