const data=[
    {
        img:"icon.jpg",
        title:"Paid Search",
        text:"Maximize Visibility and Conversions with Precision-targeted Ads through Our Expert Paid Search Campaigns."
    },
    {
        img:"icon.jpg",
        title:"Analytics & Reporting",
        text:"Gain Insights and Track Performance with Robust Analytics and Reporting."
    },
    {
        img:"icon.jpg",
        title:"Paid Social",
        text:" Amplify Reach with Strategic Paid Social Media Advertising."
    }
]

function First(){
    return(
        <div className="flex flex-col w-full items-center">
            {/* first component */}
            <div className="flex  justify-center w-full max-w-300 h-123 py-15 px-5">

                <div className="flex flex-col items-center justify-between w-full max-w-290 h-93">

                    <div className="flex flex-col items-center justify-between w-full max-w-290 h-51">
                        <p className="w-full h-[15px] text-sm text-[#bb94e5] text-center font-semibold">YOUR NEW MARKETING WEBSITE</p>
                        <h1 className="w-full max-w-200 h-[158px] text-[68px] text-white text-center leading-none "> Let's Build Your Online Success Story </h1>
                    </div>

                    <div className="flex flex-col items-center justify-between w-full max-w-125 h-37">
                        <p className="w-full  text-[18px] text-[#c7cbd4] text-center  font-semibold">We specialize in crafting data-driven digital campaigns that captivate your audience.</p>

                        <div className="flex justify-center items-center w-full max-w-52 h-14 ">
                            <span className="w-full max-w-52 px-5 py-[18px] bg-[#6430C0] rounded-2xl">
                                <p className="text-white text-center text-[16px]">Get This Template -</p>
                            </span>
                        </div>

                    </div>
                </div>
            </div>

            {/* second component */}
            <div className="flex justify-center w-full max-w-300 h-68 px-5">
            {data.map((item,index)=>(
                <div className="flex flex-col justify-between w-full max-w-[374px] h-68 p-[25px]">
                    <div key={index} className="flex flex-col justify-between w-full max-w-81 h-43">
                        <div className="flex flex-col justify-between w-full max-w-81 h-[85px]">
                            <div className="size-9 p-[6px] ">
                                <img src={item.img} alt="icon" className="size-6" />
                            </div>
                            <h3 className="w-full text-[20px] font-semibold ">{item.title} </h3>
                        </div>
                        <p> {item.text} </p>
                    </div>
                    <p className="w-full font-semibold ">Learn More -</p>
                </div>
            ))}
            </div>
        </div>
    )

}
export default First