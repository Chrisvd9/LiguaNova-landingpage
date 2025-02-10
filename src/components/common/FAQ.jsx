import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "¿Cuál es tu stack tecnológico y por qué lo usas?",
    answer: `Trabajo con Vite + React, Astro, TailwindCSS, Motion y Zustand, asegurando que cada web sea rápida, escalable y segura. 
      Uso tecnologías modernas para optimizar el rendimiento y la experiencia de usuario.`,
  },
  {
    question: "¿Ofreces desarrollo en WordPress?",
    answer: `No, ya que WordPress es menos seguro y limita la personalización. Prefiero crear código desde cero 
      para asegurar una web optimizada, segura y única para cada cliente.`,
  },
  {
    question: "¿Brindas soporte después de entregar el proyecto?",
    answer: `Sí, pero tiene un costo adicional. Ofrezco mantenimiento para correcciones, optimización y seguridad 
      para mantener tu web actualizada y funcionando sin problemas.`,
  },
  {
    question: "¿Ayudas con la gestión del hosting y servidores?",
    answer: `Sí, puedo gestionar hosting en AWS, Vercel, Netlify, Cloudflare y DigitalOcean. Como AWS Solution Architect, 
      puedo ayudarte a implementar una infraestructura escalable y segura.`,
  },
  {
    question: "¿Qué tan seguras son las páginas que desarrollas?",
    answer: `Estudio ciberseguridad y tengo certificaciones que respaldan mis conocimientos. Implemento medidas 
      como prevención de ataques XSS, CSRF e inyecciones SQL, garantizando máxima seguridad.`,
  },
  {
    question: "¿Cómo funciona el pago y qué garantías ofreces?",
    answer: `Para iniciar, se paga el 50% y el otro 50% al finalizar el proyecto. Garantizo código limpio, SEO optimizado, 
      diseño responsive y seguridad reforzada.`,
  },
  {
    question: "¿Ofreces servicios de marketing y diseño gráfico?",
    answer: `Sí, pero con un costo adicional. Trabajo con expertos en branding y marketing digital para ofrecer estrategias 
      efectivas y diseños profesionales.`,
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
              className="w-full flex justify-between items-center py-4 text-sm lg:text-lg font-medium focus:outline-none cursor-pointer"
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
