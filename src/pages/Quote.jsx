import React from "react";
import ProjectCalculator from "../components/common/ProjectCalculator";

const Quote = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 mt-32 lg:mt-6">
        <h1 className="text-5xl font-bold mb-8">Get Your Project Quote</h1>
        <p className="text-xl lg:text-2xl mb-6 max-w-2xl text-gray-300">
          Clic any service card below to get a quote for your project.
        </p>
        <ProjectCalculator />
      </section>
    </>
  );
};

export default Quote;
