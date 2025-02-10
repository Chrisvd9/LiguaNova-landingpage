import { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

const Card = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-3xl h-[250px] md:h-full">
      <div className="relative overflow-hidden rounded-3xl h-full">
        <img
          src="https://portfolio-v4-b9c1.onrender.com/img/portfolio/Front/dashboard-sell-1.webp"
          alt="imagen"
          className="w-full h-full object-cover rounded-3xl"
        />

        <div className="absolute top-4 right-4 bg-black text-sm font-medium px-4 py-1 rounded-full">
          2023
        </div>

        <div
          className={`absolute bottom-4 left-4 bg-black/80 backdrop-blur-md p-4 rounded-3xl w-[85%] transition-all duration-500 ${
            expanded ? "h-auto" : "max-h-[120px] overflow-hidden"
          }`}
        >
          <h3 className="font-semibold">Chrisvd9 Dashboard UI</h3>

          <p
            className={`text-gray-300 text-sm transition-all duration-300 ${
              expanded ? "line-clamp-none" : "line-clamp-2 sm:line-clamp-none"
            }`}
          >
            I developed and designed this user interface dashboard to sell it,
            addressing both user experience (UX) and user interface (UI). PLEASE
            NOTE THAT I AM STILL DEVELOPING IT, IT IS NOT FINISHED. THIS IS JUST
            A PREVIEW.
          </p>

          <button
            className="mt-2 text-xs text-[#21ffdd] underline sm:hidden"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "See Less" : "See More"}
          </button>
        </div>

        <a
          href="#"
          className="absolute bottom-4 right-4 bg-black p-3 rounded-full hover:scale-110 transition-transform"
        >
          <MdOutlineArrowOutward className="text-lg" />
        </a>
      </div>
    </div>
  );
};

export default Card;
