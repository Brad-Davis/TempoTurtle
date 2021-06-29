import React, { Component } from 'react'
import OneUp from './OneUp';
import "./DownloadLink.css"

type DownloadProps = {
    theme: String
};

type DownloadState = {};

export default class DownloadLinks extends Component<DownloadProps, DownloadState> {
    render() {
        return (
            <div id="download">
                <a href="https://tempoturtle.com/firmware/tempo_turtle_bradpad_default.hex">Default Firmware</a>
                <a href="https://tempoturtle.com/firmware/tempo_turtle_bradpad_midi_demo.hex ">MIDI Demo </a>
                <a href="https://tempoturtle.com/firmware/tempo_turtle_bradpad_4brad.hex">The MIDI firmware Brad uses</a>
                <a href="https://tempoturtle.com/firmware/tempo_turtle_bradpad_via.hex">VIA firmware</a>
                <a href="https://github.com/qmk/qmk_firmware/tree/master/keyboards/tempo_turtle">Source Code on Github</a>
            </div>
        )
    }
}