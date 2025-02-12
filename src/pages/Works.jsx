import { lazy, Suspense, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroParallax } from "../components/ui/HeroParallax";
import { Link, useLocation } from "wouter";
import { PlaceholdersAndVanishInput } from "../components/ui/SearchAnimation";

const PortfolioCard = lazy(() => import("../components/common/PortfolioCard"));

const categories = ["All", "React", "Astro", "Next.js"];
const itemsPerPage = 3;

const products = [
  {
    id: 1,
    title: "Academia de Ciberseguridad Landing Page",
    link: "",
    thumbnail: "/portfolio/academiaciber.webp",
    category: "React",
    description:
      "Desarrollamos una landing page moderna y optimizada para la Academia de Ciberseguridad, con un diseño atractivo y experiencia de usuario intuitiva.",
    skills: ["React", "Vite", "Tailwind"],
  },
  {
    id: 2,
    title: "BlackFreshRecords Landing Page",
    link: "https://www.blackfreshrecord.com/",
    thumbnail: "/portfolio/blackfreshrecord.webp",
    category: "Astro",
    description:
      "Creamos una landing page innovadora para BlackFreshRecords, con una identidad visual impactante y navegación optimizada.",
    skills: ["Astro", "JS", "Tailwind"],
  },
  {
    id: 3,
    title: "DATA-STRATEGY Landing Page",
    link: "https://www.data-strategy.ai/",
    thumbnail: "/portfolio/data-strategy-hero.webp",
    category: "Astro",
    description:
      "Diseñamos la plataforma web para DATA-STRATEGY, garantizando una experiencia fluida y alineada con su visión digital.",
    skills: ["Astro", "Tailwind", "Motion"],
  },
  {
    id: 4,
    title: "Izied Landing Page",
    link: "https://www.izied.com/",
    thumbnail: "/portfolio/Izied.webp",
    category: "React",
    description:
      "Migramos Izied de wordpress a una página web moderna y optimizada, asegurando un diseño atractivo, funcional y rápido. Quitando el peso de wordpress y mejorando la experiencia de usuario.",
    skills: ["React", "Aos", "Tailwind"],
  },
  {
    id: 5,
    title: "GrowCloud Landing Page",
    link: "https://growcloud.cl/",
    thumbnail: "/portfolio/gc-hero.webp",
    category: "React",
    description:
      "Desarrollamos la landing page de GrowCloud con animaciones avanzadas en GSAP y AOS, asegurando interactividad y optimización SEO.",
    skills: ["React", "Gsap", "Tailwind"],
  },
  {
    id: 6,
    title: "Lizilib Landing Page",
    link: "https://www.lizilib.com/",
    thumbnail: "/portfolio/landing-lizilib-hero.webp",
    category: "React",
    description:
      "Creamos la web de Lizilib con un diseño moderno, estructura SEO optimizada y una experiencia de usuario intuitiva.",
    skills: ["React", "Tailwind", "AOS"],
  },
  {
    id: 7,
    title: "Educational Landing Page",
    link: "https://landing-n2.vercel.app/",
    thumbnail: "/portfolio/landing-n2-hero.webp",
    category: "React",
    description:
      "Landing page educativa interactiva con animaciones de Framer Motion, asegurando una experiencia visual atractiva.",
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
      <>
        <title>Nuestros Trabajos | LiguaNova</title>
        <meta
          name="description"
          content="Explora nuestros proyectos de diseño web, branding y marketing digital. LiguaNova transforma ideas en experiencias digitales únicas."
        />
        <meta
          name="keywords"
          content="diseño web, desarrollo, marketing, branding, UI/UX, SEO"
        />
        <meta property="og:title" content="Nuestros Trabajos | LiguaNova" />
        <meta
          property="og:description"
          content="Descubre cómo potenciamos marcas con soluciones digitales impactantes y efectivas."
        />
        <meta property="og:image" content="/logos/logo-02-white.svg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </>

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
              <h2 className="text-2xl text-gray-300">
                No se encontraron resultados
              </h2>
            ) : (
              displayedProducts.map(
                ({ id, title, description, link, thumbnail, skills }) => (
                  <Suspense fallback={<div>Cargando...</div>} key={title}>
                    <PortfolioCard
                      key={id}
                      title={title}
                      description={description}
                      live={link}
                      image={thumbnail}
                      skills={skills}
                    />{" "}
                  </Suspense>
                )
              )
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center space-x-4 mt-6">
          {page > 1 && (
            <Link href={`/works/${currentCategory.toLowerCase()}/${page - 1}`}>
              <button
                aria-label="Página anterior"
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
                aria-label={`Página ${index + 1}`}
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
        </div>
      </section>
    </>
  );
};

export default Works;
