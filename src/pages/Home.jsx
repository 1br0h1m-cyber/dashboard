import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'

const Home = () => {

  const [isAuth,setIsAuth] = useState(true)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!isAuth){
      navigate('/login')
    }
  },[])

  return (
    <div className='p-4'>
      <div className='shadow-md p-4 rounded-xl bg-white'>
        <h1 className='font-bold text-2xl'>Welcome to the Admin Dashboard</h1>
        <h2 className='text-[20px]'>This is your central hub for managing your application. Use the navigation menu to access different sections.</h2>
      </div>
      <div className='w-full'>
        <Card/>
      </div>
    </div>
  )
}

export default Home