import React, { useState } from 'react'
import cup from '../assets/cup.png'
import {  Facebook, Github, Linkedin, MenuIcon, Moon } from 'lucide-react'
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
         ><a href = "#contact">Contact</a></motion.li>
       </motion.nav>

       <div className='md:hidden fixed top-8 right-6 flex items-center z-10'>
        <button onClick={toggleMenu} className='text-white'>
           <MenuIcon />
        </button>
      </div>

      <div className={`md:hidden fixed top-20 left-0 w-full bg-black text-white py-4 transition-all ${isMenuOpen ? 'block' : 'hidden'}`}>
        <li className='px-6 py-2'><a href="#">About</a></li>
        <li className='px-6 py-2'><a href="#">Projects</a></li>
        <li className='px-6 py-2'><a href="#">Skills</a></li>

        <div className='fixed right-20  flex flex-row md:hidden gap-2 p-2 rounded-md'>
        <Linkedin
          className='duration-300 ease-in cursor-pointer text-gray-600 hover:text-black hover:-translate-x-[1.5px]'
          onClick={() => showLink('https://www.linkedin.com/in/luka-chikashvili/')}
        />
        <Github
          className='duration-300 ease-in cursor-pointer text-gray-600 hover:text-black hover:-translate-x-[1.5px]'
          onClick={() => showLink('https://github.com/lukaChikashvili')}
        />
        <Facebook
          className='duration-300 ease-in cursor-pointer text-gray-600 hover:text-black hover:-translate-x-[1.5px]'
          onClick={() => showLink('https://www.facebook.com/profile.php?id=61565951550341')}
        />
      </div>
      </div>

      
    
    </div>
  )
}

export default Header
