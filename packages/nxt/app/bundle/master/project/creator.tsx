import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import ProjectForm from './form';
import ProjectList from "./list";
import {sanitize} from "../../../core/utils";
import {withManager} from '../../../core/entity';
import ProjectEntityManager from './manager';

let ProjectCreator: any = (props) => {
    const {Manager} = props
    const {handleSubmit, register, reset} = useForm()
    const [hosts, setHosts] = useState<any[]>([])
    const [features, setFeatures] = useState<any[]>([])
    const [categories, setCategories] = useState<any[]>([])

    const debug = async (arg) => {
        if (await Manager?.isAlreadyUsed(arg?.name)) {
            alert(`This name is already used...!`)
            return null
        }
        arg.collabs = await Manager?.getCollaborators(arg?.collabs)
        console.log(sanitize(arg))
    }
    const onSubmit = async (arg) => {
        if (await Manager?.isAlreadyUsed(arg?.name)) {
            alert(`This name is already used...!`)
            return null
        }
        arg.collabs = await Manager?.getCollaborators(arg?.collabs)
        const res = await Manager?.create(arg, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "im-project-tag": "master"
            }
        })
        if (res?.id) alert(`${res?.name} has been created.!`)
        reset()
    }
    const init = async () => {
        const deps = await Manager?.getDependencies();
        if (deps) {
            setHosts(deps?.hosts?.edges?.map(o => o.node))
            setFeatures(deps?.features?.edges?.map(o => o.node))
            setCategories(deps.categories?.edges?.map(o => o.node))
        }
    }
    useEffect(() => {
        init().then()
    }, [])
    return (
        <React.Fragment>
            <ProjectForm hosts={hosts} categories={categories} features={features} data={null}
                         register={register}
                         reset={reset}
                         onSubmit={handleSubmit(onSubmit)}/>
            <ProjectList {...props} reset={reset} name="projects"/>
        </React.Fragment>
    );
}
ProjectCreator = withManager(ProjectCreator, ProjectEntityManager)
export default ProjectCreator;