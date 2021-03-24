import React, { Component } from 'react'
import "./product.css"

export default class Product extends Component {
    render() {
        return (
            <div>
                <div className="videoContainer">
                    <div className="video-responsive">
                        <iframe width="420" height="315" src="https://www.youtube.com/embed/fdtqqyeKRJk" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
                <div>
                    <div>
                        human centric design
                    </div>
                    <div>
                        no music theory needed
                    </div>
                    <div>
                        just jam
                    </div>
                </div>
                <div>
                    <img />
                    <img />
                </div>
            </div>
        )
    }
}
