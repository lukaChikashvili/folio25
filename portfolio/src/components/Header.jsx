import React, { useState } from 'react'
import cup from '../assets/cup.png'
import {  Facebook, Github, Linkedin, MenuIcon, Moon, Play, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Contact from './Contact'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className='absolute  w-full bg-transparent px-12 py-6 text-white flex items-center justify-between z-10 text-md'> 
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
        className=' items-center gap-6 list-none hidden md:flex  '>
        <span className='text-[#FABC3F] cursor-pointer'><Moon /></span>
         <motion.li initial = {{ opacity: 0, translateY: 15}}
    whileInView={{opacity: 1, translateY: 0 }} 
    transition={{duration: 0.5, delay: 0.7}}
         ><a href = "#about">About</a></motion.li>

<motion.li initial = {{ opacity: 0, translateY: 15}}
    whileInView={{opacity: 1, translateY: 0 }} 
    transition={{duration: 0.5, delay: 0.7}}
         ><a href = "#skills">Skills</a></motion.li>


         <motion.li initial = {{ opacity: 0, translateY: 15}}
    whileInView={{opacity: 1, translateY: 0 }} 
    transition={{duration: 0.5, delay: 0.9}}
         ><a href = "#projects">Projects</a></motion.li>
          <motion.li initial = {{ opacity: 0, translateY: 15}}
    whileInView={{opacity: 1, translateY: 0 }} 
    transition={{duration: 0.5, delay: 1}}
         ><a href = "#footer">Contact</a></motion.li>
       </motion.nav>

       <div className='md:hidden fixed top-8 right-6 flex items-center z-10'>
        <button onClick={toggleMenu} className='text-white'>
          {isMenuOpen ? <X /> : <MenuIcon /> } 
        </button>
      </div>

      <div  className={`md:hidden fixed top-0 left-0 w-full bg-gray-900  text-white py-36 h-screen transition-all list-none flex flex-col gap-4 justify-center items-center   ${isMenuOpen ? 'block' : 'hidden'}`}>
      <li className='px-6 py-2 text-4xl duration-500 ease-in text-gray-500 hover:text-white hover:-translate-x-5 w-56' onClick={() => setIsMenuOpen(false)}><a href="#home" className='flex items-center gap-4'><Play className='text-[#FABC3F]' />Home</a></li>
        <li className='px-6 py-2  text-4xl duration-500 ease-in text-gray-500 hover:text-white hover:-translate-x-5 w-56' onClick={() => setIsMenuOpen(false)}><a href="#about" className='flex items-center gap-4'><Play className='text-[#FABC3F]' />About</a></li>
        <li className='px-6 py-2 text-4xl duration-500 ease-in text-gray-500 hover:text-white hover:-translate-x-5 w-56' onClick={() => setIsMenuOpen(false)}><a href="#skills" className='flex items-center gap-4'><Play className='text-[#FABC3F]' />Skills</a></li>
        <li className='px-6 py-2 text-4xl duration-500 ease-in text-gray-500 hover:text-white hover:-translate-x-5 ' onClick={() => setIsMenuOpen(false)}><a href="#projects" className='flex items-center gap-2'><Play className='text-[#FABC3F] ' />Projects</a></li>

        <div className='fixed right-24 bottom-24  flex flex-row md:hidden gap-6 p-2 rounded-md'>
        <Linkedin size={40}
          className=' duration-300 ease-in cursor-pointer text-gray-600 hover:text-[#FABC3F] hover:-translate-x-[1.5px]'
          onClick={() => showLink('https://www.linkedin.com/in/luka-chikashvili/')}
        />
        <Github size={40}
          className='duration-300 ease-in cursor-pointer text-gray-600 hover:text-[#FABC3F] hover:-translate-x-[1.5px]'
          onClick={() => showLink('https://github.com/lukaChikashvili')}
        />
        <Facebook size={40}
          className='duration-300 ease-in cursor-pointer text-gray-600 hover:text-[#FABC3F] hover:-translate-x-[1.5px]'
          onClick={() => showLink('https://www.facebook.com/profile.php?id=61565951550341')}
        />
      </div>

    
      </div>

     

      
    
    </div>
  )
}

export default Header
