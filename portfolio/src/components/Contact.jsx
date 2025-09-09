import React from 'react';
import { Linkedin, Github, Facebook } from 'lucide-react';

const Contact = () => {
  const showLink = (link) => window.open(link, '_blank');

  return (
    <div className='fixed bottom-4 right-4 md:bottom-12 md:right-8 lg:bottom-6 lg:right-8 z-10 bg-[#FABC3F] rounded-full shadow-lg shadow-black'>
      <div className='hidden md:flex flex-row md:flex-col gap-2 p-2 rounded-md'>
        <Linkedin
          className='duration-300 ease-in cursor-pointer text-gray-600 hover:text-black hover:-translate-x-[1.5px]'
          onClick={() => showLink('www.linkedin.com/in/lukachikashvili')}
        />
        <Github
          className='duration-300 ease-in cursor-pointer text-gray-600 hover:text-black hover:-translate-x-[1.5px]'
          onClick={() => showLink('https://github.com/lukaChikashvili')}
        />
        <Facebook
          className='duration-300 ease-in cursor-pointer text-gray-600 hover:text-black hover:-translate-x-[1.5px]'
          onClick={() => showLink('https://www.facebook.com/profile.php?id=61565951550341')}
        />
      </div>
    </div>
  );
};

export default Contact;
