function Third(){
    return(
        <div className=" flex justify-center ">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-300 h-[954px] sm:h-[1100px] sm:h-[1250px]  lg:h-192.5 px-5 py-15 lg:py-25">
            
            {/* Left part */}
            <img src="one.jpg" alt="" className="w-full h-auto lg:w-135 lg:h-143 rounded-4xl"/>

            {/* Right part */}
            <div className="flex flex-col justify-between w-full max-w-135 h-[496px] sm:h-[372px] md:h-105">
                <p className="w-full font-semibold text-[#6430c0]">DIGITAL MAGIC</p>
                <h2 className="w-full text-[32px] md:text-[46px] font-semibold leading-none">Elevate Your Business with Our Marketing Expertise</h2>
                <p className="text-[18px] lg:text-[16px]">Our digital marketing agency is dedicated to transforming online potential into tangible success, 
                    offering a dynamic blend of creativity and strategic expertise to elevate your brand in the digital realm.</p>

                <div className="flex justify-center w-51 px-5 py-[18px] bg-[#6430c0] rounded-2xl">
                    <span className="w-full text-white font-semibold">
                        Get This Template -
                    </span>

                </div>

            </div>

            </div>

        </div>
        
    )

}
export default Third