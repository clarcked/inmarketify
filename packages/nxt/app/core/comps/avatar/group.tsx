import React, {Component} from "react";
import Avatar from "./avatar";

export const AvatarGroupItem = (props: any) => (
    <li>
        <Avatar {...props} />
    </li>
);

class AvatarGroup extends Component<any, any> {
    render() {
        const {children} = this.props;
        return <ul className="avatar-group">{children}</ul>;
    }
}

export default AvatarGroup;
