import React from 'react';
import {EntityManager} from "../../../core/entity";
import {GET_FULL_HOSTS, GET_HOST, GET_HOSTS} from "./queries";

export default class HostEntityManager extends EntityManager {

    constructor({rest, graphql}) {
        super({
            name: "hosts",
            rest,
            graphql,
            query: GET_HOSTS,
            fullQuery: GET_FULL_HOSTS,
            findQuery: GET_HOST
        });
    }
}