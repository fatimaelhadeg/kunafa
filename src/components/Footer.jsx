import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-orange-100 dark:bg-[#1F1D2B] text-black dark:text-white pt-16 pb-10 px-6 lg:px-20 transition-colors duration-500">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-orange-500 mb-2 tracking-wide">
            La Cuisine de BaklaWa
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Votre application La Cuisine de BaklaWa pour une livraison rapide et délicieuse. 
            Savourez la joie directement à votre porte.
          </p>
          <div className="flex gap-4 mt-4 text-orange-500">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
              <Icon
                key={idx}
                className="hover:text-orange-600 cursor-pointer transition transform hover:scale-110"
              />
            ))}
          </div>
        </div>

        {/* Liens de l'entreprise */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Entreprise</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>
              <Link
                to="/About"
                className="flex items-center gap-2 hover:text-orange-400 transition transform hover:translate-x-1"
              >
                À Propos
              </Link>
            </li>
            <li>
              <Link
                to="/Local"
                className="flex items-center gap-2 hover:text-orange-400 transition transform hover:translate-x-1"
              >
                Localisation
              </Link>
            </li>
            <li>
              <Link
                to="/Timing"
                className="flex items-center gap-2 hover:text-orange-400 transition transform hover:translate-x-1"
              >
                Horaires
              </Link>
            </li>
          </ul>
        </div>

        {/* Liens de support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Support</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {[
              { name: "Centre de sécurité", to: "/SafetyCen" },
              { name: "FAQ", to: "/Faqs" },
              { name: "Contacter le support", to: "/Service" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.to}
                  className="flex items-center gap-2 hover:text-orange-400 transition transform hover:translate-x-1"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Informations de contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Contact</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="hover:text-orange-400 transition transform hover:translate-x-1">
              Email : support@BaklawaK.com
            </li>
            <li className="hover:text-orange-400 transition transform hover:translate-x-1">
              Téléphone : +212 06-23-78-99
            </li>
            <li className="hover:text-orange-400 transition transform hover:translate-x-1">
              Localisation : Agadir, Maroc
            </li>
          </ul>
        </div>
      </div>

      {/* Bas de page */}
      <div className="text-center text-sm text-gray-500 border-t mt-8 pt-4">
        © Développé par Ocean Connecting | Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;
