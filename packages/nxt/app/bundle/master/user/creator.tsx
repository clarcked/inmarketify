import React from 'react';
import {withManager} from "../../../core/entity";
import {useForm} from "react-hook-form";
import UserForm from "./form";
import UserList from "./list";
import UserEntityManager from "./manager";

let UserCreator: any = (props) => {
    const {Manager} = props
    const {handleSubmit, register, reset} = useForm()
    const debug = async (data) => {
        console.log(data)
    }
    const onSubmit = async (data) => {
        try {
            const res = await Manager?.create(data, {
                headers: {
                    "Content-Type": "application/json",
                    "im-project-tag": "main"
                }
            })
            if (res) alert(`${res?.username} has been created..!`)
        } catch (e) {
            console.warn(e.message, "user creator: onSubmit")
        }
    }
    return (
        <React.Fragment>
            <UserForm data={null} reset={reset} onSubmit={handleSubmit(onSubmit)} register={register}/>
            <UserList {...props} name="users"/>
        </React.Fragment>
    );
}
UserCreator = withManager(UserCreator, UserEntityManager)
export default UserCreator;