import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa";
import cus1 from "../assets/img/girl.jpg";
import cus2 from "../assets/img/boy1.jpg";
import cus4 from "../assets/img/user.jpg";

import cus3 from "../assets/img/boy2.jpg";
import { useTranslation } from "react-i18next";

const Reviews = () => {
  const { t } = useTranslation();

  // الصور ثابتة
const images = [cus1, cus2, cus3, cus4];

  // reviews من JSON
  const reviews = t("reviews.clients", { returnObjects: true }) || [];

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="container mx-auto py-16 lg:px-32 w-full overflow-hidden"
      id="reviews"
    >
      {/* Title */}
      <h1
        className="text-3xl sm:text-5xl font-extrabold mb-3 text-center
        bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500
        text-transparent bg-clip-text tracking-wide"
      >
        {t("reviews.title")}
      </h1>

      <p className="text-center text-gray-500 mb-14 max-w-md mx-auto text-sm sm:text-base">
        {t("reviews.subtitle")}
      </p>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-10">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[340px] border border-orange-200 shadow-xl rounded-2xl 
                       px-8 py-12 text-center bg-white
                       hover:bg-gradient-to-b hover:from-orange-50 hover:to-orange-100
                       hover:-translate-y-2 hover:shadow-2xl
                       transition-all duration-300"
          >
            {/* Image */}
            {images[index] && (
              <img
                src={images[index]}
                alt={review.name}
                className="w-36 h-36 rounded-full mx-auto mb-5 border-4 border-orange-300 shadow-md"
              />
            )}

            {/* Name */}
            <h2
              className="text-xl font-bold mb-2 
              text-yellow-700 tracking-wide"
            >
              {review.name}
            </h2>

            {/* Stars */}
            <div className="flex justify-center gap-1 text-yellow-400 mb-4">
              {Array.from({ length: 5 }).map((_, i) =>
                i < review.rating ? (
                  <FaStar key={i} className="w-5 h-5" />
                ) : (
                  <FaRegStar key={i} className="w-5 h-5" />
                )
              )}
            </div>

            {/* Comment */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {review.comment}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Reviews;
