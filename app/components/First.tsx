const data=[
    {
        img:"search1.png",
        title:"Paid Search",
        text:"Maximize Visibility and Conversions with Precision-targeted Ads through Our Expert Paid Search Campaigns."
    },
    {
        img:"analytics.png",
        title:"Analytics & Reporting",
        text:"Gain Insights and Track Performance with Robust Analytics and Reporting."
    },
    {
        img:"social.png",
        title:"Paid Social",
        text:" Amplify Reach with Strategic Paid Social Media Advertising."
    }
]

function First(){
    return(
        <div className="flex flex-col w-full items-center">
            {/* first component */}
            <div className="flex  justify-center w-full max-w-300 h-[464px] sm:h-94 md:h-123 py-10 md:py-15 px-5">

                <div className="flex flex-col items-center justify-between w-full max-w-290 h-[384px] sm:h-[296px] md:h-93">

                    <div className="flex flex-col items-center justify-between w-full max-w-290 h-[192px] sm:h-33 md:h-51">
                        <p className="w-full h-[15px] text-sm text-[#bb94e5] text-center font-semibold">YOUR NEW MARKETING WEBSITE</p>
                        <h1 className="w-full max-w-200 h-[132px] sm:h-[88px] md:h-[158px] text-[38px] md:text-[68px] text-white text-center leading-tight "> Digital Ka Saath <br/> Aapke Business Ka Vikas </h1>
                    </div>

                    <div className="flex flex-col items-center justify-between w-full max-w-125 h-[172px] sm:h-35 md:h-37">
                        <p className="w-full  text-[18px] text-[#c7cbd4] text-center  font-semibold">We specialize in crafting data-driven digital campaigns that captivate your audience.</p>

                        <div className="flex justify-center items-center w-full max-w-52 h-14 px-5 py-[18px] bg-[#6430C0] rounded-2xl">    
                            <p className="w-full text-white text-center text-[16px]">Get This Template -</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* second component */}
            <div className="flex flex-col md:flex-row justify-between w-full max-w-300 h-[820px] sm:h-167 md:h-68 px-5">
            {data.map((item,index)=>(
                <div className="flex flex-col justify-between text-white rounded-3xl bg-[#F8F8F91A] text-center w-full md:max-w-[374px] h-auto sm:h-51 md:h-68 p-5 md:p-[25px] ">
                    
                    <div key={index} className="flex flex-col justify-between w-full md:max-w-81 h-[172px] sm:h-[140px] md:h-43">
                        <div className="flex flex-col justify-between items-center w-full md:max-w-81 h-[85px]">
                            <div className=" size-9 p-[6px] bg-[#C1A6DE] rounded-lg">
                                <img src={item.img} alt="icon" className="size-6" />
                            </div>
                            <h3 className="w-full font-semibold text-[20px] ">{item.title} </h3>
                        </div>
                        <p className="h-auto"> {item.text} </p>
                    </div>
                    <p className="w-full font-semibold">Learn More -</p>
                </div>
            ))}
            </div>
        </div>
    )

}
export default First