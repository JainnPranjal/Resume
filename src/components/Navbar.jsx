import React, { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
    let items=[
        {
            id:1,
            val:"Home",
        },
        {
            id:2,
            val:"About",
        },
        {
            id:3,
            val:"Portfolio",
        },
        {
            id:4,
            val:"Experience",
        },
        {
            id:5,
            val:"Contact",
        },

    ]

    const [bar,setBar]= useState(false);

  return (
   
    <>
    <div className='flex w-screen h-14 bg-gray-800 text-white  justify-between items-center fixed '>
        <div className='font-signature text-2xl  ml-2 '>
            Pranjal
        </div>

        <ul className='hidden md:flex'>
            {items.map(({id,val})=>(
                <li key={id} className= 'px-4 hover:scale-105 font-medium duration-200 cursor-pointer text-gray-500 p-2 '>
                    {val}
                </li>
            ))
            }
        </ul>
        
        <div onClick={()=>setBar(!bar)} 
        className='cursor-pointer flex md:hidden z-10 text-gray-500 pr-4 ' >
           {bar ?<>
            <FaTimes size={20}/>
           
           </>
            :<FaBars size={20}/>}
        </div>
        
        {bar && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 text-gray-500'>
        {items.map(({id,val})=>(
                <li key={id} className= 'px-4 text-3xl cursor-pointer text-gray-500 py-5 '>
                    {val}
                </li>
            ))
            }
        </ul>
        )}


        
      
    </div>
    </>
  )
}

export default Navbar;