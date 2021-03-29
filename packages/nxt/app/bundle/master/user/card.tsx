import React, {Component} from 'react';
import {MdEdit} from "react-icons/md";

class UserCard extends Component<any, any> {
    render() {
        const {data} = this.props
        return (
            <div className="card card-overlay">
                <div className="card-header">
                    <div className="actions">
                        <a className="btn btn-icon circle"><MdEdit/></a>
                    </div>
                </div>
                <div className="card-body">
                    <div className="title">{data?.name}</div>
                    <div className="description">
                        <div className="country">{data?.country}</div>
                        <div className="host">{data?.host?.name}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCard;