import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formRef, formInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [infoRef, infoInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [mapRef, mapInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [faqRef, faqInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setFormSubmitted(true);
      setFormErrors({});
      setFormData({ name: "", email: "", phone: "", message: "" });
      // Here you can add logic to send the form data to a backend
    } else {
      setFormErrors(errors);
    }
  };

  const faqs = [
    {
      question: "What are your gym hours?",
      answer:
        "We are open Monday to Friday from 5 AM to 11 PM, and Saturday to Sunday from 7 AM to 9 PM.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, we offer a free 1-day trial! Contact us to schedule your visit and experience our facilities firsthand.",
    },
    {
      question: "Can I book a personal training session online?",
      answer:
        "Absolutely! Once you submit your inquiry through this form, our team will reach out to schedule your session.",
    },
    {
      question: "What safety measures are in place?",
      answer:
        "We follow strict cleaning protocols, provide hand sanitizing stations, and ensure social distancing in all areas of the gym.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Header Section */}
        <div className="text-center mb-16 mt-14">
          <h2 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6">
            Get in Touch
          </h2>
          <div className="w-32 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            We’re here to answer your questions, schedule a visit, or help you
            start your fitness journey with SKY Fitness. Reach out today and
            let’s achieve your goals together!
          </p>
        </div>

        {/* Contact Form and Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mb-20">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            className="bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-700"
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h3 className="text-3xl font-bold text-yellow-400 mb-6">
              Send a Message
            </h3>
            {formSubmitted ? (
              <motion.div
                className="text-center p-6 bg-green-600 rounded-lg text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h4 className="text-xl font-semibold mb-2">
                  Thank You for Your Message!
                </h4>
                <p>We’ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full p-4 rounded-lg bg-gray-800 text-white border ${
                      formErrors.name ? "border-red-500" : "border-gray-600"
                    } focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300`}
                    placeholder="John Doe"
                    required
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full p-4 rounded-lg bg-gray-800 text-white border ${
                      formErrors.email ? "border-red-500" : "border-gray-600"
                    } focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300`}
                    placeholder="john@example.com"
                    required
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full p-4 rounded-lg bg-gray-800 text-white border ${
                      formErrors.message ? "border-red-500" : "border-gray-600"
                    } focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all duration-300 h-40`}
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.message}
                    </p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  className="w-full py-4 px-6 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition-colors duration-300 shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            ref={infoRef}
            className="bg-gray-800 rounded-2xl shadow-xl p-8 flex flex-col justify-between"
            initial="hidden"
            animate={infoInView ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div>
              <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 mt-1 mr-3 flex-shrink-0 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <div>
                    <p className="font-medium text-gray-400">Address</p>
                    <p className="text-white">
                      501, 5th Floor, Sky Towers, MG Road, Bengaluru, Karnataka 560001, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 mt-1 mr-3 flex-shrink-0 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                  <div>
                    <p className="font-medium text-gray-400">Phone</p>
                    <p className="text-white">+91-98765-43210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 mt-1 mr-3 flex-shrink-0 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                  <div>
                    <p className="font-medium text-gray-400">Email</p>
                    <p className="text-white">info@skyfitness.in</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="w-6 h-6 mt-1 mr-3 flex-shrink-0 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <div>
                    <p className="font-medium text-gray-400">Hours</p>
                    <p className="text-white">Mon-Fri: 5 AM - 11 PM</p>
                    <p className="text-white">Sat-Sun: 7 AM - 9 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h4 className="text-xl font-semibold text-yellow-400 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-5 justify-center md:justify-start">
                {[
                  {
                    platform: "Facebook",
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h11.352v-9.352h-3.676v-3.904h3.676V10.85c0-3.18 1.692-4.676 4.667-4.676 1.305 0 2.646.227 2.646.227v2.904h-1.354c-1.5 0-1.792.68-1.792 1.65v2.106h3.308l-.467 3.904h-2.841V24h5.018c1.133 0 2.084-.853 2.084-2.084V1.324C24.084.593 23.133 0 22.001 0z" />
                      </svg>
                    ),
                    link: "#",
                  },
                  {
                    platform: "Instagram",
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    ),
                    link: "#",
                  },
                  {
                    platform: "Twitter",
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-2.72 0-4.923 2.206-4.923 4.926 0 .386.044.762.127 1.124a13.97 13.97 0 01-10.15-5.148 4.926 4.926 0 001.524 6.574 4.903 4.903 0 01-2.23-.616c-.054 2.281 1.581 4.416 3.948 4.891a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.057 0 14.01-7.503 14.01-14.01 0-.213-.005-.425-.014-.636A10.048 10.048 0 0024 4.557z" />
                      </svg>
                    ),
                    link: "#",
                  },
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.link}
                    className="bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-500 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.platform}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          ref={mapRef}
          className="w-full rounded-2xl overflow-hidden shadow-xl mb-20"
          initial="hidden"
          animate={mapInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <div className="bg-gray-900 p-6 border-b border-gray-700">
            <h3 className="text-3xl font-bold text-yellow-400">Find Us</h3>
            <p className="text-gray-400 mt-2">
              Visit our state-of-the-art facility in Bengaluru
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.8721123243807!2d77.5945623148215!3d12.97159869085659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c3b2b2b1%3A0x7d0b0c0b0b0b0b0b!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka%20560001%2C%20India!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          ref={faqRef}
          className="mb-20"
          initial="hidden"
          animate={faqInView ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <h3 className="text-4xl font-bold text-yellow-400 text-center mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Banner */}
        <motion.div
          className="bg-gray-900 rounded-2xl p-10 text-center shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-yellow-400 mb-6">
            Ready to Transform Your Fitness Journey?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join SKY Fitness today and take the first step towards a healthier,
            stronger you. Our team is here to support you every step of the way!
          </p>
          <motion.button
            className="bg-yellow-400 text-black font-semibold py-4 px-8 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUsPage;