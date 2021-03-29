import React, {Component} from 'react';
import {MdEdit} from 'react-icons/md';
import {FaSlackHash} from "react-icons/fa";
import {BiServer} from "react-icons/bi";
import {FiUserPlus} from "react-icons/fi";
import Link from "next/link";

class UserMenu extends Component {
    render() {
        return (
            <nav className="nav nav-right wire-l">
                <ul className="top">
                    <li>
                        <Link href="/master/project/create">
                            <a className="is-icon"><MdEdit/></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/master/category/create"><a className="is-icon"><FaSlackHash/></a></Link>
                    </li>
                    <li>
                        <Link href="/master/host/create">
                            <a className="is-icon"><BiServer/></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/master/user/create">
                            <a className="is-icon"><FiUserPlus/></a>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default UserMenu;