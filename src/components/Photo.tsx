import React, { Component } from 'react';

import './Photo.css';

type PhotoProps = {
    theme?: string
    thb?: string
    src: string
};

type PhotoState = {
    zoomed: boolean,
};

export default class Photo extends Component<PhotoProps, PhotoProps>{

    constructor(props: PhotoProps){
        super(props);
        this.state = {zoomed: false};
    }

    zoom(event: React.SyntheticEvent){
        event.preventDefault();

    }

    render(){
        return (
            <div className="photo" onClick={this.zoom}>
                <img src={this.props.thb ? this.props.thb : this.props.src}/>
            </div>
        );
    }
}