import { Route, Switch, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./layouts/Layout";
import HeroSection from "./pages/HeroSection";
import About from "./pages/About";
import Works from "./pages/Works";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { Toaster } from "sonner";
import ScrollToTop from "./hooks/ScrollToTop";
import { Helmet, HelmetProvider } from "react-helmet-async";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const App = () => {
  const [location] = useLocation();

  return (
    <HelmetProvider>
      <Helmet>
        <title>LiguaNova | Digital Design & Marketing</title>
        <meta
          name="description"
          content="We create visually stunning and functional design solutions to help brands grow."
        />
        <meta
          name="keywords"
          content="web design, marketing, UI/UX, branding, SEO"
        />
        <meta
          property="og:title"
          content="LiguaNova | Digital Design & Marketing"
        />
        <meta
          property="og:description"
          content="Boost your brand with expert web design and marketing strategies."
        />
        <meta property="og:image" content="/logos/logo-02-white.svg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

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
              <Route path="/works/:category/:page" component={Works} />
              <Route path="/works" component={Works} />
              <Route path="/contact" component={Contact} />
              <Route path="/quote" component={Quote} />
              <Route component={NotFound} />
            </Switch>
          </motion.div>
        </AnimatePresence>
        <Toaster closeButton position="top-center" />
      </Layout>
    </HelmetProvider>
  );
};

export default App;
