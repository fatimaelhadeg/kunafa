import React from "react";
import img from "../assets/img/order.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";

const GetApp = () => {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-16 bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e]"
      id="Service"
    >
      <div className="relative overflow-hidden bg-white/80 dark:bg-[#1F1D2B]/80 backdrop-blur-xl 
        py-16 px-8 lg:px-20 rounded-3xl mx-4 lg:mx-16 shadow-lg hover:shadow-2xl transition-all duration-500">
        
        {/* Arrière-plans lumineux */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-pink-300/20 rounded-full blur-3xl"></div>

        <div className="grid md:grid-cols-2 items-center gap-12 relative z-10">
          
          {/* Texte */}
          <div>
            <span className="inline-block mb-3 px-4 py-1 text-sm font-semibold rounded-full 
              bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-sm">
              {t("getApp.tagline")}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight 
              bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-red-500">
              {t("getApp.title")}
            </h2>

            <p className="mt-5 text-gray-700 dark:text-gray-300 text-lg">
              {t("getApp.description")}
            </p>

            {/* Boutons */}
            <div className="mt-10 flex flex-wrap gap-5">
              <ScrollLink
                to="foodslist"          // id de FoodsList
                smooth={true}           // scroll fluide
                duration={500}          // durée en ms
                className="cursor-pointer relative inline-flex items-center justify-center px-8 py-3 
                  rounded-full font-semibold text-white 
                  bg-gradient-to-r from-orange-500 via-pink-500 to-red-500
                  shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                {t("getApp.chooseMenu")}
              </ScrollLink>

              <a
                href="https://wa.me/212646237899?text=Salut,%20je%20voudrais%20obtenir%20plus%20d'informations%20sur%20votre%20service%20de%20livraison%20et%20les%20options%20de%20commande.%20Merci%20!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full 
                  font-semibold text-orange-500 border-2 border-orange-500
                  hover:bg-orange-500 hover:text-white 
                  shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300"
              >
                {t("getApp.moreInfo")}
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center relative">
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-orange-400 to-pink-400 
              rounded-full blur-3xl opacity-40"></div>
            <img
              src={img}
              alt={t("getApp.title")}
              className="relative w-[300px] md:w-[360px] 
                drop-shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GetApp;
