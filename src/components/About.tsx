import React, { Component } from 'react'
import './about.css';

export default class About extends Component {
    render() {
        return (
            <div id="about">
                <h1 style={{marginTop: '2em', marginBottom: '1em', fontSize: "4rem"}} className="title textCenter">about us</h1>
                <div className="row container" style={{textAlign: "center"}}>
                    <div className="col-lg-6">
                        <img className="circleImg" src="./bradleycd.jpg"/>
                        <h2 style={{fontSize: "3.5rem"}} className="title">bradleycd</h2>
                        <h3>all around jamma and computa programma</h3>
                    </div>
                    <div className="col-lg-6">
                        <img className="circleImg" src="./wills.png"/>
                        <h2 style={{fontSize: "3.5rem"}} className="title">v3ritas</h2>
                        <h3>music nerd who can't music</h3>
                    </div>
                </div>
            </div>
        )
    }
}
