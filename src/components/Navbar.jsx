import React from "react";
import { BiCart } from "react-icons/bi";
import {BiUser} from "react-icons/bi"
import { useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "./ShopContext";


const Navbar = () => {
    const [isScrolled , setIsscrolled] = useState(false);
  const {Quantity} = useContext(ShopContext)
useEffect(()=>{
    const handleScroll = () => {
        setIsscrolled(window.scrollY > 100);
    }

    window.addEventListener("scroll",handleScroll)
    return () =>window.removeEventListener("scroll",handleScroll)
},[])




  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white text-black shadow-md py-4" : "bg-transparent py-6"}
        px-24 flex justify-between items-center`}>
      <div className="text-2xl font-bold">BavlaVa's Kitchen</div>
      <div>
        <ul className="flex space-x-6 text-lg font-semibold uppercase">
          <li className="cursor-pointer hover:text-gray-800 transition">Home</li>
          <li className="cursor-pointer hover:text-gray-800 transition">Menu</li>
          <li className="cursor-pointer hover:text-gray-800 transition">Contact</li>
          <li className="cursor-pointer hover:text-gray-800 transition">Use App</li>
        </ul>
      </div>

      <div className="flex items-center space-x-6">
         <Link to='/cart' className="relative">
        <BiCart className="text-3xl cursor-pointer" />
        {Quantity >0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">{Quantity}</span>
        )}
       </Link>

         <BiUser className="text-3xl cursor-pointer"/>
        
       
      </div>
    </div>
  );
};

export default Navbar;
