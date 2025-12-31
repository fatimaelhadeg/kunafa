import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa"; // Filled and empty stars
import cus1 from "../assets/img/girl.jpg";
import cus2 from "../assets/img/boy1.jpg";
import cus3 from "../assets/img/boy2.jpg";

const reviews = [
  { name: "Fatema", rating: 5, comment: "Excellent service! Highly recommended.", image: cus1 },
  { name: "Amine", rating: 4, comment: "Great taste, will order again.", image: cus2 },
  { name: "Ghali", rating: 3, comment: "Lovely presentation and quality.", image: cus3 },
];

const Reviews = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="container mx-auto py-10 lg:px-32 w-full overflow-hidden"
      id="Reviews"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer <span className="underline underline-offset-4 decoration-1 font-light">Reviews</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real Reviews from our Happy Customers
      </p>

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
            {review.image && (
              <img
                src={review.image}
                alt={review.name}
                className="w-40 h-40 rounded-full mx-auto mb-4"
              />
            )}
            <h2 className="text-xl text-[#000000] dark:text-[#c46711] font-medium mb-1">
              {review.name}
            </h2>
            <div className="flex justify-center gap-1 text-yellow-400 mb-4">
              {Array.from({ length: 5 }).map((_, i) =>
                i < review.rating ? (
                  <FaStar key={i} className="w-5 h-5" />
                ) : (
                  <FaRegStar key={i} className="w-5 h-5" />
                )
              )}
            </div>
            <p className="text-[#000000] dark:text-[#FFE4C4]">{review.comment}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Reviews;
