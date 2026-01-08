import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa"; 
import cus1 from "../assets/img/girl.jpg";
import cus2 from "../assets/img/boy1.jpg";
import cus3 from "../assets/img/boy2.jpg";
import { useTranslation } from "react-i18next";

const Reviews = () => {
  const { t } = useTranslation();

  // array الصور يمكن تبقى ثابتة
  const images = [cus1, cus2, cus3];

  // reviews من JSON
  const reviews = t("reviews.clients", { returnObjects: true });

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="reviews"
    >
      {/* Titre */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        {t("reviews.title")}
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        {t("reviews.subtitle")}
      </p>

      {/* Cartes des avis */}
      <div className="flex flex-wrap justify-center gap-8">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-[340px] border shadow-lg rounded-2xl px-8 py-12 text-center 
                       bg-[#ffffff] dark:bg-[#ffffff] 
                       hover:bg-orange-100 dark:hover:bg-orange-200 
                       hover:scale-105 transition-all duration-300"
          >
            {/* Image du client */}
            {images[index] && (
              <img
                src={images[index]}
                alt={review.name}
                className="w-40 h-40 rounded-full mx-auto mb-4"
              />
            )}

            {/* Nom du client */}
            <h2 className="text-xl text-[#000000] dark:text-[#c46711] font-medium mb-1">
              {review.name}
            </h2>

            {/* Étoiles */}
            <div className="flex justify-center gap-1 text-yellow-400 mb-4">
              {Array.from({ length: 5 }).map((_, i) =>
                i < review.rating ? (
                  <FaStar key={i} className="w-5 h-5" />
                ) : (
                  <FaRegStar key={i} className="w-5 h-5" />
                )
              )}
            </div>

            {/* Commentaire */}
            <p className="text-[#000000] dark:text-[#FFE4C4]">{review.comment}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Reviews;
