import React, {Component} from "react";

export type TextInputType = {
    defaultValue?: any;
    Left?: any;
    Right?: any;
    map?: any;
    options?: any;
    children?: any;
    register?: any;
    name?: any;
    placeholder?: string;
    type?: string;
    className?: string;
};

class Input extends Component<TextInputType, any> {
    render() {
        const {options, Left, Right, children, className} = this.props;
        const icon = Left || Right ? "has-icon" : "";
        return (
            <div className={`field ${className || ""}`}>
                <div className={`control ${icon}`}>
                    {Left && <div className="left">{<Left/>}</div>}
                    {children}
                    {Right && <div className="right">{<Right/>}</div>}
                </div>
            </div>
        );
    }
}

export default Input;
