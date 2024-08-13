import React from 'react';
import A from '../assets/portfolio/A.jpg';

import { RiArrowRightSFill } from "react-icons/ri";
 
const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-gradient-to-b from-black via-black to-gray-800'>
        <div className=' max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
            <h2 className='text-3xl sm:text-6xl font-bold text-white'>
                    I'm a Software Developer
            </h2>
            <p className='text-gray-500 py-4 max-w-md'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi explicabo enim reprehendet repellendus nulla repudiandae 
                consectetur mollitia cupiditate 
            </p>
            

            <div >
                <button className='group cursor-pointer flex w-fit text-white items-center my-5 px-4 py-2 bg-gradient-to-r from-blue-900 to-blue-500 rounded-md'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300 ml-1'>
                    <RiArrowRightSFill  size={20} />
                    </span>
                </button>
            </div>
        </div>

            <div>
                <img src={A} 
                alt="my profile" 
                className='rounded-2xl mx-auto w-2/5 md:w-2/3'/>
            </div>
        </div>
    </div>
  )
}

export default Home