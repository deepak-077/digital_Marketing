"use client"

import { CountUpNumber,ScrollHighlightText } from "./Animation";

const cards = [
  { num: 1, desc: "Revenue Generated", prefix: "$", suffix: "M+" },
  { num: 200, desc: "Happy Clients" },
  { num: 340, desc: "In ad spending every month", suffix: "K" },
  { num: 425, desc: "Worldwide locations" },
];

function Eighth(){
    return(
        <div className="flex justify-center h-auto md:h-250 bg-[#F8F8F9]">

            <div className="flex flex-col gap-5 md:justify-between items-center w-full lg:max-w-300 h-auto md:h-250 py-15 md:py-[100px] px-5">

                {/* First component */}
                <div className="w-full max-w-153 h-auto md:h-35 flex flex-col gap-4 md:justify-between">
                    <p className="text-[#6430C0] font-semibold text-center">FROM STRATEGY TO ACTION</p>
                    <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-semibold text-center leading-tight">Unleash the Power of Our Dynamic Service Portfolio</h2>
                </div>

                {/* Second component */}
                <div className="w-full lg:max-w-290 h-auto md:h-146 flex flex-col gap-5 md:justify-between">

                    {/* Stats */}
                <div className="flex flex-col md:flex-row items-center w-full lg:max-w-290 h-auto md:h-[150px] gap-5 md:justify-between rounded-4xl">

                    {/* cards */}
                    {cards.map((item,index)=>(
                        
                    <div className="w-full md:max-w-[278px] h-[150px] p-[30px] flex flex-col justify-between bg-[#ffffff] shadow-2xl rounded-3xl hover:scale-110">
                        
                        <div className="text-[#6430C0] font-semibold text-center text-[40px]">
                            <CountUpNumber target={item.num} prefix={item.prefix} suffix={item.suffix} />
                        </div>
                        <p className="text-[18px] md:text-[16px] text-center ">{item.desc}</p>
                    
                    </div>
                    ))}
                </div>

                {/* Company Growth Summary */}
                <div className="flex flex-col md:flex-row gap-5 md:justify-between w-full lg:max-w-290 h-auto md:h-104 p-5 md:p-10  rounded-3xl bg-[#FFFFFF]">

                    {/* left side */}
                    <div className="flex flex-col gap-4 md:justify-between w-full md:max-w-122.5 h-auto md:h-76 p-4 md:py-10 md:pl-5">
                        <img src="rayban.png" alt="" className="h-7 w-[140px]"/>

                        <ScrollHighlightText className="text-[22px] md:text-[28px] leading-tight font-semibold">
                            "Results-driven and a pleasure to work with. Our ROI tripled in just three months!"
                        </ScrollHighlightText>

                        <div className="flex gap-4 items-center">
                            <img src="jake.jpg" alt="" className="size-[54px] rounded-full" />

                            <div className="w-full max-w-105 h-auto md:h-15">
                                <h5 className="text-[19px] font-semibold">Jake Thompson</h5>
                                <p>CEO, Digital Trends Solutions</p>
                            </div>
                        </div> 
                    </div>

                    {/* right side */}
                    <div className="flex flex-col justify-between items-center w-full md:max-w-122.5 h-auto md:h-79 font-semibold text-[18px]">

                        <div className="w-full h-29">
                            <h3 className="text-[#6430C0] text-[32px] sm:text-[40px] md:text-[60px]">5x</h3>
                            <h5>More deal-flow</h5>
                        </div>
                        <div className="w-full h-0.5 bg-[#F0F0F2]"></div>

                        <div className="w-full h-29 ">
                            <h3 className="text-[#6430C0] text-[32px] sm:text-[40px] md:text-[60px]">400%</h3>
                            <h5>Increase in revenue</h5>
                        </div>

                    </div>
                </div>

                </div>

            </div>

        </div>
    )

}
export default Eighth;