const services=[
    { img: "web.gif",
      title: "Website Design & Development",
      description: "Elevate your brand with stunning web design & development for impactful online experiences."
    },
    { img: "seo.gif",
      title: "Search Engine Optimization",
      description: "Partner with a top SEO agency in Ranchi or Gaya to optimize strategies and drive results."
    },
    { img: "brand.gif",
      title: "Branding & Promotion",
      description: "Our team crafts unique brands, drives promotions, and boosts visibility through audience engagement."
    },
    { img: "abc.jpeg",
      title: "Graphic Design",
      description: "Create visually stunning designs that communicate your brand’s message effectively with expert graphic design."
    },
    { img: "google.gif",
      title: "Google my Business",
      description: "Stand out from the competition on the world’s most popular search engine with Google My Business."
    },
    { img: "social.gif",
      title: "Social Media Marketing",
      description: "Build connections and drive growth with engaging social media campaigns that deliver real results."
    },
]

export default function One(){
    return (
        <div className="flex justify-center w-full h-[1028px] p-10">

            <div className="flex flex-col w-[1260px] h-[928px] gap-5">

                <div className="w-[1060px] h-[98px] p-2.5">
                    <h2 className="h-[50px] text-[39px] font-bold  ">WHAT WE OFFER</h2>
                    <h2 className="text-[18px] font-semibold">We’re here to help turn your ideas into something amazing.</h2>
                </div>

                <div className="grid grid-cols-3 gap-5">
                    {services.map((item,index)=>(
                        <div className="flex justify-center items-center w-[412px] h-[380px] bg-[#F8F8F9] rounded-4xl">
                            
                            <div className="flex flex-col gap-4 w-[382px] h-[348px] m-3.5 p-10 bg-[#FFFFFF] rounded-4xl">
                                <img className="size-25" src={item.img} alt="" />
                                <div className="pt-[15px]">
                                    <h6 className="text-[18px] font-semibold">{item.title}</h6>

                                </div>
                                
                                <div>{item.description}</div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}
    
