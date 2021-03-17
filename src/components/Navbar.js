import React, { Component } from 'react'
import Logo from "./Logo";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="logo"><Logo /></div>
                    <div className="navItems">
                        <ul>
                        <li>home</li>
                        <li>product</li>
                        <li>about us</li>
                        <li>contact</li>
                        
                        </ul>
                        <div className="settings">
                        <div>Settings Icon</div>
                        <div className="hiddenMenu">

                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}
