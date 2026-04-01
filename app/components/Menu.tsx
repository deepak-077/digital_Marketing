"use client"

import { useState } from "react";
import Link from "next/link";

function Menu() {

  const [open, setOpen] = useState(false);

  function toggle(){
    setOpen(prev=>!prev);
  }

  return (
    <>
    <div className="flex flex-row justify-between mx-10 ">
    <button
        className="flex flex-col justify-center items-center w-10 h-10 relative z-60"
        onClick={toggle}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-1 bg-white rounded transition-all duration-300
            ${open ? 'rotate-45 translate-y-2' : ''}
          `}
        ></span> 
         <span
          className={`block w-6 h-1 bg-white rounded transition-all duration-300 my-1
            ${open ? 'opacity-0' : ''}
          `}
        ></span>
        <span
          className={`block w-6 h-1 bg-white rounded transition-all duration-300
            ${open ? '-rotate-45 -translate-y-2' : ''}
          `}
        ></span>
        

      </button> 

    </div>
    
      
      <div className={`
          fixed top-13 right-0 h-full w-60 shadow-lg z-50 transform transition-transform duration-300 rounded-4xl bg-[#0b0917] md:hidden
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}>

      <div className="flex flex-col items-center">
      
      <Link className="p-3 text-gray-500 w-full font-semibold text-[20px]" href={"/"}>HOME</Link>
      <Link className="p-2 text-gray-500 w-full font-semibold text-[20px]" href={"/about"}>ABOUT US</Link>
      <Link className="p-2 text-gray-500 w-full font-semibold text-[20px]" href={"/services"}>SERVICES</Link>
      <Link className="p-2 text-gray-500 w-full font-semibold text-[20px]" href={"/training"}>TRAINING</Link>
      <Link className="p-2 text-gray-500 w-full font-semibold text-[20px]" href={"/blog"}>BLOG</Link>
      <Link className="p-2 text-gray-500 w-full font-semibold text-[20px]" href={"/contact"}>CONTACT US</Link>

      </div>    

      </div>
  
    </>
    );
  }
  
  export default Menu;