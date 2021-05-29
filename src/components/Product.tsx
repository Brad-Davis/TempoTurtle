import React, { Component } from 'react'
import "./product.css"

export default class Product extends Component {
    render() {
        return (
            <div id="product">
                <div className="videoContainer">
                    <div className="video-responsive">
                        <iframe src="https://www.youtube.com/embed/v3fvVJyQHCg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                    </div>
                </div>
                <div className="row container">
                    <div className="col threeColTitle">
                        human <br /> centric <br /> design
                    </div>
                    <div className="col threeColTitle">
                        no music <br /> theory <br /> needed
                    </div>
                    <div className="col threeColTitle">
                        inovate <br /> jam <br /> repeat
                    </div>
                </div>
                <div style={{ paddingTop: '3em' }} className="container">
                    <div style={{ alignItems: 'center', textAlign: 'center' }} className="row">
                        <div className="col-6"><img className="photoimg" src="./2.jpg" /></div>
                        <div className="col-6 twoColTitle">A MIDI controller<br />for the masses</div>
                    </div>
                    <div style={{ alignItems: 'center', textAlign: 'center' }} className="row">
                        <div className="col-6 twoColTitle">Customize your<br />look and feel</div>
                        <div className="col-6"><img className="photoimg" src="./1.jpg" /></div>
                    </div>
                </div>
                <div
                    style={{
                        display:'flex',
                        flexDirection:'column',
                        paddingTop: '6em'
                    }}
                >
                    <div
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            width: '100%',
                            fontSize: '2.5rem'
                        }}
                    >
                        Buy a &nbsp; <span style={{fontFamily:'Fascinate, cursive'}}> bradpad </span>
                    </div>
                    <div
                        style={{
                            display:'flex',
                            justifyContent:'center',
                            width: '100%'
                        }}
                    >
                    <a href="https://1upkeyboards.com/shop/keyboard-kits/macro-pads/bradpad-macropad-by-tempo-turtle/"><img src='1up.svg'/></a>
                    </div>
                </div>
            </div>
        )
    }
}
