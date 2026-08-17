import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../../data/portfolio";
import Section from "../ui/Section";

export default function Projects({ theme }) {
  return (
    <Section id="projects" tab="projects.js" title="// projects" theme={theme}>
      <div className="grid gap-5">
        {PROJECTS.map((project) => (
          <article
            key={project.name}
            className={`rounded-lg border p-5 sm:p-6 transition-colors ${theme.border} ${theme.card} ${theme.hoverBorder}`}
          >
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className={`text-base font-semibold ${theme.textPrimary}`}>{project.name}</h3>
                <p className={`text-xs mt-0.5 ${theme.textDim}`}>{project.tagline}</p>
              </div>

              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-1.5 text-xs shrink-0 ${theme.accent} ${theme.hoverText}`}
                >
                  Live demo <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            <ul className="mt-4 space-y-1.5">
              {project.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className={`text-[13px] leading-6 pl-4 relative ${theme.textBody}`}
                >
                  <span className={`absolute left-0 ${theme.accentStrong}`}>-</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className={`text-[11px] px-2 py-0.5 rounded border ${theme.border} ${theme.textDim}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
