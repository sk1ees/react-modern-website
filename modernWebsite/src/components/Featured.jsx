import { delay, motion } from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {

    const [isHovering, setHovering] = useState(false);
    const [isHoveringSecond, setHoveringSecond] = useState(false);
    const [isHoveringThird, setHoveringThird] = useState(false);
    const [isHoveringFourth, setHoveringFourth] = useState(false);
    return (
        <>
            <div className="w-full py-20 bg-slate-50 cursor-[url(https://cdn.custom-cursor.com/db/4906/32/arrow2786.png),_pointer]">

                <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10">
                    <h1 className='font-["Neue_Montreal"] text-7xl tracking-tight text-black' >Featured projects</h1>
                </div>
                <div className=" px-20 ">

                    <div className="cards w-full flex gap-5 mt-10 cursor-[url(https://cdn.custom-cursor.com/db/4905/32/arrow2786.png),_pointer]">

                        <div
                            onMouseEnter={() => setHovering(true)}
                            onMouseLeave={() => { setHovering(false) }}
                            className="cardcontainer w-1/2 h-[75vh]  relative  ">
                            <h1 className='absolute flex  left-full overflow-hidden  z-[9] text-9xl -translate-x-1/2 top-1/2 -translate-y-1/2 font-semibold font-["Founders_Grotesk_X"] text-[#CDEA68]'>

                                {"FYDE".split('').map((item, index) => (

                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={isHovering ? ({ y: "0%" }) : ({ y: "100%", opacity: "100%" })}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}
                                        className='inline-block' key={index}>{item}</motion.span>

                                ))}

                            </h1>
                            <div className="card w-full h-full rounded-xl overflow-hidden  ">

                                <motion.img whileHover={{ scale: 0.95 }} transition={{ ease: "linear", duration: 0.2 }} className='w-full h-full rounded-xl overflow-hidden' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" srcset="" />
                            </div>
                            <div className="text-black uppercase flex mt-5 gap-5">
                                <a href="#_" class="relative  items-center justify-start  px-3 py-1 overflow-hidden  rounded-full group border-zinc-500 border-2 cursor-[url(https://cdn.custom-cursor.com/db/4905/32/arrow2786.png),_pointer]">

                                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                                    <span class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-zinc-100">Audit</span>

                                </a>
                                <a href="#_" class="relative  items-center justify-start  px-3 py-1 overflow-hidden  rounded-full group border-zinc-500 border-2 cursor-[url(https://cdn.custom-cursor.com/db/4905/32/arrow2786.png),_pointer]">

                                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                                    <span class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-zinc-100">copywriting</span>

                                </a>
                                <a href="#_" class="relative  items-center justify-start  px-3 py-1 overflow-hidden  rounded-full group border-zinc-500 border-2 cursor-[url(https://cdn.custom-cursor.com/db/4905/32/arrow2786.png),_pointer]">

                                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                                    <span class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-zinc-100">sales deck</span>

                                </a>
                                <a href="#_" class="relative  items-center justify-start  px-3 py-1 overflow-hidden  rounded-full group border-zinc-500 border-2 cursor-[url(https://cdn.custom-cursor.com/db/4905/32/arrow2786.png),_pointer]">

                                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                                    <span class="relative w-full text-left text-zinc-800 transition-colors duration-200 ease-in-out group-hover:text-zinc-100">slides design</span>

                                </a>
                            </div>

                        </div>
                        <div
                            onMouseEnter={() => setHoveringSecond(true)}
                            onMouseLeave={() => { setHoveringSecond(false) }}

                            className="cardcontainer  w-1/2 h-[75vh] mb-10  relative ">
                            <h1 className='absolute flex overflow-hidden right-full  z-[9] text-9xl translate-x-1/2 top-1/2 -translate-y-1/2 font-semibold font-["Founders_Grotesk_X"] text-[#CDEA68]'>

                                {"VISE".split('').map((item, index) =>
                                (
                                    <motion.span
                                        initial={{ y: "100%", opacity: "0%" }}
                                        animate={isHoveringSecond ? ({ y: "0%", opacity: "100%" }) : ({ y: "100%", opacity: "0%" })}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}
                                        className='inline-block' key={index}>{item}</motion.span>
                                )

                                )}

                            </h1>
                            <div className="card w-full h-full rounded-xl overflow-hidden  ">

                                <motion.img whileHover={{ scale: 0.95 }} transition={{ ease: "linear", duration: 0.2 }} className='w-full h-full rounded-xl overflow-hidden' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" srcset="" />
                            </div>
                            <div className="text-black uppercase flex mt-5   gap-5">
                                <a href="#_" class="relative  items-center justify-start  px-3 py-1 overflow-hidden  rounded-full group border-zinc-500 border-2 cursor-[url(https://cdn.custom-cursor.com/db/4905/32/arrow2786.png),_pointer]">

                                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                                    <span class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-zinc-100">brand identity</span>

                                </a>
                                <a href="#_" class="relative  items-center justify-start  px-3 py-1 overflow-hidden  rounded-full group border-zinc-500 border-2 cursor-[url(https://cdn.custom-cursor.com/db/4905/32/arrow2786.png),_pointer]">

                                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                                    <span class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-zinc-100">design research</span>

                                </a>
                                <a href="#_" class="relative  items-center justify-start  px-3 py-1 overflow-hidden  rounded-full group border-zinc-500 border-2 cursor-[url(https://cdn.custom-cursor.com/db/4905/32/arrow2786.png),_pointer]">

                                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                                    <span class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-zinc-100">investor deck</span>

                                </a>

                            </div>
                        </div>
                    </div>

                    <div className="cards w-full flex gap-5 mt-10 cursor-[url(https://cdn.custom-cursor.com/db/4905/32/arrow2786.png),_pointer]">

                        <div
                            onMouseEnter={() => setHoveringThird(true)}
                            onMouseLeave={() => { setHoveringThird(false) }}
                            className="cardcontainer w-1/2 h-[75vh]  relative  ">
                            <h1 className='absolute flex  left-full overflow-hidden  z-[9] text-9xl -translate-x-1/2 top-1/2 -translate-y-1/2 font-semibold font-["Founders_Grotesk_X"] text-[#CDEA68]'>

                                {"TRAWA".split('').map((item, index) => (

                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={isHoveringThird ? ({ y: "0%", opacity: "100%" }) : ({ y: "100%", opacity: "0%" })}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .02 }}
                                        className='inline-block' key={index}>{item}</motion.span>

                                ))}

                            </h1>
                            <div className="card w-full h-full rounded-xl overflow-hidden  ">

                                <motion.img whileHover={{ scale: 0.95 }} transition={{ ease: "linear", duration: 0.2 }} className='w-full h-full rounded-xl overflow-hidden' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" srcset="" />
                            </div>
                            <div className="text-black uppercase flex mt-5 gap-5 ">
                                <a href="#_" class="relative  items-center justify-start  px-3 py-1 overflow-hidden  rounded-full group border-zinc-500 border-2 cursor-[url(https://cdn.custom-cursor.com/db/4905/32/arrow2786.png),_pointer]">

                                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                                    <span class=" relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-zinc-100 ">agency</span>

                                </a>
                                <a href="#_" class="relative  items-center justify-start  px-3 py-1 overflow-hidden  rounded-full group border-zinc-500 border-2 cursor-[url(https://cdn.custom-cursor.com/db/4905/32/arrow2786.png),_pointer]">

                                    <span class="absolute top-0 left-0 w-52 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-96 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-[-1px] "></span>
                                    <span class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-zinc-100">company presentations</span>

                                </a>

                            </div>

                        </div>
                        <div
                            onMouseEnter={() => setHoveringFourth(true)}
                            onMouseLeave={() => { setHoveringFourth(false) }}

                            className="cardcontainer  w-1/2 h-[75vh] mb-10  relative ">
                            <h1 className='absolute flex overflow-hidden right-full  z-[9] text-9xl translate-x-1/2 top-1/2 -translate-y-1/2 font-semibold font-["Founders_Grotesk_X"] text-[#CDEA68]'>

                                {"BEAN".split('').map((item, index) =>
                                (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={isHoveringFourth ? ({ y: "0%" }) : ({ y: "100%", opacity: "100%" })}
                                        transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }}
                                        className='inline-block' key={index}>{item}</motion.span>
                                )

                                )}

                            </h1>
                            <div className="card w-full h-full rounded-xl overflow-hidden  ">

                                <motion.img whileHover={{ scale: 0.95 }} transition={{ ease: "linear", duration: 0.2 }} className='w-full h-full rounded-xl overflow-hidden' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" srcset="" />
                            </div>
                            <div className="text-black uppercase flex mt-5   gap-5">
                                <a href="#_" class="relative  items-center justify-start  px-3 py-1 overflow-hidden  rounded-full group border-zinc-500 border-2 cursor-[url(https://cdn.custom-cursor.com/db/4905/32/arrow2786.png),_pointer]">

                                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-black opacity-100 group-hover:-translate-x-8"></span>
                                    <span class="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-zinc-100">branded template</span>

                                </a>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured
