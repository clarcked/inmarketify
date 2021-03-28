import React, {Component} from "react";
import {MdClose} from "react-icons/md";

class Modal extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const {is_open, children, close, className} = this.props;
        let state = is_open ? "modal-open" : "modal-hide";
        return (
            <div className={`modal ${state} `}>
                <div className={`modal-container grid-r-a-1 ${className || "w-50v"}`}>
                    <div className="modal-actions">
                        <div className="modal-action">
                            <button type="button" className="btn btn-icon btn-sm outline" onClick={close}>
                                <MdClose/>
                            </button>
                        </div>
                    </div>
                    <section className={`scroll`}>{children}</section>
                </div>
            </div>
        );
    }
}

export default Modal;
