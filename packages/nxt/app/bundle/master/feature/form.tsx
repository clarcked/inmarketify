import React, {Component} from 'react';
import {MdRefresh} from "react-icons/md";
import {Selector, TextInput} from "../../../core/comps";
import {IoMdPricetag} from "react-icons/io";
import {RiCoinsLine} from "react-icons/ri";
import {AiOutlineDeploymentUnit} from 'react-icons/ai';

class FeatureForm extends Component<any & { onSubmit, register, data, reset }, any> {
    render() {
        const {reset, onSubmit, register} = this.props
        return (
            <form className="form h-expand w-300 wire-r grid-r-1-a" onSubmit={onSubmit}>
                <section className="pad">
                    <div className="margin-b">
                        <TextInput Left={IoMdPricetag} name="name" register={register} placeholder="Feature name"/>
                    </div>
                    <div className="margin-b">
                        <TextInput Left={RiCoinsLine} name="cost" register={register({valueAsNumber: true})}
                                   placeholder="Cost"/>
                    </div>
                    <Selector Left={AiOutlineDeploymentUnit} options={["Yearly", "Monthly", "Daily", "Weekly", "Hour"]}
                              name="unit"
                              register={register} placeholder="Unit"/>
                </section>
                <section className="pad">
                    <div className="rows">
                        <div className="col-1"/>
                        <div className="col-auto">
                            <div className="rows gap a-center j-right">
                                <div className="col">
                                    <button type="reset" className="btn btn-icon" onClick={reset}><MdRefresh/></button>
                                </div>
                                <div className="col">
                                    <button type="submit" className="btn">Add Feature</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        );
    }
}

export default FeatureForm;