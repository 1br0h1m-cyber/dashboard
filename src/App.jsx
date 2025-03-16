import React from 'react'
import { Route, Routes } from 'react-router-dom'

//redux
import { navbarToggle } from "./redux/slice/navbar.slice";
import { useDispatch, useSelector } from 'react-redux'

//pages
import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Product from './pages/Product'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

import { motion } from 'framer-motion';

const App = () => {

  const { toggle } = useSelector(state => state.navbar)

  const dispatch = useDispatch()

  return (
    <div>
      <main className='flex'>

        {!toggle && (<div className="fixed inset-0 bg-black/30 sm:hidden" onClick={()=>dispatch(navbarToggle(!toggle))}></div>)}

      {/* Sidebar */}
        <div className={`bg-white max-sm:absolute transition-all duration-400 ${toggle ? "w-0 overflow-hidden" : "w-2/3 md:w-2/5"}`}>
          {toggle && <Sidebar />}
          {!toggle && <Sidebar />}
        </div>

      {/* Main content */}
        <div className={`transition-all duration-400 ${toggle ? "w-full" : "w-full sm:w-3/4 md:w-4/5"}`}>
          <Navbar />
          <div className='bg-white w-full h-full'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admins" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Product />} />
          </Routes>
          </div>

        </div>

      </main>
    </div>
  )
}

export default App