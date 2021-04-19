import React, { Component } from 'react'
import './navbar.css';
import Logo from "./Logo";
import Settings from './Settings';
import scrollTo from 'gatsby-plugin-smoothscroll';

type NavbarProps = {
    themeToggler: Function,
    theme: String,
};
type NavbarState = {};

export default class Navbar extends Component<NavbarProps, NavbarState> {
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="logo"><Logo theme={this.props.theme}/></div>
                    <div className="navItems">
                        <ul>
                            <li><a style={{color: this.props.theme == 'light' ? 'black' : 'white'}} href="javascript:void(0);" onClick={() => scrollTo("#product")}>product</a></li>
                            <li><a style={{color: this.props.theme == 'light' ? 'black' : 'white'}} href="javascript:void(0);" onClick={() => scrollTo("#about")}>about</a></li>
                            <li><a style={{color: this.props.theme == 'light' ? 'black' : 'white'}} href="javascript:void(0);" onClick={() => scrollTo("#contact")}>contact</a></li>
                            <li>
                                <div className="settings">
                                    <Settings theme={this.props.theme} themeToggler={this.props.themeToggler}/>
                                </div>
                            </li>
                        </ul>
                        

                        
                       
                    </div>
                    </div>
            </div>
        )
    }
}
