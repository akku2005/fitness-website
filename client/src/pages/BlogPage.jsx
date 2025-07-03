import React, { useState } from "react";
import { motion } from "framer-motion";

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const blogPosts = [
    {
      id: 1,
      title: "5 Advanced Strength Training Techniques",
      excerpt: "Discover cutting-edge strength training methods to take your workout to the next level.",
      content:
        "Strength training is a cornerstone of fitness, but to truly maximize your gains, you need to incorporate advanced techniques. In this article, we explore five methods used by elite athletes, including progressive overload, drop sets, and supersets. Learn how to implement these strategies safely and effectively to build muscle and increase strength.",
      author: "Alex Rodriguez",
      date: "March 15, 2024",
      category: "Strength Training",
      tags: ["strength", "advanced", "workouts"],
      imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Nutrition Secrets for Maximum Muscle Growth",
      excerpt: "Learn the dietary strategies used by professional athletes to build lean muscle.",
      content:
        "Nutrition plays a critical role in muscle growth. In this article, we dive into the best foods, supplements, and meal timing strategies to optimize your gains. From protein intake to carb cycling, discover how to fuel your body for maximum muscle growth and recovery.",
      author: "Sarah Johnson",
      date: "February 28, 2024",
      category: "Nutrition",
      tags: ["nutrition", "muscle growth", "diet"],
      imageUrl: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      readTime: "10 min read",
    },
    {
      id: 3,
      title: "The Ultimate HIIT Workout for Fat Loss",
      excerpt: "Transform your body with this high-intensity interval training program designed for maximum results.",
      content:
        "High-Intensity Interval Training (HIIT) is one of the most effective ways to burn fat and improve cardiovascular fitness. This article provides a detailed HIIT workout plan, including exercises, intervals, and recovery periods. Learn how to incorporate HIIT into your routine for maximum fat loss and improved endurance.",
      author: "Mike Thompson",
      date: "January 20, 2024",
      category: "Workouts",
      tags: ["hiit", "fat loss", "cardio"],
      imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "How to Improve Your Flexibility with Yoga",
      excerpt: "Unlock your body's potential with these yoga poses designed to enhance flexibility.",
      content:
        "Flexibility is key to injury prevention and overall fitness. In this article, we explore a series of yoga poses that target major muscle groups to improve your range of motion. From beginner to advanced poses, learn how to incorporate yoga into your routine for better flexibility and recovery.",
      author: "Emily Davis",
      date: "December 10, 2023",
      category: "Yoga",
      tags: ["yoga", "flexibility", "recovery"],
      imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      readTime: "9 min read",
    },
    {
      id: 5,
      title: "The Benefits of Functional Training",
      excerpt: "Discover how functional training can improve your daily life and athletic performance.",
      content:
        "Functional training focuses on movements that mimic real-life activities, improving strength, balance, and coordination. This article explores the benefits of functional training, including injury prevention, better mobility, and enhanced athletic performance. We also provide a sample workout to get you started.",
      author: "James Carter",
      date: "November 5, 2023",
      category: "Workouts",
      tags: ["functional training", "strength", "mobility"],
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V29ya291dHN8ZW58MHx8MHx8fDA%3D",
      readTime: "6 min read",
    },
    {
      id: 6,
      title: "Top 10 Superfoods for Athletes",
      excerpt: "Fuel your body with these nutrient-dense superfoods to enhance performance and recovery.",
      content:
        "Superfoods are packed with nutrients that can boost your athletic performance and recovery. In this article, we list the top 10 superfoods for athletes, including quinoa, chia seeds, and salmon. Learn how to incorporate these foods into your diet for optimal health and performance.",
      author: "Sarah Johnson",
      date: "October 20, 2023",
      category: "Nutrition",
      tags: ["superfoods", "nutrition", "athletes"],
      imageUrl: "https://plus.unsplash.com/premium_photo-1661753520926-a8fea129c040?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TnV0cml0aW9uJTIwd29tZW58ZW58MHx8MHx8fDA%3D",
      readTime: "8 min read",
    },
    {
      id: 7,
      title: "Mental Health Benefits of Regular Exercise",
      excerpt: "Learn how regular exercise can improve your mental health and reduce stress.",
      content:
        "Exercise isn't just good for your body—it's also great for your mind. This article explores the mental health benefits of regular exercise, including reduced stress, improved mood, and better sleep. We also provide tips on how to stay motivated and make exercise a part of your daily routine.",
      author: "Dr. Lisa Brown",
      date: "September 15, 2023",
      category: "Mental Health",
      tags: ["mental health", "exercise", "wellness"],
      imageUrl: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      readTime: "7 min read",
    },
    {
      id: 8,
      title: "How to Create a Balanced Workout Routine",
      excerpt: "Build a well-rounded fitness plan with this guide to balanced workouts.",
      content:
        "A balanced workout routine includes strength, cardio, flexibility, and recovery. In this article, we break down how to create a fitness plan that targets all aspects of fitness. Learn how to schedule your workouts, set goals, and track your progress for long-term success.",
      author: "Mike Thompson",
      date: "August 10, 2023",
      category: "Workouts",
      tags: ["workout routine", "fitness plan", "balance"],
      imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      readTime: "9 min read",
    },
    {
      id: 9,
      title: "The Science of Muscle Recovery",
      excerpt: "Understand the science behind muscle recovery and how to optimize it.",
      content:
        "Recovery is a critical part of any fitness program. This article dives into the science of muscle recovery, including the role of sleep, nutrition, and active recovery. Learn how to optimize your recovery to prevent injury and improve performance.",
      author: "Dr. Lisa Brown",
      date: "July 5, 2023",
      category: "Recovery",
      tags: ["recovery", "muscle", "science"],
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      readTime: "10 min read",
    },
    {
      id: 10,
      title: "Beginner’s Guide to Weightlifting",
      excerpt: "Start your weightlifting journey with this comprehensive guide for beginners.",
      content:
        "Weightlifting can be intimidating for beginners, but it doesn't have to be. This guide covers the basics of weightlifting, including proper form, equipment, and a beginner-friendly workout plan. Start your journey to building strength and confidence today.",
      author: "Alex Rodriguez",
      date: "June 20, 2023",
      category: "Strength Training",
      tags: ["weightlifting", "beginner", "strength"],
      imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      readTime: "8 min read",
    },
  ];

  const categories = [
    "All",
    "Strength Training",
    "Nutrition",
    "Workouts",
    "Yoga",
    "Mental Health",
    "Recovery",
  ];

  const tags = [
    "strength",
    "nutrition",
    "hiit",
    "yoga",
    "recovery",
    "mental health",
    "workouts",
    "muscle growth",
    "fat loss",
    "superfoods",
  ];

  // Filter posts based on search query and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage
  );

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  const postVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
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
        <div className="text-center mb-16 mt-14">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6">
            Fitness Blog
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Discover expert insights, workout tips, nutrition advice, and more to
            transform your fitness journey. Stay informed with the latest trends
            and strategies from SKY Fitness.
          </p>
        </div>

        {/* Search Bar and Category Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-yellow-400 text-black shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Content and Sidebar */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Blog Posts Section */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="grid md:grid-cols-2 gap-8">
              {currentPosts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={postVariants}
                  className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-yellow-400">
                        {post.author}
                      </span>
                      <span className="text-sm text-gray-500">
                        {post.date} • {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.button
                      className="w-full py-3 px-4 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {filteredPosts.length > postsPerPage && (
              <div className="flex justify-center mt-12 space-x-3">
                {Array.from({ length: totalPages }, (_, index) => (
                  <motion.button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      currentPage === index + 1
                        ? "bg-yellow-400 text-black"
                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {index + 1}
                  </motion.button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Recent Posts */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">
                Recent Posts
              </h3>
              <div className="space-y-6">
                {blogPosts.slice(0, 3).map((post) => (
                  <motion.div
                    key={post.id}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-white">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {post.date} • {post.readTime}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <motion.button
                    key={tag}
                    className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-yellow-400 hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tag}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-16 bg-gray-800 rounded-2xl p-8 text-center shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-300 Tolstoy text-lg mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter for weekly fitness tips, workout plans,
            and exclusive content from SKY Fitness.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow p-4 rounded-l-lg bg-gray-900 text-white border border-gray-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
            <motion.button
              className="px-6 py-4 bg-yellow-400 text-black font-semibold rounded-r-lg hover:bg-yellow-500 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlogPage;