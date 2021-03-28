import React, {Component} from "react";
import Avatar from "./avatar";
import {MdEdit} from "react-icons/md";

class AvatarEditable extends Component<any, any> {
    render() {
        const {onClick, href} = this.props;
        return (
            <div className="avatar-editable">
                <Avatar {...this.props} />
                <a className="btn btn-icon btn-sm circle" onClick={onClick} href={href}>
                    <MdEdit/>
                </a>
            </div>
        );
    }
}

export default AvatarEditable;
