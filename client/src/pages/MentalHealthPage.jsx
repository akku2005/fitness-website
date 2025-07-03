import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Sample data for mental health resources
const mentalHealthResources = [
  {
    title: "Mindfulness Meditation",
    description: "Practice mindfulness to reduce stress and improve focus. Spend 10 minutes daily focusing on your breath.",
    link: "https://www.headspace.com/meditation",
    icon: "🧘‍♀️",
  },
  {
    title: "Cognitive Behavioral Therapy (CBT) Basics",
    description: "Learn techniques to reframe negative thoughts and improve your mental resilience.",
    link: "https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral",
    icon: "🧠",
  },
  {
    title: "Sleep Hygiene Tips",
    description: "Improve your sleep quality with a consistent routine and a calming pre-sleep environment.",
    link: "https://www.sleepfoundation.org/sleep-hygiene",
    icon: "🛌",
  },
];

const MentalHealthPage = () => {
  // State for Mood Tracker
  const [mood, setMood] = useState("");
  const [moodHistory, setMoodHistory] = useState([]);
  const [journalEntry, setJournalEntry] = useState("");

  // State for Mindfulness Exercise Timer
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [customMinutes, setCustomMinutes] = useState(5); // Default to 5 minutes
  const [totalSeconds, setTotalSeconds] = useState(customMinutes * 60); // Total seconds based on user input

  // Mood Tracker Handler
  const handleMoodSubmit = (e) => {
    e.preventDefault();
    if (mood) {
      const newEntry = {
        mood,
        date: new Date().toLocaleDateString(),
        journal: journalEntry,
      };
      setMoodHistory([...moodHistory, newEntry]);
      setMood("");
      setJournalEntry("");
    }
  };

  // Update total seconds when customMinutes changes
  useEffect(() => {
    setTotalSeconds(customMinutes * 60);
  }, [customMinutes]);

  // Timer Logic for Mindfulness Exercise
  const startTimer = () => {
    if (customMinutes <= 0) {
      alert("Please enter a valid duration (greater than 0 minutes).");
      return;
    }

    setIsTimerRunning(true);
    setTimer(0); // Reset timer to 0 when starting
  };

  // Timer countdown logic
  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev >= totalSeconds) {
            clearInterval(interval);
            setIsTimerRunning(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval); // Cleanup on unmount or when timer stops
  }, [isTimerRunning, totalSeconds]);

  // Reset Timer
  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimer(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 py-8">
      <div className="max-w-6xl mx-auto mt-18">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Mental Health & Wellness
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            At <span className="text-yellow-300 font-bold">SKYfitness</span>, we believe fitness is not just physical—mental health matters too. Explore resources, tools, and tips to support your mental well-being.
          </p>
        </motion.div>

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1688582384819-23967766a6fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fEZpbmQlMjBZb3VyJTIwSW5uZXIlMjBQZWFjZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
              alt="Person meditating in a serene gym environment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                Find Your Inner Peace
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Mental Health Tips Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Mental Health Tips for Gym-Goers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Exercise for Endorphins",
                description: "Regular workouts release endorphins, which can boost your mood and reduce stress.",
                icon: "🏋️‍♂️",
              },
              {
                title: "Set Realistic Goals",
                description: "Avoid burnout by setting achievable fitness goals and celebrating small wins.",
                icon: "🎯",
              },
              {
                title: "Connect with Others",
                description: "Join group classes or find a workout buddy to build a supportive community.",
                icon: "🤝",
              },
              {
                title: "Practice Gratitude",
                description: "Reflect on three things you're grateful for each day to improve your mindset.",
                icon: "🙏",
              },
              {
                title: "Take Rest Days",
                description: "Allow your body and mind to recover with scheduled rest days.",
                icon: "🛋️",
              },
              {
                title: "Stay Hydrated",
                description: "Dehydration can affect your mood—aim for 2-3 liters of water daily.",
                icon: "💧",
              },
            ].map((tip, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                  {tip.title}
                </h3>
                <p className="text-gray-300">{tip.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mindfulness Exercise Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 bg-gray-700 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Mindfulness Exercise: Custom Breathing Session
          </h2>
          <p className="text-gray-300 mb-4">
            Set your desired time to focus on your breath and calm your mind. Use the controls below to start your session.
          </p>
          <div className="flex flex-col items-center space-y-6">
            {/* Custom Time Input */}
            <div className="flex items-center space-x-4">
              <label htmlFor="customMinutes" className="text-gray-300">
                Set Duration (minutes):
              </label>
              <input
                id="customMinutes"
                type="number"
                min="1"
                max="60"
                value={customMinutes}
                onChange={(e) => {
                  const value = Math.max(1, Math.min(60, parseInt(e.target.value) || 1));
                  setCustomMinutes(value);
                }}
                disabled={isTimerRunning}
                className="w-20 bg-gray-600 p-2 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
              />
            </div>

            {/* Timer Display */}
            <div className="text-4xl font-bold text-yellow-300 mb-4">
              {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")} /{" "}
              {Math.floor(totalSeconds / 60)}:{(totalSeconds % 60).toString().padStart(2, "0")}
            </div>

            {/* Timer Controls */}
            <div className="flex space-x-4">
              <button
                onClick={startTimer}
                disabled={isTimerRunning}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  isTimerRunning
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-yellow-500 text-black hover:bg-yellow-600"
                }`}
              >
                {isTimerRunning ? "Running..." : "Start Breathing Exercise"}
              </button>
              <button
                onClick={resetTimer}
                disabled={!isTimerRunning}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  !isTimerRunning
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-red-500 text-white hover:bg-red-600"
                }`}
              >
                Stop & Reset
              </button>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-yellow-300 mb-2">
              How to Do It:
            </h3>
            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              <li>Find a quiet, comfortable spot in the gym or at home.</li>
              <li>Sit or lie down with your back straight.</li>
              <li>Inhale deeply through your nose for 4 seconds.</li>
              <li>Hold your breath for 4 seconds.</li>
              <li>Exhale slowly through your mouth for 4 seconds.</li>
              <li>Repeat until the timer ends.</li>
            </ul>
          </div>
        </motion.div>

        {/* Mood Tracker Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 bg-gray-700 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Mood Tracker
          </h2>
          <p className="text-gray-300 mb-4">
            Track your daily mood to understand your emotional patterns and how exercise impacts your mental health.
          </p>
          <form onSubmit={handleMoodSubmit} className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="bg-gray-600 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
              >
                <option value="">Select your mood</option>
                <option value="Happy">Happy 😊</option>
                <option value="Stressed">Stressed 😓</option>
                <option value="Calm">Calm 😌</option>
                <option value="Anxious">Anxious 😟</option>
                <option value="Tired">Tired 😴</option>
              </select>
              <textarea
                value={journalEntry}
                onChange={(e) => setJournalEntry(e.target.value)}
                placeholder="Journal your thoughts (optional)"
                className="bg-gray-600 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                rows="3"
              />
            </div>
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-colors duration-300 font-semibold"
            >
              Log Mood
            </button>
          </form>

          {/* Mood History */}
          {moodHistory.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-yellow-300 mb-4">
                Mood History
              </h3>
              <div className="space-y-4">
                {moodHistory.map((entry, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 p-4 rounded-lg shadow-sm"
                  >
                    <p className="text-gray-300">
                      <span className="font-bold">{entry.date}</span>: Feeling{" "}
                      <span className="text-yellow-300">{entry.mood}</span>
                    </p>
                    {entry.journal && (
                      <p className="text-gray-400 mt-2">
                        Journal: {entry.journal}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Mental Health Resources Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Mental Health Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentalHealthResources.map((resource, index) => (
              <div
                key={index}
                className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:underline"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stress Management Tips Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 bg-gray-700 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Stress Management Techniques
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Progressive Muscle Relaxation",
                description: "Tense and relax each muscle group to release physical tension.",
                steps: [
                  "Start with your toes and work your way up.",
                  "Tense each muscle group for 5 seconds, then relax for 10 seconds.",
                  "Repeat for all major muscle groups.",
                ],
              },
              {
                title: "Journaling",
                description: "Write down your thoughts to process emotions and reduce stress.",
                steps: [
                  "Set aside 10 minutes daily to write.",
                  "Focus on your feelings, not grammar.",
                  "Reflect on positive moments as well.",
                ],
              },
              {
                title: "Nature Walks",
                description: "Spend time outdoors to clear your mind and reduce anxiety.",
                steps: [
                  "Find a nearby park or trail.",
                  "Walk for 20-30 minutes without distractions.",
                  "Focus on the sounds and sights around you.",
                ],
              },
            ].map((technique, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-yellow-300 mb-2">
                  {technique.title}
                </h3>
                <p className="text-gray-300 mb-2">{technique.description}</p>
                <ul className="list-disc ml-6 text-gray-300 space-y-1">
                  {technique.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center bg-gray-700 p-6 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">
            Need More Support?
          </h2>
          <p className="text-gray-300 mb-6">
            If you're struggling with your mental health, don't hesitate to reach out. Our gym offers wellness workshops, and we can connect you with professional support.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-colors duration-300 font-semibold"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default MentalHealthPage;