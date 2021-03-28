import React, {Component} from "react";
import Input, {TextInputType} from "./Input";

class TextArea extends Component<TextInputType, any> {
    render() {
        const {defaultValue, register, name, placeholder, className} = this.props;
        return (
            <Input>
                <textarea defaultValue={defaultValue} ref={register} placeholder={placeholder}
                          className={`input ${className || ""}`} name={name}></textarea>
            </Input>
        );
    }
}

export default TextArea;
