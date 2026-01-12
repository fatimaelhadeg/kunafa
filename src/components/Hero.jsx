import React, { useState, useEffect } from "react";
import baklava1 from "../assets/img/baklava1.jpg";
import baklava2 from "../assets/img/baklava2.jpg";
import baklava3 from "../assets/img/baklava3.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const images = [baklava1, baklava2, baklava3];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Carousel automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Scroll vers section FoodList
  const scrollToFoodList = () => {
    if (location.pathname === "/") {
      document.getElementById("foodslist")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("foodlist")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div
      className="relative min-h-screen w-screen overflow-hidden flex items-center justify-center bg-gray-900"
      id="hero"
    >
      {/* Images du carousel */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Baklava ${index + 1}`}
          className={`absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover transition-all duration-[1000ms] ${
            index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        />
      ))}

      {/* Texte hero */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          {t("hero.title")}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white max-w-2xl drop-shadow-md">
          {t("hero.description")}
        </p>

        <button
          onClick={scrollToFoodList}
          className="mt-6 bg-white border-2 border-gray-400 text-gray-800 px-6 py-3 rounded-full 
                     shadow-lg hover:shadow-2xl hover:bg-gray-400 hover:text-white 
                     transition-all duration-300 flex items-center gap-2"
        >
          {t("hero.cta")}
        </button>
      </div>
    </div>
  );
};

export default Hero;
