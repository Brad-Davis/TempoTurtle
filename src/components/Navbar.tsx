import React, { Component } from 'react'
import './navbar.css';
import Logo from "./Logo";
import Settings from './Settings';

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
                            <li>
                                <div className="settings">
                                    <Settings />
                                    
                                </div>
                            </li>
                        </ul>
                        

                        
                       
                    </div>
                    </div>
            </div>
        )
    }
}
