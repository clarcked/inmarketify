import React, {Component} from 'react';
import {Selector, TextInput} from "../../../core/comps";
import {MdRefresh} from "react-icons/md";
import {IoKeyOutline} from 'react-icons/io5';
import {BiCheckShield, BiUser} from 'react-icons/bi';
import {HiOutlineMail} from "react-icons/hi";
import {RiShieldUserLine} from 'react-icons/ri';

class UserForm extends Component<any & { onSubmit, register, data, reset }, any> {
    render() {
        const {onSubmit, register, reset} = this.props
        return (
            <form className="w-300 h-expand form wire-r grid-r-1-a scroll" onSubmit={onSubmit}>
                <section className="pad">
                    <div className="margin-b">
                        <TextInput Left={BiUser} placeholder="Username" name="username" register={register}/>
                    </div>
                    <div className="margin-b">
                        <TextInput Left={HiOutlineMail} type="email" placeholder="Email" name="email"
                                   register={register}/>
                    </div>
                    <div className="margin-b grid-c-1-1 gap">
                        <div className="col">
                            <TextInput Left={IoKeyOutline} type="password" placeholder="Password" name="password"
                                       register={register}/>
                        </div>
                        <div className="col">
                            <TextInput Left={IoKeyOutline} type="password" placeholder="Confirm Password" name="pwd"
                                       register={register}/>
                        </div>
                    </div>
                    <div className="margin-b">
                        <Selector options={["ROLE_USER", "ROLE_CLIENT", "ROLE_OWNER"]}
                                  Left={RiShieldUserLine} placeholder="Roles" name="roles[0]" register={register}/>
                    </div>
                    <div className="margin-">
                        <Selector options={["Active", "Pending"]}
                                  Left={BiCheckShield} placeholder="Status" name="status" register={register}/>
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
                                    <button type="submit" className="btn">Add User</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        );
    }
}

export default UserForm;