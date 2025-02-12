import { Suspense, lazy } from "react";

const ProjectCalculator = lazy(() =>
  import("../components/common/ProjectCalculator")
);

const Quote = () => {
  return (
    <>
      <>
        <title>Obtén tu Cotización de Proyecto | LiguaNova</title>
        <meta
          name="description"
          content="Selecciona los servicios que necesitas y obtén una cotización personalizada para tu proyecto digital."
        />
        <meta
          name="keywords"
          content="cotización, desarrollo web, diseño gráfico, marketing digital"
        />
        <meta
          property="og:title"
          content="Obtén tu Cotización de Proyecto | LiguaNova"
        />
        <meta
          property="og:description"
          content="Calcula el costo de tu proyecto con nuestra herramienta interactiva de cotización."
        />
        <meta property="og:type" content="website" />
      </>

      <section className="max-w-7xl mx-auto px-4 mt-32">
        <h1 className="text-5xl font-bold mb-8">
          Obtén tu Cotización de Proyecto
        </h1>
        <p className="text-xl lg:text-2xl mb-6 max-w-2xl text-gray-300">
          Haz clic en cualquier tarjeta de servicio a continuación para obtener
          una cotización personalizada.
        </p>

        <Suspense
          fallback={
            <div className="text-gray-300 text-lg">Cargando calculadora...</div>
          }
        >
          <ProjectCalculator />
        </Suspense>
      </section>
    </>
  );
};

export default Quote;
