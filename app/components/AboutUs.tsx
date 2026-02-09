function About(){
    return(
        <div className="flex flex-col items-center bg-[url('/theme2.jpg')] bg-cover bg-center h-screen">

            <div className=" flex flex-col items-center justify-center w-full max-w-[1104px] h-[568px] text-white ">
                <h1 className="text-[16px] text-sm text-[#bb94e5] text-center font-semibold pb-3">The vision behind the project</h1>
                <h1 className="text-[56px] text-sm text-center font-semibold pb-6">Turning Security into Innovation</h1>

                <div className="size-112 flex justify-center items-center relative ">
                    <img className="size-[448px]" src="about-illustration.svg" alt="" />
                    <img className="absolute mr-1/2 size-[72px] animate-float" src="about-icon.svg" alt="" />

                </div>
            </div>


            <div className=" flex items-center justify-center w-full h-[928px] text-white px-6">
                <h1 className="text-[46px] text-sm text-center font-semibold pb-6">Our Story (so far)</h1>


                {/* left side - image */}

                {/* <div className="size-112 flex justify-center items-center relative ">
                    <img className="w-[438px] h-[308px] rounded-xl -rotate-12" src="team.jpg" alt="" />
    
                </div> */}

                {/* right side */}
                {/* <div>
                    <p>
                        We came together over a shared excitement about building a product that could solve our own problem of where our next favourite hack is coming from. But also a product that helps everyone thrive in this market: from founders and engineers to companies and investors.
                    </p>

                    <p>
                        Stellar is a product that connects people around the topics and ideas that fascinate them. The idea that we can use technology to take our experience , as security lovers, to a new dimension and leave the computer industry in better shape while we're at it.             
                    </p>

                    <p>
                        You can dive into the atoms that make up a product, share the moments that move you and discuss the ideas you find compelling. We want to create a ground for discussion and bring knowledge together , while making it more accessible and easier to grasp.
                    </p>
                    <p>
                        Contrary to popular belief, this product is not random security. It has roots in a piece of classical literature, making it over 5 years old. Richard McClintock, a professor at  Hampden-Sydney College  in Virginia, looked up one of the more obscure words, consectetur from a passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                    </p>
                    <p>
                        We all thrive on learning something new every day and everyone is constantly trying on different hats. We are working with new technologies while rethinking an old industry and are excited about all the possibilities and opportunities to innovate.
                        It's a problem deeply ingrained in traditional sectors like startups and the wider service industry but which has been compounded in the past five to ten years by the emergence of the mostly tech-powered gig economy which has created a new generation of shift workers and indeed                 
                    </p>
                </div> */}
            </div>
            
        

        </div>
    )

}
export default About