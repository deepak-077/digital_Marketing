const details=[
    {
        img:"call.gif",
        method:"CALL US ",
        detail:"xxxxxx7739 "
    },
    {
        img:"email.gif",
        method:" EMAIL US",
        detail:"ganeshadigiads@gmail.com "
    },
    {
        img:"location.gif",
        method:"VISIT US ",
        detail:" Nucleus Mall,Circular Road Ranchi,Jharkhand (834001)  "
    },
    
]

export default function Contact(){
    return(
        <div className="flex flex-col items-center w-full max-w-[1470px] h-[944px] p-2.5">

            <div className="w-[770px] h-[140px] p-2.5">
                <h3 className="text-[39px] h-[42px] w-full mb-[16px] font-bold">LET'S CONNECT</h3>
                <h2 className="font-semibold">We’d love to hear from you.
                <br/>let’s create something together.</h2>
            </div>

            <div className="flex ">
                {/* left component */}
                <div className="w-[450x] h-[680px] px-4 pb-4 gap-3 border border-amber-400">
                    {details.map((item,index)=>(
                        <div className="flex justify-center items-center w-[420px] h-auto bg-[#F8F8F9] p-[5px] rounded-4xl">
                            <div className="flex flex-col items-center w-[400px] h-auto  bg-[#FFFFFF] text-black gap-1 rounded-4xl p-2.5">
                            <img className="size-[80px]" src={item.img} alt="" />
                            <h1>{item.method}</h1>
                            <h3>{item.detail}</h3>

                        </div>


                        </div>
                        
                    ))}
                    
                </div>

                {/* right component */}
                <div className="w-[808px] h-[680px] border border-amber-500 ">


                    {/* info fields */}
                    <div className="w-[686px] h-[410px] ">

                    </div>


                </div>

                {/* modify this */}
                {/* <div className="w-full lg:max-w-290 h-auto md:h-164 flex flex-col gap-5 md:flex-row  md:justify-between p-[5px] rounded-4xl">
                    
                    {details.map((item,index)=>(    
                        <div className="w-full max-w-143 h-164 flex flex-col justify-between bg-[#F8F8F9] p-[5px] rounded-4xl ">

                            <div className="w-full h-105 flex flex-col justify-between bg-[#FFFFFF] p-[30px] rounded-4xl">
                                <h3 className="text-[26px] font-semibold">{item.name}</h3>
                                <p className="text-[18px]">{item.desc}</p>
                                <h3 className="text-[44px] font-semibold text-[#6430c0]">{item.monthly_price}</h3>
                                <p className="text-[18px] font-semibold">{item.yearly_price}</p>

                                <div className="w-full h-[118px] flex flex-col justify-between">
                                    <button className="w-full h-14 bg-[#6430c0] text-white rounded-2xl font-semibold">Get This Plan-</button>
                                    <button className="w-full h-13 border-2 border-[#6430c0] text-[#6430c0] rounded-2xl font-semibold">Talk To an Expert</button>
                                </div>
                                
                            </div>

                            <div className="w-full h-48 flex flex-col justify-between p-[25px]">
                                    
                                {item.features.map((feature,index)=>(
                                    <div className="flex gap-2 items-center text-[20px]">
                                        <img src="tick.png" alt="" className="size-5 "/>
                                        <p >{feature}</p>
                                    </div>
                                ))}
                            </div>

                    
                        </div>
                    ))}
                    
                </div> */}
            </div>


        </div>
    )
}