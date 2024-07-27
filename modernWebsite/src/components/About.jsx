import { motion } from 'framer-motion'
import React from 'react'

const About = () => {

    return (
        <>
            <div data-scroll data-scroll-speed="-.1" className="cursor-[url(https://cdn.custom-cursor.com/db/4906/32/arrow2786.png),_pointer] w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
                <h1 className='font-["Neue_Montreal"]  text-[3.9vw] leading-[4.5vw] tracking-tight' >Ochi is a strategic partner for fast-grow­ing tech <br /> businesses that need to <u className='decoration-4 underline-offset-[2vh]'>raise funds</u>, <u className='decoration-4 underline-offset-[2vh]'>sell products</u>, <br /><u className='decoration-4 underline-offset-[2vh]'>explain complex ideas</u> , and hire <u className='decoration-4 underline-offset-[2vh]'>great people.</u></h1>

                <div className="w-full flex gap-5 border-t-[1px] border-[#a1b562] mt-20 pt-10">

                    <div className="w-1/2 ">
                        <h1 className='text-7xl font-["Neue_Montreal"] tracking-tight'>Our approach:</h1>
                        <button className=' px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 flex gap-10 items-center uppercase cursor-[url(https://cdn.custom-cursor.com/db/4905/32/arrow2786.png),_pointer]'>Read More

                            <div className="w-4 h-4 bg-zinc-100 rounded-full"></div>
                        </button>
                    </div>
                    <div className="w-1/2 h-[70vh]  rounded-3xl ">
                        <motion.img whileHover={{ scale: 0.95}} transition={{ ease: "linear", duration: 0.2 }}
                            className='rounded-3xl cursor-[url(https://cdn.custom-cursor.com/db/4905/32/arrow2786.png),_pointer]' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" srcset="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
