import React, {Component} from 'react';
import {IoMdPerson, IoMdSettings} from "react-icons/io";
import {AiOutlineDashboard} from "react-icons/ai";
import {IoFolderOpenSharp} from "react-icons/io5";


class MainMenu extends Component {
    render() {
        return (
            <nav className="nav nav-left wire-r">
                <ul className="top">
                    <li><a href="/master" className="is-icon"><AiOutlineDashboard/></a></li>
                </ul>
                <ul className="middle">
                    <li><a href="/master" className="is-icon"><IoFolderOpenSharp/></a></li>
                </ul>
                <ul className="bottom">
                    <li><a href="/master" className="is-icon"><IoMdPerson/></a></li>
                    <li><a href="/master" className="is-icon"><IoMdSettings/></a></li>
                </ul>
            </nav>
        );
    }
}

export default MainMenu;