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
                <div className="row container">
                    <div className="col title threeColTitle">
                        human <br/> centric <br/> design
                    </div>
                    <div className="col title threeColTitle">
                        no music <br/> theory <br/> needed
                    </div>
                    <div className="col title threeColTitle">
                        jam <br/> away <br/> anywhere
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
