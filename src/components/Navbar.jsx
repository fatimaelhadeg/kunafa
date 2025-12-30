import React, { useState, useEffect, useContext } from "react";
import { BiCart, BiUser } from "react-icons/bi";
import { MdOutlineRestaurant } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Theme from "../pages/Theme";
import { ShopContext } from "./ShopContext";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { Quantity } = useContext(ShopContext);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = showMobile ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [showMobile]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${isScrolled ? "bg-white text-black shadow-md py-4" : "bg-transparent py-6"}
        px-6 lg:px-24 flex justify-between items-center`}
    >
      {/* Logo */}
      <div className="flex items-center gap-1.5 text-2xl font-bold text-orange-500">
        <MdOutlineRestaurant />
        <span>BaklaVa's Kitchen</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-6 font-medium">
        <a href="#hero" className="hover:text-orange-400 transition">Home</a>
        <a href="#foodlist" className="hover:text-orange-400 transition">Menu</a>
        <a href="#Reviews" className="hover:text-orange-400 transition">Reviews</a>
        <a href="#Timing" className="hover:text-orange-400 transition">Timing</a>
        <a href="#Service" className="hover:text-orange-400 transition">Service</a>
      </nav>

      {/* Right icons */}
      <div className="flex items-center space-x-4">
        <Theme />
        <div className="flex items-center space-x-6">
          <Link to='/cart' className="relative">
            <BiCart className="text-3xl cursor-pointer" />
            {Quantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs h-5 w-5 flex items-center justify-center rounded-full">{Quantity}</span>
            )}
          </Link>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 transition text-white py-2 px-4 rounded-full text-sm font-medium">
          Register Now
        </button>

        {/* Mobile menu icon */}
        <HiMenu
          className="md:hidden w-7 h-7 cursor-pointer"
          onClick={() => setShowMobile(true)}
        />
      </div>

      {/* Mobile Menu */}
     {/* Mobile Menu */}
<div
  className={`fixed top-0 right-0 w-full h-full bg-white z-50 transform transition-transform duration-300
    ${showMobile ? "translate-x-0" : "translate-x-full"} md:hidden flex flex-col`}
>
  <div className="flex justify-end p-6">
    <IoMdClose
      onClick={() => setShowMobile(false)}
      className="w-6 h-6 cursor-pointer text-black"
    />
  </div>
  <ul className="flex flex-col items-center gap-6 mt-10 text-lg font-medium">
    <li>
      <a onClick={() => setShowMobile(false)} href="#Home" className="px-4 py-2 rounded-full hover:bg-orange-50 transition">Home</a>
    </li>
    <li>
      <a onClick={() => setShowMobile(false)} href="#foodlist" className="px-4 py-2 rounded-full hover:bg-orange-50 transition">Menu</a>
    </li>
    <li>
      <a onClick={() => setShowMobile(false)} href="#Reviews" className="px-4 py-2 rounded-full hover:bg-orange-50 transition">Reviews</a>
    </li>
    <li>
      <a onClick={() => setShowMobile(false)} href="#Timing" className="px-4 py-2 rounded-full hover:bg-orange-50 transition">Timing</a>
    </li>
    <li>
      <a onClick={() => setShowMobile(false)} href="#Service" className="px-4 py-2 rounded-full hover:bg-orange-50 transition">Service</a>
    </li>
    <li>
      <Theme />
    </li>
  </ul>
</div>

    </header>
  );
};

export default Navbar;
