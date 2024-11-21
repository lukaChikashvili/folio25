import { Canvas } from '@react-three/fiber'
import Hero from './Hero'
import Lights from './Lights'
import { useEffect, useState } from 'react';

const CanvasPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
   
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
      
    };

    
    
    window.addEventListener('resize', handleResize);

    
    handleResize();


    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
     <>
       <Canvas className='canvas' camera={ { fov: 75, near: 0.2, far: 1000, position: [3, 1.5, 3.5] } }>
        <Lights />
     
         {!isMobile &&<Hero />}
       </Canvas>
     </>
  )
}

export default CanvasPage
