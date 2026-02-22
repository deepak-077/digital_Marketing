const reviews=[
    {
        img:"copyright.png",
        name:"Alex Rodriguez",
        title:"Director of Operations, Global Ventures Inc.",
        review:"Incredible attention to detail. They optimized every aspect of our digital strategy."
    },
    {
        img:"copyright.png",
        name:"Jake Thompson",
        title:"Founder & CEO, Digital Trends Solutions",
        review:"They transformed our business! Their creative solutions and strategic approach boosted online presence and drove significant customer growth."
    },
    {
        img:"copyright.png",
        name:"Emily Chen",
        title:"E-commerce Entrepreneur, Luxe Styles Boutique ",
        review:"They transformed our social media game—our sales have never been better!"
    },
    {
        img:"copyright.png",
        name:"Samantha Williams",
        title:"Marketing Manager, Tech Innovate Co.",
        review:"Our online presence skyrocketed thanks to their genius strategies! Couldn't be happier."
    },
    {
        img:"copyright.png",
        name:"Sophie Patel",
        title:"Founder, Urban Bites Food Truck",
        review:"Their tailored approach made our small business stand out in a big way!"
    },
    {
        img:"copyright.png",
        name:"Chris Reynolds",
        title:"VP of Sales, Elite Fitness Solutions",
        review:"Exceptional analytics! Their insights have revolutionized our marketing approach."
    },
]

function Seventh(){
    return(

        <div className="flex justify-center">

            <div className="flex flex-col items-center gap-7 justify-center h-272 py-[150px] px-5">

            {/* first */}
            <div className="flex flex-col justify-between h-[142px] w-full max-w-150">
                <p className="text-[#6430C0] font-semibold text-center">TESTIMONIALS</p>
                <h2 className="text-[46px] text-center font-semibold leading-tight"> Hear What Our Clients Have to Say </h2>
            </div>

            {/* second */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-151 w-full max-w-290">
                {reviews.map((item,index)=>(
                    <div key={index} className=" w-full max-w-94 bg-[#F8F8F9] p-[30px] ">
                        <p className="w-full max-w-79 ">{item.review}</p>
                        <div className="h-0.5 w-full"></div>
                        <div className="flex flex-col w-full max-w-79 h-auto md:h-[78px] ">
                            <h5 className="text-[18px] font-semibold">{item.name}</h5>
                            <p>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        </div>
    )
}
export default Seventh