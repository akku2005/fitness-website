import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";

const NutritionPlannerApp = () => {
  // State Management
  const [userData, setUserData] = useState({
    height: '',
    weight: '',
    age: '',
    gender: 'male',
    activityLevel: 'sedentary',
    goal: 'maintain'
  });

  const [bmiDetails, setBMIDetails] = useState({
    bmi: null,
    category: '',
    riskLevel: '',
    bmr: null,
    tdee: null
  });

  const [dietPlan, setDietPlan] = useState(null);
  const [error, setError] = useState(null);

  // Comprehensive Diet Plans
  const detailedDietPlans = {
    underweight: {
      title: 'Weight Gain & Muscle Building Plan',
      baseCalories: 2600,
      macroSplit: { protein: 30, carbs: 50, fats: 20 },
      description: 'A nutrient-rich plan focused on healthy weight gain and muscle development',
      mealTiming: '5-6 meals daily, every 2-3 hours',
      supplements: ['Whey protein', 'Creatine', 'Multivitamin'],
      foods: {
        breakfast: ['Oatmeal with peanut butter', 'Whole eggs', 'Greek yogurt'],
        lunch: ['Chicken breast', 'Brown rice', 'Avocado'],
        dinner: ['Salmon', 'Sweet potato', 'Mixed vegetables'],
        snacks: ['Almonds', 'Banana', 'Protein shake']
      },
      recommendations: [
        'Eat calorie-dense foods regularly',
        'Include protein with every meal',
        'Stay hydrated (3-4L water daily)',
        'Consider strength training',
        'Get 7-9 hours of sleep'
      ]
    },
    normal: {
      title: 'Healthy Weight Maintenance Plan',
      baseCalories: 2200,
      macroSplit: { protein: 25, carbs: 45, fats: 30 },
      description: 'Balanced approach for maintaining optimal health and energy',
      mealTiming: '3 main meals + 2 snacks',
      supplements: ['Omega-3', 'Vitamin D'],
      foods: {
        breakfast: ['Whole grain toast', 'Eggs', 'Berries'],
        lunch: ['Grilled chicken', 'Quinoa', 'Mixed greens'],
        dinner: ['Lean beef', 'Roasted vegetables', 'Wild rice'],
        snacks: ['Greek yogurt', 'Mixed nuts']
      },
      recommendations: [
        'Maintain consistent meal timing',
        'Eat variety of colorful vegetables',
        'Stay active (30 min/day)',
        'Monitor portion sizes',
        'Limit processed foods'
      ]
    },
    overweight: {
      title: 'Sustainable Weight Loss Plan',
      baseCalories: 1800,
      macroSplit: { protein: 35, carbs: 35, fats: 30 },
      description: 'Gradual weight loss with focus on sustainability',
      mealTiming: '3 meals + 1-2 snacks',
      supplements: ['Fiber supplement', 'Green tea extract'],
      foods: {
        breakfast: ['Egg whites', 'Spinach', 'Whole grain toast'],
        lunch: ['Turkey breast', 'Vegetable soup', 'Salad'],
        dinner: ['Grilled fish', 'Broccoli', 'Cauliflower rice'],
        snacks: ['Celery with hummus', 'Apple']
      },
      recommendations: [
        'Increase protein intake',
        'Reduce refined carbs',
        'Walk 10,000 steps daily',
        'Drink water before meals',
        'Track food intake'
      ]
    },
    obese: {
      title: 'Comprehensive Weight Management Plan',
      baseCalories: 1600,
      macroSplit: { protein: 40, carbs: 30, fats: 30 },
      description: 'Structured approach for significant weight reduction',
      mealTiming: '3 controlled meals',
      supplements: ['Fiber', 'Vitamin B12'],
      foods: {
        breakfast: ['Protein smoothie', 'Chia seeds', 'Spinach'],
        lunch: ['Grilled chicken', 'Zucchini noodles', 'Salad'],
        dinner: ['Lean turkey', 'Steamed vegetables', 'Small potato'],
        snacks: ['Cucumber slices', 'Boiled egg']
      },
      recommendations: [
        'Consult healthcare provider',
        'Focus on volume eating',
        'Start with low-impact exercise',
        'Avoid sugary beverages',
        'Practice mindful eating'
      ]
    }
  };

  // Comprehensive Calculations
  const calculateNutritionProfile = useCallback(() => {
    const { height, weight, age, gender, activityLevel, goal } = userData;

    if (!height || !weight || !age) {
      setError('Please fill all required fields');
      return;
    }

    // BMI Calculation
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    // BMR Calculation (Mifflin-St Jeor Equation)
    const bmr = gender === 'male'
      ? (10 * weight) + (6.25 * height) - (5 * age) + 5
      : (10 * weight) + (6.25 * height) - (5 * age) - 161;

    // TDEE Calculation based on activity level
    const activityMultipliers = {
      sedentary: 1.2,
      moderate: 1.375,
      active: 1.55
    };
    const tdee = bmr * activityMultipliers[activityLevel];

    // Determine category and risk
    let category = '', riskLevel = '', dietCategory = 'normal';
    if (bmi < 18.5) {
      category = 'Underweight';
      riskLevel = 'Risk of nutritional deficiencies';
      dietCategory = 'underweight';
    } else if (bmi < 25) {
      category = 'Normal Weight';
      riskLevel = 'Optimal health range';
      dietCategory = 'normal';
    } else if (bmi < 30) {
      category = 'Overweight';
      riskLevel = 'Elevated health risks';
      dietCategory = 'overweight';
    } else {
      category = 'Obese';
      riskLevel = 'High risk of chronic diseases';
      dietCategory = 'obese';
    }

    // Adjust calories based on goal
    let calorieAdjustment = 0;
    if (goal === 'lose') calorieAdjustment = -500;
    if (goal === 'gain') calorieAdjustment = 500;

    setBMIDetails({
      bmi: bmi.toFixed(1),
      category,
      riskLevel,
      bmr: Math.round(bmr),
      tdee: Math.round(tdee)
    });

    const selectedPlan = detailedDietPlans[dietCategory];
    setDietPlan({
      ...selectedPlan,
      calories: Math.round(selectedPlan.baseCalories + calorieAdjustment + (tdee - selectedPlan.baseCalories) * 0.5)
    });
  }, [userData]);

  // Improved Macro Nutrients Chart to match the image
  const MacroNutrientsChart = ({ macroSplit }) => {
    const total = macroSplit.protein + macroSplit.carbs + macroSplit.fats;
    const proteinAngle = (macroSplit.protein / total) * 360;
    const carbsAngle = (macroSplit.carbs / total) * 360;
    const fatsAngle = (macroSplit.fats / total) * 360;

    // Calculate stroke-dasharray and stroke-dashoffset for each segment
    const circumference = 2 * Math.PI * 15; // Radius is 15 (from viewBox 0 0 36 36)
    const proteinDash = (proteinAngle / 360) * circumference;
    const carbsDash = (carbsAngle / 360) * circumference;
    const fatsDash = (fatsAngle / 360) * circumference;

    return (
      <div className="relative w-full max-w-[200px] aspect-square mx-auto">
        <svg viewBox="0 0 36 36" className="w-full h-full">
          {/* Background circle */}
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="transparent"
            stroke="#2d3748"
            strokeWidth="6"
          />
          {/* Protein segment */}
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="transparent"
            stroke="#ff6384"
            strokeWidth="6"
            strokeDasharray={`${proteinDash} ${circumference - proteinDash}`}
            strokeDashoffset="0"
            transform="rotate(-90 18 18)"
          />
          {/* Carbs segment */}
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="transparent"
            stroke="#36a2eb"
            strokeWidth="6"
            strokeDasharray={`${carbsDash} ${circumference - carbsDash}`}
            strokeDashoffset={-proteinDash}
            transform="rotate(-90 18 18)"
          />
          {/* Fats segment */}
          <circle
            cx="18"
            cy="18"
            r="15"
            fill="transparent"
            stroke="#ffce56"
            strokeWidth="6"
            strokeDasharray={`${fatsDash} ${circumference - fatsDash}`}
            strokeDashoffset={-(proteinDash + carbsDash)}
            transform="rotate(-90 18 18)"
          />
          {/* Inner circle to create donut effect */}
          <circle
            cx="18"
            cy="18"
            r="10"
            fill="#2d3748"
          />
          {/* Center text */}
          <text
            x="18"
            y="18"
            textAnchor="middle"
            dy=".3em"
            className="fill-white text-sm font-bold"
          >
            {total}%
          </text>
        </svg>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8 ">
      <div className="max-w-6xl mx-auto mt-14">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-8">
            Comprehensive Nutrition Planner
          </h1>

          {/* User Input Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { name: 'height', type: 'number', placeholder: 'Height (cm)', unit: 'cm' },
              { name: 'weight', type: 'number', placeholder: 'Weight (kg)', unit: 'kg' },
              { name: 'age', type: 'number', placeholder: 'Age', unit: 'years' },
            ].map((field) => (
              <div key={field.name} className="relative">
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={userData[field.name]}
                  onChange={(e) => setUserData({ ...userData, [field.name]: e.target.value })}
                  className="w-full bg-gray-700 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">{field.unit}</span>
              </div>
            ))}
            <select
              value={userData.gender}
              onChange={(e) => setUserData({ ...userData, gender: e.target.value })}
              className="bg-gray-700 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <select
              value={userData.activityLevel}
              onChange={(e) => setUserData({ ...userData, activityLevel: e.target.value })}
              className="bg-gray-700 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
            >
              <option value="sedentary">Sedentary (little exercise)</option>
              <option value="moderate">Moderate (3-5 days/week)</option>
              <option value="active">Active (6-7 days/week)</option>
            </select>
            <select
              value={userData.goal}
              onChange={(e) => setUserData({ ...userData, goal: e.target.value })}
              className="bg-gray-700 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
            >
              <option value="lose">Lose Weight</option>
              <option value="maintain">Maintain Weight</option>
              <option value="gain">Gain Weight</option>
            </select>
          </div>

          {error && (
            <p className="text-red-400 text-center mb-4">{error}</p>
          )}

          <button
            onClick={calculateNutritionProfile}
            className="w-full bg-yellow-500 text-black py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-300 font-semibold"
          >
            Generate Nutrition Profile
          </button>

          {/* Results Section */}
          {bmiDetails.bmi && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Detailed BMI Analysis */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">Health Metrics</h2>
                <div className="space-y-3">
                  <p>BMI: <span className="font-bold text-yellow-300">{bmiDetails.bmi}</span></p>
                  <p>Category: <span className="font-bold text-yellow-300">{bmiDetails.category}</span></p>
                  <p>Risk Level: <span className="text-red-400">{bmiDetails.riskLevel}</span></p>
                  <p>BMR: <span className="font-bold text-yellow-300">{bmiDetails.bmr} kcal</span> (Base Metabolic Rate)</p>
                  <p>TDEE: <span className="font-bold text-yellow-300">{bmiDetails.tdee} kcal</span> (Total Daily Energy)</p>
                </div>
              </div>

              {/* Macro Nutrients Breakdown */}
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-yellow-400 mb-4">Macronutrient Distribution</h2>
                {dietPlan && (
                  <>
                    <MacroNutrientsChart macroSplit={dietPlan.macroSplit} />
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                      <div className="flex items-center">
                        <span className="w-4 h-4 bg-[#ff6384] mr-2 rounded-full"></span>
                        <span>Protein ({dietPlan.macroSplit.protein}%)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-4 h-4 bg-[#36a2eb] mr-2 rounded-full"></span>
                        <span>Carbs ({dietPlan.macroSplit.carbs}%)</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-4 h-4 bg-[#ffce56] mr-2 rounded-full"></span>
                        <span>Fats ({dietPlan.macroSplit.fats}%)</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}

          {/* Comprehensive Diet Plan */}
          {dietPlan && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6">
                Your Personalized Nutrition Plan
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Plan Overview */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-300 mb-3">{dietPlan.title}</h3>
                    <p className="text-gray-300">{dietPlan.description}</p>
                  </div>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-yellow-300 mb-3">Nutrition Details</h4>
                    <p>Daily Calories: <span className="font-bold">{dietPlan.calories} kcal</span></p>
                    <p>Protein: <span className="font-bold">{Math.round(dietPlan.calories * (dietPlan.macroSplit.protein / 100) / 4)}g</span> ({dietPlan.macroSplit.protein}%)</p>
                    <p>Carbs: <span className="font-bold">{Math.round(dietPlan.calories * (dietPlan.macroSplit.carbs / 100) / 4)}g</span> ({dietPlan.macroSplit.carbs}%)</p>
                    <p>Fats: <span className="font-bold">{Math.round(dietPlan.calories * (dietPlan.macroSplit.fats / 100) / 9)}g</span> ({dietPlan.macroSplit.fats}%)</p>
                    <p className="mt-2">Meal Timing: {dietPlan.mealTiming}</p>
                  </div>
                </div>

                {/* Recommendations and Foods */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-300 mb-3">Key Recommendations</h3>
                    <ul className="space-y-3">
                      {dietPlan.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-yellow-300 mb-3">Sample Meal Plan</h3>
                    <div className="space-y-2">
                      {Object.entries(dietPlan.foods).map(([meal, items]) => (
                        <div key={meal}>
                          <p className="font-semibold capitalize">{meal}:</p>
                          <ul className="ml-4 list-disc text-gray-300">
                            {items.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-yellow-300 mb-3">Recommended Supplements</h3>
                    <ul className="ml-4 list-disc text-gray-300">
                      {dietPlan.supplements.map((supp, index) => (
                        <li key={index}>{supp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default NutritionPlannerApp;