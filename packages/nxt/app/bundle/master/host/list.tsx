import React from 'react';
import HostCard from "./card";
import {useQuery} from "@apollo/client";
import {GET_HOSTS} from "./queries";
import {Loader} from '../../../core/comps';

function HostList(props) {
    const {data, loading, error} = useQuery(GET_HOSTS, {
        fetchPolicy: "cache-and-network",
        context: {headers: {"im-project-tag": "master"}}
    })
    if (loading) return <Loader/>
    if (error) console.log(error.message)
    return (
        <div className="rows gap">
            {data?.hosts?.edges?.map(({node: o}, idx) =>
                (<div className="col w-150" key={idx}>
                    <HostCard data={o}/>
                </div>))}
        </div>
    );
}

export default HostList;