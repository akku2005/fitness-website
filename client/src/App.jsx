import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/common/Loader";

// Lazy load all components, including the new Footer
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/About"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const Navbar = lazy(() => import("./components/common/Navbar"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const WorkoutPage = lazy(() => import("./pages/WorkoutPage"));
const DietPage = lazy(() => import("./pages/DietPage"));
const MentalHealthPage = lazy(() => import("./pages/MentalHealthPage"));
const JoinPage = lazy(() => import("./pages/JoinPage"));
const Footer = lazy(() => import("./components/common/Footer")); // Lazy load the Footer

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/workouts" element={<WorkoutPage />} />
            <Route path="/diet-plans" element={<DietPage />} />
            <Route path="/mental-health" element={<MentalHealthPage />} />
            <Route path="/join" element={<JoinPage />} />
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;