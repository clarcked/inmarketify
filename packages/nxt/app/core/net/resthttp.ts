import {sanitize} from "../utils";

export default class RestHttp {
    base_url: any;
    headers: any;

    constructor({uri, headers = {"im-project-tag": "main"}}) {
        this.base_url = uri;
        this.headers = {
            Accept: "application/json",
            ...headers,
        };
    }

    error = (e: any, name: string = "error") => e && console.warn(e?.message, `rest http: ${name}`);

    url = (path: string) => `${this.base_url}${path}`;

    body = (data: any) => (typeof data === "object" ? JSON.stringify(sanitize(data)) : data);

    options = (arg: any) => {
        let options: any = {};
        options.headers = this.headers;
        return {...options, ...arg};
    };

    request = async (args: any) => {
        try {
            if (!args?.path) console.warn(`path is required to fetch a request`, 'rest http: fetch')
            const options = this.options(args);
            const res = args?.path && await fetch(this.url(args?.path), options);
            if (res.ok) {
                let data;
                if (res.status !== 204) {
                    data = await res.json()
                }
                options?.callBack && options?.callBack(data, res)
                return data
            }
            return null
        } catch (error) {
            this.error(error, "request");
        }
    };

    query = async (path: string, options?: any) => {
        return await this.request({...options, method: "GET", path: path});
    };

    mutate = async (verb: "POST" | "PUT" | "DELETE", path: string, data: any, options?: any) => await this.request({
        ...options,
        path: path,
        method: verb,
        body: this.body(data),
    });

    get = async (path: string, options?: any) => await this.query(path, options);

    post = async (path: string, data: any, options?: any) => await this.mutate("POST", path, data, options);

    put = async (path: string, data: any, options?: any) => await this.mutate("PUT", path, data, options);

    del = async (path, options?: any) => await this.request({...options, method: "DELETE", path: path});
}