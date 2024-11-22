import React, { useState } from 'react'
import cup from '../assets/cup.png'
import { MenuIcon, Moon } from 'lucide-react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className='absolute w-full bg-transparent px-12 py-6 text-white flex items-center justify-between z-10 text-md'> 
       <div className='flex items-center gap-4'>
          <motion.img initial = {{ opacity: 0, translateY: 15}}
    whileInView={{opacity: 1, translateY: 0 }} 
    transition={{duration: 0.5, delay: 0.7}} src={cup} className='w-12' />
          <motion.h1 initial = {{ opacity: 0, translateY: 15}}
    whileInView={{opacity: 1, translateY: 0 }} 
    transition={{duration: 0.5, delay: 0.7}}>L.C</motion.h1>
       </div>

       <motion.nav initial = {{ opacity: 0, translateY: 15}}
    whileInView={{opacity: 1, translateY: 0 }} 
    transition={{duration: 0.5, delay: 1}}
        className=' items-center gap-6 list-none hidden md:flex'>
        <span className='text-[#FABC3F] cursor-pointer'><Moon /></span>
         <motion.li initial = {{ opacity: 0, translateY: 15}}
    whileInView={{opacity: 1, translateY: 0 }} 
    transition={{duration: 0.5, delay: 0.7}}
         ><a href = "#">About</a></motion.li>
         <motion.li initial = {{ opacity: 0, translateY: 15}}
    whileInView={{opacity: 1, translateY: 0 }} 
    transition={{duration: 0.5, delay: 0.9}}
         ><a href = "#">Projects</a></motion.li>
          <motion.li initial = {{ opacity: 0, translateY: 15}}
    whileInView={{opacity: 1, translateY: 0 }} 
    transition={{duration: 0.5, delay: 1}}
         ><a href = "#">Contact</a></motion.li>
       </motion.nav>

       <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu} className='text-white'>
           <MenuIcon />
        </button>
      </div>

      <div className={`md:hidden absolute top-20 left-0 w-full bg-black text-white py-4 transition-all ${isMenuOpen ? 'block' : 'hidden'}`}>
        <li className='px-6 py-2'><a href="#">About</a></li>
        <li className='px-6 py-2'><a href="#">Projects</a></li>
        <li className='px-6 py-2'><a href="#">Contact</a></li>
      </div>
    </div>
  )
}

export default Header
