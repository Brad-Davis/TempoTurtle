import React, { Component } from 'react'
import './switch.css';

function Switch(props) {
    return (
        <label className="switch" >
            <input type="checkbox" onClick={props.handleClick} />
            <span className="slider round"></span>
        </label>
    )
}

export default Switch;