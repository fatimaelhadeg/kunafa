import React from "react";
import img from "../assets/img/order.png";
import { motion } from "framer-motion";

const GetApp = () => {
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
                    {/* Texte à gauche */}
                    <div>
                        <h4 className="text-orange-500 font-semibold uppercase mb-2">
                            Notre Application
                        </h4>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Une façon simple de commander votre nourriture
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Découvrez la nourriture où que vous soyez et faites-vous livrer rapidement.
                        </p>
                        <button className="bg-orange-500 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-orange-600 transition">
                            <a 
                                href="https://wa.me/212646237899?text=Bonjour%2C%20je%20veux%20commander%20de%20la%20nourriture" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Obtenir l'application
                            </a>
                        </button>
                    </div>

                    {/* Image à droite */}
                    <div className="flex justify-center">
                        <img
                            src={img}
                            alt="Aperçu de l'application"
                            className="w-[280px] md:w-[320px] drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default GetApp;
