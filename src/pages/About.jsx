import React from "react";
import { FaShoppingCart, FaShippingFast, FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const data = t("about", { returnObjects: true }); // récupère l'objet 'about' depuis le JSON

  // Icones pour les features
  const iconsMap = [
    <FaShoppingCart className="text-4xl text-orange-400 mb-4" />,
    <FaShippingFast className="text-4xl text-orange-400 mb-4" />,
    <FaCheckCircle className="text-4xl text-orange-400 mb-4" />,
  ];

  return (
    <section className="py-20 px-6 h-auto bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900">
      {/* Titre principal */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white hover:text-orange-500 transition-colors duration-300">
          {data.title}
        </h1>
        <p className="text-gray-800 dark:text-gray-300 leading-relaxed max-w-md mx-auto">
          {data.subtitle}
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-10 lg:gap-16 max-w-6xl mx-auto">
        {data.features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-10 lg:p-12 rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex justify-center mb-6">
              {React.cloneElement(iconsMap[index], { className: "text-5xl lg:text-6xl text-orange-400" })}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-base md:text-lg">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
