import React from 'react'
import { GiFoodTruck } from 'react-icons/gi'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom' // <-- ajouté pour le lien
import k12 from '../assets/img/order.png'

const About = () => {
  return (
    <>
      <section id="about" className="py-34 px-4 md:px-8 bg-gradient-to-r from-gray-100 to-gray-300 ">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          
          {/* Image stylée à gauche avec animation */}
          <motion.div 
            className="lg:w-1/2 w-full flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <img 
              src={k12} 
              alt="kunafaabout" 
              className="max-w-xs h-auto shadow-2xl hover:scale-105 transition-transform duration-500
                     shadow-gray-400 dark:shadow-gray-700 
             hover:shadow-2xl hover:shadow-gray-500 dark:hover:shadow-gray-800"
              style={{
                borderRadius: "50% 20% 50% 20% / 30% 40% 60% 50%",
                objectFit: "cover",
              }}
            />
          </motion.div>

          {/* Texte à droite avec animation */}
          <motion.div 
            className="lg:w-1/2 w-full text-center lg:text-left flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-3xl font-bold mb-6 flex items-center justify-center lg:justify-start gap-3 text-orange-600 hover:text-orange-400 transition-colors duration-500">
              <GiFoodTruck className="text-orange-500" size={35} />
              Why Choose Us?
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-500 mb-6">
              At <span className="font-semibold text-orange-500">KunaFa's Kitchen</span>, we take pride in crafting fresh, authentic Kunafa and Turkish desserts every day. 
              Using premium ingredients and traditional recipes, we ensure each bite is sweet, rich, and unforgettable. 
              Our goal is simple: delight your taste buds and bring a touch of <span className="text-yellow-600 font-medium">Turkish sweetness</span> to every moment.
            </p>

          <Link
  to="/"
  className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-400 transition-colors duration-300"
>
  Back to Home
</Link>

          </motion.div>

        </div>
      </section>
    </>
  )
}

export default About
