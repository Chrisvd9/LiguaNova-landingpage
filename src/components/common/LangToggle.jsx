import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LanguageToggle = () => {
  const [isSpanish, setIsSpanish] = useState(false);

  return (
    <div
      className="cursor-pointer text-base font-bold flex items-center justify-center"
      onClick={() => setIsSpanish(!isSpanish)}
    >
      <AnimatePresence mode="wait">
        {isSpanish ? (
          <motion.span
            key="es"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            ES
          </motion.span>
        ) : (
          <motion.span
            key="en"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            EN
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageToggle;
