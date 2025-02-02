import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { AuthProvider } from "./context/AuthContext"; 
import routerApp from './Router.jsx';
import store from '../store/index.js'
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

createRoot(document.getElementById('root')).render(

    <StrictMode>
      <Provider store = {store}>
        <RouterProvider router={routerApp}>
        </RouterProvider>
      </Provider>
    </StrictMode>

  
)
