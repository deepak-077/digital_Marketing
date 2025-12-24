const cards=[
    {
        num:"$1M+",
        desc:"Revenue Generated"
    },
    {
        num:"200",
        desc:"Happy Clients"
    },
    {
        num:"340K",
        desc:"In ad spending every month"
    },
    {
        num:"425",
        desc:"Worldwide locations"
    },

]


function Eighth(){
    return(
        <div className="flex justify-center h-268 bg-[#F8F8F9]">

            <div className="flex flex-col justify-between items-center w-full max-w-300 h-268 py-[150px] px-5">

                {/* First component */}
                <div className="w-full max-w-153 h-35 flex flex-col justify-between">
                    <p className="text-[#6430C0] font-semibold text-center">FROM STRATEGY TO ACTION</p>
                    <h2 className="text-[42px] font-semibold text-center leading-tight">Unleash the Power of Our Dynamic Service Portfolio</h2>
                </div>

                {/* Second component */}
                <div className="w-290 h-146 flex flex-col justify-between">

                    {/* Stats */}
                <div className="flex items-center w-290 h-[150px] justify-between rounded-4xl">

                    {/* cards */}
                    {cards.map((item,index)=>(
                        
                    <div className="w-full max-w-[278px] h-[150px] p-[30px] flex flex-col justify-between bg-[#ffffff] shadow-2xl rounded-3xl">
                        <div className="text-[#6430C0] font-semibold text-center text-[40px]">{item.num}</div>
                        <p className="text-center ">{item.desc}</p>
                    </div>
                    ))}
                </div>

                {/* Company Growth Summary */}
                <div className="flex justify-between w-290 h-104 p-10  rounded-3xl bg-[#FFFFFF]">

                    {/* left side */}
                    <div className="flex flex-col justify-between w-122.5 h-76 py-10 pl-5">
                        <img src="rayban.png" alt="" className="h-7 w-[140px]"/>
                        <h3 className="text-[28px] leading-tight font-semibold">"Results-driven and a pleasure to work with. Our ROI tripled in just three months!"</h3>
                        <div className="flex gap-4 items-center">
                            <img src="jake.jpg" alt="" className="size-[54px] rounded-full" />

                            <div className="w-105 h-15">
                                <h5 className="text-[19px] font-semibold">Jake Thompson</h5>
                                <p>CEO, Digital Trends Solutions</p>
                            </div>
                        </div> 
                    </div>

                    {/* right side */}
                    <div className="flex flex-col justify-between items-center w-122.5 h-79 font-semibold text-[18px]">

                        <div className="w-full h-29">
                            <h3 className="text-[#6430C0] text-[60px]">5x</h3>
                            <h5>More deal-flow</h5>
                        </div>
                        <div className="w-full h-0.5 bg-[#F0F0F2]"></div>

                        <div className="w-full h-29 ">
                            <h3 className="text-[#6430C0] text-[60px]">400%</h3>
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