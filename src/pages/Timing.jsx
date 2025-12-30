import React from "react";
import { motion } from "framer-motion";

const fullWeekTimings = [
  { day: "Monday", time: "09:00 AM - 21:00 PM" },
  { day: "Tuesday", time: "09:00 AM - 21:00 PM" },
  { day: "Wednesday", time: "09:00 AM - 21:00 PM" },
  { day: "Thursday", time: "09:00 AM - 21:00 PM" },
  { day: "Friday", time: "09:00 AM - 21:00 PM" },
  { day: "Saturday", time: "09:00 AM - 21:00 PM" },
  { day: "Sunday", time: "09:00 AM - 21:00 PM" },
];

const specialTimings = [
  { title: "Weekend Special", time: "10:00 AM - 22:00 PM" },
];

const Timing = () => {
  const today = new Date().getDay();
  const currentDay = fullWeekTimings[(today + 6) % 7];

  return (
  <div className="bg-white dark:bg-[#1F1D2B] py-16 px-6 lg:px-20 rounded-3xl mx-4 lg:mx-16 
            shadow-lg shadow-gray-400 dark:shadow-gray-700 
            transition-shadow duration-300 hover:shadow-2xl hover:shadow-gray-500 dark:hover:shadow-gray-800"
            id="Timing">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center text-[#8B4513] dark:text-[#FFDAB9] mb-12"
      >
        Our Timings
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-center items-start gap-12 max-w-6xl mx-auto">
        {/* Left: Full Week */}
        <div className="flex flex-col space-y-4 w-full md:w-1/3">
          {fullWeekTimings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-between items-center p-4 bg-[#F5E1C9] dark:bg-[#4B2E2B] rounded-2xl shadow-lg border-l-4 border-[#D4A373] dark:border-[#FFDAB9]
                         hover:bg-[#F3C693] dark:hover:bg-[#5C2E2B] transition-colors duration-300 cursor-pointer"
            >
              <span className="font-semibold text-[#8B4513] dark:text-[#FFE4C4] text-lg">
                {item.day}
              </span>
              <span className="text-[#5C4033] dark:text-[#FFDAB9] font-medium">
                {item.time}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Center: Big Circle with hover & transition */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="flex flex-col justify-center items-center w-72 h-72 rounded-full bg-[#D4A373] dark:bg-[#8B4513] shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-500"
        >
          <span className="text-[#FFF5E1] dark:text-[#FFDAB9] font-bold text-2xl">
            Today
          </span>
          <span className="text-[#FFF5E1] dark:text-[#FFDAB9] font-semibold mt-3 text-center text-xl">
            {currentDay.day}
          </span>
          <span className="text-[#FFF5E1] dark:text-[#FFDAB9] font-medium mt-2 text-center text-lg">
            {currentDay.time}
          </span>
        </motion.div>

        {/* Right: Weekend Special */}
        <div className="flex flex-col space-y-4 w-full md:w-1/3">
          {specialTimings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 bg-[#F5E1C9] dark:bg-[#4B2E2B] rounded-2xl shadow-lg border-l-4 border-[#D4A373] dark:border-[#FFDAB9]
                         hover:bg-[#F3C693] dark:hover:bg-[#5C2E2B] transition-colors duration-300"
            >
              <span className="font-semibold text-[#8B4513] dark:text-[#FFE4C4] text-lg">
                {item.title}
              </span>
              <span className="text-[#5C4033] dark:text-[#FFDAB9] font-medium">
                {item.time}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timing;
