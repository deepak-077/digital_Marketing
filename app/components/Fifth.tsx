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
        <div className="flex  justify-center ">
            <div className="flex flex-col justify-between items-center w-full max-w-300 h-191 px-5 pt-25 pb-[150px]">
            
            {/* Top part */}
            <div className="flex flex-col items-center justify-between w-full max-w-[615px] h-[142px]">
                <p className="w-full  font-semibold text-[#6430c0] text-center">BENEFITS</p>
                <h2 className="w-full text-[44px] font-semibold leading-none text-center">Crafting Digital Experiences That Resonate</h2>
            </div>

            {/* Bottom part */}
            <div className="flex items-center justify-between w-full max-w-290 h-[334px]">
                {data.map((item,index)=>(

                    <div key={index} className="flex flex-col justify-between shadow-xl w-full max-w-94 h-[334px] p-[30px] rounded-3xl bg-[#f8f8f9]">
                        <img src={item.img} alt="" className="w-full max-w-79 h-41"/>

                        <div className="flex flex-col h-[90px] justify-between">
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