import React from "react";
import PropTypes from "prop-types";
import { Link } from "wouter";

const PulsatingButton = ({
  className = "",
  children,
  link = "#",
  href = "",
  pulseColor = "#0096ff",
  duration = "1.5s",
  ...props
}) => {
  const isExternal = Boolean(href);

  return (
    <button
      className={`relative mt-4 flex cursor-pointer items-center justify-center rounded-3xl bg-secondary text-black px-4 py-2 text-center ${className}`}
      style={{
        "--pulse-color": pulseColor,
        "--duration": duration,
      }}
      {...props}
      aria-label={isExternal ? "External Link" : "Internal Link"}
    >
      {isExternal ? (
        <a
          href={href}
          className="relative z-10"
          aria-label={`Navigate to ${href}`}
        >
          {children}
        </a>
      ) : (
        <Link
          to={link}
          className="relative z-10"
          aria-label={`Navigate to ${link}`}
        >
          {children}
        </Link>
      )}

      <div
        className="absolute left-1/2 top-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-3xl bg-inherit"
        aria-hidden="true"
      />
    </button>
  );
};

PulsatingButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  href: PropTypes.string,
  pulseColor: PropTypes.string,
  duration: PropTypes.string,
};

export default PulsatingButton;
