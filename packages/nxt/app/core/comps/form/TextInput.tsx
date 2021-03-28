import React, {Component} from "react";
import Input, {TextInputType} from "./Input";

class TextInput extends Component<TextInputType, any> {
    render() {
        const {defaultValue, register, name, placeholder, type, className} = this.props;
        return (
            <Input {...this.props}>
                <input defaultValue={defaultValue} ref={register} placeholder={placeholder}
                       className={`input ${className || ""}`} type={type || "text"} name={name}></input>
            </Input>
        );
    }
}

export default TextInput;
