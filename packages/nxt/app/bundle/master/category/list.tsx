import React, {useEffect} from 'react';
import {useQuery} from "@apollo/client";
import {GET_CATEGORIES} from "./queries";
import {Loader} from '../../../core/comps';
import {MdClose} from "react-icons/md";
import {withManager} from "../../../core/entity";
import CategoryEntityManager from "./manager";

let CategoryList: any = (props) => {
    const {Manager, reset} = props
    const {data, loading, error, refetch} = useQuery(GET_CATEGORIES, {
        fetchPolicy: "cache-and-network",
        context: {headers: {"im-project-tag": "master"}}
    })

    const remove = async (o) => {
        try {
            const res = await Manager.delete(o?.id, {
                headers: {
                    "Content-Type": "application/json",
                    "im-project-tag": "master"
                }
            });
            if (res) alert("Activity has been deleted..!")
        } catch (e) {
            console.warn(e.message, "category list: remove")
        } finally {
            await refetch()
            reset()
        }
    }

    useEffect(() => {
        refetch().then()
    }, [reset, Manager])

    if (loading) return <Loader/>
    if (error) console.log(error.message)
    return (
        <div className="tags">
            {data?.categories?.edges?.map(({node: o}, idx) =>
                (<div className="tag" key={idx}>
                        <div className="tag-name">{o.name}</div>
                        <a className="btn btn-icon outline"
                           onClick={() => confirm("Delete activity ?") && remove(o)}><MdClose/></a>
                    </div>
                ))}
        </div>
    );
}
CategoryList = withManager(CategoryList, CategoryEntityManager);
export default CategoryList;