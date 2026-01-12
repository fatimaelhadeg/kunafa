// SpecialOffer.jsx
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "./ShopContext";
import { FiShoppingCart } from "react-icons/fi";

// Images
import baklava1 from "../assets/img/baklava1.jpg";
import baklava2 from "../assets/img/baklava2.jpg";
import baklava3 from "../assets/img/baklava3.jpg";

const images = [baklava1, baklava2, baklava3];

const SpecialOffer = () => {
  const { t } = useTranslation();
  const { addCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const offers = t("specialOffers", { returnObjects: true }) || [];

  const handleAddToCart = (offer, index) => {
    addCart(
      {
        id: index,
        price: Number(offer.price), // convertir en nombre pour éviter NaN
        amount: 1,
        image: images[index],
        title: offer.title,         // identifier comme offre spéciale
        pieces: offer.pieces,
        bonus: offer.bonus,
        key: null,                  // pas de key pour les offres spéciales
      },
      index
    );

  };

  return (
    <section className="bg-white py-16 px-6 md:px-20" id="special">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-yellow-700 mb-12">
        {t("specialOffersTitle")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-50 rounded-3xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={images[index]}
              alt={offer.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-center flex flex-col items-center">
              <h3 className="text-2xl font-bold text-yellow-700 mb-2">{offer.title}</h3>
              <p className="text-gray-600 mb-3 text-sm md:text-base">{offer.description}</p>
              <p className="text-gray-500 mb-3 font-medium">
                {offer.pieces} {offer.bonus > 0 && `+ ${offer.bonus}`}
              </p>
              <p className="text-yellow-700 font-bold text-lg mb-4">{offer.price} DH</p>

              <button
                onClick={() => handleAddToCart(offer, index)}
                className="bg-yellow-700 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-800 transition flex items-center justify-center gap-2"
              >
                <FiShoppingCart className="text-lg" />
                {offer.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffer;
