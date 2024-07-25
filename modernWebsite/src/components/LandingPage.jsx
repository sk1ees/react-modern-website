import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {
    return (
        <div className="w-full h-screen bg-zinc-900 pt-1">

            <div className="textStructure mt-52 px-20">
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return (
                        < div className="masker" key={index} >
                            <div className="w-fit flex items-center overflow-hidden">
                                {index === 1 && (<div className=' m-4 rounded-lg w-[10vw] h-[6vw] relative top-[0.4vw]  bg-red-500 `'></div>)}
                                <h1 className=' flex items-center uppercase text-[8.5vw] h-full leading-[7vw] font-bold font-["Founders_Grotesk_X-Condensed]'>{item}</h1>

                            </div>
                        </div>
                    )
                })}

            </div>
            <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">

                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
                    return (
                        <p key={index} className='text-md font-light tracking-tight leading-none'>
                            {item}
                        </p>
                    )
                })}
                <div className="start flex items-center gap-5">
                    <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase">Start the Project</div>
                    <div className="w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full">
                        <span className='rotate-45'>

                            <FaArrowUpLong />

                        </span>


                    </div>
                </div>
            </div>
        </div >
    )
}

export default LandingPage
