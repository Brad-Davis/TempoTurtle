import React, { Component, useState, useMemo, useRef } from "react"
import ThreeModel from './ThreeModel';



function HomeScreen() {
  return (
    <div>
      <div>
        <ThreeModel />
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