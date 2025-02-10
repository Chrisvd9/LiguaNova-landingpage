import { Route, Switch, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./layouts/Layout";
import HeroSection from "./pages/HeroSection";
import About from "./pages/About";
import Works from "./pages/Works";
import NotFound from "./pages/NotFound";
import { Toaster } from "sonner";
import ScrollToTop from "./hooks/ScrollToTop";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const App = () => {
  const [location] = useLocation();

  return (
    <Layout>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.div
          key={location}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
        >
          <Switch location={location}>
            <Route path="/" component={HeroSection} />
            <Route path="/about" component={About} />
            
            <Route path="/works/:page?">
              {({ page }) => <Works page={parseInt(page, 10) || 1} />}
            </Route>
            
            <Route component={NotFound} />
          </Switch>
        </motion.div>
      </AnimatePresence>
      <Toaster closeButton position="top-center" />
    </Layout>
  );
};

export default App;
