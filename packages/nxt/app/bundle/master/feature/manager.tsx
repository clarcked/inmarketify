import React from 'react';
import {EntityManager} from "../../../core/entity";
import {GET_FEATURE, GET_FEATURES, GET_FULL_FEATURES} from "./queries";

export default class FeatureEntityManager extends EntityManager {

    constructor({rest, graphql}) {
        super({
            name: "features",
            rest,
            graphql,
            query: GET_FEATURES,
            fullQuery: GET_FULL_FEATURES,
            findQuery: GET_FEATURE
        });
    }
}