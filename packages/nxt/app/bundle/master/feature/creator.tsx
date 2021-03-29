import React from 'react';
import {withManager} from "../../../core/entity";
import {useForm} from "react-hook-form";
import FeatureForm from './form';
import List from "./list";
import {GET_FEATURES} from "./queries";
import FeatureEntityManager from "./manager";

let FeatureCreator: any = (props: any) => {
    const {Manager} = props
    const {handleSubmit, reset, register} = useForm()

    const debug = async (data) => {
        console.log(data)
    }

    const onSubmit = async (data) => {
        try {
            const res = await Manager?.create(data, {
                headers: {
                    "Content-Type": "application/json",
                    "im-project-tag": "master"
                }
            })
            if (res) alert(`${res?.name} has been created..!`)
        } catch (e) {
            console.warn(e.message, "feature creator: onSubmit")
        }
    }

    return (
        <React.Fragment>
            <FeatureForm data={null} onSubmit={handleSubmit(onSubmit)} register={register}/>
            <List {...props} name="features" query={GET_FEATURES}/>
        </React.Fragment>
    )
}
FeatureCreator = withManager(FeatureCreator, FeatureEntityManager)
export default FeatureCreator;