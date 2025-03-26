import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
//components
import Card from '../components/Card'
//icons
import { FaUserFriends } from 'react-icons/fa'
import { FaCalendarDay } from "react-icons/fa6";
import { IoBagSharp } from 'react-icons/io5'
import { FaClock } from "react-icons/fa6";

const Home = () => {

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
    <div className='p-4'>
      <div className='shadow-md p-4 rounded-xl bg-white'>
        <h1 className='font-bold text-2xl'>Welcome to the Admin Dashboard</h1>
        <h2 className='text-[20px]'>This is your central hub for managing your application. Use the navigation menu to access different sections.</h2>
      </div>
      <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 h-auto gap-3 py-3 w-full'>
        <Card title={'Total Products'} desc={124} bgcolor={'bg-blue-500'} icon={<IoBagSharp size={22} />}/>
        <Card title={'Total Admins'} desc={8} bgcolor={'bg-green-500'} icon={<FaUserFriends size={22} />}/>
        <Card title={"Today's date"} desc={day} bgcolor={'bg-orange-400'} icon={<FaCalendarDay size={22} />}/>
        <Card title={'Current time'} desc={time.toLocaleTimeString()} bgcolor={'violet-500'} icon={<FaClock size={22} />}/>
      </div>
    </div>
  )
}

export default Home