import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/common/Loader";

// Lazy load all components
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
const Footer = lazy(() => import("./components/common/Footer"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// Create a Layout component that includes Navbar and Footer
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Routes with Layout (Navbar and Footer) */}
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <AboutPage />
              </Layout>
            }
          />
          <Route
            path="/pricing"
            element={
              <Layout>
                <PricingPage />
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout>
                <ServicePage />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <ContactPage />
              </Layout>
            }
          />
          <Route
            path="/register"
            element={
              <Layout>
                <RegisterPage />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <BlogPage />
              </Layout>
            }
          />
          <Route
            path="/workouts"
            element={
              <Layout>
                <WorkoutPage />
              </Layout>
            }
          />
          <Route
            path="/diet-plans"
            element={
              <Layout>
                <DietPage />
              </Layout>
            }
          />
          <Route
            path="/mental-health"
            element={
              <Layout>
                <MentalHealthPage />
              </Layout>
            }
          />
          <Route
            path="/join"
            element={
              <Layout>
                <JoinPage />
              </Layout>
            }
          />
          
          {/* NotFoundPage without Layout */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;