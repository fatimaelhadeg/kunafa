import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
 const supportLinks = [
    { key: "security", to: "/safetyCen" },
    { key: "faq", to: "/faqs" },
    { key: "contactSupport", to: "/service" },
  ];


  return (
    <footer className="bg-orange-100 dark:bg-[#1F1D2B] text-black dark:text-white pt-16 pb-10 px-6 lg:px-20 transition-colors duration-500">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-orange-500 mb-2 tracking-wide">
            {t("footer.brand")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {t("footer.description")}
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
          <h3 className="text-lg font-semibold mb-4 tracking-wide">{t("footer.company")}</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>
              <Link
                to="/About"
                className="flex items-center gap-2 hover:text-orange-400 transition transform hover:translate-x-1"
              >
                {t("footer.about")}
              </Link>
            </li>
            
              {/*<li>
                <Link to="/Local" className="flex items-center gap-2 hover:text-orange-400 transition transform hover:translate-x-1">
                {t("footer.location")}
              </Link>
            </li>
              */}
            {/*
               <li>
              <Link
                to="/Timing"
                className="flex items-center gap-2 hover:text-orange-400 transition transform hover:translate-x-1"
              >
                {t("footer.hours")}
              </Link>
            </li>
            */}

         
          </ul>
        </div>

        {/* Liens de support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">{t("footer.support")}</h3>
         <ul className="space-y-3 text-gray-700 dark:text-gray-300">
        {supportLinks.map((link, idx) => (
          <li key={idx}>
            <Link
              to={link.to}
              className="flex items-center gap-2 hover:text-orange-400 transition transform hover:translate-x-1"
            >
              {t(`footer.${link.key}`)}
            </Link>
          </li>
        ))}
      </ul>
        </div>

        {/* Informations de contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">{t("footer.contact")}</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="hover:text-orange-400 transition transform hover:translate-x-1">
              {t("footer.email")}
            </li>
            <li className="hover:text-orange-400 transition transform hover:translate-x-1">
              {t("footer.phone")}
            </li>
            <li className="hover:text-orange-400 transition transform hover:translate-x-1">
              {t("footer.address")}

            </li>
          </ul>
        </div>
      </div>

      {/* Bas de page */}
      <div className="text-center text-sm text-gray-500 border-t mt-8 pt-4">
        {t("footer.copyright")}
      </div>
    </footer>
  );
};

export default Footer;
