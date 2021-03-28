import {gql} from "@apollo/client";

export const GET_FEATURES = gql`
    query GetFeatures {
        features {
            edges {
                node {
                    id
                    _id 
                    status
                    note
                    name
                    cost
                    unit
                }
            }
        }
    }
`;

export const GET_FULL_FEATURES = gql`
    query GetFeatures {
        features {
            edges {
                node {
                    id
                    _id
                    createdAt
                    modifiedAt
                    status
                    note
                    name
                    cost
                    unit
                }
            }
        }
    }
`;

export const GET_FEATURE = gql`
    query GetFeature($id: ID!) {
        feature(id: $id) {
            id
            _id
            createdAt
            modifiedAt
            status
            note
            name
            cost
            unit 
        }
    }`