import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProfessionalTrainers from "../assets/images/workoutImages/ProfessionalTrainers.jpg";
import  gymEquipment from "../assets/images/workoutImages/gymEquipment.jpg";

const AnimatedSection = ({ children, className, initial, animate, transition = { duration: 0.5 } }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? animate : initial}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center justify-center px-4 sm:px-6">
      {/* Hero Section with Parallax Effect */}
      <div className="w-full max-w-6xl mt-20 md:mt-28 pb-12 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-64 h-64 bg-yellow-400 opacity-5 rounded-full blur-3xl"></div>

        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <AnimatedSection
            className="w-full md:w-1/2 space-y-6 text-center md:text-left mb-12 md:mb-0 z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-block bg-yellow-400 px-4 py-1 rounded-full mb-2">
              <span className="text-black font-semibold text-sm">ESTABLISHED 2025</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase leading-tight">
              About <span className="text-yellow-400">Us</span>
            </h1>
            <div className="w-20 h-1 bg-yellow-400 mx-auto md:mx-0"></div>
            <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
              Welcome to SKYfitness, where we transform lives through fitness. Our mission is to empower individuals to reach their full potential in a supportive and energetic environment.
            </p>
            <a href="#mission" className="inline-flex items-center justify-center bg-yellow-400 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition duration-300 mt-4 group">
              Discover More
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </AnimatedSection>

          
        </div>
      </div>

      {/* Our Mission Section with Accent */}
      <div id="mission" className="w-full max-w-6xl py-16 md:py-24 relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 opacity-10 rounded-full blur-2xl"></div>

        <AnimatedSection
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Our Mission</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto my-6"></div>
        </AnimatedSection>

        <AnimatedSection
          className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 sm:p-10 rounded-2xl shadow-2xl text-center border border-gray-700 transform hover:scale-[1.01] transition-transform duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
              </svg>
            </div>
          </div>
          <p className="text-gray-200 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Our mission is to inspire and empower individuals on their journey to optimal health and fitness.
            We strive to create a welcoming, inclusive environment where everyone feels motivated to push
            their limits and achieve the best version of themselves.
          </p>
        </AnimatedSection>
      </div>

      {/* Our Values Section with Cards */}
      <div className="w-full max-w-6xl py-16 md:py-24">
        <AnimatedSection
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Our Core Values</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto my-6"></div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 flex flex-col items-center text-center hover:border-yellow-400 transition-colors duration-300 h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Integrity</h3>
            <p className="text-gray-300 flex-grow">We are committed to honest and transparent relationships with our members, offering genuine guidance and support at every step.</p>
          </AnimatedSection>

          <AnimatedSection
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 flex flex-col items-center text-center hover:border-yellow-400 transition-colors duration-300 h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Community</h3>
            <p className="text-gray-300 flex-grow">We foster a supportive fitness family where everyone feels valued, motivated, and connected in pursuit of their goals.</p>
          </AnimatedSection>

          <AnimatedSection
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 flex flex-col items-center text-center hover:border-yellow-400 transition-colors duration-300 h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
            <p className="text-gray-300 flex-grow">We strive for the highest standards in everything we do, from our premium facilities to our expert coaching and innovative programs.</p>
          </AnimatedSection>
        </div>
      </div>

      {/* Our Team Section with Image Reveal */}
      <div className="w-full max-w-6xl py-16 md:py-24 relative">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-yellow-400 opacity-5 rounded-full blur-3xl"></div>

        <AnimatedSection
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">Meet Our Team</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto my-6"></div>
        </AnimatedSection>

        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <AnimatedSection
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold text-yellow-400">Expert Trainers, Exceptional Results</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our team of certified fitness professionals is dedicated to your success. With diverse backgrounds and specializations, our trainers create personalized programs that align with your unique goals and fitness journey.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Certified Personal Trainers
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Nutritional Guidance
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Specialized Program Design
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Ongoing Support & Motivation
              </li>
            </ul>
            <a href="/team" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300 font-bold mt-4">
              Meet the whole team
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </AnimatedSection>

          <AnimatedSection
            className="w-full md:w-1/2 flex justify-center relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-400 rounded-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"></div>
              <img
                src={ProfessionalTrainers}
                alt="Our Team"
                className="w-full max-w-md rounded-lg shadow-2xl relative z-10 object-cover h-auto"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg z-20">
                <p className="text-lg font-bold">Professional Trainers</p>
                <p className="text-sm text-gray-300">Dedicated to your success</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Our Facilities Section with Stats */}
      <div className="w-full max-w-6xl py-16 md:py-24">
        <AnimatedSection
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">World-Class Facilities</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto my-6"></div>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <AnimatedSection
            className="w-full md:w-1/2 flex justify-center relative order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src={gymEquipment}
                alt="Our Facilities"
                className="w-full max-w-md object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {/* Stats Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="grid grid-cols-2 gap-4 w-full px-6">
                  <div className="text-center p-4">
                    <p className="text-yellow-400 text-4xl font-bold">10,000</p>
                    <p className="text-white text-sm">Square Feet</p>
                  </div>
                  <div className="text-center p-4">
                    <p className="text-yellow-400 text-4xl font-bold">200+</p>
                    <p className="text-white text-sm">Equipment</p>
                  </div>
                  <div className="text-center p-4">
                    <p className="text-yellow-400 text-4xl font-bold">5</p>
                    <p className="text-white text-sm">Training Zones</p>
                  </div>
                  <div className="text-center p-4">
                    <p className="text-yellow-400 text-4xl font-bold">24/7</p>
                    <p className="text-white text-sm">Access</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection
            className="w-full md:w-1/2 space-y-6 text-center md:text-left order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-2xl font-bold text-yellow-400">State-of-the-Art Equipment</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Experience fitness at its finest in our premium facilities equipped with cutting-edge technology and versatile training spaces designed to optimize your workout experience.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Latest Cardio & Strength Equipment
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Dedicated Functional Training Area
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Spacious Group Exercise Studios
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Luxury Locker Rooms & Amenities
              </li>
            </ul>
            <a href="/facilities" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300 font-bold mt-4">
              View our facilities
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </AnimatedSection>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-6xl py-16 mb-12">
        <AnimatedSection
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 md:p-12 text-center shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready to Start Your Fitness Journey?</h2>
          <p className="text-gray-800 text-lg mb-8 max-w-2xl mx-auto">
            Join SKYfitness today and transform your life with our expert guidance, supportive community, and state-of-the-art facilities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/register" className="bg-black text-white font-bold py-3 px-8 rounded-full hover:bg-gray-900 transition duration-300 inline-flex items-center">
              Register Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
            <a href="/contact" className="text-black font-bold py-3 px-8 rounded-full border-2 border-black hover:bg-black hover:text-white transition duration-300">
              Contact Us
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;
