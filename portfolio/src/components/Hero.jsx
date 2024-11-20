import { OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { useEffect } from 'react';
import * as THREE from 'three'
import screen from '../assets/screen.jpg'

const Hero = () => {
    // import eye model
    const computer = useGLTF('./computer.glb');
    const screenTexture =  useTexture(screen);

    useEffect(() => {
        computer.scene.traverse((child) => {
            if(child.isMesh) {
                if(child.material.name === "computer-screen") {
                    child.material.map = screenTexture;
                }
             
            }
        })
    }, [computer])
   

  return (
     <>
     
      <primitive object={computer.scene} scale = {0.05}  castShadow position = {[1.6, 0, -0.8]} />
     </>
  )
}

export default Hero
