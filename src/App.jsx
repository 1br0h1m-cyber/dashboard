import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

//pages
import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Login'
import Product from './pages/Product'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App