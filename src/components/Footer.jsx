import React from "react";
/*
  import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
  } from "react-icons/fa";
*/

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
    <footer className="bg-orange-100 dark:bg-[#1F1D2B] text-black dark:text-white transition-colors duration-500">
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 grid gap-12 sm:grid-cols-2 md:grid-cols-4">
        
        {/* Logo & Description */}
        <div className="space-y-4">
          <h2 className="text-2xl font-extrabold text-orange-500 tracking-wide">
            {t("footer.brand")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
            {t("footer.description")}
          </p>

          {/*
          <div className="flex gap-4 mt-4 text-orange-500">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
              <Icon
                key={idx}
                className="hover:text-orange-600 cursor-pointer transition transform hover:scale-110"
              />
            ))}
          </div>
          */}
        </div>

        {/* Liens de l'entreprise */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">
            {t("footer.company")}
          </h3>
          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            {/* About */}
            <li>
              <Link
                to="/About"
                className="hover:text-orange-400 transition transform hover:translate-x-1 inline-block"
              >
                {t("footer.about")}
              </Link>
            </li>

            {/* Foods List */}
            <li>
              <Link
                to="/#foodslist"
                className="hover:text-orange-400 transition transform hover:translate-x-1 inline-block"
              >
                {t("footer.foodsList")}
              </Link>
            </li>

            {/* Special Offer */}
            <li>
              <Link
                to="/#special"
                className="hover:text-orange-400 transition transform hover:translate-x-1 inline-block"
              >
                {t("footer.specialOffer")}
              </Link>
            </li>

            {/*
            <li>
              <Link
                to="/Local"
                className="hover:text-orange-400 transition transform hover:translate-x-1 inline-block"
              >
                {t("footer.location")}
              </Link>
            </li>
            */}

            {/*
            <li>
              <Link
                to="/Timing"
                className="hover:text-orange-400 transition transform hover:translate-x-1 inline-block"
              >
                {t("footer.hours")}
              </Link>
            </li>
            */}
          </ul>
        </div>

        {/* Liens de support */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">
            {t("footer.support")}
          </h3>
          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            {supportLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  to={link.to}
                  className="hover:text-orange-400 transition transform hover:translate-x-1 inline-block"
                >
                  {t(`footer.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Informations de contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">
            {t("footer.contact")}
          </h3>
          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li className="hover:text-orange-400 transition">
              {t("footer.email")}
            </li>
            <li className="hover:text-orange-400 transition">
              {t("footer.phone")}
            </li>
            <li className="hover:text-orange-400 transition">
              {t("footer.address")}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-4 text-center text-xs text-gray-500">
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
