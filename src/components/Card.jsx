import React from 'react'

//icons
import { FaUserFriends } from 'react-icons/fa'
import { FaCalendarDay } from "react-icons/fa6";
import { IoBagSharp } from 'react-icons/io5'
import { FaClock } from "react-icons/fa6";

const Card = () => {

    return (
        <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 h-auto gap-3 py-3'>

            <div className='flex bg-white rounded-xl shadow-md gap-2 p-4 h-full w-full'>
                <div className='bg-blue-500 text-white h-min w-min rounded-full m-1 p-2.5'>
                    <IoBagSharp size={22} />
                </div>
                <div>
                    <h2 className='text-[16px] text-gray-400'>Total Products</h2>
                    <h1 className='font-bold'>124</h1>
                </div>
            </div>

            <div className='flex bg-white rounded-xl shadow-md gap-2 p-4 h-full w-full'>
                <div className='bg-green-500 text-white h-min w-min rounded-full m-1 p-2.5'>
                    <FaUserFriends size={22} />
                </div>
                <div>
                    <h2 className='text-[16px] text-gray-400'>Total Admins</h2>
                    <h1 className='font-bold'>8</h1>
                </div>
            </div>

            <div className='flex bg-white rounded-xl shadow-md gap-2 p-4 h-full w-full'>
                <div className='bg-orange-400 text-white h-min w-min rounded-full m-1 p-2.5'>
                    <FaCalendarDay size={22} />
                </div>
                <div>
                    <h2 className='text-[16px] text-gray-400'>Today's date</h2>
                    <h1 className='font-bold'>time :)</h1>
                </div>
            </div>

            <div className='flex bg-white rounded-xl shadow-md gap-2 p-4 h-full w-full'>
                <div className='bg-violet-500 text-white h-min w-min rounded-full m-1 p-2.5'>
                    <FaClock size={22} />
                </div>
                <div>
                    <h2 className='text-[16px] text-gray-400'>Total Products</h2>
                    <h1 className='font-bold'>time :)</h1>
                </div>
            </div>

        </div>

    )
}


export default Card