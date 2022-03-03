import React, { Component } from 'react'
import './navbar.css';
import Logo from "./Logo";
import { Link } from "gatsby"

type NavbarProps = {
    themeToggler: Function,
    theme: String,
};
type NavbarState = {};

export default class BackNavbar extends Component<NavbarProps, NavbarState> {
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="logo"><Logo theme={this.props.theme} /></div>
                    <div className="navItems" style={{ justifyContent: 'center' }}>
                        <ul>
                            <li>
                                <Link to="/">Go Back Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
