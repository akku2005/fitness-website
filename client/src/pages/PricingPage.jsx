import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AnimatedSection = motion.div;

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "Basic",
      price: 2499, // Converted to INR
      period: "monthly",
      features: [
        "Gym access 6AM-10PM",
        "Access to basic equipment",
        "Locker room access",
        "1 group class per week",
        "Fitness assessment"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Premium",
      price: 4199, // Converted to INR
      period: "monthly",
      features: [
        "24/7 gym access",
        "Access to all equipment",
        "Personal training session monthly",
        "Unlimited group classes",
        "Nutrition consultation",
        "Access to mobile app"
      ],
      popular: true,
      cta: "Join Now"
    },
    {
      name: "Elite",
      price: 6699, // Converted to INR
      period: "monthly",
      features: [
        "24/7 gym access",
        "Access to all equipment",
        "4 personal training sessions monthly",
        "Unlimited group classes",
        "Monthly nutrition consultation",
        "Full body assessment quarterly",
        "Recovery room access",
        "Guest passes (2 per month)"
      ],
      popular: false,
      cta: "Go Elite"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full py-16 px-4 sm:px-6 text-white bg-black">
      <div className="relative mb-12 text-center w-full max-w-3xl mt-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Membership Plans</h2>
        <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Choose the plan that fits your fitness goals and lifestyle. All memberships include access to our state-of-the-art facilities.
        </p>
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-5">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
            <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {pricingPlans.map((plan, index) => (
          <AnimatedSection
            key={plan.name}
            className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden border-l-4 border-yellow-400 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full relative ${plan.popular ? 'md:scale-105 z-10' : ''}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0">
                <div className="bg-yellow-400 text-black font-bold py-1 px-4 rounded-bl-lg text-sm">
                  Most Popular
                </div>
              </div>
            )}
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-3xl sm:text-4xl font-bold text-yellow-400">₹{plan.price}</span>
                <span className="text-gray-400 ml-2">/{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-auto p-6 sm:p-8 bg-gray-900 bg-opacity-50">
              <button className={`w-full py-3 px-4 rounded font-medium ${
                plan.popular
                ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                : 'bg-gray-700 text-white hover:bg-gray-600'
              } transition-colors duration-300`}>
                {plan.cta}
              </button>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <div className="mt-12 text-center w-full max-w-2xl">
        <h3 className="text-2xl font-bold mb-4">Need Something Custom?</h3>
        <p className="text-gray-300 mb-6">
          We offer personalized plans for athletes, rehabilitation, and special training needs.
          Contact our team to discuss a custom solution for your fitness journey.
        </p>
        <Link to="/contact">
          <button className="bg-transparent hover:bg-yellow-400 text-yellow-400 hover:text-black font-medium py-3 px-8 border-2 border-yellow-400 hover:border-transparent rounded transition-colors duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PricingSection;
