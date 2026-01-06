import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FoodData } from "../assets/img/assets";
import { ShopContext } from "../components/ShopContext";

const FoodDetails = () => {
  const { addCart } = useContext(ShopContext);
  const { id } = useParams();

  // Chercher le plat correspondant à l'id
  const food = FoodData.find(item => item.id === id);

  if (!food) {
    return <p>Plat introuvable</p>;
  }

  return (
    <div className="mt-20 max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-10">
      {/* Image du plat */}
      <div className="md:w-1/2 flex justify-center">
        <img src={food.image} alt={food.name} className="w-[460px] rounded-lg shadow-md" />
      </div>

      {/* Détails du plat */}
      <div className="md:w-1/2 space-y-6">
        <h3 className="text-3xl font-semibold">{food.name}</h3>
        <p className="text-2xl text-amber-500 font-bold">{food.price} €</p>
        <p className="text-lg text-gray-600">{food.description}</p>
        <button 
          onClick={() => addCart(food, id)} 
          className="bg-amber-600 text-white text-lg py-3 px-10 rounded-lg"
        >
          Ajouter au Panier
        </button>
      </div>
    </div>
  );
};

export default FoodDetails;
