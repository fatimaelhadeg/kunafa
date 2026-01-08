import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Full week timings
const fullWeekTimings = [
  { day: "monday", time: "09:00 - 21:00" },
  { day: "tuesday", time: "09:00 - 21:00" },
  { day: "wednesday", time: "09:00 - 21:00" },
  { day: "thursday", time: "09:00 - 21:00" },
  { day: "friday", time: "09:00 - 21:00" },
  { day: "saturday", time: "09:00 - 21:00" },
  { day: "sunday", time: "09:00 - 21:00" },
];

// Special weekend timings
const specialTimings = [
  { title: "special", time: "10:00 - 22:00" },
];

const Timing = () => {
  const { t } = useTranslation();

  const today = new Date().getDay();
  const currentDay = fullWeekTimings[(today + 6) % 7]; // get correct day (0 = monday)

  return (
    <div
      className="bg-white dark:bg-[#1F1D2B] py-16 px-6 lg:px-20 rounded-3xl mx-4 lg:mx-16 
                 shadow-lg shadow-gray-400 dark:shadow-gray-700 
                 transition-shadow duration-300 hover:shadow-2xl hover:shadow-gray-500 dark:hover:shadow-gray-800"
      id="Timing"
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-center text-[#8B4513] dark:text-[#FFDAB9] mb-12"
      >
        {t("timing.title")}
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-center items-start gap-12 max-w-6xl mx-auto">

        {/* Left: Full week */}
        <div className="flex flex-col space-y-4 w-full md:w-1/3">
          {fullWeekTimings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex justify-between items-center p-4 bg-[#ffffff] dark:bg-[#4B2E2B] rounded-2xl shadow-lg border-l-4 border-[#D4A373] dark:border-[#FFDAB9]
                         hover:bg-[#F3C693] dark:hover:bg-[#5C2E2B] transition-colors duration-300 cursor-pointer"
            >
              <span className="font-semibold text-[#a28060] dark:text-[#FFE4C4] text-lg">
                {t(`timing.days.${item.day}`)}
              </span>
              <span className="text-[#a28060] dark:text-[#FFDAB9] font-medium">
                {item.time}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Center: Today */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="flex flex-col justify-center items-center w-72 h-72 rounded-full bg-[#D4A373] dark:bg-[#8B4513] shadow-xl cursor-pointer hover:shadow-2xl transition-all duration-500"
        >
          <span className="text-[#FFF5E1] dark:text-[#FFDAB9] font-bold text-2xl">
            {t("timing.today")}
          </span>
          <span className="text-[#FFF5E1] dark:text-[#FFDAB9] font-semibold mt-3 text-center text-xl">
            {t(`timing.days.${currentDay.day}`)}
          </span>
          <span className="text-[#FFF5E1] dark:text-[#FFDAB9] font-medium mt-2 text-center text-lg">
            {currentDay.time}
          </span>
        </motion.div>

        {/* Right: Special */}
        <div className="flex flex-col space-y-4 w-full md:w-1/3">
          {specialTimings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 bg-[#ffffff] dark:bg-[#4B2E2B] rounded-2xl shadow-lg border-l-4 border-[#D4A373] dark:border-[#FFDAB9]
                         hover:bg-[#F3C693] dark:hover:bg-[#5C2E2B] transition-colors duration-300"
            >
              <span className="font-semibold text-[#a28060] dark:text-[#FFE4C4] text-lg">
                {t("timing.special")} :
              </span>
              <span className="text-[#a28060] dark:text-[#FFDAB9] font-medium">
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
