import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Sidebar } from "./Sidebar";
import { motion } from "framer-motion";
import { MdMenu } from "react-icons/md";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/works", label: "Trabajos" },
  { href: "/services", label: "Servicios" },
  { href: "/quote", label: "Solicitar Presupuesto" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 z-50 left-0 w-full bg-transparent backdrop-blur-lg transition-all duration-500 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link to="/">
            <img src="/logos/monologo-02.svg" alt="icono" className="size-8" />
          </Link>

          <nav className="hidden z-50 md:flex items-center gap-6 uppercase">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:underline decoration-[#21ffdd] decoration-2 transition-all duration-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden flex items-center"
            onClick={() => setIsSidebarOpen(true)}
          >
            <MdMenu className="size-6" />
          </button>
        </div>
      </motion.header>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Header;
