import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaAws, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiAstro,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReactquery,
  SiMysql,
  SiMongodb,
  SiLinux,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { cn } from "../../utils/cn";

export const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const techIcons = [
  { icon: <FaReact /> },
  { icon: <FaAws /> },
  { icon: <SiTailwindcss /> },
  { icon: <SiAstro /> },
  { icon: <SiJavascript /> },
  { icon: <SiNextdotjs /> },
  { icon: <SiHtml5 /> },
  { icon: <SiPython /> },
  { icon: <SiCss3 /> },
  { icon: <SiReactquery /> },
  { icon: <SiMysql /> },
  { icon: <SiMongodb /> },
  { icon: <SiLinux /> },
  { icon: <SiGithub /> },
  { icon: <SiFigma /> },
];

function ParallaxText({ children, baseVelocity = 100, ...props }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [repetitions, setRepetitions] = useState(1);
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
        setRepetitions(newRepetitions);
      }
    };

    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [children]);

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden whitespace-nowrap"
      {...props}
    >
      <motion.div
        className="inline-flex gap-10 items-center text-dark text-6xl"
        style={{ x }}
      >
        {Array.from({ length: repetitions }).map((_, i) => (
          <span
            key={i}
            ref={i === 0 ? textRef : null}
            className="flex gap-10 items-center"
          >
            {children}{" "}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function VelocityScroll({
  defaultVelocity = 1,
  numRows = 2,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "relative w-full text-4xl font-bold tracking-[-0.02em] md:text-7xl md:leading-[5rem]",
        className
      )}
      {...props}
    >
      {Array.from({ length: numRows }).map((_, i) => (
        <ParallaxText
          key={i}
          baseVelocity={defaultVelocity * (i % 2 === 0 ? 1 : -1)}
        >
          {techIcons.map(({ icon, name }, index) => (
            <span key={index} className="flex items-center gap-2">
              {icon} {name}
            </span>
          ))}
        </ParallaxText>
      ))}
    </div>
  );
}
