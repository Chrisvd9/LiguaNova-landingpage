import { useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Card = ({ title, description, image, year }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-3xl h-[250px] md:h-full">
      <div className="relative overflow-hidden rounded-3xl h-full">
        <img
          src={image}
          alt="imagen"
          className="w-full h-full object-cover rounded-3xl"
        />

        <div className="absolute top-4 right-4 bg-black text-sm font-medium px-4 py-1 rounded-full">
          {year}
        </div>

        <div
          className={`absolute bottom-4 left-4 bg-black/80 backdrop-blur-md p-4 rounded-3xl w-[85%] transition-all duration-500 ${
            expanded ? "h-auto" : "max-h-[135px] overflow-hidden"
          }`}
        >
          <h3 className="font-semibold">{title}</h3>

          <p
            className={`text-gray-300 text-sm transition-all duration-300 ${
              expanded ? "line-clamp-none" : "line-clamp-2 sm:line-clamp-none"
            }`}
          >
            {description}
          </p>

          <button
            className="mt-2 text-xs text-[#21ffdd] underline sm:hidden"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Menos" : "Más"}
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
