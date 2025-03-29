import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedSection = motion.div;

const ServicesPage = () => {
  const services = [
    {
      title: "Personal Training",
      description:
        "Our certified personal trainers provide one-on-one training sessions tailored to your fitness goals and needs. Whether you're looking to build muscle, lose weight, or improve overall fitness, our trainers are here to support you every step of the way.",
      detailedDescription: [
        "Customized workout plans designed for your specific goals.",
        "One-on-one coaching to ensure proper form and technique.",
        "Ongoing progress tracking and adjustments to keep you on track.",
        "Motivational support to help you stay committed.",
      ],
      image: "/api/placeholder/600/400",
      benefits: [
        "Personalized attention",
        "Faster results",
        "Improved technique",
        "Accountability",
      ],
      cta: "Book a Free Consultation",
    },
    {
      title: "Group Classes",
      description:
        "Join our dynamic group classes led by experienced instructors. From high-intensity workouts to yoga and pilates, our classes offer a fun and engaging way to stay fit and motivated. All fitness levels are welcome!",
      detailedDescription: [
        "Wide variety of classes including HIIT, yoga, pilates, and spin.",
        "Led by certified instructors with years of experience.",
        "Community atmosphere to keep you motivated and engaged.",
        "Flexible schedules to fit your busy lifestyle.",
      ],
      image: "/api/placeholder/600/400",
      benefits: [
        "Social and fun environment",
        "Variety of workout styles",
        "Expert instruction",
        "Affordable pricing",
      ],
      cta: "View Class Schedule",
    },
    {
      title: "Nutritional Guidance",
      description:
        "Achieve your fitness goals faster with personalized nutrition plans. Our nutrition experts provide guidance on healthy eating, meal planning, and how to fuel your body for optimal performance.",
      detailedDescription: [
        "Personalized meal plans tailored to your dietary needs.",
        "Guidance on macros, portion control, and meal timing.",
        "Education on supplements and their benefits.",
        "Support for weight loss, muscle gain, or overall wellness.",
      ],
      image: "/api/placeholder/600/400",
      benefits: [
        "Optimized nutrition",
        "Better energy levels",
        "Improved recovery",
        "Sustainable habits",
      ],
      cta: "Schedule a Nutrition Consult",
    },
    {
      title: "Recovery & Rehabilitation",
      description:
        "Recover faster and prevent injuries with our specialized recovery services. Our experts offer personalized rehabilitation programs, massage therapy, and access to state-of-the-art recovery tools to help you feel your best.",
      detailedDescription: [
        "Customized rehabilitation programs for injury recovery.",
        "Massage therapy to reduce muscle tension and soreness.",
        "Access to recovery tools like cryotherapy and compression therapy.",
        "Guidance on stretching and mobility exercises.",
      ],
      image: "/api/placeholder/600/400",
      benefits: [
        "Faster recovery",
        "Injury prevention",
        "Reduced muscle soreness",
        "Enhanced mobility",
      ],
      cta: "Book a Recovery Session",
    },
  ];

  const testimonials = [
    {
      name: "Jessica M.",
      quote:
        "The personal training at SKY Fitness has transformed my life! My trainer helped me lose 20 pounds and gain confidence I never thought I’d have.",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Mark T.",
      quote:
        "The group classes are amazing! I love the energy and variety, and the instructors are so motivating. I’ve never been in better shape!",
      image: "/api/placeholder/100/100",
    },
    {
      name: "Emily R.",
      quote:
        "The nutritional guidance I received helped me understand how to fuel my body properly. I’ve seen incredible results in my performance and energy levels.",
      image: "/api/placeholder/100/100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6">
            Our Services
          </h2>
          <div className="w-32 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Discover our range of services designed to help you achieve your
            fitness goals and lead a healthier lifestyle. At SKY Fitness, we’re
            committed to providing personalized solutions for every member.
          </p>
        </div>

        {/* Services Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.2,
            });

            return (
              <AnimatedSection
                key={service.title}
                ref={ref}
                variants={itemVariants}
                className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center transform transition-all duration-300 hover:shadow-2xl"
              >
                <div className="md:w-1/2 flex justify-center items-center p-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full max-w-md rounded-lg object-cover h-64 md:h-80 lazyload"
                    loading="lazy"
                  />
                </div>
                <div className="md:w-1/2 p-8 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="list-disc list-inside text-gray-400 mb-6 space-y-2">
                    {service.detailedDescription.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Benefits:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.button
                    className="bg-yellow-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {service.cta}
                  </motion.button>
                </div>
              </AnimatedSection>
            );
          })}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-4xl font-bold text-yellow-400 text-center mb-12">
            What Our Members Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 shadow-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                <h4 className="text-lg font-semibold text-white">
                  {testimonial.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          className="mt-20 bg-gray-800 rounded-2xl p-10 text-center shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-yellow-400 mb-6">
            Ready to Start Your Fitness Journey?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact our team today to learn more about our services and how we
            can help you reach your fitness goals. Let’s take the first step
            together!
          </p>
          <motion.button
            className="bg-yellow-400 text-black font-semibold py-4 px-8 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;