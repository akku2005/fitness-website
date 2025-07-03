import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WorkoutRoutinesPage = () => {
  const [activeCategory, setActiveCategory] = useState("Beginner");
  const [selectedRoutine, setSelectedRoutine] = useState(null);

  const workoutCategories = [
    {
      name: "Beginner",
      routines: [
        {
          id: 1,
          title: "Full Body Starter Workout",
          difficulty: "Beginner",
          duration: "30-45 mins",
          equipment: "Minimal (Dumbbells optional)",
          focus: "Overall Strength & Conditioning",
          warmUp: "5 mins light walking, arm circles, leg swings",
          coolDown: "5 mins stretching (quads, hamstrings, shoulders)",
          exercises: [
            { name: "Bodyweight Squats", sets: 3, reps: "12-15" },
            { name: "Push-ups (Modified if needed)", sets: 3, reps: "8-12" },
            { name: "Lunges", sets: 3, reps: "10-12 each leg" },
            { name: "Plank", sets: 3, duration: "30-60 seconds" },
            { name: "Dumbbell Rows (or Bodyweight)", sets: 3, reps: "10-12" },
          ],
          description:
            "A gentle introduction to strength training designed to build foundational muscle and improve overall fitness. Perfect for those new to exercise or returning after a break.",
          benefits: [
            "Improves overall strength",
            "Enhances mobility",
            "Boosts metabolism",
          ],
          tips: [
            "Focus on form over speed.",
            "Use a mirror to check your posture.",
            "Start with lighter weights if using dumbbells.",
          ],
          image: "https://plus.unsplash.com/premium_photo-1661265933107-85a5dbd815af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnVsbCUyMEJvZHklMjBTdGFydGVyJTIwV29ya291dHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 2,
          title: "Cardio Kickstart",
          difficulty: "Beginner",
          duration: "30-40 mins",
          equipment: "None",
          focus: "Cardiovascular Endurance",
          warmUp: "5 mins marching in place, dynamic stretches",
          coolDown: "5 mins deep breathing, calf stretches",
          exercises: [
            { name: "Jumping Jacks", sets: 3, duration: "45 seconds" },
            { name: "High Knees", sets: 3, duration: "30 seconds" },
            { name: "Mountain Climbers", sets: 3, duration: "30 seconds" },
            { name: "Burpees", sets: 3, reps: "8-10" },
          ],
          description:
            "An energetic routine to improve cardiovascular health and burn calories with minimal equipment. Ideal for beginners looking to boost their stamina.",
          benefits: [
            "Improves heart health",
            "Increases stamina",
            "Burns calories efficiently",
          ],
          tips: [
            "Keep a steady pace to avoid burnout.",
            "Modify burpees by stepping back instead of jumping.",
            "Stay hydrated throughout the workout.",
          ],
          image: "https://plus.unsplash.com/premium_photo-1661576732196-5b0d5adc6d5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2FyZGlvJTIwS2lja3N0YXJ0JTIwZ3ltfGVufDB8fDB8fHww",
        },
        {
          id: 3,
          title: "Mobility and Flexibility",
          difficulty: "Beginner",
          duration: "30-35 mins",
          equipment: "Yoga Mat",
          focus: "Flexibility & Joint Health",
          warmUp: "5 mins gentle neck rolls, shoulder shrugs",
          coolDown: "5 mins seated forward fold, butterfly stretch",
          exercises: [
            { name: "Cat-Cow Stretch", sets: 3, duration: "1 minute" },
            { name: "Child's Pose", sets: 3, duration: "45 seconds" },
            { name: "Lunges with Rotation", sets: 3, reps: "10 each side" },
            { name: "Downward Dog", sets: 3, duration: "45 seconds" },
          ],
          description:
            "A gentle routine focused on improving flexibility, reducing stiffness, and enhancing overall mobility. Great for beginners or as a recovery day workout.",
          benefits: [
            "Reduces muscle stiffness",
            "Improves joint mobility",
            "Enhances relaxation",
          ],
          tips: [
            "Move slowly and breathe deeply.",
            "Use a yoga block if needed for support.",
            "Focus on stretching, not straining.",
          ],
          image: "https://images.unsplash.com/photo-1532384305128-54c7ac0d7139?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1vYmlsaXR5JTIwYW5kJTIwRmxleGliaWxpdHklMjBneW18ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 4,
          title: "Core Fundamentals",
          difficulty: "Beginner",
          duration: "25-35 mins",
          equipment: "None",
          focus: "Core Strength",
          warmUp: "5 mins light marching, torso twists",
          coolDown: "5 mins seated spinal twist, hamstring stretch",
          exercises: [
            { name: "Crunches", sets: 3, reps: "12-15" },
            { name: "Bicycle Crunches", sets: 3, reps: "15-20" },
            { name: "Superman Hold", sets: 3, duration: "30 seconds" },
            { name: "Bird Dog", sets: 3, reps: "10 each side" },
          ],
          description:
            "A targeted workout to develop core strength, improve posture, and build a stable midsection. Perfect for beginners looking to strengthen their core.",
          benefits: [
            "Improves posture",
            "Enhances core stability",
            "Reduces lower back pain",
          ],
          tips: [
            "Engage your core throughout each exercise.",
            "Avoid pulling on your neck during crunches.",
            "Breathe out during the exertion phase.",
          ],
          image: "https://images.unsplash.com/photo-1734668486909-4637ecd66408?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29yZSUyMEZ1bmRhbWVudGFscyUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 5,
          title: "Low Impact Cardio",
          difficulty: "Beginner",
          duration: "35-45 mins",
          equipment: "Light Dumbbells (optional)",
          focus: "Cardiovascular Health",
          warmUp: "5 mins walking in place, arm swings",
          coolDown: "5 mins calf stretch, shoulder stretch",
          exercises: [
            { name: "Walking in Place", sets: 3, duration: "5 minutes" },
            { name: "Arm Circles", sets: 3, duration: "45 seconds" },
            { name: "Step Touches", sets: 3, duration: "1 minute" },
            { name: "Light Dumbbell Punches", sets: 3, duration: "45 seconds" },
          ],
          description:
            "A gentle cardiovascular workout designed for those with joint sensitivity or limited mobility. Ideal for beginners or as a low-impact option.",
          benefits: [
            "Improves heart health",
            "Low impact on joints",
            "Boosts mood and energy",
          ],
          tips: [
            "Keep movements controlled to avoid strain.",
            "Use a chair for support if needed.",
            "Increase intensity gradually.",
          ],
          image: "https://plus.unsplash.com/premium_photo-1713800447261-0473766dc647?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TG93JTIwSW1wYWN0JTIwQ2FyZGlvJTIwZ3ltfGVufDB8fDB8fHww",
        },
        {
          id: 6,
          title: "Morning Energizer",
          difficulty: "Beginner",
          duration: "20-30 mins",
          equipment: "None",
          focus: "Energy Boost & Mobility",
          warmUp: "5 mins light stretching, deep breathing",
          coolDown: "5 mins seated forward fold, neck stretch",
          exercises: [
            { name: "Marching in Place", sets: 3, duration: "1 minute" },
            { name: "Side Lunges", sets: 3, reps: "10 each side" },
            { name: "Arm Swings", sets: 3, duration: "30 seconds" },
            { name: "Torso Twists", sets: 3, reps: "15 each side" },
          ],
          description:
            "A quick morning routine to wake up your body, boost energy, and improve mobility. Perfect for starting your day on a positive note.",
          benefits: [
            "Boosts morning energy",
            "Improves circulation",
            "Enhances mood",
          ],
          tips: [
            "Perform this routine before breakfast.",
            "Focus on breathing deeply.",
            "Move at a comfortable pace.",
          ],
          image: "https://plus.unsplash.com/premium_photo-1726731185748-552b7ac99bf1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TW9ybmluZyUyMEVuZXJnaXplciUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 7,
          title: "Lower Body Basics",
          difficulty: "Beginner",
          duration: "30-40 mins",
          equipment: "Resistance Band (optional)",
          focus: "Lower Body Strength",
          warmUp: "5 mins light walking, leg swings",
          coolDown: "5 mins quad stretch, hamstring stretch",
          exercises: [
            { name: "Bodyweight Squats", sets: 3, reps: "12-15" },
            { name: "Glute Bridges", sets: 3, reps: "15-20" },
            { name: "Side Leg Raises", sets: 3, reps: "10 each side" },
            { name: "Calf Raises", sets: 3, reps: "15-20" },
          ],
          description:
            "A beginner-friendly workout targeting the lower body to build strength in the legs, glutes, and calves.",
          benefits: [
            "Strengthens legs and glutes",
            "Improves balance",
            "Enhances lower body mobility",
          ],
          tips: [
            "Keep your knees behind your toes during squats.",
            "Use a resistance band for added intensity.",
            "Focus on slow, controlled movements.",
          ],
          image: "https://images.unsplash.com/photo-1584863231364-2edc166de576?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fExvd2VyJTIwQm9keSUyMEJhc2ljcyUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 8,
          title: "Upper Body Basics",
          difficulty: "Beginner",
          duration: "30-40 mins",
          equipment: "Light Dumbbells (optional)",
          focus: "Upper Body Strength",
          warmUp: "5 mins arm circles, shoulder shrugs",
          coolDown: "5 mins triceps stretch, chest opener",
          exercises: [
            { name: "Push-ups (Modified)", sets: 3, reps: "8-12" },
            { name: "Dumbbell Shoulder Press", sets: 3, reps: "10-12" },
            { name: "Dumbbell Rows", sets: 3, reps: "10-12" },
            { name: "Bicep Curls", sets: 3, reps: "12-15" },
          ],
          description:
            "A beginner-friendly workout targeting the upper body to build strength in the arms, shoulders, and chest.",
          benefits: [
            "Strengthens upper body",
            "Improves posture",
            "Enhances arm definition",
          ],
          tips: [
            "Keep your core engaged during exercises.",
            "Start with light weights or bodyweight.",
            "Focus on controlled movements.",
          ],
          image: "https://images.unsplash.com/photo-1704375058325-e51b6382a95d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VXBwZXIlMjBCb2R5JTIwQmFzaWNzJTIwZ3ltfGVufDB8fDB8fHww",
        },
        {
          id: 9,
          title: "Balance and Stability",
          difficulty: "Beginner",
          duration: "25-35 mins",
          equipment: "None",
          focus: "Balance & Core Stability",
          warmUp: "5 mins light walking, ankle rolls",
          coolDown: "5 mins seated forward fold, hip stretch",
          exercises: [
            { name: "Single-leg Balance", sets: 3, duration: "30 seconds each leg" },
            { name: "Side Plank", sets: 3, duration: "20 seconds each side" },
            { name: "Heel-to-Toe Walk", sets: 3, duration: "1 minute" },
            { name: "Bird Dog", sets: 3, reps: "10 each side" },
          ],
          description:
            "A beginner workout to improve balance, coordination, and core stability, helping to prevent falls and enhance overall movement.",
          benefits: [
            "Improves balance",
            "Enhances core stability",
            "Reduces risk of injury",
          ],
          tips: [
            "Use a wall for support if needed.",
            "Focus on a fixed point to maintain balance.",
            "Move slowly to maintain control.",
          ],
          image: "https://plus.unsplash.com/premium_photo-1700061655645-3edae75d9d09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFsYW5jZSUyMGFuZCUyMFN0YWJpbGl0eSUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 10,
          title: "Gentle Yoga Flow",
          difficulty: "Beginner",
          duration: "30-40 mins",
          equipment: "Yoga Mat",
          focus: "Flexibility & Relaxation",
          warmUp: "5 mins deep breathing, neck rolls",
          coolDown: "5 mins savasana, deep breathing",
          exercises: [
            { name: "Mountain Pose", sets: 3, duration: "30 seconds" },
            { name: "Forward Fold", sets: 3, duration: "45 seconds" },
            { name: "Warrior II", sets: 3, duration: "30 seconds each side" },
            { name: "Seated Twist", sets: 3, duration: "30 seconds each side" },
          ],
          description:
            "A gentle yoga flow to improve flexibility, reduce stress, and promote relaxation. Perfect for beginners or as a recovery session.",
          benefits: [
            "Reduces stress",
            "Improves flexibility",
            "Enhances mindfulness",
          ],
          tips: [
            "Focus on your breath throughout the flow.",
            "Use props like a block or cushion for support.",
            "Move at your own pace.",
          ],
          image: "https://plus.unsplash.com/premium_photo-1716025656382-cc9dfe8714a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2VudGxlJTIwWW9nYSUyMEZsb3d8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 11,
          title: "Bodyweight Circuit",
          difficulty: "Beginner",
          duration: "30-40 mins",
          equipment: "None",
          focus: "Full Body Conditioning",
          warmUp: "5 mins light jogging in place, arm swings",
          coolDown: "5 mins full-body stretch",
          exercises: [
            { name: "Squats", sets: 3, reps: "12-15" },
            { name: "Push-ups (Knee)", sets: 3, reps: "8-10" },
            { name: "Lunges", sets: 3, reps: "10 each leg" },
            { name: "Plank", sets: 3, duration: "30 seconds" },
          ],
          description:
            "A simple bodyweight circuit to improve overall fitness, build strength, and increase endurance without any equipment.",
          benefits: [
            "Improves full-body strength",
            "Enhances endurance",
            "No equipment needed",
          ],
          tips: [
            "Rest 30 seconds between exercises.",
            "Modify exercises as needed.",
            "Focus on proper form.",
          ],
          image: "https://images.unsplash.com/photo-1483721310020-03333e577078?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 12,
          title: "Posture Improvement",
          difficulty: "Beginner",
          duration: "25-35 mins",
          equipment: "None",
          focus: "Posture & Core Strength",
          warmUp: "5 mins shoulder rolls, neck stretches",
          coolDown: "5 mins chest opener, spinal twist",
          exercises: [
            { name: "Wall Angels", sets: 3, reps: "10-12" },
            { name: "Superman Hold", sets: 3, duration: "30 seconds" },
            { name: "Plank", sets: 3, duration: "30 seconds" },
            { name: "Cat-Cow Stretch", sets: 3, duration: "1 minute" },
          ],
          description:
            "A beginner workout to improve posture, strengthen the core, and reduce back pain caused by poor alignment.",
          benefits: [
            "Improves posture",
            "Reduces back pain",
            "Strengthens core",
          ],
          tips: [
            "Keep your shoulders relaxed.",
            "Engage your core during each exercise.",
            "Perform in front of a mirror to check alignment.",
          ],
          image: "https://plus.unsplash.com/premium_photo-1661719103631-3bc3eb2e21e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9zdHVyZSUyMGltcHJvdmVtZW50fGVufDB8fDB8fHww",
        },
        {
          id: 13,
          title: "Active Recovery Day",
          difficulty: "Beginner",
          duration: "20-30 mins",
          equipment: "Foam Roller (optional)",
          focus: "Recovery & Mobility",
          warmUp: "5 mins light walking, deep breathing",
          coolDown: "5 mins full-body stretch",
          exercises: [
            { name: "Foam Roll Quads", sets: 2, duration: "1 minute" },
            { name: "Hamstring Stretch", sets: 2, duration: "45 seconds each leg" },
            { name: "Chest Opener", sets: 2, duration: "45 seconds" },
            { name: "Child's Pose", sets: 2, duration: "1 minute" },
          ],
          description:
            "A light recovery workout to reduce muscle soreness, improve mobility, and promote relaxation after more intense sessions.",
          benefits: [
            "Reduces muscle soreness",
            "Improves mobility",
            "Promotes relaxation",
          ],
          tips: [
            "Move slowly and focus on breathing.",
            "Use a foam roller if available.",
            "Listen to your body and avoid overstretching.",
          ],
          image: "https://images.unsplash.com/photo-1589860518300-9eac95f784d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEFjdGl2ZSUyMFJlY292ZXJ5JTIwRGF5fGVufDB8fDB8fHww",
        },
        {
          id: 14,
          title: "Chair-Based Workout",
          difficulty: "Beginner",
          duration: "25-35 mins",
          equipment: "Chair",
          focus: "Strength & Mobility",
          warmUp: "5 mins seated arm circles, leg lifts",
          coolDown: "5 mins seated forward fold, neck stretch",
          exercises: [
            { name: "Seated Leg Lifts", sets: 3, reps: "10 each leg" },
            { name: "Chair Squats (Sit-to-Stand)", sets: 3, reps: "12-15" },
            { name: "Seated Shoulder Press (Bodyweight)", sets: 3, reps: "10-12" },
            { name: "Seated Torso Twists", sets: 3, reps: "10 each side" },
          ],
          description:
            "A chair-based workout for beginners or those with limited mobility, focusing on strength and mobility while seated or using a chair for support.",
          benefits: [
            "Improves strength and mobility",
            "Low impact on joints",
            "Accessible for all fitness levels",
          ],
          tips: [
            "Use a sturdy chair without wheels.",
            "Keep movements controlled.",
            "Stop if you feel any discomfort.",
          ],
          image: "https://images.unsplash.com/photo-1592494624782-b5bee232f156?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hhaXIlMjBCYXNlZCUyMFdvcmtvdXR8ZW58MHx8MHx8fDA%3D",
        },
      ],
    },
    {
      name: "Intermediate",
      routines: [
        {
          id: 15,
          title: "Muscle Building Program",
          difficulty: "Intermediate",
          duration: "45-60 mins",
          equipment: "Dumbbells, Barbell",
          focus: "Muscle Hypertrophy",
          warmUp: "5 mins light cardio, dynamic stretches",
          coolDown: "5 mins static stretches (quads, chest, lats)",
          exercises: [
            { name: "Barbell Squats", sets: 4, reps: "8-10" },
            { name: "Bench Press", sets: 4, reps: "8-10" },
            { name: "Deadlifts", sets: 4, reps: "6-8" },
            { name: "Overhead Press", sets: 3, reps: "8-10" },
            { name: "Pull-ups/Lat Pulldowns", sets: 3, reps: "10-12" },
          ],
          description:
            "A comprehensive strength training routine designed to build muscle mass and increase overall strength. Ideal for intermediate lifters looking to progress.",
          benefits: [
            "Builds muscle mass",
            "Increases strength",
            "Improves body composition",
          ],
          tips: [
            "Use a spotter for heavy lifts.",
            "Focus on progressive overload.",
            "Rest 60-90 seconds between sets.",
          ],
          image: "https://plus.unsplash.com/premium_photo-1726096575252-2cba49d318f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TXVzY2xlJTIwQnVpbGRpbmclMjBQcm9ncmFtfGVufDB8fDB8fHww",
        },
        {
          id: 16,
          title: "HIIT Power Workout",
          difficulty: "Intermediate",
          duration: "40-50 mins",
          equipment: "Kettlebell, Resistance Bands",
          focus: "Fat Loss & Conditioning",
          warmUp: "5 mins jump rope, dynamic stretches",
          coolDown: "5 mins deep breathing, hamstring stretch",
          exercises: [
            { name: "Kettlebell Swings", sets: 4, reps: "15-20" },
            { name: "Box Jumps", sets: 3, reps: "10-12" },
            { name: "Burpee Variations", sets: 4, duration: "45 seconds" },
            { name: "Resistance Band Rows", sets: 3, reps: "12-15" },
          ],
          description:
            "High-Intensity Interval Training to boost metabolism, improve cardiovascular fitness, and build lean muscle. Perfect for intermediate fitness levels.",
          benefits: [
            "Burns fat efficiently",
            "Improves cardiovascular fitness",
            "Builds lean muscle",
          ],
          tips: [
            "Push hard during work intervals.",
            "Rest 30 seconds between exercises.",
            "Use a timer for intervals.",
          ],
          image: "https://images.unsplash.com/photo-1625670338244-c2120092ce92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SElJVCUyMFBvd2VyJTIwV29ya291dHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 17,
          title: "Endurance and Power",
          difficulty: "Intermediate",
          duration: "50-60 mins",
          equipment: "Kettlebells, Battle Ropes",
          focus: "Cardiovascular Endurance",
          warmUp: "5 mins light rowing, arm swings",
          coolDown: "5 mins calf stretch, shoulder stretch",
          exercises: [
            { name: "Battle Rope Waves", sets: 4, duration: "30 seconds" },
            { name: "Kettlebell Snatches", sets: 3, reps: "12-15" },
            { name: "Rower Sprints", sets: 4, duration: "45 seconds" },
            { name: "Box Step-ups", sets: 3, reps: "15 each leg" },
          ],
          description:
            "A challenging workout combining power movements with cardiovascular endurance training. Ideal for intermediate athletes looking to improve stamina.",
          benefits: [
            "Enhances endurance",
            "Improves power output",
            "Boosts cardiovascular health",
          ],
          tips: [
            "Maintain a steady pace on the rower.",
            "Focus on explosive movements.",
            "Rest 45 seconds between sets.",
          ],
          image: "https://images.unsplash.com/photo-1560338080-85a0f3f89bf5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RW5kdXJhbmNlJTIwYW5kJTIwUG93ZXJ8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 18,
          title: "Circuit Training Challenge",
          difficulty: "Intermediate",
          duration: "45-55 mins",
          equipment: "Dumbbells, Resistance Bands",
          focus: "Full Body Conditioning",
          warmUp: "5 mins light jogging, dynamic stretches",
          coolDown: "5 mins full-body stretch",
          exercises: [
            { name: "Dumbbell Thrusters", sets: 3, reps: "12-15" },
            { name: "Resistance Band Pull-aparts", sets: 3, reps: "15-20" },
            { name: "Plank to Pushup", sets: 3, reps: "10-12" },
            { name: "Jump Squats", sets: 3, reps: "15-20" },
          ],
          description:
            "A dynamic circuit workout targeting multiple muscle groups with minimal rest between exercises. Great for intermediate fitness levels.",
          benefits: [
            "Improves full-body conditioning",
            "Increases muscular endurance",
            "Burns calories",
          ],
          tips: [
            "Move quickly between exercises.",
            "Keep your core engaged.",
            "Use a timer for consistency.",
          ],
          image: "https://images.unsplash.com/photo-1743993414579-9ad1bb84038b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fENpcmN1aXQlMjBUcmFpbmluZyUyMENoYWxsZW5nZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 19,
          title: "Functional Strength Training",
          difficulty: "Intermediate",
          duration: "50-60 mins",
          equipment: "Kettlebells, Medicine Ball",
          focus: "Practical Strength & Mobility",
          warmUp: "5 mins light cardio, hip openers",
          coolDown: "5 mins foam rolling, static stretches",
          exercises: [
            { name: "Kettlebell Turkish Get-ups", sets: 3, reps: "6-8 each side" },
            { name: "Medicine Ball Slams", sets: 3, reps: "12-15" },
            { name: "Single-leg Deadlifts", sets: 3, reps: "10 each leg" },
            { name: "Wall Balls", sets: 3, reps: "15-20" },
          ],
          description:
            "A comprehensive workout focusing on movements that improve strength, coordination, and real-world fitness. Ideal for intermediate lifters.",
          benefits: [
            "Improves functional strength",
            "Enhances coordination",
            "Boosts mobility",
          ],
          tips: [
            "Focus on form during Turkish Get-ups.",
            "Use a lighter medicine ball if needed.",
            "Rest 60 seconds between sets.",
          ],
          image: "https://plus.unsplash.com/premium_photo-1726618574723-74839fa5b97f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RnVuY3Rpb25hbCUyMFN0cmVuZ3RoJTIwVHJhaW5pbmd8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 20,
          title: "Core and Stability Challenge",
          difficulty: "Intermediate",
          duration: "40-50 mins",
          equipment: "Stability Ball",
          focus: "Core Strength & Stability",
          warmUp: "5 mins light cardio, torso twists",
          coolDown: "5 mins seated spinal twist, hamstring stretch",
          exercises: [
            { name: "Stability Ball Plank", sets: 3, duration: "45 seconds" },
            { name: "Russian Twists", sets: 3, reps: "15 each side" },
            { name: "Stability Ball Rollouts", sets: 3, reps: "10-12" },
            { name: "Hanging Leg Raises", sets: 3, reps: "10-12" },
          ],
          description:
            "A challenging core workout to improve stability, strengthen the midsection, and enhance overall balance.",
          benefits: [
            "Strengthens core muscles",
            "Improves stability",
            "Enhances balance",
          ],
          tips: [
            "Keep your movements controlled.",
            "Engage your core throughout.",
            "Use a wall for support if needed.",
          ],
          image: "https://images.unsplash.com/photo-1517343985841-f8b2d66e010b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29yZSUyMGFuZCUyMFN0YWJpbGl0eSUyMENoYWxsZW5nZSUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 21,
          title: "Lower Body Power",
          difficulty: "Intermediate",
          duration: "45-60 mins",
          equipment: "Dumbbells, Resistance Bands",
          focus: "Lower Body Strength & Power",
          warmUp: "5 mins light jogging, leg swings",
          coolDown: "5 mins quad stretch, glute stretch",
          exercises: [
            { name: "Dumbbell Squats", sets: 4, reps: "10-12" },
            { name: "Bulgarian Split Squats", sets: 3, reps: "10 each leg" },
            { name: "Resistance Band Lateral Walks", sets: 3, reps: "15 each side" },
            { name: "Jump Lunges", sets: 3, reps: "12 each leg" },
          ],
          description:
            "A powerful lower body workout to build strength, power, and endurance in the legs and glutes.",
          benefits: [
            "Increases lower body strength",
            "Improves power output",
            "Enhances glute activation",
          ],
          tips: [
            "Focus on explosive movements for jump lunges.",
            "Keep your core engaged.",
            "Rest 60 seconds between sets.",
          ],
          image: "https://images.unsplash.com/photo-1731341400858-402719adc714?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TG93ZXIlMjBCb2R5JTIwUG93ZXJ8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 22,
          title: "Upper Body Strength",
          difficulty: "Intermediate",
          duration: "45-60 mins",
          equipment: "Dumbbells, Pull-up Bar",
          focus: "Upper Body Strength",
          warmUp: "5 mins arm circles, shoulder shrugs",
          coolDown: "5 mins triceps stretch, chest opener",
          exercises: [
            { name: "Dumbbell Bench Press", sets: 4, reps: "8-10" },
            { name: "Pull-ups", sets: 3, reps: "8-10" },
            { name: "Dumbbell Shoulder Press", sets: 3, reps: "10-12" },
            { name: "Dumbbell Rows", sets: 3, reps: "10-12" },
          ],
          description:
            "An intermediate upper body workout to build strength in the chest, back, shoulders, and arms.",
          benefits: [
            "Increases upper body strength",
            "Improves posture",
            "Enhances arm definition",
          ],
          tips: [
            "Use a spotter for heavy presses.",
            "Focus on controlled movements.",
            "Rest 60 seconds between sets.",
          ],
          image: "https://plus.unsplash.com/premium_photo-1726328926240-8c9c20c81a46?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VXBwZXIlMjBCb2R5JTIwU3RyZW5ndGglMjBneW18ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 23,
          title: "Cardio and Core Combo",
          difficulty: "Intermediate",
          duration: "40-50 mins",
          equipment: "None",
          focus: "Cardio & Core Strength",
          warmUp: "5 mins jump rope, dynamic stretches",
          coolDown: "5 mins deep breathing, spinal twist",
          exercises: [
            { name: "Mountain Climbers", sets: 3, duration: "45 seconds" },
            { name: "Plank with Shoulder Taps", sets: 3, reps: "15 each side" },
            { name: "Burpees", sets: 3, reps: "10-12" },
            { name: "Bicycle Crunches", sets: 3, reps: "15 each side" },
          ],
          description:
            "A high-energy workout combining cardiovascular exercises with core strengthening movements for a full-body burn.",
          benefits: [
            "Improves cardiovascular fitness",
            "Strengthens core",
            "Burns calories",
          ],
          tips: [
            "Keep a steady pace during cardio.",
            "Engage your core during planks.",
            "Rest 30 seconds between exercises.",
          ],
          image: "https://plus.unsplash.com/premium_photo-1726096575271-8d1bd5b64081?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fENhcmRpbyUyMGFuZCUyMENvcmUlMjBDb21ibyUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 24,
          title: "Dynamic Yoga Flow",
          difficulty: "Intermediate",
          duration: "45-60 mins",
          equipment: "Yoga Mat",
          focus: "Strength & Flexibility",
          warmUp: "5 mins sun salutations, deep breathing",
          coolDown: "5 mins savasana, pigeon pose",
          exercises: [
            { name: "Warrior I", sets: 3, duration: "45 seconds each side" },
            { name: "Plank to Downward Dog Flow", sets: 3, duration: "1 minute" },
            { name: "Tree Pose", sets: 3, duration: "30 seconds each side" },
            { name: "Crow Pose (or Prep)", sets: 3, duration: "30 seconds" },
          ],
          description:
            "A dynamic yoga flow to build strength, improve flexibility, and enhance balance for intermediate practitioners.",
          benefits: [
            "Improves strength and flexibility",
            "Enhances balance",
            "Reduces stress",
          ],
          tips: [
            "Focus on your breath throughout the flow.",
            "Use a block for support in Tree Pose.",
            "Move at a steady pace.",
          ],
          image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnR8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 25,
          title: "Bodyweight Strength Challenge",
          difficulty: "Intermediate",
          duration: "40-50 mins",
          equipment: "None",
          focus: "Full Body Strength",
          warmUp: "5 mins light jogging, dynamic stretches",
          coolDown: "5 mins full-body stretch",
          exercises: [
            { name: "Push-ups", sets: 4, reps: "10-12" },
            { name: "Squats", sets: 4, reps: "15-20" },
            { name: "Lunges", sets: 3, reps: "12 each leg" },
            { name: "Plank with Leg Lift", sets: 3, duration: "30 seconds each leg" },
          ],
          description:
            "A challenging bodyweight workout to build strength and endurance without any equipment, perfect for intermediate fitness levels.",
          benefits: [
            "Improves full-body strength",
            "Enhances endurance",
            "No equipment needed",
          ],
          tips: [
            "Rest 45 seconds between exercises.",
            "Focus on proper form.",
            "Increase reps as you progress.",
          ],
          image: "https://plus.unsplash.com/premium_photo-1663012917724-4ce9630a5de4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Qm9keXdlaWdodCUyMFN0cmVuZ3RoJTIwQ2hhbGxlbmdlfGVufDB8fDB8fHww",
        },
        {
          id: 26,
          title: "Agility and Speed Training",
          difficulty: "Intermediate",
          duration: "45-55 mins",
          equipment: "Cones (optional)",
          focus: "Agility & Speed",
          warmUp: "5 mins light jogging, high knees",
          coolDown: "5 mins calf stretch, quad stretch",
          exercises: [
            { name: "Lateral Shuffles", sets: 3, duration: "45 seconds" },
            { name: "Sprint Intervals", sets: 4, duration: "30 seconds" },
            { name: "Cone Drills (Zig-Zag)", sets: 3, duration: "1 minute" },
            { name: "Skater Jumps", sets: 3, reps: "15 each side" },
          ],
          description:
            "A workout to improve agility, speed, and coordination, ideal for intermediate athletes looking to enhance their athletic performance.",
          benefits: [
            "Improves agility",
            "Increases speed",
            "Enhances coordination",
          ],
          tips: [
            "Use cones to create a drill path.",
            "Focus on quick, controlled movements.",
            "Rest 30 seconds between sets.",
          ],
          image: "https://images.unsplash.com/photo-1609601242635-5c9678e15f20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEFnaWxpdHklMjBhbmQlMjBTcGVlZCUyMFRyYWluaW5nfGVufDB8fDB8fHww",
        },
        {
          id: 27,
          title: "Push-Pull Strength",
          difficulty: "Intermediate",
          duration: "50-60 mins",
          equipment: "Dumbbells, Pull-up Bar",
          focus: "Upper Body Strength",
          warmUp: "5 mins arm circles, light cardio",
          coolDown: "5 mins triceps stretch, lat stretch",
          exercises: [
            { name: "Dumbbell Bench Press", sets: 4, reps: "8-10" },
            { name: "Pull-ups", sets: 3, reps: "8-10" },
            { name: "Dumbbell Shoulder Press", sets: 3, reps: "10-12" },
            { name: "Dumbbell Rows", sets: 3, reps: "10-12" },
          ],
          description:
            "A push-pull workout to build balanced upper body strength, focusing on pushing and pulling movements.",
          benefits: [
            "Builds balanced upper body strength",
            "Improves posture",
            "Enhances muscle definition",
          ],
          tips: [
            "Alternate between push and pull exercises.",
            "Use a spotter for heavy lifts.",
            "Rest 60 seconds between sets.",
          ],
          image: "https://plus.unsplash.com/premium_photo-1664910451815-71900d173da8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHVzaCUyMFB1bGwlMjBTdHJlbmd0aHxlbnwwfHwwfHx8MA%3D%3D",
        },
      ],
    },
    {
      name: "Advanced",
      routines: [
        {
          id: 28,
          title: "Strength & Power Training",
          difficulty: "Advanced",
          duration: "60-75 mins",
          equipment: "Full Gym Setup",
          focus: "Maximum Strength & Athletic Performance",
          warmUp: "10 mins light cardio, dynamic stretches",
          coolDown: "10 mins static stretches, foam rolling",
          exercises: [
            { name: "Barbell Back Squats", sets: 5, reps: "5-6" },
            { name: "Weighted Pull-ups", sets: 4, reps: "6-8" },
            { name: "Power Cleans", sets: 4, reps: "4-6" },
            { name: "Weighted Dips", sets: 3, reps: "8-10" },
            { name: "Weighted Box Jumps", sets: 3, reps: "6-8" },
          ],
          description:
            "An intense program for experienced athletes focusing on explosive power and maximal strength gains. Requires a full gym setup.",
          benefits: [
            "Maximizes strength",
            "Enhances power output",
            "Improves athletic performance",
          ],
          tips: [
            "Use a spotter for heavy lifts.",
            "Focus on explosive movements.",
            "Rest 90 seconds between sets.",
          ],
          image: "https://images.unsplash.com/photo-1526407153035-415201c1ba3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U3RyZW5ndGglMjAlMjYlMjBQb3dlciUyMFRyYWluaW5nfGVufDB8fDB8fHww",
        },
        {
          id: 29,
          title: "Plyometric Power Surge",
          difficulty: "Advanced",
          duration: "60-70 mins",
          equipment: "Plyo Box, Weighted Vest",
          focus: "Explosive Power & Speed",
          warmUp: "10 mins light cardio, dynamic stretches",
          coolDown: "10 mins calf stretch, quad stretch",
          exercises: [
            { name: "Depth Jumps", sets: 4, reps: "8-10" },
            { name: "Weighted Vest Jump Squats", sets: 3, reps: "12-15" },
            { name: "Clap Pushups", sets: 3, reps: "10-12" },
            { name: "Box Jump Overs", sets: 3, reps: "10-12" },
          ],
          description:
            "An explosive workout designed to enhance athletic performance, power output, and fast-twitch muscle activation. For advanced athletes only.",
          benefits: [
            "Increases explosive power",
            "Improves speed",
            "Enhances athletic performance",
          ],
          tips: [
            "Focus on maximum effort during jumps.",
            "Land softly to reduce impact.",
            "Rest 60 seconds between sets.",
          ],
          image: "https://images.unsplash.com/photo-1545612036-2872840642dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGx5b21ldHJpYyUyMFBvd2VyJTIwU3VyZ2UlMjBneW18ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 30,
          title: "Olympic Lifting Complex",
          difficulty: "Advanced",
          duration: "75-90 mins",
          equipment: "Olympic Barbells, Platforms",
          focus: "Technical Lifting & Total Body Power",
          warmUp: "10 mins light cardio, barbell warm-up sets",
          coolDown: "10 mins static stretches, foam rolling",
          exercises: [
            { name: "Snatch", sets: 5, reps: "3-5" },
            { name: "Clean and Jerk", sets: 5, reps: "3-5" },
            { name: "Front Squat", sets: 4, reps: "5-7" },
            { name: "Overhead Squat", sets: 3, reps: "5-6" },
          ],
          description:
            "A technical and challenging workout focusing on Olympic weightlifting movements to develop supreme strength and power.",
          benefits: [
            "Improves technical lifting skills",
            "Maximizes power output",
            "Enhances full-body strength",
          ],
          tips: [
            "Work with a coach if new to Olympic lifts.",
            "Focus on form over weight.",
            "Rest 2 minutes between sets.",
          ],
          image: "https://plus.unsplash.com/premium_photo-1719610089343-1fbdcde513e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T2x5bXBpYyUyMExpZnRpbmclMjBDb21wbGV4JTIwZml0bmVzfGVufDB8fDB8fHww",
        },
        {
          id: 31,
          title: "Extreme Conditioning Challenge",
          difficulty: "Advanced",
          duration: "70-85 mins",
          equipment: "Kettlebells, Assault Bike, Rower",
          focus: "Elite Cardiovascular & Muscular Endurance",
          warmUp: "10 mins light rowing, dynamic stretches",
          coolDown: "10 mins deep breathing, full-body stretch",
          exercises: [
            { name: "Kettlebell Complex", sets: 4, duration: "45 seconds" },
            { name: "Assault Bike Sprints", sets: 5, duration: "30 seconds" },
            { name: "Rowing Intervals", sets: 4, duration: "45 seconds" },
            { name: "Battle Rope Wave Finisher", sets: 3, duration: "30 seconds" },
          ],
          description:
            "A brutally intense workout pushing the limits of cardiovascular endurance and full-body muscular stamina. For advanced athletes only.",
          benefits: [
            "Maximizes endurance",
            "Improves cardiovascular fitness",
            "Builds mental toughness",
          ],
          tips: [
            "Pace yourself to avoid burnout.",
            "Stay hydrated throughout.",
            "Rest 45 seconds between sets.",
          ],
          image: "https://images.unsplash.com/photo-1610409843310-747410c7d52e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RXh0cmVtZSUyMENvbmRpdGlvbmluZyUyMENoYWxsZW5nZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 32,
          title: "Multi-Modal Performance Training",
          difficulty: "Advanced",
          duration: "80-90 mins",
          equipment: "Full CrossFit/Functional Fitness Setup",
          focus: "Comprehensive Athletic Development",
          warmUp: "10 mins light cardio, dynamic stretches",
          coolDown: "10 mins foam rolling, static stretches",
          exercises: [
            { name: "Muscle-ups", sets: 4, reps: "5-8" },
            { name: "Handstand Pushups", sets: 3, reps: "8-10" },
            { name: "Heavy Sled Pushes", sets: 3, duration: "45 seconds" },
            { name: "Rope Climbs", sets: 3, reps: "3-5" },
          ],
          description:
            "An elite-level workout integrating gymnastic skills, strength training, and functional movement patterns for comprehensive athletic development.",
          benefits: [
            "Improves athletic performance",
            "Enhances strength and endurance",
            "Builds functional fitness",
          ],
          tips: [
            "Use a spotter for muscle-ups.",
            "Focus on form during handstand pushups.",
            "Rest 90 seconds between sets.",
          ],
          image: "https://images.unsplash.com/photo-1602827114685-efbb2717da9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TXVsdGklMjBNb2RhbCUyMFBlcmZvcm1hbmNlJTIwVHJhaW5pbmd8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 33,
          title: "Advanced Core Crusher",
          difficulty: "Advanced",
          duration: "50-60 mins",
          equipment: "Pull-up Bar, Medicine Ball",
          focus: "Core Strength & Stability",
          warmUp: "5 mins light cardio, torso twists",
          coolDown: "5 mins seated spinal twist, hamstring stretch",
          exercises: [
            { name: "Hanging Leg Raises", sets: 4, reps: "12-15" },
            { name: "Medicine Ball Russian Twists", sets: 4, reps: "15 each side" },
            { name: "Plank with Weight Transfer", sets: 3, duration: "45 seconds" },
            { name: "Toes to Bar", sets: 3, reps: "10-12" },
          ],
          description:
            "An advanced core workout to build a rock-solid midsection, improve stability, and enhance overall athletic performance.",
          benefits: [
            "Maximizes core strength",
            "Improves stability",
            "Enhances athletic performance",
          ],
          tips: [
            "Keep your movements controlled.",
            "Engage your core throughout.",
            "Rest 45 seconds between sets.",
          ],
          image: "https://images.unsplash.com/photo-1734668487893-d686f3c8d0cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QWR2YW5jZWQlMjBDb3JlJTIwQ3J1c2hlciUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 34,
          title: "Lower Body Explosive Power",
          difficulty: "Advanced",
          duration: "60-75 mins",
          equipment: "Barbell, Plyo Box",
          focus: "Lower Body Power",
          warmUp: "10 mins light cardio, leg swings",
          coolDown: "10 mins quad stretch, glute stretch",
          exercises: [
            { name: "Barbell Jump Squats", sets: 4, reps: "8-10" },
            { name: "Box Jumps", sets: 4, reps: "10-12" },
            { name: "Single-leg Pistol Squats", sets: 3, reps: "6-8 each leg" },
            { name: "Weighted Step-ups", sets: 3, reps: "10 each leg" },
          ],
          description:
            "An advanced lower body workout to build explosive power, strength, and endurance in the legs and glutes.",
          benefits: [
            "Increases explosive power",
            "Improves lower body strength",
            "Enhances athletic performance",
          ],
          tips: [
            "Focus on explosive movements.",
            "Land softly during jumps.",
            "Rest 90 seconds between sets.",
          ],
          image: "https://plus.unsplash.com/premium_photo-1719682675509-635d9abd2baa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TG93ZXIlMjBCb2R5JTIwRXhwbG9zaXZlJTIwUG93ZXIlMjBneW18ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 35,
          title: "Upper Body Powerhouse",
          difficulty: "Advanced",
          duration: "60-75 mins",
          equipment: "Barbell, Pull-up Bar",
          focus: "Upper Body Strength & Power",
          warmUp: "10 mins light cardio, arm circles",
          coolDown: "10 mins triceps stretch, lat stretch",
          exercises: [
            { name: "Barbell Bench Press", sets: 5, reps: "5-6" },
            { name: "Weighted Pull-ups", sets: 4, reps: "6-8" },
            { name: "Barbell Overhead Press", sets: 4, reps: "6-8" },
            { name: "Clap Pushups", sets: 3, reps: "10-12" },
          ],
          description:
            "An advanced upper body workout to build strength, power, and endurance in the chest, back, shoulders, and arms.",
          benefits: [
            "Maximizes upper body strength",
            "Improves power output",
            "Enhances muscle definition",
          ],
          tips: [
            "Use a spotter for heavy lifts.",
            "Focus on explosive movements for clap pushups.",
            "Rest 90 seconds between sets.",
          ],
          image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMG91dHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 36,
          title: "Advanced HIIT Blast",
          difficulty: "Advanced",
          duration: "50-60 mins",
          equipment: "Kettlebells, Plyo Box",
          focus: "Fat Loss & Conditioning",
          warmUp: "10 mins jump rope, dynamic stretches",
          coolDown: "10 mins deep breathing, full-body stretch",
          exercises: [
            { name: "Kettlebell Swings", sets: 5, reps: "20-25" },
            { name: "Box Jump Burpees", sets: 4, reps: "10-12" },
            { name: "Kettlebell Snatches", sets: 4, reps: "12-15" },
            { name: "Mountain Climbers", sets: 4, duration: "45 seconds" },
          ],
          description:
            "An advanced HIIT workout to maximize fat loss, improve conditioning, and build explosive power.",
          benefits: [
            "Maximizes fat loss",
            "Improves cardiovascular fitness",
            "Builds explosive power",
          ],
          tips: [
            "Push hard during work intervals.",
            "Rest 30 seconds between exercises.",
            "Use a timer for intervals.",
          ],
          image: "https://plus.unsplash.com/premium_photo-1664476913147-71cf56ece24b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWR2YW5jZWQlMjBISUlUJTIwQmxhc3QlMjBneW18ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 37,
          title: "Functional Fitness Elite",
          difficulty: "Advanced",
          duration: "70-85 mins",
          equipment: "Kettlebells, Sandbags, Pull-up Bar",
          focus: "Functional Strength & Endurance",
          warmUp: "10 mins light cardio, dynamic stretches",
          coolDown: "10 mins foam rolling, static stretches",
          exercises: [
            { name: "Kettlebell Clean and Press", sets: 4, reps: "8-10 each side" },
            { name: "Sandbag Carry", sets: 3, duration: "1 minute" },
            { name: "Pull-ups", sets: 4, reps: "8-10" },
            { name: "Kettlebell Goblet Squats", sets: 3, reps: "12-15" },
          ],
          description:
            "An advanced functional fitness workout to build strength, endurance, and real-world fitness for elite athletes.",
          benefits: [
            "Improves functional strength",
            "Enhances endurance",
            "Builds mental toughness",
          ],
          tips: [
            "Focus on form during complex movements.",
            "Use a lighter sandbag if needed.",
            "Rest 90 seconds between sets.",
          ],
          image: "https://plus.unsplash.com/premium_photo-1664301437780-ee46787734d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnVuY3Rpb25hbCUyMEZpdG5lc3MlMjBFbGl0ZSUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          id: 38,
          title: "Advanced Yoga for Athletes",
          difficulty: "Advanced",
          duration: "60-75 mins",
          equipment: "Yoga Mat",
          focus: "Strength, Flexibility & Balance",
          warmUp: "10 mins sun salutations, deep breathing",
          coolDown: "10 mins savasana, pigeon pose",
          exercises: [
            { name: "Crow Pose", sets: 3, duration: "30 seconds" },
            { name: "Handstand Hold", sets: 3, duration: "30 seconds" },
            { name: "Warrior III", sets: 3, duration: "45 seconds each side" },
            { name: "Pigeon Pose Flow", sets: 3, duration: "1 minute each side" },
          ],
          description:
            "An advanced yoga workout for athletes to build strength, improve flexibility, and enhance balance and recovery.",
          benefits: [
            "Improves strength and flexibility",
            "Enhances balance",
            "Aids in recovery",
          ],
          tips: [
            "Focus on your breath throughout the flow.",
            "Use a wall for support in handstand.",
            "Move at a steady pace.",
          ],
          image: "https://images.unsplash.com/photo-1687180948630-2780c8b3f7f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWR2YW5jZWQlMjBZb2dhJTIwZm9yJTIwQXRobGV0ZXN8ZW58MHx8MHx8fDA%3D",
        },
        {
          id: 39,
          title: "Sprint and Power Intervals",
          difficulty: "Advanced",
          duration: "60-70 mins",
          equipment: "Treadmill or Open Space",
          focus: "Speed & Power",
          warmUp: "10 mins light jogging, dynamic stretches",
          coolDown: "10 mins calf stretch, quad stretch",
          exercises: [
            { name: "Sprint Intervals", sets: 6, duration: "30 seconds" },
            { name: "Jump Squats", sets: 4, reps: "15-20" },
            { name: "Lateral Bounds", sets: 4, reps: "12 each side" },
            { name: "Tuck Jumps", sets: 3, reps: "10-12" },
          ],
          description:
            "An advanced workout to improve speed, power, and explosive performance through sprinting and plyometric exercises.",
          benefits: [
            "Increases speed",
            "Improves power output",
            "Enhances athletic performance",
          ],
          tips: [
            "Warm up thoroughly to prevent injury.",
            "Focus on maximum effort during sprints.",
            "Rest 60 seconds between sets.",
          ],
          image: "https://plus.unsplash.com/premium_photo-1716811371708-1056ce4869bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNwcmludCUyMGFuZCUyMFBvd2VyJTIwSW50ZXJ2YWxzfGVufDB8fDB8fHww",
        },
        {
          id: 40,
          title: "Total Body Strength and Conditioning",
          difficulty: "Advanced",
          duration: "75-90 mins",
          equipment: "Full Gym Setup",
          focus: "Full Body Strength & Conditioning",
          warmUp: "10 mins light cardio, dynamic stretches",
          coolDown: "10 mins foam rolling, static stretches",
          exercises: [
            { name: "Deadlifts", sets: 5, reps: "5-6" },
            { name: "Barbell Bench Press", sets: 4, reps: "6-8" },
            { name: "Pull-ups", sets: 4, reps: "8-10" },
            { name: "Kettlebell Swings", sets: 4, reps: "15-20" },
          ],
          description:
            "A comprehensive advanced workout to build strength, power, and conditioning across the entire body.",
          benefits: [
            "Maximizes full-body strength",
            "Improves conditioning",
            "Enhances athletic performance",
          ],
          tips: [
            "Use a spotter for heavy lifts.",
            "Focus on form over weight.",
            "Rest 90 seconds between sets.",
          ],
          image: "https://images.unsplash.com/photo-1546817372-628669db4655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VG90YWwlMjBCb2R5JTIwU3RyZW5ndGglMjBhbmQlMjBDb25kaXRpb25pbmd8ZW58MHx8MHx8fDA%3D",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
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
        <div className="text-center mb-16 mt-14">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-6">
            Workout Routines
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Discover personalized workout routines tailored to your fitness level. From beginner to advanced, find the perfect program to achieve your fitness goals with detailed exercises, warm-ups, cool-downs, and expert tips.
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex justify-center mb-16 space-x-4 flex-wrap gap-y-4">
          {workoutCategories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeCategory === category.name
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Routines Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {workoutCategories
            .find((cat) => cat.name === activeCategory)
            .routines.map((routine) => (
              <motion.div
                key={routine.id}
                variants={itemVariants}
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => setSelectedRoutine(routine)}
              >
                <div className="relative">
                  <img
                    src={routine.image}
                    alt={routine.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {routine.difficulty}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                    {routine.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-300">
                    <div>
                      <strong>Duration:</strong> {routine.duration}
                    </div>
                    <div>
                      <strong>Equipment:</strong> {routine.equipment}
                    </div>
                    <div>
                      <strong>Focus:</strong> {routine.focus}
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6 line-clamp-3">
                    {routine.description}
                  </p>
                  <motion.button
                    className="w-full py-3 px-4 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Routine Details Modal */}
        <AnimatePresence>
          {selectedRoutine && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-gray-900 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 relative"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <motion.button
                  onClick={() => setSelectedRoutine(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-8 h-8"
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
                </motion.button>

                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                    {selectedRoutine.title}
                  </h2>
                  <img
                    src={selectedRoutine.image}
                    alt={selectedRoutine.title}
                    className="w-full h-72 object-cover rounded-lg mb-6"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                      Workout Details
                    </h3>
                    <div className="space-y-3 text-gray-300">
                      <p>
                        <strong>Difficulty:</strong> {selectedRoutine.difficulty}
                      </p>
                      <p>
                        <strong>Duration:</strong> {selectedRoutine.duration}
                      </p>
                      <p>
                        <strong>Equipment:</strong> {selectedRoutine.equipment}
                      </p>
                      <p>
                        <strong>Focus:</strong> {selectedRoutine.focus}
                      </p>
                      <p>
                        <strong>Warm-Up:</strong> {selectedRoutine.warmUp}
                      </p>
                      <p>
                        <strong>Cool-Down:</strong> {selectedRoutine.coolDown}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                      Exercise List
                    </h3>
                    <ul className="space-y-3">
                      {selectedRoutine.exercises.map((exercise, index) => (
                        <li
                          key={index}
                          className="bg-gray-800 p-4 rounded-lg shadow-md"
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-white">
                              {exercise.name}
                            </span>
                            <span className="text-yellow-400">
                              {exercise.sets} sets,{" "}
                              {exercise.reps || exercise.duration}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                    Description
                  </h3>
                  <p className="text-gray-300">{selectedRoutine.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                      Benefits
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {selectedRoutine.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                      Tips
                    </h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {selectedRoutine.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <motion.button
                  className="w-full py-4 px-6 rounded-lg font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Workout
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default WorkoutRoutinesPage;