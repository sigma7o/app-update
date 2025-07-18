import React from 'react'
import { IoCaretBack } from "react-icons/io5";
const Quize_detail = () => {
    return (
        <div>
            <div className='items-center justify-center'>
            <div className='flex flex-col gap-1.5 items-center justify-center p-4 py-10 bg-[#100421] shadow-2xl'>
                <div>
                    <img src="https://c.ndtvimg.com/2019-07/rtvrrj68_parliament-generic-pti_625x300_23_July_19.jpg?downsize=545:307" alt="image"
                        className='w-100 rounded-2xl object-cover ' />

                </div>

                <h1 className=' text-3xl py-2 font-semibold uppercase text-white' >quize topics tittle</h1>

                <p className='text-white'> Quize description.... from the api</p>
                <h1 className=' text-3xl py-2 font-semibold uppercase text-white' >10 Questions</h1>
                <p className='uppercase text-sm  font-bold text-white'>Difficulty lavel - <span className='py-0.5 px-2.5 bg-emerald-600 rounded-sm text-amber-50'>easy</span></p>

                <div className='bg-[#998fa7] py-0.5 text-2xl rounded-sm cursor-pointer mt-7  h-9  w-80 md:w-100'>
                    <button className=' uppercase bg-[#461F7F] py-2 px-4 text-2xl font-semibold text-white rounded-sm cursor-pointer  hover:mt-1.5 transition-all  w-80 md:w-100'>start quize</button>
                </div>
                <div className='bg-[#998fa7] py-0.5 text-2xl rounded-sm cursor-pointer mt-7  h-9 w-80 md:w-100 '>
                    <button className=' uppercase bg-[#ffffff] py-2 px-4 text-2xl font-bold  rounded-sm cursor-pointer  hover:mt-1.5 transition-all w-80 md:w-100 flex justify-center items-center '> <span> <IoCaretBack /> </span>Back to home</button>
                </div>     
            </div>

</div>


        </div>
    )
}

export default Quize_detail