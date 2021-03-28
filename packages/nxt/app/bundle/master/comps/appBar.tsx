import React, {Component} from 'react';
import {IoMdHelpBuoy} from "react-icons/io";
import {AiOutlineLogout} from "react-icons/ai";

class AppBar extends Component {
    render() {
        return (
            <nav className="nav nav-top wire-b">
                <ul className="left">
                    <li><a href="#">InMarketify</a></li>
                </ul>
                <ul className="right">
                    <li><a href="#" className="is-icon"><IoMdHelpBuoy/></a></li>
                    <li><a href="#" className="is-icon"><AiOutlineLogout/></a></li>
                </ul>
            </nav>
        );
    }
}

export default AppBar;