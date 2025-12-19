function Navbar(){
    return(
        <div className="flex justify-center bg-[url('/theme.jpg')] bg-cover bg-center h-screen">
            <div className="w-full max-w-300 h-20 px-2.5 py-6 ">
                <nav className="flex justify-between items-center w-full max-w-295 h-[43px] px-2.5 py-6 ">
                    {/* logo */}
                    <img src="abc.jpg" alt="logo" />

                    {/* right component - menu */}
                    <div className="flex justify-between items-center w-full max-w-137 h-[43px]">

                        <div className="flex justify-between items-center w-full max-w-94 h-[22.5px] text-[15px]  text-white font-semibold">
                            <p className="h-[22.5px]">
                                <a href="#" className="h-[18px]  "> Home </a>
                            </p>
                            <p className="h-[22.5px]">
                                <a href="#" className="h-[18px]  "> Services </a>
                            </p>
                            <p className="h-[22.5px]">
                                <a href="#" className="h-[18px] text-[15px] "> Case Studies </a>
                            </p>
                            <p className="h-[22.5px]">
                                <a href="#" className="h-[18px] text-[15px]"> Contact </a>
                            </p>

                        </div>

                        {/* button */}
                        <div className="flex items-center justify-center w-full max-w-[131px] h-[43px] border border-white rounded-2xl">
                            <a className="w-full max-w-[131px] h-[43px] px-[18px] py-[14px]">
                                <p className="text-[15px] text-white"> Get Template </p>
                            </a>
                        </div>
                    </div>

                </nav>

            </div>

        </div>

    )
}
export default Navbar;