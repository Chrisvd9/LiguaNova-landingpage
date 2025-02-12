import { Link } from "wouter";

const NotFound = () => {
  return (
    <>
      <>
        <title>Página no encontrada | LiguaNova</title>
        <meta
          name="description"
          content="La página que buscas no existe o ha sido movida. Vuelve al inicio para continuar explorando."
        />
        <meta name="robots" content="noindex, follow" />
      </>

      <main className="grid place-content-center min-h-screen text-center px-4">
        <div className="grid place-items-center gap-6">
          <h1 className="text-5xl lg:text-8xl font-bold">404</h1>
          <p className="text-xl lg:text-2xl text-gray-300">
            Página no encontrada
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-black text-white rounded-3xl animate-pulse hover:bg-[#242424] transition-all duration-500"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
    </>
  );
};

export default NotFound;
