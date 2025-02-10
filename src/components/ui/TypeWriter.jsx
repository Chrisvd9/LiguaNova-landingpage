import { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

export function Typewriter({ delay = 0.5, baseText = "" }) {
  const [animationComplete, setAnimationComplete] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay,
      duration: 2,
      ease: "easeInOut",
      onComplete: () => setAnimationComplete(true),
    });
    return () => controls.stop && controls.stop();
  }, [count, baseText.length, delay]);

  return (
    <span className="font-aileron-italic">
      <motion.span>{displayText}</motion.span>
      <BlinkingCursor animationComplete={animationComplete} />
    </span>
  );
}

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
};

function BlinkingCursor({ animationComplete }) {
  return (
    <motion.span
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-8 lg:h-18 w-[2px] bg-secondary ml-1"
    />
  );
}
