import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import { Link } from 'react-router-dom';

const FoodsList = () => {
  const { Foods, addCart } = useContext(ShopContext);

  return (
    <div className="w-full mx-auto px-6 text-center mt-20" id="foodlist">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">Our Delicious BaKlaVa</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Foods.map((Food) => {
          const { id, image, name, price, description } = Food;
          return (
            <div
              key={id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <Link to={`/Food/${id}`}>
                <img
                  src={image}
                  alt={name}
                  className="h-48 w-full object-cover rounded-lg transform scale-95 hover:scale-100 transition-transform duration-300"
                />
              </Link>
              <div className="mt-4 flex flex-col flex-1">
                <h4 className="text-lg font-semibold text-black">{name}</h4>

                {/* Description */}
                <p className="text-gray-500 text-sm mt-2 flex-1">{description}</p>

                {/* Prix + Button */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-800 font-bold text-lg">{price} MAD</span>
                  <button
                    onClick={() => addCart(Food, id)}
                    className="bg-white border border-amber-600 text-amber-600 px-4 py-2 rounded-full hover:bg-amber-600 hover:text-white transition duration-300"
                  >
                    Add To Cart
                  </button>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoodsList;
