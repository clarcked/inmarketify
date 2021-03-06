import React, {useEffect} from 'react';
import {useQuery} from "@apollo/client";
import {GET_HOSTS} from "./queries";
import {Loader} from '../../../core/comps';
import {MdClose, MdEdit} from 'react-icons/md';
import {withManager} from "../../../core/entity";
import HostEntityManager from "./manager";

let HostList: any = (props) => {
    const {Manager} = props
    const {data, loading, error, refetch} = useQuery(GET_HOSTS, {
        fetchPolicy: "network-only",
        context: {headers: {"im-project-tag": "master"}}
    })

    const remove = async (arg) => {
        try {
            const res = await Manager?.delete(arg?.id, {
                headers: {
                    "Content-Type": "application/json",
                    "im-project-tag": "master"
                }
            })
            if (res) alert(`feature has been deleted..!`)
        } catch (e) {
            console.warn(e.message, "feature list: remove")
        } finally {
            await refetch()
        }
    }

    const edit = (arg) => {
    }

    useEffect(() => {
        refetch().then()
    }, [Manager])

    if (error) console.log(error.message)
    if (loading) return <Loader/>
    return (
        <div className="pad h-expand scroll">
            <table className="table">
                <tbody>
                <tr>
                    <th>Host Name</th>
                    <th>Ip Address</th>
                    <th>Region</th>
                    <th></th>
                </tr>
                {data?.hosts?.edges?.map(({node: o}, idx) =>
                    (<tr key={idx}>
                        <td>{o.name}</td>
                        <td>{o.ip}</td>
                        <td>{o.region}</td>
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
HostList = withManager(HostList, HostEntityManager)
export default HostList;