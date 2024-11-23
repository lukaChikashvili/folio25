import {  Copyright } from 'lucide-react'
import React from 'react'
import cup from "../assets/cup.png"

const Footer = () => {
    
  return (
    <section id = 'footer' className="w-full flex flex-col md:flex-row items-center justify-start gap-12  text-white p-4 md:p-[3rem] bg-transparent border-t-2 border-gray-700 mt-12 md:mt-[210rem]">
        <div className='flex flex-col md:flex-row items-center gap-12'>
            <img src = {cup} className='w-12 hidden lg:block' />
        <span className='flex items-center gap-4'>Contact me at <p className='text-[#FABC3F] duration-500 ease underline-offset-8 hover:underline cursor-pointer'>lukachikashvili2020@gmail.com</p></span>

        </div>

        <div className='flex items-center gap-4'>
            <Copyright size={20} />
            <p>made by luka 2024</p>
        </div>
     
    </section>
  )
}

export default Footer
