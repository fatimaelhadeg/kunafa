import React, { useState, useEffect, useContext } from "react";
import { BiCart } from "react-icons/bi";
import { MdOutlineRestaurant } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Theme from "../pages/Theme";
import LangueSwitch from "./LangueSwitch";
import { useTranslation } from "react-i18next";

import { ShopContext } from "./ShopContext";

const NavbarLink = ({ id, label, closeMobile }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    if (closeMobile) closeMobile(); // close mobile menu if open

    if (location.pathname === "/") {
      // scroll f same page
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // navigate home + scroll
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      className="px-4 py-2 rounded-full hover:bg-orange-50 transition"
    >
      {label}
    </a>
  );
};

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { Quantity } = useContext(ShopContext);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showMobile ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
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
        <span>{t("navbar.brand")}</span>
      </div>

      {/* Menu Desktop */}
      <nav className="hidden md:flex items-center space-x-6 font-medium">
        <NavbarLink id="hero" label={t("navbar.home")} />
        <NavbarLink id="foodslist" label={t("navbar.menu")} />
        <NavbarLink id="special" label={t("navbar.specialOffer")} />
        {/*
                <NavbarLink id="reviews" label={t("navbar.reviews")} />

        */}
        <NavbarLink id="Service" label={t("navbar.app")} />
      </nav>

      {/* Icons Right */}
      <div className="flex items-center space-x-4">
        {/* Search icon */}
       {/*
         <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 hover:bg-orange-200 transition cursor-pointer">🔍</div>

       */}

        {/* Cart */}
        <Link
          to="/cart"
          className="relative w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 hover:bg-orange-200 transition"
        >
          <BiCart className="text-xl text-orange-600" />
          {Quantity > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs h-4 w-4 flex items-center justify-center rounded-full">
              {Quantity}
            </span>
          )}
        </Link>

        {/* Theme */}
        {/*
                <Theme />

        */}
        {/* Language Switch */}
        <LangueSwitch />

        {/* Mobile Menu Icon */}
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
            <NavbarLink id="hero" label={t("navbar.home")} closeMobile={() => setShowMobile(false)} />
          </li>
          <li>
            <NavbarLink id="foodslist" label={t("navbar.menu")} closeMobile={() => setShowMobile(false)} />
          </li>
          <li>
            <NavbarLink id="special" label={t("navbar.specialOffer")} closeMobile={() => setShowMobile(false)} />
          </li>
          {/*
         <li>
            <NavbarLink id="reviews" label={t("navbar.reviews")} closeMobile={() => setShowMobile(false)} />
          </li>
        */}
         
          <li>
            <NavbarLink id="Service" label={t("navbar.app")} closeMobile={() => setShowMobile(false)} />
          </li>
          {/*
         <li>
            <Theme />
          </li>
        */}
         
          <li>
            <LangueSwitch />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
