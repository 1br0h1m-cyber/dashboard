import React from 'react'

//icons
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineTranslate } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";

//images
import logo from '../../public/favicon.ico'
import eng from '../assets/eng.png'
import rus from '../assets/rus.png'

//redux
import { useDispatch, useSelector } from "react-redux";
import { navbarToggle, profileToggle, themeToggle, translateToggle, language } from "../redux/slice/navbar.slice";

const Navbar = () => {

  const { toggle, profile, theme, translate, lang } = useSelector(state => state.navbar)
  
  const dispatch = useDispatch()

  return (
    <nav className={`flex justify-between items-center border-b border-gray-300 bg-white p-3 ${toggle ? '' : 'max-sm:justify-end'}`}>

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

      {translate ? 
        <div className={`bg-white border border-gray-300 rounded-lg shadow-md absolute top-18.5 ${profile ? 'right-53' : 'right-30'} p-1`}>
          <div className={`flex items-center text-[15px] ${lang ? 'text-blue-600 hover:text-blue-700' : 'text-gray-400 hover:text-gray-500'} font-semibold cursor-pointer gap-1 p-0.5`} onClick={()=> !lang && dispatch(language(true))}>
            <img src={eng} className={`h-3.5 w-5 ${lang ? '' : 'grayscale-75'}`} alt="eng" /><h3>English</h3>
          </div>
          <hr className='mt-0.5 border-gray-300'/>
          <div className={`flex items-center text-[15px] ${lang ? 'text-gray-400 hover:text-gray-500' : 'text-blue-600 hover:text-blue-700'} font-semibold cursor-pointer gap-1 p-0.5`} onClick={()=> lang && dispatch(language(false))}>
            <img src={rus} className={`h-3.5 w-5 ${lang ? 'grayscale-50' : ''}`} alt="rus" /><h3>Russian</h3>
          </div>
        </div> 
      : ''}

      {profile ? 
        <div className='bg-white border border-gray-300 rounded-lg shadow-md absolute p-2 right-1 top-18.5'>
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