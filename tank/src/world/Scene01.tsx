import React from "react";
import { Canvas } from "@react-three/fiber";
import Car from "./Car";



const Scene = () => {
    console.log('banana')



    return (
        <div>
           <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Car />
           </Canvas>
        </div>
    )
}

export default Scene;