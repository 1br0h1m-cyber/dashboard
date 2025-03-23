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

const App = () => {

  const { toggle } = useSelector(state => state.navbar)

  const dispatch = useDispatch()

  return (
    <div>
      <main className='flex'>

        {!toggle && (<div className="fixed inset-0 bg-black/30 z-10 sm:hidden" onClick={()=>dispatch(navbarToggle(!toggle))}></div>)}

      {/* Sidebar */}
        <div className={`bg-white max-sm:absolute transition-all duration-400 z-30 ${toggle ? "max-sm:-translate-x-full sm:w-0 overflow-hidden" : "w-2/3 sm:w-4/9 md:w-2/5 lg:w-1/4"}`}>
          {toggle && <Sidebar />}
          {!toggle && <Sidebar />}
        </div>

      {/* Main content */}
        <div className={`sm:z-50 right-0 w-full h-screen`}>
          <Navbar />
          <div className='bg-gray-50 w-full'>
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