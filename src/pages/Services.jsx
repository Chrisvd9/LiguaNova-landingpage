import React from "react";
import { HoverEffect } from "../components/ui/CardHover";
import {
  FaLaptopCode,
  FaPalette,
  FaBullhorn,
  FaServer,
  FaHeadset,
  FaBox,
  FaGlobe,
} from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";

const Services = () => {
  const packs = {
    "Packs Completos": [
      {
        title: "Pack Landing Page",
        description:
          "Landing page con React/Astro + SEO y diseño gráfico (logo + paleta de colores) + ayuda con dominio y hosting.",
        icon: (
          <FaLaptopCode
            className="size-12"
            aria-hidden="true"
            title="Desarrollo de Landing Pages"
          />
        ),
      },
      {
        title: "Pack Web Completa",
        description:
          "Sitio web con hasta 5 páginas + SEO avanzado y marketing básico + ayuda con dominio y hosting.",
        icon: (
          <FaGlobe
            className="size-12"
            aria-hidden="true"
            title="Desarrollo de sitios completos"
          />
        ),
      },
      {
        title: "Pack Premium",
        description:
          "Sitio premium con SEO avanzado, branding y publicidad digital + ayuda con dominio y hosting.",
        icon: (
          <FaBox
            className="size-12"
            aria-hidden="true"
            title="Sitios premium con estrategias avanzadas"
          />
        ),
      },
    ],
    "Packs Exclusivos": [
      {
        title: "Pack Desarrollo Web",
        description:
          "Solo desarrollo web sin marketing ni diseño adicional. Opciones desde landing pages hasta sitios completos.",
        icon: (
          <FaLaptopCode
            className="size-12"
            aria-hidden="true"
            title="Desarrollo web a medida"
          />
        ),
      },
      {
        title: "Pack Diseño Gráfico",
        description:
          "Diseño de branding, logotipos, banners y material gráfico profesional para tu empresa o proyecto.",
        icon: (
          <FaPalette
            className="size-12"
            aria-hidden="true"
            title="Diseño gráfico y branding"
          />
        ),
      },
      {
        title: "Pack Marketing Digital",
        description:
          "SEO avanzado, gestión de redes sociales y estrategias de publicidad digital.",
        icon: (
          <FaBullhorn
            className="size-12"
            aria-hidden="true"
            title="Marketing y optimización digital"
          />
        ),
      },
    ],
    "Servicios Adicionales": [
      {
        title: "Hosting y Servidores",
        description:
          "Alojamos tu sitio en servidores optimizados y seguros con Supabase, garantizando alta disponibilidad.",
        icon: (
          <FaServer
            className="size-12"
            aria-hidden="true"
            title="Hosting y administración de servidores"
          />
        ),
      },
      {
        title: "Consultoría en Digitalización",
        description:
          "Ayudamos a empresas a mejorar su presencia digital, optimizar su marca y aumentar su conversión.",
        icon: (
          <IoMdGlobe
            className="size-12"
            aria-hidden="true"
            title="Estrategias de digitalización"
          />
        ),
      },
      {
        title: "Soporte y Mantenimiento",
        description:
          "Brindamos soporte técnico y mantenimiento continuo para actualizaciones y cambios en tu sitio web.",
        icon: (
          <FaHeadset
            className="size-12"
            aria-hidden="true"
            title="Soporte y mantenimiento técnico"
          />
        ),
      },
    ],
  };

  return (
    <>
      <>
        <title>Servicios | LiguaNova</title>
        <meta
          name="description"
          content="Descubre nuestros servicios de desarrollo web, diseño gráfico y marketing digital. Soluciones personalizadas para impulsar tu negocio."
        />
        <meta
          name="keywords"
          content="desarrollo web, diseño gráfico, SEO, marketing digital, hosting, branding"
        />
        <meta property="og:title" content="Servicios | LiguaNova" />
        <meta
          property="og:description"
          content="Explora nuestros servicios de desarrollo web, branding y marketing digital. Potenciamos tu negocio con soluciones innovadoras."
        />
        <meta property="og:image" content="/logos/logo-02-white.svg" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </>

      <section
        className="max-w-7xl mx-auto mt-32 px-4 flex flex-col justify-center"
        aria-labelledby="services-heading"
      >
        <header className="grid gap-2">
          <h1 id="services-heading" className="text-4xl lg:text-7xl uppercase">
            NUESTROS <span className="bg-secondary text-black">SERVICIOS</span>
          </h1>
          <img
            src="./assets/subliner.svg"
            alt="Decoración de título"
            className="hidden lg:block absolute right-12 top-32 -z-10"
            loading="lazy"
          />
          <p className="text-gray-300 mt-4 text-xl">
            Ofrecemos soluciones completas en desarrollo web, diseño gráfico,
            marketing digital y más.
          </p>
        </header>

        {Object.entries(packs).map(([category, items]) => (
          <section key={category} className="mt-32" aria-labelledby={category}>
            <h2 id={category} className="text-3xl lg:text-6xl mb-6 text-center">
              {category}
            </h2>
            <HoverEffect items={items} />
          </section>
        ))}
      </section>
    </>
  );
};

export default Services;
