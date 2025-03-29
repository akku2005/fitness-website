import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Home from "../assets/images/homepage.png";
import Facility1 from "../assets/images/facility.png";
import Facility2 from "../assets/images/facility2.png";
import Trainer1 from "../assets/images/trainer1.png";
import Trainer2 from "../assets/images/trainer2.png";

// Sample data for quick stats
const stats = [
  { label: "Members", value: "5,000+" },
  { label: "Classes per Week", value: "50+" },
  { label: "Certified Trainers", value: "20+" },
  { label: "Years in Service", value: "10+" },
];

// Sample data for classes
const classes = [
  {
    title: "Yoga",
    description: "Find your inner peace with our calming yoga sessions, suitable for all levels.",
    image: "/path-to-yoga-image.jpg",
  },
  {
    title: "HIIT",
    description: "Burn calories and build strength with our high-intensity interval training classes.",
    image: "/path-to-hiit-image.jpg",
  },
  {
    title: "Spin",
    description: "Get your heart pumping with our energetic spin classes led by expert instructors.",
    image: "/path-to-spin-image.jpg",
  },
];

// Sample data for promotions
const promotions = [
  {
    title: "First Month Free!",
    description: "Sign up for any membership plan this month and get your first month free.",
    cta: "Join Now",
    link: "/join",
  },
  {
    title: "Refer a Friend",
    description: "Refer a friend and both of you get 10% off your next month's membership.",
    cta: "Learn More",
    link: "/refer",
  },
];

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 sm:px-6">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mt-18 sm:mt-10 md:mt-20 pb-8">
        {/* Left Content */}
        <AnimatedSection
          className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left mb-8 md:mb-0 px-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase leading-tight">
            <span className="text-white">Unleash</span> <br />
            <span className="text-yellow-400">Your</span> <br />
            <span className="text-white">Potential</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto md:mx-0">
            Transform your body, elevate your mind. At [Gym Name], we provide state-of-the-art facilities, expert trainers, and a supportive community to help you achieve your ultimate fitness goals. Join us today and start your journey to a stronger, healthier you!
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link
              to="/join"
              className="bg-yellow-400 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-md shadow-md hover:bg-yellow-500 font-medium inline-block text-sm sm:text-base transition-transform duration-300 transform hover:scale-105"
            >
              Join Now
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-yellow-400 hover:text-black font-medium inline-block text-sm sm:text-base transition-transform duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </AnimatedSection>

        {/* Right Image */}
        <AnimatedSection
          className="w-full md:w-1/2 flex justify-center md:justify-end relative px-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Yellow accent circle behind image */}
          <motion.div
            className="absolute bottom-5 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-yellow-400 rounded-full opacity-20 mr-2"
            animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Fitness model image */}
          <div className="relative">
            <img
              src={Home}
              alt="Bodybuilder doing bicep training with weights"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg relative z-10 object-cover h-auto shadow-lg"
              loading="lazy"
            />
            <motion.div
              className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black bg-opacity-70 px-2 sm:px-3 py-1 rounded-md z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-yellow-400 font-bold text-xs sm:text-sm">BuildYourLegacy</span>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>

      {/* Navigation Menu */}
      <nav className="w-full max-w-6xl py-4 overflow-x-auto scrollbar-hide">
        <div className="flex justify-center space-x-4 md:space-x-6 min-w-max px-4">
          {[
            { to: "/blog", label: "Blog" },
            { to: "/workouts", label: "Workout Routines" },
            { to: "/diet-plans", label: "Diet Plans" },
            { to: "/mental-health", label: "Mental Health Resources" },
            { to: "/join", label: "Join Now" },
          ].map((link, index) => (
            <AnimatedSection
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Link to={link.to} className="text-gray-400 hover:text-yellow-400 whitespace-nowrap transition-colors duration-300">
                {link.label}
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </nav>

      {/* Quick Stats Section */}
      <div className="w-full max-w-6xl py-12 md:py-16 px-4">
        <div className="relative mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">Our Impact</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedSection
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-3xl font-bold text-yellow-400">{stat.value}</h3>
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Facilities and Trainers Section */}
      {[
        {
          image: Facility1,
          title: "State-of-the-Art Equipment",
          description:
            "Experience the latest in fitness technology with our top-tier equipment, including advanced cardio machines, free weights, and functional training zones designed for all fitness levels.",
        },
        {
          image: Trainer1,
          title: "Meet John Doe",
          description:
            "John Doe is a certified fitness trainer with over 10 years of experience. Specializing in strength training and bodybuilding, John has helped hundreds of clients achieve their fitness goals.",
        },
        {
          image: Facility2,
          title: "Spacious Training Areas",
          description:
            "Enjoy ample space for your workouts with our expansive training areas, designed to accommodate group classes, personal training sessions, and individual workouts with ease.",
        },
        {
          image: Trainer2,
          title: "Meet Jane Smith",
          description:
            "Jane Smith specializes in functional training and rehabilitation. With a background in physiotherapy, she ensures you stay fit, injury-free, and on track to meet your fitness goals.",
        },
      ].map((section, index) => (
        <div key={index} className="w-full max-w-6xl py-12 md:py-16 px-4">
          <div
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center justify-between gap-8 md:gap-12`}
          >
            <AnimatedSection
              className="w-full md:w-1/2 flex justify-center relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src={section.image}
                alt={section.title}
                className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg relative z-10 object-cover h-auto shadow-lg"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatedSection>
            <AnimatedSection
              className="w-full md:w-1/2 space-y-4 md:space-y-6 text-center md:text-left"
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-yellow-400">{section.title}</h2>
              <p className="text-gray-400">{section.description}</p>
              <Link
                to="/join"
                className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 font-medium transition-transform duration-300 transform hover:scale-105"
              >
                Learn More
              </Link>
            </AnimatedSection>
          </div>
        </div>
      ))}

      {/* Classes Section */}
      <div className="w-full max-w-6xl py-12 md:py-16 px-4">
        <div className="relative mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">Our Classes</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Join our diverse range of classes to keep your workouts exciting and effective.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {classes.map((classItem, index) => (
            <AnimatedSection
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border-l-4 border-yellow-400 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={classItem.image}
                alt={classItem.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{classItem.title}</h3>
                <p className="text-gray-300 mb-4">{classItem.description}</p>
                <Link
                  to="/classes"
                  className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 font-medium transition-transform duration-300 transform hover:scale-105"
                >
                  Join Class
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full max-w-6xl py-12 md:py-16 px-4 sm:px-6">
        <div className="relative mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">What Our Members Say</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Hear from our members about their transformative experiences at [Gym Name].
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              name: "Sarah R.",
              role: "Member since 2023",
              quote:
                "Joining this gym was the best decision I ever made. The trainers are knowledgeable and supportive, and the facilities are top-notch. I've lost 10 kg in just 3 months!",
              initial: "S",
            },
            {
              name: "Mike L.",
              role: "Member since 2022",
              quote:
                "The community here is amazing. Everyone is so motivated and encouraging. I've made great progress thanks to the supportive environment and expert guidance.",
              initial: "M",
            },
          ].map((testimonial, index) => (
            <AnimatedSection
              key={index}
              className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg relative overflow-hidden border-l-4 border-yellow-400 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="absolute top-0 right-0 -mt-4 -mr-4 text-yellow-400 opacity-10">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162C3.249 8.34 3.01 8.82 2.8 9.31c-.242.479-.405.979-.542 1.462-.12.513-.225 1.021-.225 1.475 0 1.9 1.567 3.43 3.5 3.43 1.93 0 3.5-1.529 3.5-3.43 0-1.9-1.57-3.43-3.5-3.43z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xl mr-4">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="text-yellow-400 font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Promotions Section */}
      <div className="w-full max-w-6xl py-12 md:py-16 px-4">
        <div className="relative mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">Special Offers</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Take advantage of our limited-time promotions to kickstart your fitness journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promotions.map((promo, index) => (
            <AnimatedSection
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg border-l-4 border-yellow-400 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold text-white mb-2">{promo.title}</h3>
              <p className="text-gray-300 mb-4">{promo.description}</p>
              <Link
                to={promo.link}
                className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 font-medium transition-transform duration-300 transform hover:scale-105"
              >
                {promo.cta}
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full max-w-6xl py-12 md:py-16 px-4 text-center">
        <AnimatedSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-4">
            Ready to Start Your Fitness Journey?
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join [Gym Name] today and take the first step towards a healthier, stronger you. Our community is here to support you every step of the way!
          </p>
          <Link
            to="/join"
            className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-md hover:bg-yellow-500 font-medium transition-transform duration-300 transform hover:scale-105"
          >
            Get Started Now
          </Link>
        </AnimatedSection>
      </div>
    </div>
  );
};

const AnimatedSection = ({ children, className, initial, animate, transition }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={inView ? animate : initial}
      transition={transition || { duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default HomePage;