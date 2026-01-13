import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../components/ShopContext";
import { useTranslation } from "react-i18next";
import { FoodData } from "../assets/img/assets";

const FoodDetails = () => {
  const { Foods, addCart } = useContext(ShopContext);
  const { id } = useParams();
  const { t } = useTranslation();

  const food = Foods.find(item => item.id === Number(id));

  if (!food) return <p className="text-center mt-20">Plat introuvable</p>;

  return (
    <div className="mt-20 max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-10">
      {/* Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={food.image}
          alt={t(`food.${food.key}.name`)}
          className="w-[460px] rounded-lg shadow-md"
        />
      </div>

      {/* Détails */}
      <div className="md:w-1/2 space-y-6">
        <h3 className="text-3xl font-semibold">{t(`food.${food.key}.name`)}</h3>
        <p className="text-2xl text-amber-500 font-bold">{food.price} €</p>
        <p className="text-lg text-gray-600">{t(`food.${food.key}.description`)}</p>
        <button
          onClick={() => addCart(food, food.id)}
          className="bg-amber-600 text-white text-lg py-3 px-10 rounded-lg"
        >
          Ajouter au Panier
        </button>
      </div>
    </div>
  );
};

export default FoodDetails;
