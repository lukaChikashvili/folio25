import React from 'react'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="text-white w-full h-screen bg-transparent absolute top-0 left-0 p-4 md:p-[4rem]">
      <div className="pt-24 md:pt-[6rem] flex flex-col gap-6 mt-[4rem] lg:mt-0 lg:gap-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl">
          <motion.span initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                       whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                        transition={{duration: 1, delay: 0.6}}
          className="text-[#FABC3F]">Hi, I am</motion.span>
        </h2>
        <motion.h1 initial = {{ opacity: 0}}
                   whileInView={{opacity: 1}} transition={{duration: 1.3, delay: 1.2}}
         className="text-4xl md:text-[3rem] lg:text-[4rem]">
          Luka Chikashvili
        </motion.h1>
        <motion.p initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                       whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} 
                       transition={{duration: 1.3, delay: 1.3}}
        className="text-2xl md:text-3xl lg:text-4xl">
          <span className="text-[#FABC3F]">Full stack</span> web developer
        </motion.p>
        <motion.span initial = {{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1.3 }}
         className="w-2/5 md:w-1/3 h-[0.5px]  bg-gray-400"></motion.span>
        <motion.p initial = {{ opacity: 0}}
                       whileInView={{opacity: 1 }} 
                       transition={{duration: 1.5, delay: 1.3}}
        className="text-base md:text-lg lg:text-xl  md:w-[38rem] text-gray-300 leading-[2.4rem] lg:leading-[2.6rem]">
          Passionate about building interactive web applications with modern technologies like{' '}
          <span className="text-[#FABC3F]">React, node</span> and{' '}
          <span className="text-[#FABC3F]">three.js</span>. Bringing ideas to life with clean, efficient code.
        </motion.p>

        <motion.button initial = {{ opacity: 0}}
                       whileInView={{opacity: 1 }} 
                       transition={{duration: 1.5, delay: 1.3}}
        className="bg-[#FABC3F] w-full md:w-[15rem] mt-4 rounded-md px-12 py-2 shadow-lg neon-button text-sm">
          Resume
        </motion.button>
      </div>
    </div>
  )
}

export default Home
