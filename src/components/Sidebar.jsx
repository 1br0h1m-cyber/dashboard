import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

//icons
import { FaHome } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

const Sidebar = () => {

  
  const slug = useLocation().pathname

  return (
    <div>
      <h1 className='text-blue-600 font-bold text-2xl p-6'>Admin Panel</h1>
      <div className='flex flex-col py-3'>
        <Link to='/' className={`flex items-center gap-1.5 font-semibold text-[20px] ${slug === '/' ? 'bg-blue-100 border-r-4 border-solid border-blue-500' : 'text-gray-600 hover:bg-gray-100 transition-[0.2s]'} w-full p-4 pl-6`}>
          <FaHome/>
          Home
        </Link>
        <Link to='/products' className={`flex items-center gap-1.5 font-semibold text-[20px] ${slug === '/products' ? 'bg-blue-100 border-r-4 border-solid border-blue-500' : 'text-gray-600 hover:bg-gray-100 transition-[0.2s]'} w-full p-4 pl-6`}>
          <IoBagCheck/>
          Products
        </Link>
        <Link to='/admins' className={`flex items-center gap-1.5 font-semibold text-[20px] ${slug === '/admins' ? 'bg-blue-100 border-r-4 border-solid border-blue-500' : 'text-gray-600 hover:bg-gray-100 transition-[0.2s]'} w-full p-4 pl-6`}>
          <FaUserFriends/>
          Admins
        </Link>
      </div>
    </div>
  )
}

export default Sidebar