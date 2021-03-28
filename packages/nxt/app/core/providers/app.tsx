import React from "react";

export const App = React.createContext<any>(null);
export const AppProvider = (props: any) => {
    const {children, config} = props;
    return <App.Provider value={config}>{children}</App.Provider>;
};
export const configs = (ctx: any) => {
    let props: any = {};
    props.rest = {
        uri: process.env.API_REST_URL,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    };
    props.graphql = {uri: process.env.API_GRAPHQL_URL};
    props.socket = {uri: process.env.SOCKETIO_URL};
    return props;
};
