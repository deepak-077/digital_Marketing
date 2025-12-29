const faqs=[
    {
        question:"Is it hard to customize this template?",
        desc:"Ideal for those seeking precision and confidence with advanced AI.",
        
    },
    {
        question:"Is support available in case I get stuck?",
        desc:"Ideal for those seeking precision and confidence with advanced AI.",
        
    },
    {
        question:"What can I customize exactly on this template?",
        desc:"Ideal for those seeking precision and confidence with advanced AI.",
        
    },
]

function Tenth(){
    return(
        <div className="flex justify-center h-auto md:h-265 bg-[#F8F8F9]">

            <div className="flex flex-col gap-4 md:justify-between items-center w-full lg:max-w-300 h-auto md:h-265 py-[100px] md:py-[150px] px-5 ">

                {/* First component */}
                <div className="w-full md:max-w-153 h-35 flex flex-col justify-between">
                    <p className="text-[#6430C0] font-semibold text-center">FAQ</p>
                    <h2 className="text-[32px] sm:text-[36px] md:text-[42px] font-semibold text-center leading-tight">Frequently Asked Questions</h2>
                </div>

                {/* Second component */}


                <div className="w-full md:max-w-200 h-auto md:h-75 flex flex-col gap-2.5 md:justify-between">

                    <div className="w-full md:max-w-200 h-auto md:h-60 flex flex-col gap-2.5 md:justify-between">
                    
                        {faqs.map((item,index)=>(    
                            <div className="w-full md:max-w-200 h-auto md:h-17 flex flex-col gap-2.5 md:justify-between bg-[#F8F8F9] rounded-4xl ">
                            
                                <div className="flex gap-3 sm:gap-4 md:gap-5 items-center bg-[#FFFFFF] rounded-2xl p-5">
                                    <h5 className="w-full text-[18px] font-medium">{item.question}</h5>
                                    <img src="plus.png" alt="" className="size-4"/>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="w-full h-14 bg-[#6430C0] text-white text-[18px] font-medium rounded-2xl"> Get This Template -</button>
                </div>  
            </div>
        </div>
    )
}
export default Tenth;