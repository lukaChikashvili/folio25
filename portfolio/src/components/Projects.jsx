import React from 'react'
import { projectList } from './ProjectList'
import Project from './Project'

const Projects = () => {
  return (
    <div className='w-full h-screen text-white p-[4rem] '>
         <div className='flex flex-col gap-4 pt-12'>
       <h1 className='text-4xl text-[#FABC3F]'>Personal Projects</h1>
       <span className='w-2/5 h-[0.5px] mt-2 bg-gray-400'></span>
       </div>
        
       <div className="mt-16 flex flex-col gap-24">
        {projectList.map((value) => (
          <Project
            key={value.id}
            name={value.name}
            text={value.text}
            stack={value.stack}
            github={value.github}
            live={value.live}
            img={value.img}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects
