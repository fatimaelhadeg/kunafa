import React from "react";
import { ShieldCheck, Truck, Lock } from "lucide-react";

const safetyData = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
    title: "Food Safety",
    desc: "All meals are prepared following strict hygiene and quality standards.",
  },
  {
    icon: <Truck className="w-8 h-8 text-orange-500" />,
    title: "Safe Delivery",
    desc: "Our delivery partners ensure safe and contactless deliveries.",
  },
  {
    icon: <Lock className="w-8 h-8 text-orange-500" />,
    title: "Data Protection",
    desc: "Your personal information and payments are fully protected.",
  },
];

const SafetyCenter = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1F1D2B] py-16 px-6">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-500">
          Safety Center
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-3">
          Your safety and trust are our top priorities
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {safetyData.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#2A2838] p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Extra Section */}
      <div className="max-w-4xl mx-auto mt-16 bg-orange-100 dark:bg-[#2A2838] p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-semibold mb-3">
          Need help or report a safety issue?
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Contact our support team anytime for assistance.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default SafetyCenter;
