import React from 'react';
import brain from '../assets/brain.png';

const About = () => {
  return (
    <div className="w-full h-screen text-white p-4 md:p-[4rem] relative">
      <div className="flex flex-col gap-4 pt-12 mt-6 md:mt-0">
        <h1 className="text-3xl md:text-4xl text-[#FABC3F]">About me</h1>
        <span className="w-1/4 md:w-2/5 h-[0.5px] mt-2 bg-gray-400"></span>
        <p className="w-full md:w-1/2 mt-4 text-lg md:text-xl text-gray-300 leading-[2.3rem] lg:leading-[2.3rem]">
          I am a passionate Web Developer specializing in{' '}
          <span className="text-[#FABC3F]">front-end technologies</span>. Always eager to learn, I stay
          up-to-date with the latest trends and best practices. My ability to read in{' '}
          <span className="text-[#FABC3F]">six languages</span> enhances my learning and problem-solving skills
          by providing access to a broad range of resources.
        </p>
        <div className="relative mt-16 w-full md:w-[80%] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-center gap-2">
            <div className="flex flex-col items-center gap-2">
              <div className="circle bg-[#FABC3F]"></div>
              <span className="mt-2 text-gray-300"> 2023: Scientific Cyber Security Association</span>
            </div>

            <div className="arrow"></div>

            <div className="flex flex-col items-center gap-2">
              <div className="circle bg-[#FABC3F]"></div>
              <span className="mt-2 text-gray-300"> 2024: Academy of Digital Industries </span>
            </div>

            <div className="arrow"></div>

            <div className="flex flex-col items-center gap-2">
              <div className="circle bg-[#FABC3F]"></div>
              <span className="mt-2 text-gray-300"> now: Full-Stack Developer</span>
            </div>
          </div>
        </div>
      </div>

      <img
        src={brain}
        className="absolute top-12 right-0 md:right-56 -rotate-45 w-[15rem] md:w-[25rem] hidden md:block"
      />
    </div>
  );
};

export default About;
