import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../../store/auth';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        if(isLoggedIn){
            dispatch(authActions.logout())
            navigate('/login')
        }

        localStorage.removeItem("user")
    }, [])
  return (
    null
  )
}

export default Logout