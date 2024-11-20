import React from 'react'

const Home = () => {
  return (
    <div className='text-white w-full h-screen bg-transparent absolute top-0 left-0 p-[4rem]'>
       <div className='pt-[6rem] flex flex-col gap-4' >
          <h2 className='text-3xl'><span className='text-[#FABC3F]'>Hi, I am</span></h2>
          <h1 className='text-[4rem] '>Luka Chikashvili</h1>
          <p className='text-4xl'><span className='text-[#FABC3F]'>Full stack</span> web developer</p>
          <span className='w-2/5 h-[0.5px] mt-2 bg-gray-400'></span>
          <p className='text-lg mt-4 w-[38rem] text-gray-300 leading-[2.3rem]'>
            Passionate about building interactive web applications with modern technologies like <span className='text-[#FABC3F]'>React, node</span> and <span className='text-[#FABC3F]'>three.js</span>. Bringing ideas to life with clean, efficient code.
          </p>

          <button className='bg-[#FABC3F] w-[15rem] mt-4 rounded-md px-12 py-2 shadow-lg neon-button text-sm'>Resume</button>
       </div>
    </div>
  )
}

export default Home
