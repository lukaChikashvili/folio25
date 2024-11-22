import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
     
    const skills = [
        {
            id: 1,
            name: "Next.js"

        },

        {
            id: 2,
            name: "React"

        },


        {
            id: 3,
            name: "Typescript"

        },


        {
            id: 4,
            name: "Css/sass"

        },

        
        {
            id: 5,
            name: "Tailwind.css"

        },


        
        {
            id: 6,
            name: "Material UI"

        },

             
        {
            id: 7,
            name: "Three.js"

        },

             
        {
            id: 8,
            name: "Gsap "

        },

              
        {
            id: 9,
            name: "Redux toolkit"

        },

        {
            id: 10,
            name: "Shadcn/ui"

        },

        {
            id: 11,
            name: "Framer Motion"

        },
        {
            id: 12,
            name: "Blender"

        }




    ];



    const skills2 = [
        {
            id: 1,
            name: "Node.js"

        },

        {
            id: 2,
            name: "MongoDB"

        },


        {
            id: 3,
            name: "Express.js"

        },


        {
            id: 4,
            name: "PostgreSQL "

        }

  
    ];


    const skills3 = [
        {
            id: 1,
            name: "Figma"

        },

        {
            id: 2,
            name: "Git/Github"

        }

  
    ];

  return (
    <div className="w-full h-screen text-white p-4 md:p-[4rem]">
  <div className="flex flex-col gap-4 pt-12 mt-[15rem] md:mt-0">
    <motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                       whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                        transition={{duration: 1, delay: 0.3}} 
     className="text-3xl md:text-4xl text-[#FABC3F]">My Skills</motion.h1>
    <motion.span initial = {{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1, delay: 0.5 }}
    className="w-2/5 h-[0.5px] mt-2 bg-gray-400"></motion.span>

    <div>
      <motion.h1 initial = {{ opacity: 0, translateY: 15}}
                       whileInView={{opacity: 1, translateY: 0 }} 
                       transition={{duration: 0.5, delay: 0.7}}
      className="text-xl md:text-2xl mt-4">Front-end Technologies</motion.h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
        {skills.map((value, i) => (
          <motion.div initial = {{ opacity: 0, translateY: 15}}
          whileInView={{opacity: 1, translateY: 0 }} 
          transition={{duration: 0.5, delay: i * 0.15}}
           key={value.id} className="flex mt-4">
            <p className="text-xl flex items-center gap-4 text-gray-400">
              <span className="arrow2"></span>{value.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="mt-4">
      <motion.h1 initial = {{ opacity: 0, translateY: 15}}
                       whileInView={{opacity: 1, translateY: 0 }} 
                       transition={{duration: 0.5, delay: 0.8}}
      className="text-xl md:text-2xl">Back-end Technologies</motion.h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-4 mt-4">
        {skills2.map((value, i) => (
          <motion.div initial = {{ opacity: 0, translateY: 15}}
          whileInView={{opacity: 1, translateY: 0 }} 
          transition={{duration: 1, delay: i * 0.15}}
           key={value.id} className="flex mt-4">
            <p className="text-xl flex items-center gap-4 text-gray-400">
              <span className="arrow2"></span>{value.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="mt-4">
      <motion.h1 initial = {{ opacity: 0, translateY: 15}}
                       whileInView={{opacity: 1, translateY: 0 }} 
                       transition={{duration: 0.5, delay: 0.8}} 
       className="text-xl md:text-2xl">Other</motion.h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-4 mt-4">
        {skills3.map((value, i) => (
          <motion.div initial = {{ opacity: 0, translateY: 15}}
          whileInView={{opacity: 1, translateY: 0 }} 
          transition={{duration: 1, delay: i * 0.15}}
          key={value.id} className="flex mt-4">
            <p className="text-xl flex items-center gap-4 text-gray-400">
              <span className="arrow2"></span>{value.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</div>

  )
}

export default Skills
