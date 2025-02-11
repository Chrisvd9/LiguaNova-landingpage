import { cn } from "../../utils/cn";
import { Marquee } from "../ui/Marquee";

const reviews = [
  {
    name: "Carlos M.",
    username: "@carlos_m",
    body: "Contraté el Pack Landing Page y el resultado fue excelente. La web es rápida, moderna y optimizada para SEO. Además, me ayudaron a elegir el dominio y configurar el hosting sin problemas. 100% recomendado.",
    img: "https://avatar.vercel.sh/carlos",
  },
  {
    name: "María G.",
    username: "@mariag",
    body: "Necesitaba un sitio web profesional con diseño atractivo y posicionamiento en Google. El Pack Web Completa superó mis expectativas. Ahora mi negocio tiene una presencia sólida en línea y recibimos más clientes gracias a la optimización SEO.",
    img: "https://avatar.vercel.sh/maria",
  },
  {
    name: "Javier R.",
    username: "@javierr",
    body: "Si buscas una agencia que entienda la importancia del branding y el marketing digital, este es el lugar. Con el Pack Premium, obtuvimos una web increíble, estrategias de publicidad efectivas y una identidad de marca profesional.",
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
    body: "El Pack Diseño Gráfico fue una gran elección para nuestra empresa. Nos ayudaron a crear un logo profesional y una identidad visual fuerte que ahora usamos en todo nuestro branding.",
    img: "https://avatar.vercel.sh/ricardo",
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
