import React, {useEffect} from 'react';
import {useQuery} from "@apollo/client";
import {GET_CATEGORIES} from "./queries";
import {Loader} from '../../../core/comps';
import {MdClose} from "react-icons/md";
import {withManager} from "../../../core/entity";

let CategoryList: any = (props) => {
    const {Manager} = props
    const {data, loading, error, refetch} = useQuery(GET_CATEGORIES, {
        fetchPolicy: "cache-and-network",
        context: {headers: {"im-project-tag": "master"}}
    })
    const remove = async (o) => {
        try {
            await Manager.delete(o?.id, {
                headers: {
                    "Content-Type": "application/json",
                    "im-project-tag": "master"
                }
            });
            alert("Activity has been deleted..!")
            await refetch()
        } catch (e) {
            console.warn(e.message, "category list: remove")
        }
    }
    useEffect(() => {
        refetch().then()
    }, [props.Manager])

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
CategoryList = withManager(CategoryList);
export default CategoryList;