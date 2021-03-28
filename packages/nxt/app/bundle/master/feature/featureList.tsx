import React from 'react';
import FeatureCard from "./card";
import {useQuery} from "@apollo/client";
import {GET_FEATURES} from "./queries";
import {Loader} from '../../../core/comps';

function FeatureList(props) {
    const {data, loading, error} = useQuery(GET_FEATURES, {
        fetchPolicy: "cache-and-network",
        context: {headers: {"im-project-tag": "master"}}
    })
    if (loading) return <Loader/>
    if (error) console.log(error.message)
    return (
        <div className="rows gap">
            {data?.features?.edges?.map(({node: o}, idx) =>
                (<div className="col w-150" key={idx}>
                    <FeatureCard data={o}/>
                </div>))}
        </div>
    );
}

export default FeatureList;