import { useState } from "react";
import { AnimatedNumber } from "../ui/AnimatedNumber";
import { GlowingEffect } from "../ui/GlowingEffect";
import { motion } from "framer-motion";
import { BiPlus, BiMinus } from "react-icons/bi";
import {
  FaCode,
  FaLock,
  FaChartLine,
  FaCloud,
  FaServer,
  FaGlobe,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "Página Web Estática",
    price: 500,
    icon: <FaGlobe />,
    desc: "Sitios rápidos y optimizados.",
  },
  {
    id: 2,
    name: "Página Web Dinámica",
    price: 1000,
    icon: <FaCode />,
    desc: "Con funcionalidades interactivas.",
  },
  {
    id: 3,
    name: "Optimización SEO",
    price: 300,
    icon: <FaChartLine />,
    desc: "Mejor posicionamiento en Google.",
  },
  {
    id: 4,
    name: "Seguridad Avanzada",
    price: 400,
    icon: <FaLock />,
    desc: "Protección contra ataques y hackers.",
  },
  {
    id: 5,
    name: "Hosting & Dominio",
    price: 200,
    icon: <FaCloud />,
    desc: "Incluye configuración y gestión.",
  },
  {
    id: 6,
    name: "Soporte Mensual",
    price: 100,
    icon: <FaServer />,
    desc: "Mantenimiento y actualizaciones.",
  },
];

const ProjectCalculator = () => {
  const [selectedServices, setSelectedServices] = useState([]);
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
      <div className="grid sm:grid-cols-2 gap-4">
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

      <div className="lg:w-1/3">
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
    </div>
  );
};

export default ProjectCalculator;
