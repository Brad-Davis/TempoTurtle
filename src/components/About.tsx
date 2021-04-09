import React, { Component } from 'react'
import './about.css';

type AboutProps = {
    theme: String
};

type AboutState = {};

export default class About extends Component<AboutProps, AboutState> {
    render() {
        return (
            <div id="about">
                <h1 style={{marginTop: '2em', marginBottom: '1em', fontSize: "4rem"}} className="title textCenter">about us</h1>
                <div className="row container" style={{textAlign: "center"}}>
                    <div className="col-lg-6">
                        <img className="circleImg" src="./bradleycd.jpg"/>
                        <h2 style={{fontSize: "3.5rem"}} className="title"><a style={{color: this.props.theme == 'light' ? 'black' : 'white'}} href="https://bradcampdavis.com/">bradleycd</a></h2>
                        <h3>all around jamma and computa programma</h3>
                    </div>
                    <div className="col-lg-6">
                        <img className="circleImg" src="./v3ritas.png"/>
                        <h2 style={{fontSize: "3.5rem"}} className="title">v3ritas</h2>
                        <h3>music nerd who can't music</h3>
                    </div>
                </div>
            </div>
        )
    }
}
