import React from 'react';
import A from '../assets/portfolio/A.jpg';
import css from '../assets/css.svg';
import html from '../assets/html.svg';
import react from '../assets/react.svg';
import tailwindcss from '../assets/tailwind-css.svg';
import nextjs from '../assets/nextjs.svg';

const Experience = () => {

    const tech=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500',
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500',
        },
        {
            id:3,
            src:react,
            title:'React',
            style:'shadow-blue-600',
        },
        {
            id:4,
            src:nextjs,
            title:'Next Js',
            style:'shadow-white',
        },
        {
            id:5,
            src:tailwindcss,
            title:'Tailwind CSS',
            style:'shadow-sky-500',
        },
    ]

  return (
    <div name='experience' className='bg-gradient-to-b from-black to-gray-800 h-screen w-full'> 
        
       <div className='max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white' >

            <div>
             <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
             <p className='py-6'>These are the technologies I have worked with</p>
            </div>
        
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            
            {
                tech.map(({id,src,style,title})=>(
                    <div 
                    key={id}
                    className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg'+" "+style}>
                <img src={src} alt="" 
                className='w-20 mx-auto'/>
                <p className='mt-4'>{title}</p>
              </div>
                ))
            }
            </div>
       </div>

    </div>
  );
};

export default Experience