export const Navbar = () => {
    return (
        <div className="bg-[#191e24] p-6 w-full text-white h-24 flex justify-between items-center ">
            <div className="flex gap-6 font-semibold ">
                <h2 className="text-xl ">BuyMicroStartups</h2>
            </div>
            <div className="flex gap-6 font-semibold ">
                <h2>Guides</h2>
                <h2>Marketplace</h2>
            </div>
            <div className="flex gap-6 font-semibold items-center">
                <h2>Sign In</h2>
                <button className="bg-[#6419e6] p-3 w-[200px] rounded">Sell Your Startup</button>
            </div>
        </div>
    )
}
