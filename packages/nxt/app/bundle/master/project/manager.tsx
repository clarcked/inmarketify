import React from 'react';
import {EntityManager} from "../../../core/entity";
import {GET_FULL_PROJECTS, GET_PROJECT, GET_PROJECTS} from "./queries";
import {isEmail} from "../../../core/utils";
import {isArray} from "lodash";
import {GET_HOSTS} from "../host";
import {GET_FEATURES} from "../feature";
import {GET_CATEGORIES} from "../category";

export default class ProjectEntityManager extends EntityManager {

    headers = {Accept: "application/json", "Content-Type": "application/json"}

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

    async isAlreadyUsed(name: string) {
        if (!name) {
            console.warn(`a name is required`, "project manager: checkValidity")
            return false
        }
        const res = await this.rest.get('/api/projects?name=' + name, {
            headers: {
                ...this.headers,
                "im-project-tag": "master"
            }
        });
        const proj = isArray(res) ? res[0] : null
        return !!proj?.id;
    }

    async getDependencies() {
        let hosts = []
        let features = []
        let categories = []
        let options = {
            fetchPolicy: "network-only",
            context: {headers: {"im-project-tag": "master"}}
        }

        let resHost = await this.graph.query(GET_HOSTS, options)
        hosts = resHost?.hosts
        let resFeat = await this.graph.query(GET_FEATURES, options)
        features = resFeat?.features;
        let resCat = await this.graph.query(GET_CATEGORIES, options)
        categories = resCat?.categories
        return {hosts, features, categories}
    }

    async getUserByEmail(email: string) {
        if (!isEmail(email)) return null
        const res = await this.rest.get("/api/users?email=" + email, {
            headers: {"Accept": "application/json", "im-project-tag": "main"}
        })
        return isArray(res) ? res[0] : null
    }

    async getCollaborators(args: any[]) {
        let collabs: any = []
        if (!isArray(args)) return collabs
        collabs = Promise.all(args.map(async (arg) => {
            if (!arg?.email) return null
            let u: any = await this.getUserByEmail(arg?.email)
            if (!u?.id) return null
            return {...arg, iri: `/api/users/${u.id}`}
        }));
        return collabs;
    }
}