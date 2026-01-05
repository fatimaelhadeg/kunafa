import React, { useState } from "react";
import img from "../assets/img/order.png";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Baklava", price: 40 },
  { id: 2, name: "Coca", price: 10 },
  { id: 3, name: "Cake", price: 30 },
];

const GetApp = () => {
  const [cart, setCart] = useState({}); // { productId: qty }

  const handleChange = (id, qty) => {
    setCart({ ...cart, [id]: qty });
  };

  const generateWhatsAppLink = () => {
    let message = "Bonjour, bghit ncommandi:\n";
    let total = 0;

    products.forEach((product) => {
      const qty = cart[product.id];
      if (qty > 0) {
        message += `- ${product.name} x${qty} (${product.price * qty}dh)\n`;
        total += product.price * qty;
      }
    });

    message += `Total: ${total}dh`;
    const encodedMessage = encodeURIComponent(message);

    // رقمك هنا
    return `https://wa.me/212704309787?text=${encodedMessage}`;
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="dark:bg-black py-10 transition-colors duration-300"
      id="Service"
    >
      <div className="bg-white dark:bg-[#1F1D2B] py-16 px-6 lg:px-20 rounded-3xl mx-4 lg:mx-16 
          shadow-lg shadow-gray-400 dark:shadow-gray-700 
          transition-shadow duration-300 hover:shadow-2xl hover:shadow-gray-500 dark:hover:shadow-gray-800">
        <div className="grid md:grid-cols-2 items-center gap-10">
          
          {/* Left Text + Cart */}
          <div>
            <h4 className="text-orange-500 font-semibold uppercase mb-2">
              Our Application
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Simple Way To Order Your BaklaVa
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Discover food wherever and whenever and get your food delivered quickly.
            </p>

            {/* Products Selection */}
            <div className="mb-6">
              {products.map((product) => (
                <div key={product.id} className="flex justify-between items-center mb-3">
                  <span className="text-gray-800 dark:text-gray-200">{product.name} ({product.price}dh)</span>
                  <input
                    type="number"
                    min="0"
                    defaultValue={0}
                    className="w-16 border px-2 rounded dark:bg-gray-700 dark:text-white"
                    onChange={(e) => handleChange(product.id, parseInt(e.target.value))}
                  />
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={() => window.open(generateWhatsAppLink(), "_blank")}
              className="bg-orange-500 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-orange-600 transition"
            >
              Commander sur WhatsApp
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src={img}
              alt="App Preview"
              className="w-[280px] md:w-[320px] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default GetApp;
