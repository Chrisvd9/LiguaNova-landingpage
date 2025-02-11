import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { HeroParallax } from "../components/ui/HeroParallax";
import { Link, useLocation } from "wouter";
import { PlaceholdersAndVanishInput } from "../components/ui/SearchAnimation";

const categories = ["All", "React", "Astro", "Next.js"];
const itemsPerPage = 6;

const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
    category: "React",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/cursor.png",
    category: "Astro",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/rogue.png",
    category: "Next.js",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editorially.png",
    category: "React",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/editrix.png",
    category: "Astro",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
    category: "Next.js",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
    category: "React",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
    category: "Astro",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
    category: "Next.js",
  },
];

const placeholders = [
  "Search Moonbeam",
  "Search Cursor",
  "Search Rogue",
  "Search Editorially",
  "Search Tailwind Master Kit",
];

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
      <Helmet>
        <title>Our Work | LiguaNova</title>
        <meta
          name="description"
          content="Explore our featured projects where we combine modern web technologies with creative design solutions to build engaging user experiences."
        />
        <meta
          name="keywords"
          content="web development, design, branding, UI/UX, marketing"
        />
        <meta property="og:title" content="Our Work | LiguaNova" />
        <meta
          property="og:description"
          content="Check out our top projects in React, Astro, and Next.js."
        />
        <meta
          property="og:image"
          content="https://aceternity.com/images/products/thumbnails/new/moonbeam.png"
        />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <HeroParallax products={products} />

      <section className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8">Our Work</h1>

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
            {displayedProducts.map((product, index) => (
              <a
                href={product.link}
                key={index}
                className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative aspect-video">
                  <img
                    src={product.thumbnail}
                    alt={`${product.title} preview`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold group-hover:text-[#21ffdd] transition-all duration-500">
                    {product.title}
                  </h3>
                </div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center space-x-4 mt-6">
          {page > 1 && (
            <Link href={`/works/${currentCategory.toLowerCase()}/${page - 1}`}>
              <button
                aria-label="Previous Page"
                className="px-4 py-2 rounded-xl bg-gray-300 text-gray-800 hover:bg-[#21ffdd]"
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
                    : "bg-gray-300 text-gray-800 hover:bg-[#21ffdd]"
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
                className="px-4 py-2 rounded-xl bg-gray-300 text-gray-800 hover:bg-[#21ffdd]"
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
