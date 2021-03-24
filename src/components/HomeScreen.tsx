import React, { Component, useState } from "react"
import * as THREE from "three"
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas, extend, useThree, useRender } from "react-three-fiber"


function HomeScreen() {
  const isBrowser = typeof window !== "undefined"
  return (
    <div>
      <div>
        <Canvas
          camera={{ position: [0, 0, 5] }}
          onCreated={({ gl }) => {
            gl.shadowMap.enabled = true
            gl.shadowMap.type = THREE.PCFSoftShadowMap
          }}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[15, 20, 5]} penumbra={1} castShadow />
          <fog attach="fog" args={["black", 10, 25]} />
        </Canvas>
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