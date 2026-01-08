import React, { useState } from "react";
import { ShieldCheck, Truck, Lock } from "lucide-react";
import { useTranslation } from "react-i18next";

const iconsMap = {
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-orange-500" />,
  Truck: <Truck className="w-8 h-8 text-orange-500" />,
  Lock: <Lock className="w-8 h-8 text-orange-500" />
};

const SafetyCenter = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;
  const data = t("safetyCenter", { returnObjects: true });

  const toggleResponse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1F1D2B] py-16 px-6">
      {/* Titre */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-500">{data.title}</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3">{data.subtitle}</p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {data.cards.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleResponse(index)}
            className="bg-white dark:bg-[#2A2838] p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className="mb-4">{iconsMap[item.icon]}</div>
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>

            {activeIndex === index && (
              <div className="mt-4 p-4 bg-orange-50 dark:bg-[#3A3548] rounded-lg text-gray-700 dark:text-gray-200 transition">
                {item.response}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Section supplémentaire */}
      <div className="max-w-4xl mx-auto mt-16 bg-orange-100 dark:bg-[#2A2838] p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-semibold mb-3">{data.extraSection.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{data.extraSection.desc}</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition">
          {data.extraSection.buttonText}
        </button>
      </div>
    </div>
  );
};

export default SafetyCenter;
