import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";

const PageFrame = ({ children }) => (
  <motion.main
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.25 }}
  >
    {children}
  </motion.main>
);

const AppRoutes = () => {
  const location = useLocation();
  

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageFrame>
              <Home />
            </PageFrame>
          }
        />
        <Route
          path="/courses"
          element={
            <PageFrame>
              <Courses />
            </PageFrame>
          }
        />
        <Route
          path="/course/:id"
          element={
            <PageFrame>
              <CourseDetails />
            </PageFrame>
          }
        />
        <Route
          path="/about"
          element={
            <PageFrame>
              <About />
            </PageFrame>
          }
        />
        <Route
          path="/contact"
          element={
            <PageFrame>
              <Contact />
            </PageFrame>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-[#050816] font-body text-slate-100">
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
      <WhatsAppButton />
    </div>
  </BrowserRouter>
);

export default App;
