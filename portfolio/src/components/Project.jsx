import React from 'react';
import { ExternalLink } from 'lucide-react'

const Project = ({ name, text, stack, github, live, img }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-16 p-8 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300  w-full max-w-8xl mx-auto ">
 
      <div className="flex-1">
        <img
          src={img}
          alt={`${name} preview`}
          className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-500 ease-in object-cover w-full hover:opacity-75"
        />
      </div>

    
      <div className="flex-1 text-left">
        <h1 className="text-3xl font-bold text-[#FABC3F] mb-4">{name}</h1>
        <p className="text-gray-300 text-md leading-relaxed mb-6">{text}</p>
        <div className="flex flex-wrap gap-6 mb-4">
          {stack?.map((tech) => (
            <span
              key={tech.id}
              className="bg-gray-700 px-3 py-1 rounded-md text-gray-200 shadow-sm"
            >
              {tech.title}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4  px-8 py-2 bg-transparent border-2 text-white rounded-lg shadow hover:bg-gray-700 transition"
            >
              GitHub <ExternalLink size={20} />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border-transparent border-2  px-4 py-2 bg-[#FABC3F] text-gray-900 rounded-lg shadow hover:bg-transparent hover:border-[#FABC3F] hover:text-white transition"
            >
              Live Demo <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
