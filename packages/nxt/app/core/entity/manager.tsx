import React from "react";
import {Graphql, RestHttp} from "../net";
import {ApolloClient} from "@apollo/client";
import {initializeRestHttp} from "../providers/rest";
import {isUrl} from "../utils";


type EntityManagerProps = { rest: RestHttp, graphql: ApolloClient<any>, name: string, query: any, fullQuery: any, findQuery: any }

export class EntityManager {

    GET_ENTITY: any;
    GET_ENTITIES: any;
    GET_FULL_ENTITIES: any;
    name: string;
    rest: RestHttp;
    graph: Graphql;

    constructor({rest, graphql, name, query, fullQuery, findQuery}: EntityManagerProps) {
        this.name = name
        this.rest = initializeRestHttp(rest)
        this.graph = new Graphql(graphql)
        this.GET_ENTITY = findQuery
        this.GET_FULL_ENTITIES = fullQuery
        this.GET_ENTITIES = query
    }

    getPath(id?: string) {
        if (isUrl(id)) return id
        return this.name ? `/api/${this.name}${id ? `/${id}` : ''}` : false
    }

    async create(arg: any, options?: any) {
        if (!this.getPath()) {
            console.warn("path is required to create entity", "entity manager: create")
            return null
        }
        return await this.rest.post(this.getPath() as string, arg, options)
    }

    async read(id: string, options?: any) {
        if (!this.GET_ENTITY) {
            console.warn("GQL query is required to read entity", "entity manager: read")
            return null
        }
        return await this.graph.query(this.GET_ENTITY, {...options, variables: {id}})
    }

    async fetchAll(options?: any) {
        if (!this.GET_FULL_ENTITIES) {
            console.warn("GQL query is required to read entity", "entity manager: fetch all")
            return null
        }
        return await this.graph.query(this.GET_FULL_ENTITIES, {...options})
    }

    async fetch(options?: any) {
        if (!this.GET_ENTITIES) {
            console.warn("GQL query is required to read entity", "entity manager: fetch")
            return null
        }
        return await this.graph.query(this.GET_ENTITIES, {...options})
    }

    async list(options?: any) {
        if (!this.getPath()) {
            console.warn("path is required to list entity", "entity manager: list")
            return null
        }
        return await this.rest.get(this.getPath() as string, options)
    }

    async update(arg: any, options?: any) {
        if (!this.getPath(arg?.id)) {
            console.warn("path is required to update entity", "entity manager: update")
            return null
        }
        return await this.rest.put(this.getPath(arg?.id) as string, arg, options)
    }

    async delete(id: string, options?: any) {
        if (!this.getPath(id)) {
            console.warn("path is required to deleted entity", "entity manager: delete")
            return null
        }
        return await this.rest.del(this.getPath(id) as string, {...options, id})
    }
}

export function withManager(Wrapped: any) {
    return class Wrapper extends React.Component<EntityManagerProps & { children?: React.ReactNode }, any> {
        render() {
            if (!this.props.name) console.warn('name property is missing, manager will not load properly', "render manager")
            if (!this.props.rest) console.warn('rest client is missing, manager will not load properly', "render manager")
            if (!this.props.graphql) console.warn('graphql client is missing, manager will not load properly', "render manager")
            return <Wrapped {...this.props} Manager={new EntityManager(this.props)}/>
        }
    };
}