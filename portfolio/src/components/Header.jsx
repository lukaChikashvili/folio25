import React from 'react'

const Header = () => {
  return (
    <div className='absolute w-full bg-transparent px-12 py-6 text-white flex items-center justify-between z-10 text-3xl'> 
       <div>
         <h1>logo</h1>
       </div>

       <nav className='flex items-center gap-6 list-none'>
         <li><a href = "#">About</a></li>
         <li><a href = "#">Projects</a></li>
         <li><a href = "#">Contact</a></li>
       </nav>
    </div>
  )
}

export default Header
