import React from 'react';
import {EntityManager} from "../../../core/entity";
import {GET_FULL_USERS, GET_USER, GET_USERS} from "./queries";

export default class UserEntityManager extends EntityManager {

    constructor({rest, graphql}) {
        super({
            name: "users",
            rest,
            graphql,
            query: GET_USERS,
            fullQuery: GET_FULL_USERS,
            findQuery: GET_USER
        });
    }
}