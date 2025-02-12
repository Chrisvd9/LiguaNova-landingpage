import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4",
        className
      )}
      role="list"
      aria-label="Hover Effect Grid"
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          role="listitem"
          aria-labelledby={`card-title-${idx}`}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-secondary rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
                aria-hidden="true"
              />
            )}
          </AnimatePresence>
          <Card>
            <CardICon>{item.icon}</CardICon>
            <CardTitle id={`card-title-${idx}`}>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

HoverEffect.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-3xl text-left h-full w-full p-4 overflow-hidden bg-[#202020] border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const CardICon = ({ className, children }) => {
  return (
    <div
      className={cn("text-secondary flex w-20 flex-col rounded-3xl", className)}
      aria-hidden="true"
    >
      {children}
    </div>
  );
};

CardICon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const CardTitle = ({ className, children, id }) => {
  return (
    <h4
      id={id}
      className={cn(
        "text-zinc-100 font-bold tracking-wide mt-4 text-xl",
        className
      )}
    >
      {children}
    </h4>
  );
};

CardTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn("mt-4 tracking-wide leading-relaxed text-base", className)}
    >
      {children}
    </p>
  );
};

CardDescription.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
