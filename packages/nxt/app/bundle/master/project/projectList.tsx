import React from 'react';
import ProjectCard from "./card";
import {useQuery} from "@apollo/client";
import {GET_PROJECTS} from "./queries";
import {Loader} from '../../../core/comps';

function ProjectList(props) {
    const {data, loading, error} = useQuery(GET_PROJECTS, {
        fetchPolicy: "cache-and-network",
        context: {headers: {"im-project-tag": "master"}}
    })
    if (loading) return <Loader/>
    if (error) console.log(error.message)
    return (
        <div className="rows gap">
            {data?.projects?.edges?.map(({node: project}, idx) =>
                (<div className="col w-150" key={idx}>
                    <ProjectCard data={project}/>
                </div>))}
        </div>
    );
}

export default ProjectList;