import React, { Component, useState, useMemo, useRef } from "react"
import * as THREE from "three"
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

class ThreeModel extends Component {
    componentDidMount() {
        
        let scene = new THREE.Scene()
        scene.background = new THREE.Color('white');
        const loader = new GLTFLoader();
        let camera = new THREE.PerspectiveCamera(75, this.mount.offsetWidth / this.mount.offsetHeight, 0.1, 1000)
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
        this.mount.appendChild(renderer.domElement)

        loader.load('/bradpad.gltf', function (gltf) {

            scene.add(gltf.scene);
            const box = new THREE.Box3().setFromObject(gltf.scene);
            box.center(gltf.scene.position);
            gltf.scene.position.multiplyScalar( - 1 );
            const center = box.getCenter(new THREE.Vector3());
            var pivot = new THREE.Group();
            scene.add( pivot );
            pivot.add( gltf.scene );
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
                renderer.render(scene, camera)
            }
            animate()

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
            <div ref={ref => (this.mount = ref)} style={{ width: `100%`, height: `60vh` }}></div>
        );
    }

}

export default ThreeModel;

