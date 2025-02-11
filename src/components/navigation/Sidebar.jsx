import { motion } from "framer-motion";
import { Link } from "wouter";
import LanguageToggle from "../common/LangToggle";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Get a Quote" },
];

export const Sidebar = ({ isOpen, onClose }) => {
  return (
    <motion.div
      className={`fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-md z-50 transition-opacity ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <motion.div
        className="w-64 h-full bg-[#242424] backdrop-blur-lg flex flex-col gap-6 p-6 absolute left-0 top-0"
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="self-end text-lg" onClick={onClose}>
          ✕
        </button>

        <nav className="flex flex-col gap-4 text-lg">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:underline decoration-[#21ffdd] decoration-2 transition-all duration-500"
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
          <LanguageToggle />
        </nav>
      </motion.div>
    </motion.div>
  );
};
