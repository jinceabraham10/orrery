import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Stars } from "@react-three/drei";
import Earth from "./Earth";
import Styles from "./Planet.module.css";
import Sun from "./Sun";

function Planets() {
  return (
    <div className="h-screen w-full flex flex-col justify-center bg-slate-600">
      <Canvas
      
        camera={{ position: [900, 0, 0], fov: 100 }} >
        <ambientLight intensity={0.8} />
        <pointLight position={[1, 1, 1]} />
        <Earth />
        <Sun/>
        <Stars radius={100} depth={50} count={5000} factor={4}/>
        <OrbitControls />
        
      </Canvas>
    </div>
  );
}

export default Planets;
