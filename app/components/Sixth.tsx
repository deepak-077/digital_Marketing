function Sixth(){
    return(
        <div className="flex justify-center bg-[url(/theme.jpg)] h-391 py-[150px] px-5">

            <div className="flex flex-col justify-between w-full max-w-300 h-316">

                {/* First component */}
                <div className="w-full max-w-300 h-[94px] flex flex-col justify-between text-white">
                    <p className="text-[#BB94E5] font-semibold text-center">SUCCESS STORIES</p>
                    <h2 className="text-[44px] font-semibold text-center">Unveiling Our Digital Triumphs</h2>
                </div>

                {/* Second component */}
                <div className="bg-[url(/cover.jpg)] bg-top-right flex justify-between w-300 h-135 p-10 text-white rounded-4xl">

                    {/* left side */}
                    <div className="flex flex-col justify-between w-130 h-115 py-10 pl-5">

                        <div className="w-125 h-[238px] flex flex-col justify-between">
                            <p className="w-full text-[#BB94E5] font-semibold">GLOBAL VENTURES INC.</p>
                            <h2 className="text-[46px] text-wrap">Data-Driven Dominance</h2>
                            <p className="text-[18px]">See the power of data in action as we break down how analytics-driven decisions led to a surge in campaign effectiveness.</p>
                        </div>

                        {/* metrics */}
                        <div className="flex gap-7">

                            <div className="h-[26px] flex gap-2 items-center">
                                <img src="" alt="" className="size-5"/>
                                <h5>900% increase in ROI</h5>
                            </div>

                            <div className="h-[26px] flex gap-2 items-center">
                                <img src="" alt="" className="size-5"/>
                                <h5>40% decrease in CAC</h5>
                            </div>
                        </div>

                        <div className="w-59 h-14 bg-[#6430C0] px-5 py-[18px]">
                            <p className="text-[18px]">Read full case study - </p>
                        </div>

                    </div>

                    {/* right side */}
                    <div className="flex justify-center items-center w-135 h-115 p-5">
                        <img src="three.png" alt="" />
                    </div>
                </div>

                {/* Third component */}
                <div className="bg-[url(/cover.jpg)] bg-top-right flex justify-between w-300 h-135 p-10 text-white rounded-4xl">

                    {/* left side */}
                    <div className="flex flex-col justify-between w-130 h-115 py-10 pl-5">

                        <div className="w-125 h-[238px] flex flex-col justify-between">
                            <p className="w-full text-[#BB94E5] font-semibold">TECH INNOVATE CO.</p>
                            <h2 className="text-[46px] text-wrap">SEO Success Blueprint</h2>
                            <p className="text-[18px]">Witness the impact of our SEO strategies as we unveil the rise in organic traffic and search engine rankings for our clients.</p>
                        </div>

                        {/* metrics */}
                        <div className="flex gap-7">

                            <div className="h-[26px] flex gap-2 items-center">
                                <img src="" alt="" className="size-5"/>
                                <h5>260% Increase in ROI</h5>
                            </div>

                            <div className="h-[26px] flex gap-2 items-center">
                                <img src="" alt="" className="size-5"/>
                                <h5>90% Increase in ROAS</h5>
                            </div>
                        </div>

                        <div className="w-59 h-14 bg-[#6430C0] px-5 py-[18px]">
                            <p className="text-[18px]">Read full case study - </p>
                        </div>
                        
                    </div>

                    {/* right side */}
                    <div className="flex justify-center items-center w-135 h-115 p-5">
                        <img src="four.png" alt="" />
                    </div>
                </div>




            </div>

            
            


        </div>
    )

}
export default Sixth;