import { cn } from "../../utils/cn";
import { motion, useScroll, useSpring } from "motion/react";
import React from "react";

export const ScrollProgress = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 50,
      restDelta: 0.001,
    });

    return (
      <motion.div
        ref={ref}
        className={cn(
          "fixed inset-x-0 top-0 z-[1000] h-1 origin-left bg-gradient-to-r from-[#141414] via-[#242424] to-[#21ffdd]",
          className
        )}
        style={{
          scaleX,
        }}
        {...props}
      />
    );
  }
);

ScrollProgress.displayName = "ScrollProgress";
