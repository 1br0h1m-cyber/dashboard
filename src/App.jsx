import React from 'react'
import { Route, Routes } from 'react-router-dom'

//pages
import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Product from './pages/Product'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <main className='flex'>
        <div className='bg-white max-sm:absolute min-w-2/3 sm:min-w-1/3 lg:min-w-1/4'>
          <Sidebar />
        </div>
        <div className='w-full'>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admins' element={<Admin />} />
            <Route path='/login' element={<Login />} />
            <Route path='/products' element={<Product />} />
          </Routes>
        </div>
      </main>

    </div>
  )
}

export default App