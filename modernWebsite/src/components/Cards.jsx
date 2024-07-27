import React from 'react'
const Cards = () => {
    return (
        <>
            <div className="w-full h-screen bg-zinc-900 flex px-32 items-center gap-5 cursor-[url(https://cdn.custom-cursor.com/db/4906/32/arrow2786.png),_pointer]" >
                <div className="cardcontainer h-[50vh]  w-1/2">
                    <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
                        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                        <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 font-["Neue_Montreal"] cursor-[url(https://cdn.custom-cursor.com/db/4905/32/arrow2786.png),_pointer]'>&copy; 2024-25</button>
                    </div>
                </div>
                <div className="cardcontainer flex gap-5 h-[50vh]  w-1/2">
                    <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]">
                        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                        <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 font-["Neue_Montreal"] cursor-[url(https://cdn.custom-cursor.com/db/4905/32/arrow2786.png),_pointer]'>&copy; 2024-25</button>
                    </div>
                    <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]">
                        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                        <button className='absolute px-5 py-1 border-2 rounded-full left-10 bottom-10 font-["Neue_Montreal"] cursor-[url(https://cdn.custom-cursor.com/db/4905/32/arrow2786.png),_pointer]'>&copy; 2024-25</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cards
