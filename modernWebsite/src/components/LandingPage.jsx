import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {

    return (
        <div data-scroll data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1 cursor-[url(https://cdn.custom-cursor.com/db/4906/32/arrow2786.png),_pointer]">

            <div className="textStructure mt-52 px-20 ">
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return (
                        < div className="masker" key={index} >
                            <div className="w-fit flex items-center overflow-hidden ">
                                {index === 1 && (
                                    <motion.img initial={{ width: 0, opacity: "0%" }} animate={{ width: "9vw", opacity: "100%" }} transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }} src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" srcset="" className=' m-4 rounded-lg w-[10vw] h-[6vw] relative top-[0.4vw]  `' />

                                )}
                                <h1 className=' flex items-center uppercase text-[8.5vw] h-full leading-[7vw] font-bold font-["Founders_Grotesk_X-Condensed] tracking-tight'>{item}</h1>

                            </div>
                        </div>
                    )
                })}

            </div>
            <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">

                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
                    return (
                        <motion.p initial={{ y: "300%" }} animate={{ y: "0%" }} transition={{ ease: "linear", duration: 0.5 }} key={index} className='text-md font-light tracking-tight leading-none'>
                            {item}
                        </motion.p>
                    )
                })}
                <div className="start flex items-center gap-5">
                    <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase cursor-[url(https://cdn.custom-cursor.com/db/4905/32/arrow2786.png),_pointer]">Start the Project</div>
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
