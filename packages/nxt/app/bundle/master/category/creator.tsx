import React from 'react';
import {useForm} from "react-hook-form";
import CategoryForm from './form';
import {withManager} from "../../../core/entity";


let CategoryCreator: any = (props) => {
    const {Manager} = props
    const {handleSubmit, reset, register} = useForm()
    const debug = async (args) => {
        console.log(args, "debug: category creator")
    }
    const submit = async (data) => {
        try {
            const res = await Manager?.create(data, {
                headers: {
                    "Content-Type": "application/json",
                    "im-project-tag": "master"
                }
            });
            if (res) {
                console.log(res, "category creator: submit")
                alert("Activity has been created..!");
                reset();
            }
        } catch (e) {
            console.warn(e.message, "category creator: submit")
        }
    }
    return (
        <CategoryForm {...props} data={null} onSubmit={handleSubmit(submit)} register={register}/>
    );

}
CategoryCreator = withManager(CategoryCreator)
export default CategoryCreator;
