import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Social media icons (using SVGs for simplicity; you can replace with react-icons)
const socialIcons = [
  { name: "Facebook", link: "https://facebook.com", icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { name: "Instagram", link: "https://instagram.com", icon: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zm1.5-4.87h.01M21 2a19 19 0 0 0-19 19 19 19 0 0 0 19-19z" },
  { name: "Twitter", link: "https://twitter.com", icon: "M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" },
  { name: "YouTube", link: "https://youtube.com", icon: "M22.46 6a3 3 0 0 0-2.12-2.12C18.21 3 12 3 12 3s-6.21 0-8.34.88A3 3 0 0 0 1.54 6 31.32 31.32 0 0 0 1 12a31.32 31.32 0 0 0 .54 6 3 3 0 0 0 2.12 2.12C5.79 21 12 21 12 21s6.21 0 8.34-.88A3 3 0 0 0 22.46 18 31.32 31.32 0 0 0 23 12a31.32 31.32 0 0 0-.54-6zM9 16V8l6 4-6 4z" },
];

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
    <footer className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* Logo and About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center ">
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
              {socialIcons.map((social, index) => (
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
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={social.icon} />
                  </svg>
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
                <svg
                  className="w-5 h-5 mr-2 text-yellow-400 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12zm0 2a1 1 0 00-1 1v3a1 1 0 002 0V7a1 1 0 00-1-1z" />
                </svg>
                <span className="text-sm sm:text-base">123 Fitness Street, Mumbai, India</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 text-yellow-400 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a href="tel:+912345678900" className="hover:text-yellow-400 transition-colors duration-300 text-sm sm:text-base">
                  +91 234 567 8900
                </a>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-2 text-yellow-400 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
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
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
        <span className="sr-only">Back to Top</span>
      </motion.button>
    </footer>
  );
};

export default Footer;