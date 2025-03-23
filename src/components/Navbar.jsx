import React from 'react'

//icons
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineTranslate } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";

//image
import logo from '../../public/favicon.ico'

//redux
import { useDispatch, useSelector } from "react-redux";
import { navbarToggle, profileToggle, themeToggle, translateToggle } from "../redux/slice/navbar.slice";

const Navbar = () => {

  const { toggle, profile, theme, translate } = useSelector(state => state.navbar)
  
  const dispatch = useDispatch()

  return (
    <nav className={`flex justify-between items-center bg-white p-3 ${toggle ? '' : 'max-sm:justify-end'}`}>

      <div className='flex items-center justify-center gap-2'>
        <div className={`flex justify-center items-center w-11 h-11 rounded-md hover:bg-gray-100 transition-[0.2s] cursor-pointer ${toggle ? '' : 'max-sm:hidden'}`} onClick={()=>dispatch(navbarToggle(!toggle))}>
          {toggle ? <FaBars size={23}/> : <IoClose size={32}/>}
        </div>
        {toggle ? <a href='/' className='text-blue-600 font-bold text-[23px] md:text-[25px] max-sm:hidden cursor-pointer'>Admin Panel</a> : ''}
      </div>

      <div className='flex gap-2'>
        <div className='flex justify-center items-center w-11 h-11 rounded-md hover:bg-gray-100 transition-[0.2s] cursor-pointer' onClick={()=>dispatch(translateToggle(!translate))}>
          <MdOutlineTranslate size={29}/>
        </div>        
        <div className='flex justify-center items-center w-11 h-11 rounded-md hover:bg-gray-100 transition-[0.2s] cursor-pointer' onClick={()=>dispatch(themeToggle(!theme))}>
          {theme ? <LuSun size={30}/> : <FaRegMoon size={25}/>}
        </div>
        <div className='bg-white w-11 h-11 flex justify-center items-center rounded-full cursor-pointer border border-gray-300' onClick={()=>dispatch(profileToggle(!profile))}>
          <img src={logo} alt="" className='w-8'/>
        </div>
      </div>

      {profile ? 
        <div className='bg-white shadow-lg rounded-lg absolute p-2 right-1 top-18'>
          <h1 className='text-[16px] text-blue-500 font-semibold'>Dashboard Admin</h1>
          <h3 className='text-[12px]'>normahmatovibrohim0409@gmail.com</h3>
          <hr className='my-1 border-gray-300'/>
          <div className='flex items-center text-[16px] text-red-500 gap-1 cursor-pointer'>
            <IoLogOutOutline size={20}/>
            <h3>Log Out</h3>
          </div>
        </div>
        : ''}

    </nav>
  )
}

export default Navbar