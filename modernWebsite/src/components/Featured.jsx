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
                        <div className="cardcontainer w-1/2 h-[70vh]  overflow-hidden ">
                            <div className="card w-full h-full rounded-xl bg-green-600 "></div>
                        </div>
                        <div className="cardcontainer rounded-xl w-1/2 h-[70vh]  overflow-hidden ">
                            <div className="card w-full h-full rounded-xl bg-green-600 "></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Featured
