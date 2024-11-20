import { OrbitControls, useGLTF } from '@react-three/drei'
import { useEffect } from 'react';
import * as THREE from 'three'

const Hero = () => {
    // import eye model
    const computer = useGLTF('./computer.glb');
   

  return (
     <>
     <OrbitControls makeDefault />
      <primitive object={computer.scene} scale = {0.05} />
     </>
  )
}

export default Hero
