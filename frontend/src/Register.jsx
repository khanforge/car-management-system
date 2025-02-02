import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { authActions } from '../store/auth';

const Register = () => {
    const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [userForm, setUserForm] = React.useState({
        name:'',
        email:'',
        password:'',
    })
    const [response, setResponse] = React.useState(null)
    const handleChange = (e)=>{
        setUserForm({...userForm, [e.target.name]:e.target.value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/auth/register`,{ method:"POST", headers:{"Content-Type": "application/json"}, body:JSON.stringify(userForm)});
            const data = await res.json();
            navigate('/login');
            setResponse(data);
            console.log(data);
        }catch(err){
            console.log(err)
        }
        console.log(userForm.name, userForm.email, userForm.password)
    }

  return (
    

         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
         
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign Up
          </h2>
        </div>
         
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className='bg-green-400/70 rounded-md border-2 border-green-400 p-2 text-center text-red-700'>
            {response ? response.message : "waiting for the response..."}
          </h1>
          <form onSubmit={handleSubmit} method="POST" className="space-y-6 mt-5">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="full-name"
                  name="name"
                  type="text"
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign Up
              </button>
            </div>
          </form>

        </div>
      </div>
  )
}

export default Register