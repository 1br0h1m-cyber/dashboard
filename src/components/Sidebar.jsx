import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navbarToggle } from "../redux/slice/navbar.slice";
import { useDispatch, useSelector } from 'react-redux'

//icons
import { FaHome } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

const Sidebar = () => {
  
  const slug = useLocation().pathname

  const { toggle } = useSelector(state => state.navbar)
  const dispatch = useDispatch()

  return (
    <div className='h-[100vh]'>
      <div className='p-6'>
        <a href='/' className='text-blue-600 font-bold text-2xl cursor-pointer'>Admin Panel</a>
      </div>
      <div className='flex flex-col py-3'>
        <Link to='/' className={`flex items-center gap-1.5 font-semibold text-[20px] ${slug === '/' ? 'bg-blue-100 border-r-4 border-solid border-blue-500' : 'text-gray-600 border-r-4 border-solid border-gray-100 hover:bg-gray-50 transition-[0.2s]'} w-full p-4 pl-6`}>
          <FaHome/>
          Home
        </Link>
        <Link to='/products' className={`flex items-center gap-1.5 font-semibold text-[20px] ${slug === '/products' ? 'bg-blue-100 border-r-4 border-solid border-blue-500' : 'text-gray-600 border-r-4 border-solid border-gray-100 hover:bg-gray-50 transition-[0.2s]'} w-full p-4 pl-6`}>
          <IoBagCheckSharp/>
          Products
        </Link>
        <Link to='/admins' className={`flex items-center gap-1.5 font-semibold text-[20px] ${slug === '/admins' ? 'bg-blue-100 border-r-4 border-solid border-blue-500' : 'text-gray-600 border-r-4 border-solid border-gray-100 hover:bg-gray-50 transition-[0.2s]'} w-full p-4 pl-6`}>
          <FaUserFriends/>
          Admins
        </Link>
      </div>
    </div>
  )
}

export default Sidebar