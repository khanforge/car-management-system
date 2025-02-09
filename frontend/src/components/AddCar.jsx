import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddCar = () => {
    const [formData, setFormData] = useState({
        title:'',
        description:'',
        tags:'',
        photos:[]
    })
    const [response, setResponse] = useState()
    const [user, setUser] = useState(null)
    useEffect(()=>{
        const storedUser = localStorage.getItem("user");
        if(user==null){
            setUser(JSON.parse(storedUser));
            console.log("user", user)
        }
    },[])
    const handleSubmit = async(e)=>{
        e.preventDefault()
        const data = new FormData();
        data.append('title', formData.title);
        data.append('description', formData.description)
        data.append('tags', tags);
        Array.from(formData.photos).forEach((img)=>{
            data.append('photos',img);
        })
        try{
            const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/car/add-car`, 
                {
                    method:"POST",
                    headers:{'authorization':user.token},
                    body:data,
                },
            )
            setResponse(res);
            console.log(data)
        }catch(error){
            console.log(error);
        }
    }

    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const handleFileChange = (e)=>{
        setFormData({...formData, photos:e.target.files,})
    }

  return (
    <section id="car-management-system-add-car" className='h-full w-full'>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div className="h-full">
                {response &&
                    <h1 className='bg-green-400/70 rounded-md border-2 border-green-400 p-2 text-center text-red-700'>
                    {response ? response.status : "waiting for the response..."}
                    </h1>
                }
               <form onSubmit={handleSubmit}  method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                            Title
                        </label>
                        <div className="mt-2">
                            <input
                            id="title"
                            name="title"
                            type="text"
                            onChange = {handleChange}
                            required
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="description" className="block text-sm/6 font-medium text-gray-900">
                            Description
                            </label>
                        </div>
                        <div className="mt-2">
                            <textarea
                            id="description"
                            name="description"
                            type="text"
                            onChange = {handleChange}
                            required
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="images" className="block text-sm/6 font-medium text-gray-900">
                            Images
                        </label>
                        <div className="mt-2">
                            <input
                            id="images"
                            name="images"
                            type="file"
                            onChange = {handleFileChange}
                            required
                            multiple
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="tags" className="block text-sm/6 font-medium text-gray-900">
                            Tags
                        </label>
                        <div className="mt-2">
                            <input
                            id="tags"
                            name="tags"
                            type="text"
                            onChange = {handleChange}
                            required
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Add Car
                        </button>
                    </div>
                </form>
            </div>
        </div>
        
    </section>
  )
}

export default AddCar