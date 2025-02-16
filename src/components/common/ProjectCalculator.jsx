import { useState } from "react";
import { AnimatedNumber } from "../ui/AnimatedNumber";
import { GlowingEffect } from "../ui/GlowingEffect";
import { motion } from "framer-motion";
import { BiPlus, BiMinus } from "react-icons/bi";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { FaDatabase, FaLaptopCode, FaRocket, FaTools } from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "Pack Landing Page",
    price: 250,
    icon: <FaLaptopCode />,
    desc: "Landing page optimizada con React o Astro + SEO básico + soporte para dominio y hosting.",
  },
  {
    id: 2,
    name: "Pack Web Empresarial",
    price: 500,
    icon: <FaLaptopCode />,
    desc: "Sitio web profesional con hasta 5 páginas + SEO optimizado + integración con formularios y contacto.",
  },
  {
    id: 3,
    name: "Pack Web Avanzado",
    price: 1000,
    icon: <FaLaptopCode />,
    desc: "Sitio web escalable con SEO avanzado + integración con APIs y bases de datos + optimización de rendimiento.",
  },
  {
    id: 4,
    name: "Soporte Básico",
    price: 5,
    icon: <FaTools />,
    desc: "1 cambio menor adicional.",
  },
  {
    id: 5,
    name: "Soporte Plus",
    price: 15,
    icon: <FaTools />,
    desc: "3 cambios menores o 1 cambio mayor.",
  },
  {
    id: 6,
    name: "Soporte Full",
    price: 40,
    icon: <FaTools />,
    desc: "Cambios ilimitados dentro de dos semanas.",
  },
];

const ProjectCalculator = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const total = selectedServices.reduce((sum, item) => sum + item.price, 0);

  const toggleService = (service) => {
    if (selectedServices.some((s) => s.id === service.id)) {
      setSelectedServices(selectedServices.filter((s) => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto grid gap-4 lg:flex lg:justify-between">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 pb-8">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="relative group bg-[#111] p-6 rounded-2xl flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-gray-600"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.1 }}
            onClick={() => toggleService(service)}
          >
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl text-gray-300">{service.icon}</span>
              <h3 className="text-lg font-semibold">{service.name}</h3>
            </div>
            <p className="text-gray-400 text-sm">{service.desc}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-400 text-sm">
                ${service.price} USD
              </span>
              <button className="text-gray-400">
                {selectedServices.some((s) => s.id === service.id) ? (
                  <BiMinus className="text-red-500" />
                ) : (
                  <BiPlus className="text-secondary" />
                )}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="hidden lg:block w-full">
        <motion.div
          className="bg-[#111] p-6 rounded-2xl flex flex-col justify-between"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Resumen</h2>
          <ul className="space-y-3">
            {selectedServices.map((service) => (
              <li key={service.id} className="text-gray-400 text-sm">
                {service.name} - ${service.price}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between items-center text-lg font-semibold border-t border-[#242424] pt-4">
            <span>Total:</span>
            <AnimatedNumber
              value={total}
              format={(num) => `$${num.toLocaleString()}`}
            />
          </div>
          <a
            href="#"
            className="mt-4 w-full text-dark text-center bg-secondary hover:bg-cyan-500 py-2 rounded-md font-medium transition-all duration-500"
          >
            Contactar para Cotización
          </a>
        </motion.div>
      </div>

      <div
        className={`fixed bottom-0 left-0 w-full bg-[#111] p-4 rounded-t-3xl transition-all duration-300 lg:hidden z-50 ${
          isExpanded ? "h-60" : "h-24"
        }`}
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div>
            <h2 className="text-lg font-semibold">Resumen </h2>
            <p className="mt-2">
              <span>Total:</span>
              <AnimatedNumber
                value={total}
                format={(num) => `$${num.toLocaleString()}`}
              />
            </p>
          </div>
          {isExpanded ? (
            <HiChevronUp className="size-4" />
          ) : (
            <HiChevronDown className="size-4" />
          )}
        </div>
        {isExpanded && (
          <div className="w-full">
            <motion.div
              className="bg-[#111] p-6 rounded-2xl flex flex-col justify-between"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ul className="space-y-3">
                {selectedServices.map((service) => (
                  <li key={service.id} className="text-gray-400 text-sm">
                    {service.name} - ${service.price}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex justify-between items-center text-lg font-semibold border-t border-[#242424] pt-4">
                <span>Total:</span>
                <AnimatedNumber
                  value={total}
                  format={(num) => `$${num.toLocaleString()}`}
                />
              </div>
              <a
                href="#"
                className="mt-4 w-full text-dark text-center bg-secondary hover:bg-cyan-500 py-2 rounded-md font-medium transition-all duration-500"
              >
                Contactar para Cotización
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCalculator;
