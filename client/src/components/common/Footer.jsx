import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribed with email:", email);
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center mr-3 shadow-md">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-black"
                  fill="currentColor"
                >
                  <path d="M21,12.5c0,0.93-0.28,1.8-0.75,2.52c-0.44,0.67-1.07,1.19-1.81,1.53C18,16.85,17.5,17,17,17c-0.88,0-1.67-0.34-2.28-0.89 C13.91,15.28,13.5,14.18,13.5,13c0-1.37,0.62-2.59,1.58-3.41C15.79,8.95,16.7,8.5,17.73,8.5c1.15,0,2.17,0.5,2.89,1.29 C20.87,10.24,21,11.34,21,12.5z M4.32,15.11c0,0-0.01,0-0.01,0.01C4.12,15.24,4,15.5,4,15.77c0,0.82,1.54,1.66,2.47,1.91 c0.19,0.05,0.39,0.08,0.61,0.08c1.17,0,2.25-0.87,3.13-1.87C12.04,13.77,12,13.38,12,13c0-1.12,0.17-2.18,0.47-3.17 C12.8,8.95,13.13,8.5,13.13,8c0-0.62-0.20-1.6-0.74-2.31C11.57,4.52,10.5,4.01,9,4C8.29,4,7.63,4.1,7.03,4.29 C4.93,5,3.54,6.95,4.02,9.06C4.12,9.5,4.28,9.91,4.49,10.27c0.65,1.13,1.39,1.73,2.13,2.37c0.67,0.58,1.02,1.17,0.22,1.81 C5.94,15.06,4.9,15.11,4.32,15.11z" />
                </svg>
              </div>
              <Link to="/" className="text-xl sm:text-2xl font-bold text-white">
                <span className="text-white">SKY</span>
                <span className="text-yellow-400">Fitness</span>
              </Link>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              At SKY Fitness, we're dedicated to helping you achieve your fitness goals with state-of-the-art facilities, expert trainers, and a supportive community.
            </p>
            <div className="flex space-x-4">
              {[
                { name: "Facebook", link: "https://facebook.com", icon: <FaFacebookF /> },
                { name: "Instagram", link: "https://instagram.com", icon: <FaInstagram /> },
                { name: "Twitter", link: "https://twitter.com", icon: <FaTwitter /> },
                { name: "YouTube", link: "https://youtube.com", icon: <FaYoutube /> },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Quick Links</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {[
                { to: "/about", label: "About Us" },
                { to: "/pricing", label: "Pricing" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact Us" },
                { to: "/blog", label: "Blog" },
                { to: "/workouts", label: "Workout Routines" },
              ].map((link, index) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mr-2 text-yellow-400 mt-0.5" />
                <span className="text-sm sm:text-base">123 Fitness Street, Mumbai, India</span>
              </li>
              <li className="flex items-start">
                <FaPhoneAlt className="w-5 h-5 mr-2 text-yellow-400 mt-0.5" />
                <a href="tel:+912345678900" className="hover:text-yellow-400 transition-colors duration-300 text-sm sm:text-base">
                  +91 234 567 8900
                </a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="w-5 h-5 mr-2 text-yellow-400 mt-0.5" />
                <a href="mailto:info@skyfitness.com" className="hover:text-yellow-400 transition-colors duration-300 text-sm sm:text-base break-all">
                  info@skyfitness.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg sm:text-xl font-bold text-yellow-400">Stay Updated</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Subscribe for the latest updates, fitness tips, and exclusive offers.
            </p>
            {subscribed ? (
              <p className="text-yellow-400 text-sm sm:text-base">
                Thank you for subscribing! Check your email for confirmation.
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-gray-800 text-white p-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="bg-yellow-400 text-black font-medium py-2 px-4 rounded-md hover:bg-yellow-500 transition-colors duration-300 text-sm sm:text-base"
                >
                  Subscribe
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-700 my-6 sm:my-8"
        />

        {/* Copyright and Additional Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-center text-gray-300 text-xs sm:text-sm"
        >
          <p>© {new Date().getFullYear()} SKY Fitness. All rights reserved.</p>
          <div className="flex space-x-4 mt-3 sm:mt-0">
            <Link to="/privacy" className="hover:text-yellow-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-yellow-400 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 bg-yellow-400 text-black p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-colors duration-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiChevronUp className="w-5 h-5" />
        <span className="sr-only">Back to Top</span>
      </motion.button>
    </footer>
  );
};

export default Footer;
