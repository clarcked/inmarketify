import React, {Component} from "react";

class Avatar extends Component<any, any> {
    render() {
        const {src} = this.props;
        return (
            <figure className="avatar avatar-lg">
                <img src={src || `https://picsum.photos/300/300`} alt="avatar"/>
            </figure>
        );
    }
}

export default Avatar;
