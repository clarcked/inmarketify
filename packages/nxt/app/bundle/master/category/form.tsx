import React, {Component} from 'react';
import {TextInput} from "../../../core/comps";
import {FaSlackHash} from "react-icons/fa";
import {MdRefresh} from "react-icons/md";
import CategoryList from "./list";
import {GET_CATEGORIES} from "./queries";

class CategoryForm extends Component<any & { onSubmit, register, data }, any> {
    render() {
        const {onSubmit, register, reset} = this.props
        return (
            <form className="w-300 h-expand form wire-r grid-r-1-a" onSubmit={onSubmit}>
                <section className="grid-r-a-1">
                    <section className="pad">
                        <div className="margin-">
                            <TextInput Left={FaSlackHash} placeholder="Activity name" name="name" register={register}/>
                        </div>
                    </section>
                    <section className="pad no-pad-t scroll">
                        <CategoryList {...this.props} reset={reset} name="categories" query={GET_CATEGORIES}/>
                    </section>
                </section>
                <section className="pad">
                    <div className="rows">
                        <div className="col-1"/>
                        <div className="col-auto">
                            <div className="rows gap a-center j-right">
                                <div className="col">
                                    <button type="reset" className="btn btn-icon"><MdRefresh/></button>
                                </div>
                                <div className="col">
                                    <button type="submit" className="btn">Add Activity</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        );
    }
}

export default CategoryForm;