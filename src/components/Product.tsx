import React, { Component } from 'react'
import "./product.css"

export default class Product extends Component {
    render() {
        return (
            <div id="product">
                <div className="videoContainer">
                    <div className="video-responsive">
                        <iframe width="420" height="315" src="https://www.youtube.com/embed/fdtqqyeKRJk" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
                <div className="row container">
                    <div className="col threeColTitle">
                        human <br/> centric <br/> design
                    </div>
                    <div className="col threeColTitle">
                        no music <br/> theory <br/> needed
                    </div>
                    <div className="col threeColTitle">
                        jam <br/> away <br/> anywhere
                    </div>
                </div>
                <div style={{paddingTop: '3em'}} className="container">
                    <div style={{alignItems: 'center', textAlign: 'center'}} className="row">
                        <div className="col-6"><img className="photoimg" src="./bradpad_photos/2.jpg"/></div>
                        <div className="col-6 twoColTitle">A MIDI controller<br />for the masses</div>
                    </div>
                    <div style={{alignItems: 'center', textAlign: 'center'}} className="row">
                        <div className="col-6 twoColTitle">Customize your<br />look and feel</div>
                        <div className="col-6"><img className="photoimg" src="./bradpad_photos/1.jpg"/></div>
                    </div>
                </div>
            </div>
        )
    }
}
