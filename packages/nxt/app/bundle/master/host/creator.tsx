import React from 'react';
import {withManager} from "../../../core/entity";
import {useForm} from "react-hook-form";
import HostForm from "./form";
import {HostList} from "./index";
import HostEntityManager from "./manager";

let HostCreator: any = (props) => {
    const {Manager} = props
    const {handleSubmit, register, reset} = useForm()
    const debug = async (data) => {
        console.log(data)
    }
    const onSubmit = async (data) => {
        try {
            const res = await Manager?.create(data, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "im-project-tag": "master"
                }
            })
            if (res) alert(`${res?.name} has been created..!`)
        } catch (e) {
            console.warn(e.message, "host creator: onSubmit")
        }
    }
    return (
        <React.Fragment>
            <HostForm data={null} reset={reset} onSubmit={handleSubmit(onSubmit)} register={register}/>
            <HostList {...props} name="hosts"/>
        </React.Fragment>
    );
}
HostCreator = withManager(HostCreator, HostEntityManager)
export default HostCreator;