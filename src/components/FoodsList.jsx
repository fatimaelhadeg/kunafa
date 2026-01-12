import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FoodsList = () => {
  const { Foods, addCart } = useContext(ShopContext);
  const { t } = useTranslation();

  return (
    <div className="w-full mx-auto px-6 text-center mt-20" id="foodslist">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800">
        {t("foods.title")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Foods.map((Food) => {
          const { id, image, price, key } = Food;
          return (
            <div
              key={id}
              className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* صورة مع رابط للمنتج */}
              <Link to={`/Food/${id}`}>
                <img
                  src={image}
                  alt={t(`food.${key}.name`)}
                  className="h-48 w-full object-cover rounded-lg transform scale-95 hover:scale-100 transition-transform duration-300"
                />
              </Link>

              <div className="mt-4 flex flex-col flex-1">
                {/* اسم المنتج */}
                <h4 className="text-lg font-semibold text-black">
                  {t(`food.${key}.name`)}
                </h4>

                {/* وصف المنتج */}
                <p className="text-gray-500 text-sm mt-2 flex-1">
                  {t(`food.${key}.description`)}
                </p>

                {/* سعر + زر إضافة للسلة */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-800 font-bold text-lg">
                    {price} {t("foods.price")}
                  </span>
                  <button
                    onClick={() => addCart(Food, id)}
                    className="bg-white border border-amber-600 text-amber-600 px-4 py-2 rounded-full hover:bg-amber-600 hover:text-white transition duration-300"
                  >
                    {t("foods.addToCart")}
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
