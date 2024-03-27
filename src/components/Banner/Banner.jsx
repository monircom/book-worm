
const Banner = () => {
    return (
        <div>
            <div className="container mx-auto mb-20">
                <div className="bg-[#12132D]  rounded-[32px] lg:min-h-[550px]"
                
                >
                    <div className="flex flex-col justify-center items-center p-3 m-2">                        
                        <h1
                                className="text-white text-3xl  lg:text-[52px]/[76px] text-center font-bold mt-[35px] lg:mt-[130px] mb-6 lg:max-w-[900px]">
                                Discover an exceptional cooking class tailored for you!
                            </h1>
                            <p className="text-white text-center lg:text-lg lg:max-w-[900px] mb-8 mx-3">
                                Indulge in a personalized culinary adventure with our tailored cooking classes. Whether you are a beginner or a seasoned chef, our expert instructors will guide you through an unforgettable experience.</p>
    
                            <div>
                                <button 
                                    className="btn bg-[#0BE58A] text-[#150B2B] lg:text-xl px-8 rounded-full mr-6">Explore Now
                                </button>
                                <button 
                                className="btn btn-ghost btn-outline text-white lg:text-xl px-5 rounded-full ">Our Feedback
                            </button>
                            </div>  
                    </div>    
                </div>
            </div>
        </div>
    );
};

export default Banner;