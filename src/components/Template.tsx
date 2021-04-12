import React, { Component } from 'react';

import './Template.css';

type TemplateProps = {
    theme: String
};

type TemplateState = {};

export default class Template extends Component<TemplateProps, TemplateState>{
    render(){
        return (
            <div></div>
        );
    }
}