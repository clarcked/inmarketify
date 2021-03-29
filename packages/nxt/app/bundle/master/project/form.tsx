import React, {Component} from 'react';
import {MdClose, MdRefresh} from "react-icons/md";
import {Selector, TextInput} from "../../../core/comps";
import {FaGlobeAfrica, FaSlackHash, FaStore, FaUserShield} from "react-icons/fa";
import {FiServer} from "react-icons/fi";
import {BsFillPersonPlusFill} from "react-icons/bs";


const CollabInput = ({
                         register,
                         remove = () => {
                         }, placeholder = null,
                         fieldId = 0,
                         defaultValue = null,
                         isAdmin = false
                     }) => {
    return (
        <React.Fragment>
            <div className="margin-b">
                <TextInput
                    Right={() => <button onClick={remove} type="button" className="btn btn-icon outline">
                        <MdClose/></button>}
                    defaultValue={defaultValue?.id} Left={FaUserShield} placeholder={placeholder}
                    name={`collabs[${fieldId}].email`}
                    register={register}/>
                <input ref={register} defaultValue={defaultValue?.id} type="hidden" name={`collabs[${fieldId}].iri`}/>
                {isAdmin && <input ref={register} type="hidden" value={"ADMIN"} name={`collabs[${fieldId}].roles[0]`}/>}
            </div>
            {!isAdmin && <div className="margin-b checkboxes">
                <label className="field checkbox">
                    <input value={"ADMIN"} className="input" type="checkbox" name={`collabs[${fieldId}].roles`}
                           ref={register}/>
                    <div className="label">Admin</div>
                </label>
                <label className="field checkbox">
                    <input value={"EMPLOYEE"} className="input" type="checkbox" name={`collabs[${fieldId}].roles`}
                           ref={register}/>
                    <div className="label">Employee</div>
                </label>
            </div>}
        </React.Fragment>
    )
}

class ProjectForm extends Component<any, any> {
    state: any = {
        collabInputs: []
    }

    pushCollab() {
        const items = this.state.collabInputs;
        items.push(CollabInput)
        this.setState({collabInputs: items})
    }

    popCollab(idx) {
        const items = this.state.collabInputs;
        if (items[idx]) {
            delete items[idx]
        }
        this.setState({collabInputs: items})
    }

    render() {
        const {reset, onSubmit, register, hosts, features, categories} = this.props
        return (
            <form className="form w-300 grid-r-1-a wire-r h-expand flow-hidden" onSubmit={onSubmit}>
                <section className="pad scroll">
                    <div className="margin-b">
                        <TextInput Left={FaStore} placeholder="Project name" name="name" register={register}/>
                    </div>
                    <div className="margin-b grid-c-1-1 gap">
                        <div className="col">
                            <Selector options={hosts} map={["id"]} Left={FiServer} placeholder="Host"
                                      name="host" register={register}/>
                        </div>
                        <Selector options={["Argentina"]} Left={FaGlobeAfrica} placeholder="Country"
                                  name="country" register={register}/>
                    </div>
                    <div className="margin-b">
                        <Selector options={categories} map={["id"]} Left={FaSlackHash} placeholder="Categories"
                                  name="category" register={register}/>
                    </div>
                    <div className="margin-b checkboxes">
                        {features?.map((f, idx) => <label key={idx} className="field checkbox">
                            <input defaultChecked={idx === 0} defaultValue={f?.id} className="input" type="checkbox"
                                   name={`features[${idx}].id`}
                                   ref={register}/>
                            <div className="label">{f?.name}</div>
                        </label>)}
                    </div>
                    <CollabInput register={register} placeholder="Owner" fieldId={0} isAdmin={true}/>
                    {this.state?.collabInputs?.map((Input, idx) => <Input key={idx}
                                                                          register={register}
                                                                          placeholder="Collaborator"
                                                                          remove={() => this.popCollab(idx)}
                                                                          fieldId={idx + 1}/>)}
                </section>
                <section className="pad">
                    <div className="rows">
                        <div className="col-1"/>
                        <div className="col-auto">
                            <div className="rows gap a-center j-right">
                                <div className="col">
                                    <button type="button" className="btn btn-icon" onClick={reset}><MdRefresh/></button>
                                </div>
                                <div className="col">
                                    <button type="button" className="btn btn-icon" onClick={this.pushCollab.bind(this)}>
                                        <BsFillPersonPlusFill/></button>
                                </div>
                                <div className="col">
                                    <button type="submit" className="btn">Add Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        );
    }
}

export default ProjectForm;