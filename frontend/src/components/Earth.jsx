import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SphereGeometry } from "three";

function Earth() {
    const speed=1
    const earthRef=useRef(null)
  useFrame(({clock}) => {
    const t = clock.getElapsedTime() * speed; // Speed factor
    // Update position in a circular orbit
    earthRef.current.position.x = 20 * Math.sin(t);
    earthRef.current.position.z = 20 * Math.cos(t);
    console.log(earthRef.current)
  });

  return (
    <mesh position={[300,0,300]} ref={earthRef}>
      <sphereGeometry args={[4, 124, 124]} /> {/* Increased radius to 16 */}
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

export default Earth;
