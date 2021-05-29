import React, { Component, useState, useMemo, useRef } from "react"
import ThreeModel from './ThreeModel';



function HomeScreen(props) {
  return (
    <div id="home">
      <div
        style={{
          display:'flex',
          justifyContent:'center',
          width: '100%'
        }}
      >
        <div className='threewrapper'
          style={{
            maxWidth:'1000px',
            width:'100%'
          }}
        >
          <ThreeModel background={props.background} />
        </div>
      </div>
      <div>
        <h1 className="title textCenter">bradpad</h1>
        <h3 className="textCenter">
          Our first product as tempo turtle!
            <br />
             Learn more about how our musical
            <br />
            macropad can
          </h3>
      </div>
    </div>

  )

}



export default HomeScreen;