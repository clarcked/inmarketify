import {gql} from "@apollo/client";

export const GET_HOSTS = gql`
    query GetHosts {
        hosts {
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

export const GET_FULL_HOSTS = gql`
    query GetHosts {
        hosts {
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

export const GET_HOST = gql`
    query GetHost($id: ID!) {
        host(id: $id) {
            id
            _id
            createdAt
            modifiedAt
            status
            note
            name
        }
    }`