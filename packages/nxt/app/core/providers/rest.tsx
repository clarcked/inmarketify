import React from "react";
import {RestHttp} from "../net";

export const initializeRestHttp = (arg?: any) => {
    return new RestHttp({
        uri: process.env.API_REST_URL,
        headers: {Accept: "application/json", "im-project-tag": "main"}, ...arg
    })
}
export const Rest = React.createContext<RestHttp>(null);
export const RestProvider = ({rest, children}: any) => {
    return <Rest.Provider value={initializeRestHttp(rest)}>{children}</Rest.Provider>;
};
