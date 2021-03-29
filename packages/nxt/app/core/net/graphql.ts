import {ApolloClient} from "@apollo/client";

export default class Graphql {
    client: ApolloClient<any>;

    constructor(client: ApolloClient<any>) {
        this.client = client
    }

    error = (e: any, name: string = "error") => e && console.warn(e?.message, `graphql: ${name}`);

    async query(query, options?: any) {
        try {
            const res = await this.client.query({...options, query})
            if (res.error) this.error(res.error, "query")
            options?.callBack && options?.callBack(res?.data, res)
            return res?.data || null
        } catch (e) {
            this.error(e, "graphql: query")
        }
    }
}