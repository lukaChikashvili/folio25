import React from 'react';
import brain from '../assets/brain.png';
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="w-full h-screen text-white p-4 md:p-[4rem] relative">
      <div className="flex flex-col gap-4 pt-12 mt-6 md:mt-0">
        <motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                       whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                        transition={{duration: 1, delay: 0.3}} 
        className="text-3xl md:text-4xl text-[#FABC3F]">About me</motion.h1>
        <motion.span initial = {{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1, delay: 0.5 }}
        className="w-1/4 md:w-2/5 h-[0.5px] mt-2 bg-gray-400"></motion.span>
        <motion.p initial = {{ opacity: 0, translateY: 15}}
                       whileInView={{opacity: 1, translateY: 0 }} 
                       transition={{duration: 0.5, delay: 0.5}}
         className="w-full md:w-1/2 mt-4 text-lg md:text-xl text-gray-300 leading-[2.3rem] lg:leading-[2.3rem]">
          I am a passionate Web Developer specializing in{' '}
          <span className="text-[#FABC3F]">front-end technologies</span>. Always eager to learn, I stay
          up-to-date with the latest trends and best practices. My ability to read in{' '}
          <span className="text-[#FABC3F]">six languages</span> enhances my learning and problem-solving skills
          by providing access to a broad range of resources.
        </motion.p>
        <div className="relative mt-16 w-full md:w-[80%] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-center gap-2">
            <div className="flex flex-col items-center gap-2">
              <motion.div initial = {{ opacity: 0, translateY: 15}}
                       whileInView={{opacity: 1, translateY: 0 }} 
                       transition={{duration: 0.5, delay: 0.5}}
              className="circle bg-[#FABC3F]"></motion.div>
              <motion.span initial = {{ opacity: 0, translateY: 15}}
                       whileInView={{opacity: 1, translateY: 0 }} 
                       transition={{duration: 0.5, delay: 0.5}}
              className="mt-2 text-gray-300"> 2023: Scientific Cyber Security Association</motion.span>
            </div>

            <motion.div  initial = {{ opacity: 0}}
                       whileInView={{opacity: 1 }} 
                       transition={{duration: 0.5, delay: 0.8}}
            className="arrow"></motion.div>

            <div className="flex flex-col items-center gap-2">
              <div className="circle bg-[#FABC3F]"></div>
              <motion.span initial = {{ opacity: 0, translateY: 15}}
                       whileInView={{opacity: 1, translateY: 0 }} 
                       transition={{duration: 0.5, delay: 0.9}}
              className="mt-2 text-gray-300"> 2024: Academy of Digital Industries </motion.span>
            </div>

            <motion.div  initial = {{ opacity: 0}}
                       whileInView={{opacity: 1 }} 
                       transition={{duration: 0.5, delay: 0.8}}
            className="arrow"></motion.div>

            <div className="flex flex-col items-center gap-2">
              <div className="circle bg-[#FABC3F]"></div>
              <motion.span initial = {{ opacity: 0, translateY: 15}}
                       whileInView={{opacity: 1, translateY: 0 }} 
                       transition={{duration: 0.5, delay: 1.2}}
              className="mt-2 text-gray-300"> now: Full-Stack Developer</motion.span>
            </div>
          </div>
        </div>
      </div>

      <motion.img initial = {{ opacity: 0}}
                       whileInView={{opacity: 1 }} 
                       transition={{duration: 1, delay: 3}}
        src={brain}
        className="absolute top-12 right-0 md:right-56 -rotate-45 w-[15rem] md:w-[25rem] hidden md:block"
      />
    </div>
  );
};

export default About;
