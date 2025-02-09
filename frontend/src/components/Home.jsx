import React, { useEffect, useState } from 'react';
import './Home.css'; // Import the CSS file for custom animations

const Home = () => {
  const [cars, setCars] = useState([]);
  const [user, setUser] = useState(null);
  const [active, setActive] = useState(1)
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const interval = (length)=> setInterval(()=>{
    setActive((prevState)=>((prevState+1)%length))
    console.log(active)
  }, 50000)

  useEffect(() => {
    const fetchCars = async () => {
      if (user) {
        try {
          const res = await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/api/car/get-cars`, {
            method: "GET",
            headers: {
              'Content-Type': "application/json",
              "authorization": user.token,
            },
          });
          const data = await res.json();
          setCars(data);
          console.log(data);
        } catch (error) {
          console.error("Error fetching cars:", error);
        }
      }
    };

    fetchCars();
  }, [user]);

  return (
    <div>
      {cars.length > 0 ? (
        cars.map((car, index) => (
          <div key={index}>
            <h1 className='text-xl font-bold'>Car number {index}</h1>
            <h2>{car.title}</h2>
            <p>{car.description}</p>
            <div className="w-[60rem] h-[20rem] m-auto flex justify-center overflow-hidden">
              <div className='relative w-[60rem] h-[20rem] flex justify-center gap-1 animate-scroll'>
                {car.images.map((imgPath, index) => (
                  <div key={index} onLoad={interval(car.images.length)} className={`h-[10rem] w-[30rem] ${active === index && "hidden"} `}>
                    <img src={`${import.meta.env.VITE_REACT_APP_API_URL}/${imgPath}`} className='h-[10rem] w-[30rem]' alt={car.title} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        "No cars available"
      )}
    </div>
  );
};

export default Home;