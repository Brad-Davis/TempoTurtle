import React, { Component, useState, useRef } from 'react';
import CSS from 'csstype';

import './Photo.css';
import PhotoBox from './PhotoBox';

type PhotoProps = {
    style?: CSS.Properties
    theme?: string
    thb?: string
    src: string
};

type PhotoState = {
    zoomed: boolean;
};

export default class Photo extends Component<PhotoProps, PhotoState>{

    constructor(props: PhotoProps){
        super(props);
        PhotoState: this.state = {
            zoomed: false,
        };
    }

    zoom(event: React.SyntheticEvent){
        event.preventDefault();
        this.setState({zoomed: !this.state.zoomed});
        console.log("zoomies");
    }

    box(){
        if(this.state.zoomed){
            return (
                <PhotoBox
                    src={this.props.src}
                />
            )
        }
        return;
    }

    render(){
        return (
            <div 
                className="photo" 
                //onClick={this.zoom.bind(this)} style={this.props.style}
            >
                <img src={this.props.thb ? this.props.thb : this.props.src} className='photoimg'/>
                //{this.box()}
            </div>
        );
    }
}