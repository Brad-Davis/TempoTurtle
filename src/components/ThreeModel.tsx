import React, { Component, useState, useMemo, useRef } from "react"
import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

type ThreeModelState = {
    scene: THREE.Scene,
}
type ThreeModelProps = {
    background: String,
}

//all the errors in this file are due to the lack of typing info :)
class ThreeModel extends Component<ThreeModelProps, ThreeModelState> {
    private mount: React.RefObject<HTMLDivElement>

    //constructor needs to explicitly take props and pass to super
    //otherwise you can't access props thorought the component
    //idk why lmao react. -w

    constructor(props: ThreeModelProps) {
        super(props);
        this.mount = React.createRef();
        ThreeModelState: this.state = {
            scene: new THREE.Scene(),
        };
    }

    //load geometry once (is heavy) > memo it
    //rerender scene as needed
    componentDidUpdate(prevProps) {
        if(!prevProps.background || prevProps.background !== this.props.background){
            //darkmode
            if(this.props.background === "dark"){
                this.state.scene.background = new THREE.Color('black');
            }
            else{ //light mode
                this.state.scene.background = new THREE.Color('white');
            }
        }
    }

    

    componentDidMount() {
        let scene = this.state.scene;
        //we need to do this, because componentDidUpdate is only called on update and not on first render
        if(this.props.background === "dark"){
            scene.background = new THREE.Color('black');
        }
        else{
            scene.background = new THREE.Color('white');
        }

        const loader = new GLTFLoader();
        let camera = new THREE.PerspectiveCamera(75, this.mount.current.offsetWidth / this.mount.current.offsetHeight, 0.1, 1000)
        let renderer = new THREE.WebGLRenderer();
        const controls = new OrbitControls( camera, renderer.domElement );
        renderer.setSize(this.mount.current.offsetWidth, this.mount.current.offsetHeight)
        //needs to be an arrow function because this ref
        let onWindowResize =  () => {

            camera.aspect = this.mount.current.offsetWidth / this.mount.current.offsetHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(this.mount.current.offsetWidth, this.mount.current.offsetHeight);

        }

        this.mount.current.appendChild(renderer.domElement)
        const skyColor = 0x5CDB95;  // light blue
        const groundColor = 0x000000;  // brownish orange
        const intensity = 2;
        const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
        scene.add(light);

        loader.load('/bradpad_welded.gltf', function (gltf) {
            const box = new THREE.Box3().setFromObject(gltf.scene);
            //center does not officially exist
            box.getCenter(gltf.scene.position);
            gltf.scene.position.multiplyScalar(- 1);
            const center = box.getCenter(new THREE.Vector3());
            var pivot = new THREE.Group();

            scene.add(pivot);
            pivot.add(gltf.scene);
            console.log(gltf);
            camera.position.z = 200
            // gltf.scene.position.x += (gltf.scene.position.x - center.x);
            // gltf.scene.position.y += (gltf.scene.position.y - center.y);
            // gltf.scene.position.z += (gltf.scene.position.z - center.z);
            let animate = function () {
                requestAnimationFrame(animate)
                // gltf.scene.rotation.x += 0.01
                // gltf.scene.rotation.y += 0.01
                pivot.rotation.y += 0.01;
                pivot.rotation.x += 0.01;
                controls.update();

                renderer.render(scene, camera)
            }
            animate()
            window.addEventListener('resize', onWindowResize, false);

        }, undefined, function (error) {

            console.error(error);

        });
        // const geometry = new THREE.BoxGeometry();
        // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
        // const cube = new THREE.Mesh(geometry, material)
        // scene.add(cube)
    }
    render() {
        return (
            <div ref={this.mount} style={{ cursor: 'pointer', width: `100%`, height: `60vh` }}></div>
        );
    }

}

export default ThreeModel;