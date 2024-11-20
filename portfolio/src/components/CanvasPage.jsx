import { Canvas } from '@react-three/fiber'
import Hero from './Hero'

const CanvasPage = () => {
  return (
     <>
       <Canvas>
         <Hero />
       </Canvas>
     </>
  )
}

export default CanvasPage
