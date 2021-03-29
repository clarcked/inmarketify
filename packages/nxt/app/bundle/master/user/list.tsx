import React, {useEffect} from 'react';
import {useQuery} from "@apollo/client";
import {GET_USERS} from "./queries";
import {Loader} from '../../../core/comps';
import {MdClose, MdEdit} from 'react-icons/md';
import {withManager} from "../../../core/entity";
import UserEntityManager from "./manager";

let UserList: any = (props) => {
    const {Manager} = props
    const {data, loading, error, refetch} = useQuery(GET_USERS, {
        fetchPolicy: "network-only",
        context: {headers: {"im-project-tag": "main"}}
    })

    const remove = async (arg) => {
        try {
            const res = await Manager?.delete(arg?.id, {
                headers: {
                    "Content-Type": "application/json",
                    "im-project-tag": "master"
                }
            })
            if (res) alert(`user has been deleted..!`)
        } catch (e) {
            console.warn(e.message, "user list: remove")
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
                    <th></th>
                    <th>Username</th>
                    <th>Email</th>
                    <th></th>
                    <th></th>
                </tr>
                {data?.users?.edges?.map(({node: o}, idx) =>
                    (<tr key={idx}>
                        <td>{o._id}</td>
                        <td>{o.username}</td>
                        <td>{o.email}</td>
                        <td>{o.status}</td>
                        <td>
                            <div className="actions rows gap j-right a-center">
                                <div className="col">
                                    <a className="btn btn-icon outline" onClick={() => edit(o)}><MdEdit/></a>
                                </div>
                                <div className="col">
                                    <a className="btn btn-icon outline"
                                       onClick={() => confirm(`Remove ${o?.username} ?`) && remove(o)}><MdClose/></a>
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
UserList = withManager(UserList, UserEntityManager)
export default UserList;