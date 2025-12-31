import React from "react";
import { FaShoppingCart, FaShippingFast, FaCheckCircle } from "react-icons/fa";

const About = () => {
  const features = [
    {
      title: "Easy to Order",
      icon: <FaShoppingCart className="text-4xl text-orange-400 mb-4" />,
      description: "Order your favorite items quickly and easily with our user-friendly interface.",
    },
    {
      title: "Fastest Delivery",
      icon: <FaShippingFast className="text-4xl text-orange-400 mb-4" />,
      description: "Get your orders delivered in record time, right to your doorstep.",
    },
    {
      title: "Best Quality",
      icon: <FaCheckCircle className="text-4xl text-orange-400 mb-4" />,
      description: "We ensure top-notch quality in all our products for complete satisfaction.",
    },
  ];

  return (
    <section className="py-20 px-6 h-150 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900">
      <div className="max-w-5xl mx-auto text-center h-30 mb-12">
        <h1 className="h-10 text-4xl font-bold mb-4 text-gray-800 dark:text-white  hover:text-orange-500 transition-colors duration-300">
          Why Choose Us
        </h1>
 <p className="text-gray-800 text-center leading-relaxed max-w-md mx-auto">
  Our baklava is loved by dessert enthusiasts everywhere,<br />
  made with the finest ingredients and crafted to perfection,<br />
  delivering a taste that is simply unforgettable.
</p>



      </div>

      <div className="grid md:grid-cols-3 gap-10 lg:gap-16 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-10 lg:p-12 rounded-3xl shadow-2xl transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex justify-center mb-6">
              {React.cloneElement(feature.icon, { className: "text-5xl lg:text-6xl text-orange-400" })}
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-4 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-center text-base md:text-lg">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

    </section>

  );
};

export default About;
