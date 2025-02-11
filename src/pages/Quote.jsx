import React from "react";
import ProjectCalculator from "../components/common/ProjectCalculator";

const Quote = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 mt-32">
        <h1 className="text-5xl font-bold mb-8">Obtén tu Cotización de Proyecto</h1>
        <p className="text-xl lg:text-2xl mb-6 max-w-2xl text-gray-300">
          Haz clic en cualquier tarjeta de servicio a continuación para obtener una cotización para tu proyecto.
        </p>
        <ProjectCalculator />
      </section>
    </>
  );
};

export default Quote;
