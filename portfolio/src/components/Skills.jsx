import React from 'react'

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
    <h1 className="text-3xl md:text-4xl text-[#FABC3F]">My Skills</h1>
    <span className="w-2/5 h-[0.5px] mt-2 bg-gray-400"></span>

    <div>
      <h1 className="text-xl md:text-2xl mt-4">Front-end Technologies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
        {skills.map((value) => (
          <div key={value.id} className="flex mt-4">
            <p className="text-xl flex items-center gap-4 text-gray-400">
              <div className="arrow2"></div>{value.name}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-4">
      <h1 className="text-xl md:text-2xl">Back-end Technologies</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-4 mt-4">
        {skills2.map((value) => (
          <div key={value.id} className="flex mt-4">
            <p className="text-xl flex items-center gap-4 text-gray-400">
              <div className="arrow2"></div>{value.name}
            </p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-4">
      <h1 className="text-xl md:text-2xl">Other</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-4 mt-4">
        {skills3.map((value) => (
          <div key={value.id} className="flex mt-4">
            <p className="text-xl flex items-center gap-4 text-gray-400">
              <div className="arrow2"></div>{value.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  )
}

export default Skills
