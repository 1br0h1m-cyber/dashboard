import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const [isAuth,setIsAuth] = useState(true)
  const navigate = useNavigate()

  useEffect(()=>{
      if(!isAuth){
          navigate('/login')
      }
  },[])

  return (
    <div>Home</div>
  )
}

export default Home