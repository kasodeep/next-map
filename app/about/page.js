import React from 'react'

const About = () => {
   return (
      <div className='flex flex-col gap-y-2 items-center justify-center w-full h-full'>
         This project is being developed by:

         {/* Names. */}
         <ul className='flex flex-col items-center gap-3'>
            <li className='font-semibold'>1) Kasodariya Deep (221080029)</li>
            <li className='font-semibold'>2) Binayke Ojas (221080007)</li>
            <li className='font-semibold'>3) Priyansh Katariya (221080030)</li>
            <li className='font-semibold'>4) Ayush Gulhane (221080023)</li>
         </ul>

         {/* Links */}
         <div>
            Here are the links of our research papers we referred: TODO
         </div>
      </div>
   )
}

export default About
