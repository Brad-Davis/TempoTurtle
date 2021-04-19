import React, { Component } from 'react';

import './PhotoBox.css';

type PhotoBoxProps = {
    theme?: String
    src: string
};

type PhotoBoxState = {};

export default class PhotoBox extends Component<PhotoBoxProps, PhotoBoxState>{
    
    zoom_out(event: React.SyntheticEvent){
        event.preventDefault();
        console.log("zoomin out");
    }
    
    render(){
        return (
            <div className='photobox'>
                <img
                    src={this.props.src}
                />
            </div>
        );
    }
}