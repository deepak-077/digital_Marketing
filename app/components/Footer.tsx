function Footer(){
    return(
        <div className="flex justify-center h-auto gap-5 md:h-210 bg-[#F8F8F9]">

            <div className="w-full flex flex-col">

                {/* First component */}
            <div className="flex justify-center items-center w-full  h-130 bg-[url(/cover.jpg)] bg-cover bg-center text-white ">
                
                <div className="w-200 h-78 flex flex-col justify-between items-center px-5 md:px-0">
                    <h2 className="text-[40px] sm:text-[56px] md:text-[72px] leading-none text-center">Take your business to the next level.</h2>
                    <p className="text-[18px] text-[#C7CBD4] text-center">Get more insights and reports for your startup and improve the customer relationships.</p>
                    <div className="h-14 bg-[#6430C0] text-white text-[18px] font-medium rounded-2xl p-5 flex items-center"> Get This Template -</div>
                </div>  

            </div>

            {/* Second component */}
            <div className="flex justify-center bg-[#040309] h-auto md:h-80 px-5  lg:px-0 py-10 lg:py-0">

                <div className="flex flex-col md:flex-row gap-10 md:justify-between items-center w-full lg:max-w-270 text-white font-medium">

                    <div className="w-56 h-59 flex flex-col gap-4 justify-between ">
                        <div className="flex flex-col gap-5">
                            <img src="raybanwhite.jpeg" alt="" className="w-30 h-10"/>
                            <p>Build a powerful agency site with Framer.</p>
                        </div>
                        <p>© Rhone. All rights reserved.</p>
                        
                    </div>

                    {/* pages */}
                <div className="flex flex-col justify-between w-56 h-59 items-center md:items-start">
                    <h5 className="text-[22px] md:text-[19px] font-semibold">Pages</h5>
                    <p>Home</p>
                    <p>Services</p>
                    <p>Case Studies</p>
                    <p>Contact</p>
                    <p>404</p>
                </div>

                <div className="flex flex-col gap-4 w-56 h-auto md:h-59 items-center md:items-start">
                    <h5 className="text-[22px] md:text-[19px] font-semibold">Contact</h5>
                    <p>Contact Info Here</p>
                </div>

                <div className="w-56  h-auto md:h-59 flex flex-col gap-4 items-center md:items-start">
                    <h5 className="text-[22px] md:text-[19px] font-semibold">Follow Us</h5>
                    <div className="flex justify-center md:justify-start items-center w-full gap-3">
                        <div >
                            <img src="fb.png" alt="fb" className="size-9"/>
                        </div>

                        <div>
                            <img src="insta.png" alt="instagram" className="size-10" />
                        </div>

                        <div>
                            <img src="youtube.png" alt="youtube" className="size-10"/>
                        </div>
                    </div>

                </div>

                </div>

            </div>
            </div>
        </div>
    )
}
export default Footer;