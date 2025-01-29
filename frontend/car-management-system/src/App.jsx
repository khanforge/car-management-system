
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
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
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <HomePage/>
        </>
      )
    },
    {
      path: "/login",
      element: (
        <>
          <LoginPage/>
        </>
      )
    },
    {
      path: "/register",
      element: (
        <>
          <RegisterPage/>
        </>
      )
    },
  ],
  /**
   * Base path for the application, used when deploying on GitHub Pages.
   * Uncomment the line below for the appropriate deployment path.
   */
  // { basename: "/temsmet.github.io" }, // for GitHub Pages deployment
  // { basename: "/temsmet2025-r" } // for GitHub Pages deployment
  )

  return (
    <>
      <RouterProvider router={router} />  
    </>
  )
}

export default App