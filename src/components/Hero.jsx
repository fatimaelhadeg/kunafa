import React, { useState, useEffect } from "react";
import baklava1 from "../assets/img/baklava1.jpg";
import baklava2 from "../assets/img/baklava2.jpg";
import baklava3 from "../assets/img/baklava3.jpg";
import { Link } from "react-router-dom";
import { GiFoodTruck } from "react-icons/gi";





const images = [baklava1, baklava2, baklava3];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-900 flex items-center justify-center w-full overflow-hidden"
    id="hero">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Baklava ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-[1000ms] ${
            index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        />
      ))}

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          DELICIOUS BAKLAVA
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white max-w-2xl drop-shadow-md">
          Golden, crunchy layers of pastry, nuts, and syrup combine to create a truly
          irresistible dessert loved by all.
        </p>
 <Link
  to="/register" 
  className="bg-white border-2 border-gray-400 text-gray-800 px-6 py-3 rounded-full 
             shadow-lg hover:shadow-2xl hover:bg-gray-400 hover:text-white 
             transition-all duration-300 flex items-center gap-2"
>
  <GiFoodTruck size={20} /> 
  Order Now
</Link>




      </div>
    </div>
  );
};

export default Hero;
