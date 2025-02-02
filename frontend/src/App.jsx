import { useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/auth'

/**
 * Main application component that sets up routing for different pages.
 *
 * @component
 * @returns {JSX.Element} The main App component rendering routed pages.
 */
function App() {
  /**
   * Router object defining routes and their respective components.
   * 
   * Routes:
   * - `/` (Home): Displays the Nav, Carousel, Home, and Footer components.
   * - `/call-for-papers`: Displays Nav, Carousel, ListView with conferenceTracks data, and Footer.
   * - `/org-committee`: Displays Nav, Carousel, OrgCommittee, and Footer components.
   */
  const navigate = useNavigate()
  const isLoggedIn = useSelector(state=>state.auth.isLoggedIn)
  const dispatch = useDispatch()
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    if(user != null){
      console.log("user")
      dispatch(authActions.login());
    }
    if(isLoggedIn)navigate('/')
    else navigate('/login')
  }, [navigate, isLoggedIn])

  
  return (<Outlet/>)
}

export default App