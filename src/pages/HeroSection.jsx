import { lazy, Suspense } from "react";
import { Typewriter } from "../components/ui/TypeWriter";
import { VelocityScroll } from "../components/ui/VelocitySroll";
import { ShootingStars } from "../components/ui/ShootingStars";
import { StarsBackground } from "../components/ui/StarsBackground";
import { InteractiveHoverButton } from "../components/ui/InteractiveHoverButton";
import { Link } from "wouter";
import { SparklesText } from "../components/ui/Sparkles";
import { AnimatedTeam } from "../components/ui/Team";
import { MarqueeDemo } from "../components/common/Testimonials";
import { Lamp } from "../components/ui/Lamp";
import PulsatingButton from "../components/ui/PulsatingButton";

const Card = lazy(() => import("../components/common/Card"));
const FAQ = lazy(() => import("../components/common/FAQ"));
const ContactForm = lazy(() => import("../components/common/ContactForm"));

const team = [
  {
    description:
      "Soy desarrollador frontend, diseñador UI/UX y especialista en ciberseguridad, apasionado por crear soluciones visualmente impactantes y funcionales.",
    name: "Christian",
    designation:
      "Frontend Developer, UI/UX Designer & Cybersecurity Specialist",
    src: "/assets/hero/me.webp",
  },
  {
    description: "PRÓXIMAMENTE ...",
    name: "PRÓXIMAMENTE",
    designation: "PRÓXIMAMENTE ...",
    src: "./assets/hero/incognite.webp",
  },
  {
    description: "PRÓXIMAMENTE ...",
    name: "PRÓXIMAMENTE",
    designation: "PRÓXIMAMENTE ...",
    src: "/assets/hero/incognite.webp",
  },
];

const jobs = [
  {
    title: "Academia de Ciberseguridad Landing Page",
    link: "",
    image: "/portfolio/academiaciber.webp",
    category: "React",
    description:
      "Creamos una landing page optimizada para la Academia de Ciberseguridad, con diseño atractivo y estructura enfocada en la conversión.",
    year: "2025",
  },
  {
    title: "BlackFreshRecords Landing Page",
    link: "https://www.blackfreshrecord.com/",
    image: "/portfolio/blackfreshrecord.webp",
    category: "Astro",
    description:
      "Desarrollamos una web moderna para BlackFreshRecords, destacando la identidad de la marca con una navegación fluida.",
    year: "2025",
  },
  {
    title: "DATA-STRATEGY Landing Page",
    link: "https://www.data-strategy.ai/",
    image: "/portfolio/data-strategy-hero.webp",
    category: "Astro",
    description:
      "Diseñamos una plataforma escalable para DATA-STRATEGY, asegurando una interfaz intuitiva y una experiencia óptima.",
    year: "2024",
  },
  {
    title: "GrowCloud Landing Page",
    link: "https://growcloud.cl/",
    image: "/portfolio/gc-hero.webp",
    category: "React",
    description:
      "Desarrollamos la web de GrowCloud con animaciones avanzadas y una estructura optimizada para SEO y velocidad.",
    year: "2023",
  },
];

const HeroSection = () => {
  return (
    <>
      <>
        <title>Bienvenido a LiguaNova | Diseño Digital & Marketing</title>
        <meta
          name="description"
          content="Creamos soluciones de diseño visualmente impactantes y funcionales para impulsar marcas. Descubre nuestros servicios y proyectos."
        />
        <meta
          name="keywords"
          content="diseño, marketing, desarrollo web, branding, UI/UX, SEO"
        />
        <meta
          property="og:title"
          content="LiguaNova | Diseño Digital & Marketing"
        />
        <meta
          property="og:description"
          content="Destaca con nuestro equipo experto en diseño web, marketing y branding. Transformamos ideas en experiencias digitales efectivas."
        />
        <meta property="og:image" content="/logos/logo-02-white.svg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </>

      <section className="px-4 max-w-7xl mx-auto grid place-items-center gap-8 lg:gap-0 lg:flex lg:justify-between w-full mt-36">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h1 className="text-white text-center lg:text-start text-5xl md:text-7xl lg:text-8xl font-medium leading-tight">
            HOLA, SOMOS
            <br />
            <Typewriter baseText="LiguaNova" delay={0.5} />
          </h1>

          <div>
            <PulsatingButton pulseColor="#00bdff" duration="2s" href="#contact">
              Comenzar ahora
            </PulsatingButton>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/logos/logo-02-white.svg"
            alt="Logo de LiguaNova"
            className="relative -inset-x-10 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px]"
            loading="lazy"
          />
        </div>
      </section>

      <section className="mt-32 z-10">
        <VelocityScroll className="bg-secondary" />
      </section>

      <section className="px-4 mt-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-4">
          <div>
            <h1 className="text-4xl lg:text-6xl uppercase">
              Trabajo Seleccionado.
            </h1>
            <p className="text-gray-300 mt-4 text-lg">
              Explora algunos de nuestros proyectos destacados, donde combinamos
              tecnologías modernas con diseño creativo para ofrecer experiencias
              impactantes.
            </p>
          </div>

          {jobs.slice(0, 1).map((job) => (
            <Suspense fallback={<div>Cargando...</div>} key={job.title}>
              <div className="lg:row-span-2 lg:col-start-1 lg:row-start-2">
                <Card {...job} />
              </div>
            </Suspense>
          ))}

          {jobs.slice(1, 2).map((job) => (
            <Suspense fallback={<div>Cargando...</div>} key={job.title}>
              <div className="lg:row-span-3 lg:col-start-2 lg:row-start-1">
                <Card {...job} />
              </div>
            </Suspense>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-4 mt-4">
          {jobs.slice(2, 4).map((job) => (
            <Suspense fallback={<div>Cargando...</div>} key={job.title}>
              <div>
                <Card {...job} />
              </div>
            </Suspense>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/works">
            <InteractiveHoverButton>Ver más</InteractiveHoverButton>
          </Link>
        </div>
      </section>

      <section className="px-4 mt-32 max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-6xl mb-6 uppercase">Nuestro Equipo</h2>
        <p className="text-3xl lg:text-4xl mb-6 max-w-2xl text-gray-300">
          Creemos en el poder del desarrollo web y la estrategia digital para
          impulsar marcas y hacer crecer negocios.
        </p>
        <AnimatedTeam team={team} />
      </section>

      <section className="px-4 mt-32 max-w-7xl mx-auto">
        <h2 className="text-5xl lg:text-6xl mb-6">Testimonios</h2>
        <p className="text-3xl lg:text-4xl mb-6 max-w-2xl text-gray-300">
          Lo que nuestros clientes dicen sobre nosotros.
        </p>
        <MarqueeDemo />
      </section>

      <FAQ />

      <section className="mt-32 max-w-7xl mx-auto rounded-3xl px-4">
        <div className="h-[40rem] w-full rounded-3xl flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Lamp />
          <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              ¿Quieres una página <br /> como esta?
            </h1>
            <p className="text-2xl lg:text-3xl mb-6 max-w-2xl text-gray-300 text-center mt-4 mx-auto">
              Contáctanos y hablemos sobre tu proyecto. Estamos aquí para
              ayudarte. No importa si es un pequeño negocio o una gran empresa,
              tenemos la solución perfecta para ti. No esperes más!
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 mt-32 bg-secondary text-dark py-20">
        <div className="max-w-7xl mx-auto grid place-items-center gap-8 lg:gap-0 lg:flex lg:justify-between lg:items-center w-full">
          <div>
            <h2 className="font-bold text-5xl lg:text-7xl leading-tight">
              <SparklesText text="TRABAJEMOS JUNTOS" />
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>

      <ShootingStars />
      <StarsBackground />
    </>
  );
};

export default HeroSection;
