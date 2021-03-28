import React, {Component} from "react";
import {TextInputType} from "./Input";

class Selector extends Component<TextInputType, { selected: any; is_open: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = {
            selected: null,
            is_open: false,
        };
    }

    ref = React.createRef<any>();

    componentDidMount() {
        this.addWindowListener();
    }

    componentWillUnmount() {
        this.removeWindowListener();
    }

    addWindowListener() {
        window.addEventListener("click", this.handleClick.bind(this));
    }

    removeWindowListener() {
        window.removeEventListener("click", this.handleClick.bind(this));
    }

    handleClick(e) {
        const className = e.target?.className;
        if (!new RegExp(`(input)`).test(className)) {
            if (new RegExp(`(selector-item)`).test(className)) {
                setTimeout(() => {
                    this.close();
                }, 500);
            } else {
                this.close();
            }
        }
    }

    handleFocus() {
        this.open();
    }

    open() {
        this.setState({is_open: true});
    }

    close() {
        this.setState({is_open: false});
    }

    pick(arg) {
        if (arg) this.setState({selected: arg});
    }

    unpick() {
        this.setState({selected: null});
    }

    getName(item) {
        const {defaultValue: defv} = this.props;
        if (defv && !item) return defv?.name || defv?.title || defv?.username || defv?.email || defv?.id || defv;
        if (typeof item === "string") {
            return item;
        }
        return item?.name || item?.title || item?.username || item?.email || item?.id;
    }

    getSelectedKey(key: string) {
        if (key && this.state.selected) {
            if (typeof this.state.selected === "object") {
                return this.state.selected[key];
            }
        }
        return this.state.selected;
    }

    render() {
        const {Left, Right, register, options, name, map, placeholder, className} = this.props;
        const icon = Left || Right ? "has-icon" : "";
        const is_open = this.state.is_open ? "selector-open" : "selector-closed";
        return (
            <div ref={this.ref} className={`field selector ${is_open} ${className || ""}`}>
                <div className={`control ${icon}`}>
                    {Left && <div className="left">{<Left/>}</div>}
                    <input onFocus={this.handleFocus.bind(this)} defaultValue={this.getName(this.state.selected)}
                           placeholder={placeholder} className={`input ${className || ""}`} type="text"></input>
                    {typeof map === "object" ? (
                        map?.map((o, i) => <input key={i} name={`${name}.${o}`} defaultValue={this.getSelectedKey(o)}
                                                  ref={register} type="hidden"/>)
                    ) : (
                        <input ref={register} name={map ? `${name}.${map}` : name}
                               defaultValue={this.getSelectedKey(map)} type="hidden"/>
                    )}
                    {Right && <div className="right">{<Right/>}</div>}
                </div>
                {this.state.is_open && (
                    <div className={`selector-items`}>
                        <ul>
                            {options?.map((item, i) => (
                                <li key={i}>
                                    <a className="selector-item" onClick={() => this.pick(item)}>
                                        {this.getName(item)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default Selector;
