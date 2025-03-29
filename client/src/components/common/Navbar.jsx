import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Scroll handling for hiding/showing navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY + 10) {
        setIsVisible(false);
      } else if (window.scrollY < lastScrollY - 10) {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu and scroll to top on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md p-4 shadow-lg transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center mr-2 shadow-md">
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 md:w-8 md:h-8 text-black"
              fill="currentColor"
            >
              <path d="M21,12.5c0,0.93-0.28,1.8-0.75,2.52c-0.44,0.67-1.07,1.19-1.81,1.53C18,16.85,17.5,17,17,17c-0.88,0-1.67-0.34-2.28-0.89 C13.91,15.28,13.5,14.18,13.5,13c0-1.37,0.62-2.59,1.58-3.41C15.79,8.95,16.7,8.5,17.73,8.5c1.15,0,2.17,0.5,2.89,1.29 C20.87,10.24,21,11.34,21,12.5z M4.32,15.11c0,0-0.01,0-0.01,0.01C4.12,15.24,4,15.5,4,15.77c0,0.82,1.54,1.66,2.47,1.91 c0.19,0.05,0.39,0.08,0.61,0.08c1.17,0,2.25-0.87,3.13-1.87C12.04,13.77,12,13.38,12,13c0-1.12,0.17-2.18,0.47-3.17 C12.8,8.95,13.13,8.5,13.13,8c0-0.62-0.20-1.6-0.74-2.31C11.57,4.52,10.5,4.01,9,4C8.29,4,7.63,4.1,7.03,4.29 C4.93,5,3.54,6.95,4.02,9.06C4.12,9.5,4.28,9.91,4.49,10.27c0.65,1.13,1.39,1.73,2.13,2.37c0.67,0.58,1.02,1.17,0.22,1.81 C5.94,15.06,4.9,15.11,4.32,15.11z" />
            </svg>
          </div>
          <Link to="/" className="text-lg md:text-xl font-bold text-white">
            <span className="text-white">SKY</span>
            <span className="text-yellow-400">Fitness</span>
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </motion.div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {[
            { to: "/about", label: "About" },
            { to: "/pricing", label: "Pricing" },
            { to: "/services", label: "Services" },
            { to: "/contact", label: "Contact Us" },
          ].map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={link.to}
                className={`relative text-lg font-medium transition-colors duration-300 ${
                  isActive(link.to)
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400"
                    layoutId="underline"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/register"
              className={`font-medium py-2 px-6 rounded-full transition-colors duration-300 shadow-md ${
                isActive("/register")
                  ? "bg-yellow-400 text-black"
                  : "bg-yellow-300 text-black hover:bg-yellow-400"
              }`}
            >
              Register Now
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        className={`md:hidden bg-gray-900 bg-opacity-95 backdrop-blur-md ${
          isMenuOpen ? "block" : "hidden"
        } pt-4 pb-6 px-4`}
        variants={mobileMenuVariants}
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
      >
        <div className="flex flex-col space-y-4">
          {[
            { to: "/about", label: "About" },
            { to: "/pricing", label: "Pricing" },
            { to: "/services", label: "Services" },
            { to: "/contact", label: "Contact Us" },
          ].map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.to}
                className={`block py-3 px-4 rounded-md text-lg font-medium transition-colors duration-300 ${
                  isActive(link.to)
                    ? "bg-yellow-400 text-black"
                    : "text-white hover:bg-gray-800 hover:text-yellow-400"
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/register"
              className={`block text-center font-medium py-3 px-6 rounded-full transition-colors duration-300 shadow-md ${
                isActive("/register")
                  ? "bg-yellow-400 text-black"
                  : "bg-yellow-300 text-black hover:bg-yellow-400"
              }`}
            >
              Register Now
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;