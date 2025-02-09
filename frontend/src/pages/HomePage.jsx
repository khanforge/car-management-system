import React, { useEffect } from 'react'
import Nav from '../components/Nav'
import Home from '../components/Home'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const HomePage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  useEffect(()=>{
    if(isLoggedIn){
      navigate('/');
    }
  }, [isLoggedIn])  

  return (
    <Nav>
      <Home></Home>
    </Nav>
  )
}

export default HomePage