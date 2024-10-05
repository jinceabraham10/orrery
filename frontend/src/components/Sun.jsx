import React from 'react'
import { SphereGeometry } from 'three'


function Sun() {
  return (
      <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[15, 64, 64]} /> {/* Increased radius to 16 */}
      <meshStandardMaterial color="yellow" />

      </mesh>
  )
}

export default Sun
