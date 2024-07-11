import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import "./styles/reset.css";
import History from "./pages/History";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import BuyBook from "./pages/BuyBook";
import News from "./pages/News";
import Order from "./pages/Order";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100vw",
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                style={{ width: "100%" }} // Ensure the motion div respects child width
              >
                <Home />
              </motion.div>
            }
          />
          <Route
            path="geschiedenis"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                style={{ width: "100%" }} // Ensure the motion div respects child width
              >
                <History />
              </motion.div>
            }
          />
          <Route
            path="virtueel-museum"
            element={<Gallery />}
          />
          <Route
            path="nieuws"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                style={{ width: "100%" }} // Ensure the motion div respects child width
              >
                <News />
              </motion.div>
            }
          />
          <Route
            path="over"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                style={{ width: "100%" }} // Ensure the motion div respects child width
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="contact"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                style={{ width: "100%" }} // Ensure the motion div respects child width
              >
                <Contact />
              </motion.div>
            }
          />
          <Route
            path="boek"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                style={{ width: "100%" }} // Ensure the motion div respects child width
              >
                <BuyBook />
              </motion.div>
            }
          />
          <Route
            path="bestellen/:type"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                style={{ width: "100%" }} // Ensure the motion div respects child width
              >
                <Order />
              </motion.div>
            }
          />
          <Route
            path="*"
            element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
                style={{ width: "100%" }} // Ensure the motion div respects child width
              >
                <h1>404 Not Found</h1>
              </motion.div>
            }
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter basename="/website-randy">
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
