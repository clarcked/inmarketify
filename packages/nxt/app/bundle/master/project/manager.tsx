import React from 'react';
import {EntityManager} from "../../../core/entity";
import {GET_FULL_PROJECTS, GET_PROJECT, GET_PROJECTS} from "./queries";

export default class ProjectEntityManager extends EntityManager {

    constructor({rest, graphql}) {
        super({
            name: "projects",
            rest,
            graphql,
            query: GET_PROJECTS,
            fullQuery: GET_FULL_PROJECTS,
            findQuery: GET_PROJECT
        });
    }
}