import HeroImage from '/hero.webp'
export const Hero = () => {
    return (
        <div className="w-full flex flex-col md:flex-row-reverse items-center md:gap-32 bg-[#1d232a] text-white p-6 h-screen">
            <div>
                <img src={HeroImage} />
            </div>
            <div className="flex flex-col justify-center items-center gap-10 text-center lg:text-left px-8 py-8 lg:items-start md:w-[50%]">
                <div className="flex justify-center items-center text-left">
                    <h2 className="font-extrabold text-4xl lg:text-5xl tracking-tight">Acquire and Scale Micro Startups</h2>
                </div>
                <div className='flex'>
                    <p className="tracking-widest text-[18px]">
                        Buy and Sell Micro Startups In the Pre-Revenue Stage or With Revenues. Always Under $25K!
                    </p>
                </div>
                <button className="bg-[#6419e6] p-3 w-[300px] rounded">View Listings</button>
            </div>
        </div>
    )
}
