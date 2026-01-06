import React, { useState, useEffect, useContext } from "react";
import { BiCart } from "react-icons/bi";
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <span>BaklaWa's Kitchen</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center space-x-6 font-medium">
        <a href="#hero" className="hover:text-orange-400 transition">Home</a>
        <a href="#foodlist" className="hover:text-orange-400 transition">Menu</a>
        <a href="#Reviews" className="hover:text-orange-400 transition">Reviews</a>
        <a href="#Timing" className="hover:text-orange-400 transition">Timing</a>
        <a href="#Service" className="hover:text-orange-400 transition">Service</a>
      </nav>

      {/* Right icons (search, cart, theme) */}
      <div className="flex items-center space-x-4">
        {/* Search circle */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 hover:bg-orange-200 transition cursor-pointer">
          🔍
        </div>

        {/* Cart circle */}
        <Link to="/cart" className="relative w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 hover:bg-orange-200 transition">
          <BiCart className="text-xl text-orange-600" />
          {Quantity > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs h-4 w-4 flex items-center justify-center rounded-full">{Quantity}</span>
          )}
        </Link>

        {/* Theme circle */}
          <Theme />

        {/* Mobile menu icon */}
        <HiMenu
          className="md:hidden w-7 h-7 cursor-pointer"
          onClick={() => setShowMobile(true)}
        />
      </div>

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
            <a onClick={() => setShowMobile(false)} href="#hero" className="px-4 py-2 rounded-full hover:bg-orange-50 transition">Home</a>
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
