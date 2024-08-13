import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoMail } from "react-icons/io5";

const Socials = () => {
    let links=[
        {id:1,
         val:(
            <>
             Linkedin
             <FaLinkedin />
            </>
         ),
         href:'https://xyc.com',
         style:'rounded-tr-md',

        },
        {   id:2,
            val:(
                <>
                 Github
                 <FaGithub />
                </>
             ),
             href:'https://yc.com',
        },
        {   id:3,
            val:(
                <>
                 Mail
                 <IoMail/>
                </>
             ),
             href:'mailto:pranjaljain99999@gmail.com',
        },
        {   id:4,
            val:(
                <>
                 Resume
                 <IoMdContact />
                </>
             ),
             href:'https://c.com',
             style:'rounded-br-md',
        },      

    ]
  return (
    <div className='hidden lg:flex flex-col left-0 top-[35%] fixed'>
        <ul>
            {links.map(({id,val,style,href})=>(
                <li  key={id} className={'ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 flex justify-between items-center bg-gray-500 h-14 w-36 px-4'
                +" "+style} >
                <a 
                href={href}
                className='flex w-full justify-between items-center text-white'
                target='_blank'
                rel="noreferrer"
                > 
                {val}
                </a>
            </li>
            ))}
            
        </ul>
    </div>
  )
}

export default Socials;