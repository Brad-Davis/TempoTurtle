import React, { Component } from 'react'
import ContactBar from "./ContactBar";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h1 style={{marginTop: '2em', marginBottom: "0.5em", fontSize: "4rem"}} className="title textCenter">contact us</h1>
                <div>
                    <ContactBar />
                </div>
            </div>
        )
    }
}
