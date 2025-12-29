const data=[
    {
        img:"copyright.png",
        title:"Ad Copywriting",
        text:"Captivating ad copy for action-driven results."
    },
    {
        img:"search.png",
        title:"Paid Search",
        text:"Boost visibility and conversions with expert campaigns."
    },
    {
        img:"target.png",
        title:"Precise Targeting",
        text:"Pinpoint your ideal audience with precision targeting."
    }
]

function Fifth(){
    return(

        // the div containing top and bottom component is restricted to a width of 773px
        <div className="flex justify-center ">
            <div className="flex flex-col gap-5 lg:justify-between items-center w-full lg:max-w-300 h-auto lg:h-191 px-5 pt-15 md:pt-20 lg:pt-25 pb-25 md:pb-[150px]">
            
            {/* Top part */}
            <div className="flex flex-col items-center justify-between w-full lg:max-w-[615px] h-[142px]">
                <p className="w-full  font-semibold text-[#6430c0] text-center">BENEFITS</p>
                <h2 className="w-full text-[32px] sm:text-[36px] lg:text-[44px] font-semibold leading-none text-center">Crafting Digital Experiences That Resonate</h2>
            </div>

            {/* Bottom part */}
            <div className="flex flex-col md:flex-row items-center gap-3 md:justify-between w-full max-w-290 h-auto lg:h-[334px]">
                {data.map((item,index)=>(

                    <div key={index} className="flex flex-col justify-between items-center shadow-xl w-full  md:max-w-94 h-[334px] p-[30px] rounded-3xl bg-[#f8f8f9]">
                        <img src={item.img} alt="" className="w-full max-w-79 h-41 sm:w-[300px]"/>

                        <div className="flex flex-col h-[90px] justify-between sm:gap-3 sm:h-auto">
                            <h3 className="font-semibold text-[22px] text-center"> {item.title}</h3>
                            <p className="text-center">{item.text}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
        </div>   
    )

}
export default Fifth