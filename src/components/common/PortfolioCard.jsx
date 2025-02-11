import { useState } from "react";
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
    <article className="overflow-hidden rounded-2xl chrisvd9_transition hover:shadow-lg">
      <img
        alt="Project preview"
        src={
          image ||
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        }
        className="h-48 w-full object-cover"
        loading="lazy"
      />

      <div className="border border-[#242424]">
        <div className="grid grid-cols-3 gap-4 border-t border-b border-[#242424] p-2">
          {skills
            .slice(0, showMoreSkills ? skills.length : maxSkillsToShow)
            .map((skill, idx) => {
              const Icon = SKILLS_ICONS[skill];
              return (
                <span
                  key={idx}
                  className="px-4 py-1 rounded-full text-dark bg-secondary text-sm flex items-center justify-center text-center gap-2"
                >
                  {Icon && <Icon className="size-3" />} {skill}
                </span>
              );
            })}
        </div>

        {skills.length > maxSkillsToShow && (
          <div className="text-center mt-2">
            <button
              className="text-sm text-secondary underline cursor-pointer"
              onClick={() => setShowMoreSkills(!showMoreSkills)}
            >
              {showMoreSkills ? `${"Menos"}` : `${"Más"}`}
            </button>
          </div>
        )}

        <div className="p-4">
          <h3 className="mt-0.5 text-lg">{title}</h3>
          <p className="mt-2  text-sm/relaxed parrafo">
            {showMoreDescription || description.length <= maxDescriptionLength
              ? description
              : `${description.slice(0, maxDescriptionLength)}...`}
          </p>

          {description.length > maxDescriptionLength && (
            <div className="text-center mt-2">
              <button
                className="text-xs underline cursor-pointer"
                onClick={() => setShowMoreDescription(!showMoreDescription)}
              >
                {showMoreDescription ? `${"Menos"}` : `${"Más"}`}
              </button>
            </div>
          )}

          <div className="grid mt-4 place gap-4">
            {live ? (
              <a
                className="inline-block text-center rounded-2xl border border-[#242424] px-12 py-3 text-sm font-medium text-secondary transiton-all duration-500 hover:bg-[#242424] active:animate-button-pop"
                href={live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            ) : (
              <a
                className="inline-block text-center rounded-2xl border border-[#242424] px-12 py-3 text-sm font-medium text-secondary transiton-all duration-500 hover:bg-[#242424] active:animate-button-pop"
                href="#"
              >
                -
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;
