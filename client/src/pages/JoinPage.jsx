import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Sample data for pricing plans (updated to INR and aligned with PricingSection)
const pricingPlans = [
  {
    name: "Basic",
    price: 2499, // INR
    period: "monthly",
    features: [
      "Gym access 6AM-10PM",
      "Access to basic equipment",
      "Locker room access",
      "1 group class per week",
      "Fitness assessment",
    ],
    bestFor: "Beginners looking to start their fitness journey.",
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: 4199, // INR
    period: "monthly",
    features: [
      "24/7 gym access",
      "Access to all equipment",
      "Personal training session monthly",
      "Unlimited group classes",
      "Nutrition consultation",
      "Access to mobile app",
    ],
    bestFor: "Fitness enthusiasts wanting more variety and flexibility.",
    popular: true,
    cta: "Join Now",
  },
  {
    name: "Elite",
    price: 6699, // INR
    period: "monthly",
    features: [
      "24/7 gym access",
      "Access to all equipment",
      "4 personal training sessions monthly",
      "Unlimited group classes",
      "Monthly nutrition consultation",
      "Full body assessment quarterly",
      "Recovery room access",
      "Guest passes (2 per month)",
    ],
    bestFor: "Dedicated athletes aiming for peak performance.",
    popular: false,
    cta: "Go Elite",
  },
];

// Sample testimonials (updated with more details)
const testimonials = [
  {
    name: "Sarah M.",
    role: "Premium Member",
    quote: "Joining this gym was the best decision I made! The group classes are amazing, and the trainers are so supportive. I've lost 10 kg in 3 months!",
    image: "/path-to-sarah-image.jpg",
    rating: 5,
  },
  {
    name: "Mike T.",
    role: "Elite Member",
    quote: "The personalized training and nutrition plan helped me achieve my fitness goals faster than I ever thought possible. I feel stronger every day!",
    image: "/path-to-mike-image.jpg",
    rating: 5,
  },
  {
    name: "Emily R.",
    role: "Basic Member",
    quote: "I love the welcoming atmosphere and the variety of equipment. It’s perfect for someone just starting out like me! The fitness assessment was a great start.",
    image: "/path-to-emily-image.jpg",
    rating: 4,
  },
];

// Sample FAQs (expanded with more questions)
const faqs = [
  {
    question: "What are the gym's operating hours?",
    answer: "Basic members have access from 6 AM to 10 PM. Premium and Elite members enjoy 24/7 access, so you can work out anytime that suits you.",
  },
  {
    question: "Can I cancel my membership?",
    answer: "Yes, you can cancel anytime with a 30-day notice. We also offer a 14-day money-back guarantee for new members to ensure you're completely satisfied.",
  },
  {
    question: "Are there any additional fees?",
    answer: "There’s a one-time ₹1500 initiation fee for all plans. This covers your membership card, initial fitness assessment, and administrative setup. No other hidden fees!",
  },
  {
    question: "Do you offer guest passes?",
    answer: "Yes! Basic members get 1 free guest pass per month, while Premium and Elite members get 2. Additional guest passes are ₹500 each.",
  },
  {
    question: "What should I bring for my first visit?",
    answer: "Bring comfortable workout clothes, a water bottle, and a towel. We provide lockers, showers, and basic toiletries in the locker rooms for your convenience.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes will take effect at the start of your next billing cycle.",
  },
  {
    question: "Do you offer family or couple memberships?",
    answer: "Yes, we offer a 10% discount on family or couple memberships. Contact our team for more details on how to set this up.",
  },
];

// Sample benefits (expanded with more details)
const benefits = [
  {
    title: "State-of-the-Art Equipment",
    description: "Access to the latest cardio machines, free weights, strength training equipment, and functional training zones to suit all fitness levels.",
    icon: "🏋️‍♂️",
  },
  {
    title: "Expert Trainers",
    description: "Our certified trainers provide personalized workout plans, form correction, and motivation to help you achieve your goals safely and effectively.",
    icon: "👩‍🏫",
  },
  {
    title: "Variety of Classes",
    description: "Choose from yoga, Zumba, spin, HIIT, and more. We offer over 50 classes per week to keep your workouts fun and engaging.",
    icon: "🧘‍♀️",
  },
  {
    title: "24/7 Access",
    description: "Premium and Elite members can work out anytime with 24/7 gym access, perfect for early birds or night owls.",
    icon: "⏰",
  },
  {
    title: "Wellness Amenities",
    description: "Relax in our sauna, steam room, or recovery room. Locker rooms come with showers, complimentary toiletries, and secure storage.",
    icon: "🧖‍♀️",
  },
  {
    title: "Community Events",
    description: "Join fitness challenges, wellness workshops, and social events to connect with other members and build a supportive fitness community.",
    icon: "🤝",
  },
  {
    title: "Mobile App Access",
    description: "Track your workouts, book classes, and access nutrition tips through our mobile app (available for Premium and Elite members).",
    icon: "📱",
  },
  {
    title: "Nutrition Support",
    description: "Get personalized nutrition consultations to complement your fitness routine and achieve your health goals faster.",
    icon: "🍎",
  },
];

const AnimatedSection = motion.div;

const JoinPage = () => {
  // State for Sign-Up Form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Basic",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form Handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      plan: "Basic",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mb-12 text-center w-full max-w-3xl mt-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Join SKYfitness Today!
          </h1>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Take the first step towards a healthier, stronger you. Choose a membership plan that fits your goals and start your fitness journey with us.
          </p>
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-5">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
              <path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/path-to-join-hero-image.jpg"
              alt="Group of people working out in a modern gym"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                Your Fitness Journey Starts Here
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Membership Benefits Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            Why Join SKYfitness?
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-center mb-8">
            At [Gym Name], we’re committed to helping you achieve your fitness goals with top-notch facilities, expert guidance, and a supportive community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedSection
                key={index}
                className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </motion.div>

        {/* Pricing Plans Section (Aligned with PricingSection) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <div className="relative mb-12 text-center w-full max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">
              Choose Your Membership Plan
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Select the plan that fits your fitness goals and lifestyle. All memberships include access to our state-of-the-art facilities.
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
                className={`bg-gray-800 rounded-lg shadow-lg overflow-hidden border-l-4 border-yellow-400 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full relative ${
                  plan.popular ? "md:scale-105 z-10" : ""
                }`}
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
                  <p className="text-gray-300 mb-4">{plan.bestFor}</p>
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
                  <button
                    onClick={() => setFormData({ ...formData, plan: plan.name })}
                    className={`w-full py-3 px-4 rounded font-medium ${
                      plan.popular
                        ? "bg-yellow-400 text-black hover:bg-yellow-500"
                        : "bg-gray-700 text-white hover:bg-gray-600"
                    } transition-colors duration-300`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 text-center w-full max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">Need Something Custom?</h3>
            <p className="text-gray-300 mb-6">
              We offer personalized plans for athletes, rehabilitation, and special training needs. Contact our team to discuss a custom solution for your fitness journey.
            </p>
            <Link to="/contact">
              <button className="bg-transparent hover:bg-yellow-400 text-yellow-400 hover:text-black font-medium py-3 px-8 border-2 border-yellow-400 hover:border-transparent rounded transition-colors duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Sign-Up Form Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            Sign Up Now
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          {formSubmitted ? (
            <div className="text-center">
              <p className="text-xl text-yellow-300 mb-4">
                Thank you for signing up! We'll contact you shortly to confirm your membership.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="px-6 py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors duration-300 font-semibold"
              >
                Sign Up Again
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-gray-700 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-gray-700 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full bg-gray-700 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="plan" className="block text-gray-300 mb-2">
                    Select Plan
                  </label>
                  <select
                    id="plan"
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                    className="w-full bg-gray-700 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                  >
                    {pricingPlans.map((plan, index) => (
                      <option key={index} value={plan.name}>
                        {plan.name} (₹{plan.price}/{plan.period})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-gray-300 mb-2">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-gray-700 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                    rows="4"
                    placeholder="E.g., preferred workout times, fitness goals, or any questions"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors duration-300 font-semibold"
              >
                Join Now
              </button>
            </form>
          )}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            What Our Members Say
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-md"
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
                <div className="flex justify-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-yellow-300 font-semibold">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.role}</p>
              </AnimatedSection>
            ))}
          </div>
        </motion.div>

        {/* FAQs Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center bg-gray-800 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Ready to Transform Your Life?
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-300 mb-6">
            Join SKYfitness today and take the first step towards a healthier, happier you. We can’t wait to welcome you to our community!
          </p>
          <Link to="/register">
            <button className="bg-yellow-400 text-black font-medium py-3 px-8 rounded hover:bg-yellow-500 transition-colors duration-300">
              Get Started Now
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinPage;