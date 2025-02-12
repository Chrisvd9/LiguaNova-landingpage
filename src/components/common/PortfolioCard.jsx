import { useState, memo } from "react";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiMysql,
  DiSwift,
} from "react-icons/di";
import {
  FaReact,
  FaFigma,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiAstro } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandVite } from "react-icons/tb";

const SKILLS_ICONS = {
  HTML: DiHtml5,
  CSS: DiCss3,
  JS: DiJavascript1,
  React: FaReact,
  Nextjs: SiNextdotjs,
  TypeScript: FaJs,
  Node: FaNodeJs,
  MySQL: DiMysql,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Swift: DiSwift,
  AWS: FaAws,
  Astro: SiAstro,
  Tailwind: RiTailwindCssFill,
  Figma: FaFigma,
  Vite: TbBrandVite,
  Motion: TbBrandFramerMotion,
};

const PortfolioCard = ({ title, description, live, skills, image }) => {
  const [showMoreSkills, setShowMoreSkills] = useState(false);
  const [showMoreDescription, setShowMoreDescription] = useState(false);

  const maxDescriptionLength = 50;
  const maxSkillsToShow = 3;

  return (
    <article className="overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-lg">
      <img
        alt={`Vista previa de ${title}`}
        src={image || "/images/placeholder.webp"}
        className="h-48 w-full object-cover rounded-t-2xl"
        loading="lazy"
      />

      <div className="grid grid-cols-3 gap-2 border-t bg-[#111] border-[#242424] p-4">
        {skills
          .slice(0, showMoreSkills ? skills.length : maxSkillsToShow)
          .map((skill, idx) => {
            const Icon = SKILLS_ICONS[skill];
            return (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-dark bg-secondary text-xs flex items-center justify-center gap-2"
              >
                {Icon && <Icon className="size-4" />} {skill}
              </span>
            );
          })}
      </div>

      <div className="border border-[#242424] bg-[#111] p-4 rounded-b-2xl">
        <h3 className="mt-0.5 text-base font-semibold">{title}</h3>

        <p className="mt-2 text-sm text-gray-300">
          {showMoreDescription || description.length <= maxDescriptionLength
            ? description
            : `${description.slice(0, maxDescriptionLength)}...`}
        </p>

        {description.length > maxDescriptionLength && (
          <div className="text-center mt-2">
            <button
              className="text-xs underline text-secondary cursor-pointer"
              onClick={() => setShowMoreDescription(!showMoreDescription)}
            >
              {showMoreDescription ? "Menos" : "Más"}
            </button>
          </div>
        )}

        {skills.length > maxSkillsToShow && (
          <div className="text-center mt-2">
            <button
              className="text-sm text-secondary underline cursor-pointer"
              onClick={() => setShowMoreSkills(!showMoreSkills)}
            >
              {showMoreSkills ? "Menos" : "Más"}
            </button>
          </div>
        )}

        <div className="mt-4 flex justify-center">
          <a
            className="inline-block text-center rounded-2xl border border-[#242424] px-10 py-2 text-sm font-medium text-secondary transition-all duration-500 hover:bg-[#242424]"
            href={live || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {live ? "Live" : "-"}
          </a>
        </div>
      </div>
    </article>
  );
};

export default memo(PortfolioCard);
