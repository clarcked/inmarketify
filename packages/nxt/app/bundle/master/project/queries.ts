import {gql} from "@apollo/client";

export const GET_PROJECTS = gql`
    query GetProjects {
        projects {
            edges {
                node {
                    id
                    _id 
                    status
                    note
                    name
                    country
                    collabs {
                        totalCount
                        edges {
                            node {
                                id
                                _id
                                email
                                iri
                            }
                        }
                    }
                    category {
                        id
                        _id
                        name
                    }
                    host {
                        id
                        _id
                        name
                        ip
                        region
                    }
                }
            }
        }
    }
`;

export const GET_FULL_PROJECTS = gql`
    query GetProjects {
        projects {
            edges {
                node {
                    id
                    _id
                    createdAt
                    modifiedAt
                    status
                    note
                    name
                    country
                    collabs {
                        totalCount
                        edges {
                            node {
                                id
                                _id
                                email
                                iri
                            }
                        }
                    }
                    category {
                        id
                        _id
                        name
                    }
                    host {
                        id
                        _id
                        name
                        ip
                        region
                    }
                }
            }
        }
    }
`;

export const GET_PROJECT = gql`
    query GetProject($id: ID!) {
        project(id: $id) {
            id
            _id
            createdAt
            modifiedAt
            status
            note
            name
            country
            collabs {
                totalCount
                edges {
                    node {
                        id
                        _id
                        email
                        iri
                    }
                }
            }
            category {
                id
                _id
                name
            }
            host {
                id
                _id
                name
                ip
                region
            }
        }
    }`