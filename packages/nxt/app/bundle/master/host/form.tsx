import React, {Component} from 'react';
import {TextInput} from "../../../core/comps";
import {FaGlobeAfrica} from "react-icons/fa";
import {MdHttp, MdRefresh} from "react-icons/md";
import {AiOutlineCloudServer} from 'react-icons/ai';

class HostForm extends Component<any & { onSubmit, register, data, reset }, any> {
    render() {
        const {onSubmit, register, reset} = this.props
        return (
            <form className="w-300 h-expand form wire-r grid-r-1-a scroll" onSubmit={onSubmit}>
                <section className="pad">
                    <div className="margin-b">
                        <TextInput Left={MdHttp} placeholder="Host name" name="name" register={register}/>
                    </div>
                    <div className="margin-b">
                        <TextInput Left={AiOutlineCloudServer} placeholder="Ip address" name="ip" register={register}/>
                    </div>
                    <div className="margin-">
                        <TextInput Left={FaGlobeAfrica} placeholder="Region" name="region" register={register}/>
                    </div>
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
                                    <button type="submit" className="btn">Add Host</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        );
    }
}

export default HostForm;