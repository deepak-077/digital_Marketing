"use client"
import First from "./First";
import Menu from "./Menu";
import { useState } from "react";

function Navbar(){
    const [clicked,setClicked] = useState(false)

    return(
        <div className="flex flex-col items-center bg-[url('/theme.jpg')] bg-cover bg-center h-[1445px] sm:h-300 md:h-231">
            
            {/* navbar */}
            <div className="flex justify-center items-center w-full max-w-300 h-20 px-2.5 py-5 ">
                <nav className="flex justify-between items-center w-full max-w-295 h-[47px] px-2.5 py-6 ">
                    {/* logo */}
                    <img src="gda_logo.png" alt="logo" className="w-40 h-35 rounded-full" />

                    {/* right component - menu */}
                    <div className="hidden  md:flex justify-between items-center w-full max-w-137 h-[47px]">

                        <div className="flex justify-between items-center w-full max-w-94 h-[26.5px] text-[14px]  text-white font-semibold">
                            <p className="h-[22.5px]">
                                <a href="#" className="h-[18px]"> Home </a>
                            </p>
                            <p className="h-[22.5px]">
                                <a href="#" className="h-[18px]"> Services </a>
                            </p>
                            <p className="h-[22.5px]">
                                <a href="#" className="h-[18px]"> About Us </a>
                            </p>
                            <p className="h-[22.5px]">
                                <a href="#" className="h-[18px]"> Contact </a>
                            </p>

                        </div>

                        {/* button */}
                        <div className="flex items-center justify-center w-full max-w-[131px] h-[47px] border-[1.5px] border-white rounded-2xl">
                            <a className="w-full max-w-[131px] h-[47px] px-[18px] py-[14px]">
                                <p className="text-[14px] text-white font-semibold text-center"> Get Started </p>
                            </a>
                        </div>
                    </div>

                    <div className="flex md:hidden" >
                        <Menu/>
                    </div>
                    
                </nav>
            </div>
            <First/>

        </div>

    )
}
export default Navbar;