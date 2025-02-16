import React from "react";
import { HoverEffect } from "../components/ui/CardHover";
import {
  FaLaptopCode,
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
          "Landing page optimizada con React/Astro + SEO básico + soporte para dominio y hosting.",
        icon: (
          <FaLaptopCode
            className="size-12"
            aria-hidden="true"
            title="Desarrollo de Landing Pages"
          />
        ),
      },
      {
        title: "Pack Web Empresarial",
        description:
          "Sitio web profesional con hasta 5 páginas + SEO optimizado + integración con formularios y contacto.",
        icon: (
          <FaGlobe
            className="size-12"
            aria-hidden="true"
            title="Desarrollo de sitios empresariales"
          />
        ),
      },
      {
        title: "Pack Web Avanzado",
        description:
          "Sitio web escalable con SEO avanzado + integración con APIs y bases de datos + optimización de rendimiento.",
        icon: (
          <FaBox
            className="size-12"
            aria-hidden="true"
            title="Desarrollo web avanzado con optimización"
          />
        ),
      },
    ],

    "Servicios Adicionales": [
      {
        title: "Hosting y Deploy",
        description:
          "Alojamos y desplegamos tu sitio en servidores optimizados con opciones como Vercel, Onrender o AWS.",
        icon: (
          <FaServer
            className="size-12"
            aria-hidden="true"
            title="Hosting y despliegue web"
          />
        ),
      },
      {
        title: "Integraciones y APIs",
        description:
          "Conectamos tu sitio con APIs, bases de datos y herramientas externas para mayor funcionalidad.",
        icon: (
          <IoMdGlobe
            className="size-12"
            aria-hidden="true"
            title="Integraciones y desarrollo de APIs"
          />
        ),
      },
      {
        title: "Soporte y Mantenimiento Web",
        description:
          "Actualizaciones, corrección de errores y mejoras continuas para mantener tu sitio siempre optimizado.",
        icon: (
          <FaHeadset
            className="size-12"
            aria-hidden="true"
            title="Soporte y mantenimiento web"
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
