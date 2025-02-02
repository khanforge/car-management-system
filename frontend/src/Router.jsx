import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import App from './App'
import Logout from './Logout'

const routerApp = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
            path: "/",
            element: (
                <HomePage/>
            )
            },
            {
            path: "/login",
            element: (
                <LoginPage/>
            )
            },
            {
            path: "/register",
            element: (
                <RegisterPage/>
            )
            },
            {
                path:'/logout',
                element:(
                    <Logout/>
                )
            }
        ]
    }


    
  ],
  /**
   * Base path for the application, used when deploying on GitHub Pages.
   * Uncomment the line below for the appropriate deployment path.
   */
  // { basename: "/temsmet.github.io" }, // for GitHub Pages deployment
  // { basename: "/temsmet2025-r" } // for GitHub Pages deployment
  )

  export default routerApp;
