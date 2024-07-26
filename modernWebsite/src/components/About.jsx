import React from 'react'

const About = () => {
    return (
        <>
            <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
                <h1 className='font-["Neue_Montreal"]  text-[4.5vw] leading-[4.5vw] tracking-tight' >Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

                <div className="w-full flex gap-5 border-t-[1px] border-[#a1b562] mt-20 pt-10">

                    <div className="w-1/2 ">
                        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Our approach:</h1>
                        <button className='px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 flex gap-10 items-center uppercase'>Read More

                            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
                        </button>
                    </div>
                    <div className="w-1/2 h-[70vh] bg-[#b4ce57] rounded-3xl">

                    </div>
                </div>
            </div>
        </>
    )
}

export default About
