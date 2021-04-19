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
    loaded: boolean;
};

export default class Photo extends Component<PhotoProps, PhotoState>{

    constructor(props: PhotoProps){
        super(props);
        PhotoState: this.state = {
            zoomed: false,
            loaded: false
        };
    }

    zoom(event: React.SyntheticEvent){
        event.preventDefault();
        this.setState({zoomed: !this.state.zoomed, loaded: this.state.loaded});
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

    imgloader(event: React.SyntheticEvent){
        event.preventDefault();
        this.setState({zoomed: this.state.zoomed, loaded: true})
    }

    render(){
        return (
            <div 
                className="photo" 
                //onClick={this.zoom.bind(this)}
                style={this.props.style}
            >
                {this.state.loaded ? <React.Fragment/> : <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
                <img
                    src={this.props.thb ? this.props.thb : this.props.src}
                    className = {this.state.loaded ? 'photoimg' : 'photoimg loading' } 
                    style = {this.state.loaded ? {display:'block'} : {display:'none'}}
                    onLoad={this.imgloader.bind(this)}
                />
            </div>
        );
    }
}