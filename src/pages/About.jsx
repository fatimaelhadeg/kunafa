import React from "react";
import { FaShoppingCart, FaShippingFast, FaCheckCircle } from "react-icons/fa";

const About = () => {
  const features = [
    {
      title: "Commande Facile",
      icon: <FaShoppingCart className="text-4xl text-orange-400 mb-4" />,
      description: "Commandez vos articles préférés rapidement et facilement grâce à notre interface conviviale.",
    },
    {
      title: "Livraison Rapide",
      icon: <FaShippingFast className="text-4xl text-orange-400 mb-4" />,
      description: "Recevez vos commandes en un temps record, directement à votre porte.",
    },
    {
      title: "Meilleure Qualité",
      icon: <FaCheckCircle className="text-4xl text-orange-400 mb-4" />,
      description: "Nous garantissons une qualité irréprochable pour tous nos produits afin de vous satisfaire pleinement.",
    },
  ];

  return (
    <section className="py-20 px-6 h-150 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900">
      {/* Titre principal */}
      <div className="max-w-5xl mx-auto text-center h-30 mb-12">
        <h1 className="h-10 text-4xl font-bold mb-4 text-gray-800 dark:text-white hover:text-orange-500 transition-colors duration-300">
          Pourquoi Nous Choisir
        </h1>
        <p className="text-gray-800 text-center leading-relaxed max-w-md mx-auto">
          Notre Baklawa est adoré par les amateurs de desserts du monde entier,<br />
          préparé avec les meilleurs ingrédients et confectionné à la perfection,<br />
          offrant un goût tout simplement inoubliable.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-10 lg:gap-16 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-10 lg:p-12 rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex justify-center mb-6">
              {React.cloneElement(feature.icon, { className: "text-5xl lg:text-6xl text-orange-400" })}
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
