import First from "./First";
function Navbar(){
    return(
        <div className="flex flex-col items-center bg-[url('/theme.jpg')] bg-cover bg-center h-screen">
            
            {/* navbar */}
            <div className="flex justify-center items-center w-full max-w-300 h-20 px-2.5 py-6 ">
                <nav className="flex justify-between items-center w-full max-w-295 h-[43px] px-2.5 py-6 ">
                    {/* logo */}
                    <img src="raybanwhite.jpeg" alt="logo" className="w-30 h-10" />

                    {/* right component - menu */}
                    <div className="flex justify-between items-center w-full max-w-137 h-[43px]">

                        <div className="flex justify-between items-center w-full max-w-94 h-[22.5px] text-[14px]  text-white font-semibold">
                            <p className="h-[22.5px]">
                                <a href="#" className="h-[18px]"> Home </a>
                            </p>
                            <p className="h-[22.5px]">
                                <a href="#" className="h-[18px]"> Services </a>
                            </p>
                            <p className="h-[22.5px]">
                                <a href="#" className="h-[18px]"> Case Studies </a>
                            </p>
                            <p className="h-[22.5px]">
                                <a href="#" className="h-[18px]"> Contact </a>
                            </p>

                        </div>

                        {/* button */}
                        <div className="flex items-center justify-center w-full max-w-[131px] h-[43px] border-[1.5px] border-white rounded-2xl">
                            <a className="w-full max-w-[131px] h-[43px] px-[18px] py-[14px]">
                                <p className="text-[14px] text-white font-semibold text-center"> Get Started </p>
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
            <First/>

        </div>

    )
}
export default Navbar;