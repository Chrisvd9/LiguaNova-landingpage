import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroParallax } from "../components/ui/HeroParallax";
import { Link, useLocation } from "wouter";

const categories = ["All", "React", "Astro", "Next.js"];
const itemsPerPage = 3;

const products = [
  { title: "Moonbeam", link: "https://gomoonbeam.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png", category: "React" },
  { title: "Cursor", link: "https://cursor.so", thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png", category: "Astro" },
  { title: "Rogue", link: "https://userogue.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png", category: "Next.js" },
  { title: "Editorially", link: "https://editorially.org", thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png", category: "React" },
  { title: "Editrix AI", link: "https://editrix.ai", thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png", category: "Astro" },
  { title: "Pixel Perfect", link: "https://app.pixelperfect.quest", thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png", category: "Next.js" },
  { title: "Algochurn", link: "https://algochurn.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/algochurn.png", category: "React" },
  { title: "Aceternity UI", link: "https://ui.aceternity.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png", category: "Astro" },
  { title: "Tailwind Master Kit", link: "https://tailwindmasterkit.com", thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png", category: "Next.js" },
];

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [location] = useLocation();
  const page = parseInt(location.split("/").pop(), 10) || 1;

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <>
      <HeroParallax products={products} />

      <section className="max-w-7xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-8">My Works</h1>
        
        <div className="flex space-x-4 mb-6">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg transition-all ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-page-${page}`}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayedProducts.map((product, index) => (
              <a
                href={product.link}
                key={index}
                className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative aspect-video">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                </div>
              </a>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center space-x-4 mt-6">
          {[...Array(totalPages)].map((_, index) => (
            <Link key={index} href={`/works/${index + 1}`}>
              <button className={`px-3 py-2 rounded-lg ${page === index + 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}>{index + 1}</button>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Works;
