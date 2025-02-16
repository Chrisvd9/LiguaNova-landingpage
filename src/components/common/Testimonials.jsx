import { cn } from "../../utils/cn";
import { Marquee } from "../ui/Marquee";

const reviews = [
  {
    name: "Angél",
    username: "@angel_a",
    body: "Contraté el Pack Landing Page y el resultado fue excelente. La web es rápida, moderna y optimizada para SEO. Además, me ayudaron a elegir el dominio y configurar el hosting sin problemas. 100% recomendado.",
    img: "https://avatar.vercel.sh/carlos",
  },
  {
    name: "Ulises P.",
    username: "@youngblack",
    body: "Necesitaba un sitio web profesional con varias secciones e integración con formularios. Con el Pack Web Empresarial, ahora tengo una web optimizada, funcional y preparada para escalar mi negocio.",
    img: "https://avatar.vercel.sh/maria",
  },
  {
    name: "Javier R.",
    username: "@javierr",
    body: "El Pack Web Avanzado fue la mejor inversión para mi empresa. La integración con APIs y bases de datos nos permite automatizar procesos, y el rendimiento de la web es impresionante. Excelente servicio.",
    img: "https://avatar.vercel.sh/javier",
  },
  {
    name: "Elena S.",
    username: "@elena_s",
    body: "Solo necesitábamos una landing page sencilla pero bien desarrollada. Con el Pack Desarrollo Web, obtuvimos justo lo que queríamos a un precio accesible. Trabajo impecable y entregado a tiempo.",
    img: "https://avatar.vercel.sh/elena",
  },
  {
    name: "Ricardo T.",
    username: "@ricardot",
    body: "Contraté el servicio de Integración de APIs y bases de datos y fue un acierto total. Ahora mi plataforma se comunica sin problemas con herramientas externas y todo funciona de manera fluida.",
    img: "https://avatar.vercel.sh/ricardo",
  },
  {
    name: "Sofía L.",
    username: "@sofia_l",
    body: "Nuestro sitio era lento y tenía problemas de carga. Con la Optimización Web logramos mejorar la velocidad y la experiencia de usuario. ¡Gran trabajo!",
    img: "https://avatar.vercel.sh/sofia",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0F0F0F]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0F0F0F]"></div>
    </div>
  );
}
