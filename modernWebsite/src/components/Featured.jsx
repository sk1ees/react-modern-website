import React from 'react'

const Featured = () => {
    return (
        <>
            <div className="w-full py-10 ">

                <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10">
                    <h1 className='font-["Neue_Montreal"] text-7xl tracking-tight'>Featured projects</h1>
                </div>
                <div className=" px-20">

                    <div className="cards w-full flex gap-10 mt-10">

                        <div className="cardcontainer w-1/2 h-[75vh] relative  ">
                            <h1 className='absolute left-full  z-[9] text-8xl -translate-x-1/2 top-1/2 -translate-y-1/2 font-semibold font-["Founders_Grotesk_X"] text-[#CDEA68]'>

                                {"FYDE".split('').map((item, index) => <span key={index}>{item}</span>)}

                            </h1>
                            <div className="card w-full h-full rounded-xl overflow-hidden  ">

                                <img className='w-full  bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" srcset="" />
                            </div>
                        </div>
                        <div className="cardcontainer  w-1/2 h-[75vh]  relative ">
                            <h1 className='absolute right-full  z-[9] text-8xl translate-x-1/2 top-1/2 -translate-y-1/2 font-semibold font-["Founders_Grotesk_X"] text-[#CDEA68]'>

                                {"VISE".split('').map((item, index) => <span key={index}>{item}</span>)}

                            </h1>
                            <div className="card w-full h-full rounded-xl overflow-hidden  ">

                                <img className='w-full  bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured
