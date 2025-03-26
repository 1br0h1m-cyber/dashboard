import React, { useEffect, useState } from 'react'

//icons
import { FaUserFriends } from 'react-icons/fa'
import { FaCalendarDay } from "react-icons/fa6";
import { IoBagSharp } from 'react-icons/io5'
import { FaClock } from "react-icons/fa6";

const Card = ({title, desc, icon, bgcolor}) => {

    const Months = ['January','February','March','April','May','June','July','August','September','October','November','December']

    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);

    const day = `${Months[time.getMonth()]} ${time.getDate()}, ${time.getFullYear()}`

    return (
        <div className='flex bg-white rounded-xl shadow-md gap-2 p-4 h-full w-full'>
            <div className={`${bgcolor} text-white h-min w-min rounded-full m-1 p-2.5`}>
                {icon}
            </div>
            <div>
                <h2 className='text-[16px] text-gray-400'>{title}</h2>
                <h1 className='font-bold'>{desc}</h1>
            </div>
        </div>
    )
}


export default Card