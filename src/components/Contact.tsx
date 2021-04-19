import React, { Component } from 'react'
import ContactBar from "./ContactBar";

type ContactProps = {
    theme: String
};

type ContactState = {};

export default class Contact extends Component<ContactProps, ContactState> {
    render() {
        return (
            <div id="contact">
                <h1 style={{ marginTop: '2em', marginBottom: "0.5em", }} className="title textCenter">contact us</h1>
                <div>
                    <ContactBar theme={this.props.theme} />
                </div>
            </div>
        )
    }
}
