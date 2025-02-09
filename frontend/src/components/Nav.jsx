import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

const Nav = ({children}) => {
    const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)
    const navLinks = [
    // Public Routes (Before Login)
    { name: "Home", path: "/", icon: "🏠", authRequired: false },
    { name: "Register", path: "/register", icon: "📝", authRequired: false },
    { name: "Login", path: "/login", icon: "🔑", authRequired: false },

    // Private Routes (After Login)
    { name: "My Cars", path: "/my-cars", icon: "🚗", authRequired: true },
    { name: "Add Car", path: "/add-car", icon: "➕", authRequired: true },
    { name: "Search", path: "/search", icon: "🔍", authRequired: true },
    { name: "Profile", path: "/profile", icon: "⚙", authRequired: true },
    { name: "Logout", path: "/logout", icon: "🚪", authRequired: true },
  ];
  return (
  <>
    <nav className="bg-slate-900 p-5">
        <div className="flex justify-between items-center">
            <div id="logo">
              <h1 className="text-2xl font-bold text-white">Car Management System</h1>
            </div>
            <div id="links">
              <ul className="flex justify-center items-cente gap-10 text-slate-300">
                {navLinks.filter((link)=>(isLoggedIn ? link.authRequired : !link.authRequired)).map((link, index)=>(
                    <li key={index}>
                        <Link to={link.path}>
                            {link.icon} {link.name}
                        </Link>
                       
                    </li>
                ))}
              </ul>
            </div>
        </div>
      </nav>
      {children}
    </>
  )
}

export default Nav