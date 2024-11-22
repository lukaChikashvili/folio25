import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Github, Linkedin, Mail } from 'lucide-react'

const Contact = () => {

     const showLink = (link) => window.open(link, '_blank' );

  return (
<div className='fixed bottom-4 right-8 bg-[#FABC3F] rounded-full shadow-lg shadow-black'>
  <div className='flex flex-col gap-2 p-2 rounded-md'>
     <Linkedin className='duration-300 ease-in cursor-pointer text-gray-600 hover:text-black hover:-translate-x-[1.5px] ' onClick={() => showLink('https://www.linkedin.com/in/luka-chikashvili/')} />
     <Github className='duration-300 ease-in cursor-pointer text-gray-600 hover:text-black hover:-translate-x-[1.5px] ' onClick={() => showLink('https://github.com/lukaChikashvili')} />
     <Facebook className='duration-300 ease-in cursor-pointer text-gray-600 hover:text-black hover:-translate-x-[1.5px] ' onClick={() => showLink('https://www.facebook.com/profile.php?id=61565951550341')}/>
  </div> 
</div>
  )
}

export default Contact
