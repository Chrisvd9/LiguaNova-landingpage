import { Route, Switch, useLocation } from "wouter";
import { lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./layouts/Layout";
import { Toaster } from "sonner";
import ScrollToTop from "./hooks/ScrollToTop";
import Loader from "./components/ui/LoaderAnimation";

const HeroSection = lazy(() => import("./pages/HeroSection"));
const About = lazy(() => import("./pages/About"));
const Works = lazy(() => import("./pages/Works"));
const Services = lazy(() => import("./pages/Services"));
const Quote = lazy(() => import("./pages/Quote"));
const NotFound = lazy(() => import("./pages/NotFound"));

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const App = () => {
  const [location] = useLocation();

  return (
    <>
      <>
        <title>LiguaNova | Digital Design & Marketing</title>
        <meta
          name="description"
          content="Creamos soluciones de diseño visualmente impactantes y funcionales para ayudar a las marcas a crecer."
        />
        <meta
          name="keywords"
          content="diseño web, marketing, UI/UX, branding, SEO"
        />
        <meta
          property="og:title"
          content="LiguaNova | Digital Design & Marketing"
        />
        <meta
          property="og:description"
          content="Impulsa tu marca con estrategias de diseño web y marketing profesional."
        />
        <meta property="og:image" content="/logos/logo-02-white.svg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </>

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
            <Suspense fallback={<Loader />}>
              <Switch location={location}>
                <Route path="/" component={HeroSection} />
                <Route path="/about" component={About} />
                <Route path="/works/:category/:page" component={Works} />
                <Route path="/works" component={Works} />
                <Route path="/services" component={Services} />
                <Route path="/quote" component={Quote} />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </motion.div>
        </AnimatePresence>
        <Toaster closeButton position="top-center" />
      </Layout>
    </>
  );
};

export default App;
