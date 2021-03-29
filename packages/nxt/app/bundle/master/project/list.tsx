import React, {useEffect} from 'react';
import {useQuery} from "@apollo/client";
import {GET_PROJECTS} from "./queries";
import {Loader} from '../../../core/comps';
import {MdClose, MdEdit} from "react-icons/md";
import {withManager} from "../../../core/entity";
import ProjectEntityManager from "./manager";

let ProjectList: any = (props) => {
    const {Manager} = props
    const {data, loading, error, refetch} = useQuery(GET_PROJECTS, {
        fetchPolicy: "cache-and-network",
        context: {headers: {"im-project-tag": "master"}}
    });

    const remove = async (arg) => {
        const res = await Manager.delete(arg?.id, {headers: {"im-project-tag": "master"}})
        console.log(res)
        if (res) alert(`Project has been removed..!`)
        await refetch()
    };

    const edit = (arg) => {
    }

    useEffect(() => {
        refetch().then()
    }, [Manager, refetch])

    if (loading) return <Loader/>
    if (error) console.log(error.message)
    return (
        <div className="pad h-expand scroll">
            <table className="table">
                <tbody>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Category</th>
                    <th>Host</th>
                    <th></th>
                </tr>
                {data?.projects?.edges?.map(({node: o}, idx) => (
                    <tr key={idx}>
                        <td>{o._id}</td>
                        <td>{o.name}</td>
                        <td>{o.country}</td>
                        <td>{o.category?.name}</td>
                        <td>{o.host?.name}</td>
                        <td>
                            <div className="actions rows gap j-right a-center">
                                <div className="col">
                                    <a className="btn btn-icon outline" onClick={() => edit(o)}><MdEdit/></a>
                                </div>
                                <div className="col">
                                    <a className="btn btn-icon outline"
                                       onClick={() => confirm(`Remove ${o?.name} ?`) && remove(o)}><MdClose/></a>
                                </div>
                            </div>
                        </td>
                    </tr>))
                }
                </tbody>
            </table>
        </div>
    );
}
ProjectList = withManager(ProjectList, ProjectEntityManager)
export default ProjectList;