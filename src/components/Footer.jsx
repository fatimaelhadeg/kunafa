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
            BaklaVa's Kitchen
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Your BaklaVa's Kitchen app for delicious and fast food delivery. Taste the joy at your doorstep.
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

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Company</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>
              <Link
                to="/About"
                className="flex items-center gap-2 hover:text-orange-400 transition transform hover:translate-x-1"
              >
                About Us
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
                Timing
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Support</h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {[
              { name: "Help Center", to: "/HelpCen" },
              { name: "Safety Center", to: "/SafetyCen" },
              { name: "FAQs", to: "/Faqs" },
              { name: "Contact Support", to: "/Service" },
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

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 tracking-wide">Contact</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="hover:text-orange-400 transition transform hover:translate-x-1">
              Email: support@BaklaVaK.com
            </li>
            <li className="hover:text-orange-400 transition transform hover:translate-x-1">
              Phone: +212 00-00-00-00
            </li>
            <li className="hover:text-orange-400 transition transform hover:translate-x-1">
              Location: Agadir, Maroc
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-sm text-gray-500 border-t mt-8 pt-4">
        © Copyright developed by Champion Programmers | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
