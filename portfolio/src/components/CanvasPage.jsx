import { Canvas } from '@react-three/fiber'
import Hero from './Hero'
import Lights from './Lights'

const CanvasPage = () => {
  return (
     <>
       <Canvas camera={ { fov: 75, near: 0.2, far: 1000, position: [3, 1.5, 3.5] } }>
        <Lights />
         <Hero />
       </Canvas>
     </>
  )
}

export default CanvasPage
