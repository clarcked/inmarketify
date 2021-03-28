import React from 'react';
import {EntityManager} from "../../../core/entity";
import {GET_CATEGORIES, GET_CATEGORY, GET_FULL_CATEGORIES} from "./queries";

export default class CategoryEntityManager extends EntityManager {

    constructor({rest, graphql}) {
        super({
            name: "categories",
            rest,
            graphql,
            query: GET_CATEGORIES,
            fullQuery: GET_FULL_CATEGORIES,
            findQuery: GET_CATEGORY
        });
    }
}