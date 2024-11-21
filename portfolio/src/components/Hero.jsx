import {  Float, useGLTF, useTexture } from '@react-three/drei'
import { useEffect, useRef } from 'react';
import screen from '../assets/screen.jpg'
import vertex from '../shaders/flag/vertex.glsl'
import fragment from '../shaders/flag/fragment.glsl'
import { useFrame } from '@react-three/fiber';
import geoFlag from '../assets/geo.avif'

const Hero = () => {
    // import eye model
    const computer = useGLTF('./computer.glb');
    const screenTexture =  useTexture(screen);

    // flag pole model
    const pole = useGLTF('./pole.glb');

    // georgian flag
    const geo = useTexture(geoFlag);



    useEffect(() => {
        computer.scene.traverse((child) => {
            if(child.isMesh) {
                if(child.material.name === "computer-screen") {
                    child.material.map = screenTexture;
                }
             
            }
        })
    }, [computer]);

    let flag = useRef();


    const uniforms = useRef({
        uAmplitude: { value: 0.15},
        uWaveLength: { value: 4},
        uTime: {value: 0},
        uTexture: { value: geo}
    });


    useFrame(() => {
        flag.current.material.uniforms.uTime.value += 0.05;

        fireflies.current.forEach((firefly, idx) => {
            const time = uniforms.current.uTime.value + idx;
            firefly.position.x += Math.sin(time * 0.3) * 0.01;
            firefly.position.y += Math.cos(time * 0.4) * 0.01;
            firefly.position.z += Math.sin(time * 0.2) * 0.01;
          });
    });

    const fireflies = useRef([]);

    const createFireflies = (count) => {
      const positions = [];
      for (let i = 0; i < count; i++) {
        positions.push([
          (Math.random() - 0.5) * 5, 
          Math.random() * 2 + 0.5, 
          (Math.random() - 0.5) * 5, 
        ]);
      }
      return positions;
    };
  
    const fireflyPositions = createFireflies(100);

  return (
     <>

      <primitive object={computer.scene} scale = {0.05}  castShadow position = {[1.6, 0, -0.8]} />
      <primitive object={pole.scene} scale = {0.3}  castShadow position = {[3.25, 0, -1]} />
      
      <mesh ref={flag}  position={[3.5, 1, -0.2]} scale={0.7}>
         <planeGeometry args={[1, 1, 64, 64]}/>
         <shaderMaterial vertexShader={vertex}
          fragmentShader={fragment}  
          wireframe = {false} 
          uniforms={uniforms.current}

         />
      </mesh>

      {fireflyPositions.map((pos, idx) => (
        <Float key={idx} speed={1} rotationIntensity={1.5} floatIntensity={2}>
          <mesh
            ref={(el) => (fireflies.current[idx] = el)}
            position={pos}
            scale={0.009}
          >
            <sphereGeometry />
            <meshStandardMaterial color="#FABC3F" emissive="#FFD700" emissiveIntensity={2} />
          </mesh>
          
        </Float>
      ))}
     </>
  )
}

export default Hero
