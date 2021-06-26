import React, { Component, useState, useMemo, useRef } from "react"
import ThreeModel from './ThreeModel';



function HomeScreen(props) {
  return (
    <div id="home">
      <div>
        <ThreeModel background={props.background} />
      </div>
      <div>
        <h1 className="title textCenter">bradpad</h1>
        <h3 className="textCenter">
          Our first product as tempo turtle!
            <br />
             Learn more about what our musical
            <br />
            macropad has to offer.
          </h3>
      </div>
    </div>

  )

}



export default HomeScreen;