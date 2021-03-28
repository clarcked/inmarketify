import {ApolloClient, ApolloProvider} from "@apollo/client";
import React from "react";
import {useApollo} from "./apollo";

export const Graphql = React.createContext<ApolloClient<any>>(null);
export const GraphqlProvider = (props: any) => {
    const apollo = useApollo(props);
    return (
        <Graphql.Provider value={apollo}>
            <ApolloProvider client={apollo}>{props.children}</ApolloProvider>
        </Graphql.Provider>
    );
};
