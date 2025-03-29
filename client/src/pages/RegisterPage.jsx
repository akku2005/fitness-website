import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full py-12 px-4 sm:px-6 bg-black text-white">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8 mt-10">
          <h2 className="text-3xl font-bold text-yellow-400">Welcome</h2>
          <p className="mt-2 text-white">
            {isLogin ? "Sign in to access your account" : "Create an account to get started"}
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-700">
            <button
              onClick={() => setIsLogin(true)}
              className={`w-1/2 py-4 text-center font-medium text-sm sm:text-base transition-colors duration-200 ${
                isLogin ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`w-1/2 py-4 text-center font-medium text-sm sm:text-base transition-colors duration-200 ${
                !isLogin ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              Register
            </button>
          </div>

          <div className="p-6 sm:p-8 text-white">
            <AnimatePresence mode="wait">
              {isLogin ? (
                <motion.form
                  key="login"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fadeInUp}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full p-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 bg-gray-700"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full p-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 bg-gray-700"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-yellow-400 border-gray-600 rounded focus:ring-yellow-500"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                      />
                      <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-sm font-medium text-yellow-400 hover:text-yellow-600">
                      Forgot password?
                    </a>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full py-3 px-4 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition-colors duration-300 shadow-md"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Sign In
                  </motion.button>

                  <div className="mt-5 pt-5 border-t border-gray-700">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-600"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-gray-800 text-gray-500">Or continue with</span>
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      <motion.button
                        type="button"
                        className="flex justify-center items-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-gray-700 hover:bg-gray-600"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.68 12.2c0-1.2-.36-2.32-.98-3.26-.96-1.48-2.49-2.5-4.29-2.7-1.2-.14-2.37.14-3.38.84-1.07-.7-2.24-.98-3.44-.84-1.8.2-3.33 1.22-4.29 2.7-.62.94-.98 2.06-.98 3.26 0 1.27.4 2.45 1.06 3.42.6.87 1.4 1.6 2.36 2.1.87.47 1.83.7 2.8.7.57 0 1.13-.08 1.67-.23.27-.08.53.1.54.38V20c0 .55.45 1 1 1h1.98c.55 0 1-.45 1-1v-2.38c0-.28.27-.46.54-.38.54.15 1.1.23 1.67.23.97 0 1.93-.23 2.8-.7.96-.5 1.76-1.23 2.36-2.1.66-.97 1.06-2.15 1.06-3.42M16.14 7.79c1.32.15 2.44.88 3.12 1.93.47.74.7 1.6.7 2.49 0 .9-.23 1.76-.7 2.49-.92 1.4-2.48 2.24-4.18 2.24-.46 0-.92-.05-1.36-.17-.53-.15-1.11.06-1.33.58-.2.47-.65.77-1.15.77H9.8c-.51 0-.95-.3-1.15-.77-.22-.52-.8-.73-1.33-.58-.44.12-.9.17-1.36.17-1.7 0-3.26-.84-4.17-2.24-.48-.72-.71-1.58-.71-2.48 0-.9.23-1.76.7-2.5.69-1.05 1.8-1.78 3.13-1.93.85-.1 1.67.05 2.42.41.43.21.96.21 1.4 0 .74-.36 1.56-.5 2.4-.4" />
                        </svg>
                      </motion.button>
                      <motion.button
                        type="button"
                        className="flex justify-center items-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-gray-700 hover:bg-gray-600"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.839c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.934.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                      </motion.button>
                      <motion.button
                        type="button"
                        className="flex justify-center items-center py-2 px-4 border border-gray-600 rounded-md shadow-sm bg-gray-700 hover:bg-gray-600"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </motion.form>
              ) : (
                <motion.form
                  key="register"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fadeInUp}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full p-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 bg-gray-700"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full p-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 bg-gray-700"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full p-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 bg-gray-700"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full p-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 bg-gray-700"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-medium mb-2">Confirm Password</label>
                    <input
                      type="password"
                      className="w-full p-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 bg-gray-700"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        className="h-4 w-4 text-yellow-400 border-gray-600 rounded focus:ring-yellow-500"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="text-gray-300">
                        I agree to the{" "}
                        <a href="#" className="font-medium text-yellow-400 hover:text-yellow-600">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="font-medium text-yellow-400 hover:text-yellow-600">
                          Privacy Policy
                        </a>
                      </label>
                    </div>
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full py-3 px-4 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition-colors duration-300 shadow-md"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Create Account
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

        <p className="mt-6 text-center text-white text-sm">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={toggleForm}
            className="font-medium text-yellow-400 hover:underline"
          >
            {isLogin ? "Sign up" : "Sign in"}
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthPage;
