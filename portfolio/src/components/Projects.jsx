import React from 'react'
import { projectList } from './ProjectList'
import Project from './Project'
import { motion } from 'framer-motion'

const Projects = () => {
    
    const shortenText = (text) => {
      const isMobile = window.innerWidth <= 768;

      return isMobile ? `${text.substring(0, 300)}...` : text;
    }


  return (
    <section id = "projects" className="w-full h-auto md:h-screen text-white p-4 md:p-[4rem] mt-[37rem] lg:mt-0">
      <div className="flex flex-col gap-4 pt-12">
        <motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                       whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                        transition={{duration: 1, delay: 0.3}} 
        className="text-3xl md:text-4xl text-[#FABC3F]">Personal Projects</motion.h1>
        <motion.span initial = {{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1, delay: 0.5 }}
        className="w-1/2 md:w-2/5 h-[0.5px] mt-2 bg-gray-400"></motion.span>
      </div>

      <div className="mt-12 md:mt-16 flex flex-col gap-12 md:gap-24">
        {projectList.map((value) => (
          <Project
            key={value.id}
            name={value.name}
            text={shortenText(value.text)}
            stack={value.stack}
            github={value.github}
            live={value.live}
            img={value.img}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
