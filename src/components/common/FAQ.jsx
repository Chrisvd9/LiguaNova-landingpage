import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "¿Qué tecnologías utilizamos para el desarrollo web?",
    answer: `Trabajamos con tecnologías modernas como React, Astro, TailwindCSS y Vite, garantizando sitios web rápidos, 
      optimizados para SEO y con una experiencia de usuario fluida.`,
  },
  {
    question: "¿Por qué no usamos WordPress?",
    answer: `Evitamos WordPress porque puede ser menos seguro, menos escalable y más limitado en personalización. 
      Desarrollamos sitios desde cero para optimizar velocidad, seguridad y flexibilidad según las necesidades del cliente.`,
  },
  {
    question: "¿Qué incluye el soporte después de entregar el proyecto?",
    answer: `Ofrecemos distintos planes de soporte según las necesidades del cliente, desde pequeños ajustes hasta cambios 
      ilimitados por un periodo determinado. Esto garantiza que tu sitio web esté siempre actualizado y seguro.`,
  },
  {
    question: "¿Ayudan con la compra de dominio y configuración de hosting?",
    answer: `Sí, asesoramos en la compra de dominios y configuramos el hosting en plataformas como AWS, Vercel, Cloudflare y DigitalOcean. 
      Nos aseguramos de que tu sitio esté bien configurado y optimizado.`,
  },
  {
    question: "¿Cómo aseguramos la seguridad de tu sitio web?",
    answer: `Contamos con experiencia en ciberseguridad, implementando medidas como protección contra ataques XSS, CSRF y SQL Injection, 
      además de reforzar la seguridad en servidores y conexiones.`,
  },
  {
    question: "¿Cómo es el proceso de pago?",
    answer: `Se realiza un pago inicial del 50% y el resto al finalizar el proyecto. Garantizamos código limpio, un diseño optimizado, 
      SEO avanzado y una web segura y escalable.`,
  },
  {
    question: "¿Ofrecen servicios adicionales como marketing y diseño gráfico?",
    answer: `Sí, contamos con packs completos que incluyen branding, diseño gráfico y estrategias de marketing digital para potenciar 
      tu presencia online y aumentar tus ventas.`,
  },
];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-32 max-w-7xl mx-auto px-4">
      <h2 className="text-5xl lg:text-6xl mb-6">FAQ</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-t border-[#2c2c2c]">
            <button
              className="w-full flex justify-between items-center py-4 text-xs lg:text-lg font-medium focus:outline-none cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              {openIndex === index ? (
                <FaMinus className="text-gray-300" />
              ) : (
                <FaPlus className="text-gray-300" />
              )}
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden text-gray-300"
            >
              <p className="pb-4 text-xs lg:text-base">{item.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
