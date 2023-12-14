import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Mesh } from "three";

const Car = () => {

    const meshRef = useRef<Mesh>(null!)

    const gltf = useLoader(GLTFLoader, './lowpolyhiace.glb')
    console.log('The car')

    useFrame((state, delta) => (meshRef.current.rotation.y += delta))

    return (
        <primitive ref={meshRef} object={gltf.scene} scale={1} />
    )

}

export default Car;