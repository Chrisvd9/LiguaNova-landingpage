import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroParallax } from "../components/ui/HeroParallax";
import { Link, useLocation } from "wouter";
import { PlaceholdersAndVanishInput } from "../components/ui/SearchAnimation";
import PortfolioCard from "../components/common/PortfolioCard";

const categories = ["All", "React", "Astro", "Next.js"];
const itemsPerPage = 3;

const products = [
  {
    title: "Academia de Ciberseguridad Landing Page",
    link: "",
    thumbnail: "/portfolio/academiaciber.webp",
    category: "React",
    description:
      "Desarrollamos y diseñamos una landing page moderna y optimizada para la Academia de Ciberseguridad, enfocándonos en una experiencia de usuario fluida y una interfaz visualmente atractiva.",
    skills: ["React", "Vite", "Tailwind"],
  },
  {
    title: "BlackFreshRecords Landing Page",
    link: "https://www.blackfreshrecord.com/",
    thumbnail: "/portfolio/blackfreshrecord.webp",
    category: "Astro",
    description:
      "Creamos una landing page innovadora para BlackFreshRecords, con un diseño envolvente y underground que mejora la identidad de la marca en el mundo digital.",
    skills: ["Astro", "JS", "Tailwind"],
  },
  {
    title: "DATA-STRATEGY Landing Page",
    link: "https://www.data-strategy.ai/",
    thumbnail: "/portfolio/data-strategy-hero.webp",
    category: "Astro",
    description:
      "Diseñamos y desarrollamos la plataforma web para DATA-STRATEGY, asegurando una navegación eficiente y una estética profesional alineada con la visión de la empresa.",
    skills: ["Astro", "Tailwind", "Motion"],
  },
  {
    title: "GrowCloud Landing Page",
    link: "https://growcloud.cl/",
    thumbnail: "/portfolio/gc-hero.webp",
    category: "React",
    description:
      "Creamos la landing page de GrowCloud utilizando React y Tailwind, integrando animaciones avanzadas con GSAP y AOS para ofrecer una experiencia interactiva y envolvente.",
    skills: ["React", "Gsap", "Tailwind"],
  },
  {
    title: "Lizilib Landing Page",
    link: "https://www.lizilib.com/",
    thumbnail: "/portfolio/landing-lizilib-hero.webp",
    category: "React",
    description:
      "Diseñamos y desarrollamos la landing page de Lizilib, optimizando su interfaz y experiencia de usuario con un enfoque moderno y atractivo.",
    skills: ["React", "Tailwind", "AOS"],
  },
  {
    title: "Educational Landing Page",
    link: "https://landing-n2.vercel.app/",
    thumbnail: "/portfolio/landing-n2-hero.webp",
    category: "React",
    description:
      "Creamos una landing page educativa interactiva, combinando React con Tailwind y animaciones de Framer Motion para brindar una experiencia visual atractiva.",
    skills: ["React", "Motion", "Tailwind"],
  },
];

const placeholders = ["DATA-STRATEGY", "Lizilib", "Educational", "GrowCloud"];

const Works = () => {
  const [location, setLocation] = useLocation();
  const parts = location.split("/");
  let currentCategory = parts[2] || "all";
  let page = parseInt(parts[3], 10) || 1;

  currentCategory =
    currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);

  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => setInputValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    setLocation(`/works/${currentCategory.toLowerCase()}/1`);
  };

  let filteredProducts = products.filter(
    (product) =>
      (currentCategory === "All" || product.category === currentCategory) &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handleCategoryChange = (category) => {
    setSearchTerm("");
    setInputValue("");
    setLocation(`/works/${category.toLowerCase()}/1`);
  };

  return (
    <>
      <HeroParallax products={products} />

      <section className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8">Nuestros trabajos</h1>

        <div className="grid gap-4 lg:flex lg:justify-between w-full">
          <div className="grid grid-cols-2 gap-4 lg:flex space-x-4 mb-6 bg-dark px-4 py-4 lg:py-2 rounded-3xl w-full">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-3xl transition-all duration-500 cursor-pointer ${
                  currentCategory === category
                    ? "bg-secondary text-dark"
                    : "bg-gray-200 text-dark hover:bg-[#21ffdd]"
                }`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentCategory}-page-${page}-${searchTerm}`}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {!displayedProducts.length ? (
              <h2 className="text-2xl text-gray-300">No results found</h2>
            ) : (
              displayedProducts.map((product, index) => (
                <PortfolioCard
                  key={index}
                  title={product.title}
                  description={product.description}
                  live={product.link}
                  image={product.thumbnail}
                  skills={product.skills}
                />
              ))
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center space-x-4 mt-6">
          {page > 1 && (
            <Link href={`/works/${currentCategory.toLowerCase()}/${page - 1}`}>
              <button
                aria-label="Previous Page"
                className="px-4 py-2 rounded-xl bg-gray-300 cursor-pointer transition-all duration-500 text-gray-800 hover:bg-[#21ffdd]"
              >
                {"<"}
              </button>
            </Link>
          )}
          {[...Array(totalPages)].map((_, index) => (
            <Link
              key={index}
              href={`/works/${currentCategory.toLowerCase()}/${index + 1}`}
            >
              <button
                aria-label={`Page ${index + 1}`}
                className={`px-4 py-2 rounded-xl ${
                  page === index + 1
                    ? "bg-secondary text-dark"
                    : "bg-gray-300 cursor-pointer transition-all duration-500 text-gray-800 hover:bg-[#21ffdd]"
                }`}
              >
                {index + 1}
              </button>
            </Link>
          ))}
          {page < totalPages && (
            <Link href={`/works/${currentCategory.toLowerCase()}/${page + 1}`}>
              <button
                aria-label="Next Page"
                className="px-4 py-2 rounded-xl bg-gray-300 cursor-pointer transition-all duration-500 text-gray-800 hover:bg-[#21ffdd]"
              >
                {">"}
              </button>
            </Link>
          )}
        </div>
      </section>
    </>
  );
};

export default Works;
