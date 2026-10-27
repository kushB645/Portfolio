import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../../data/portfolio";
import Section from "../ui/Section";

export default function Projects({ theme }) {
  return (
    <Section id="projects" tab="projects.js" title="// projects" theme={theme}>
      <div className="grid gap-4 sm:gap-5">
        {PROJECTS.map((project) => (
          <article
            key={project.name}
            className={`rounded-lg border p-4 sm:p-6 transition-colors ${theme.border} ${theme.card} ${theme.hoverBorder}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 sm:gap-4">
              <div>
                <h3 className={`text-base font-semibold ${theme.textPrimary}`}>{project.name}</h3>
                <p className={`text-xs mt-0.5 ${theme.textDim}`}>{project.tagline}</p>
              </div>

              {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-mono self-start sm:self-auto px-2.5 py-1 rounded border border-indigo-400/25 sm:border-transparent ${theme.accent} ${theme.hoverText} hover:bg-indigo-500/10 transition-colors shrink-0`}
                >
                  <span>Live demo</span> <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            <ul className="mt-4 space-y-1.5 sm:space-y-2">
              {project.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className={`text-xs sm:text-[13px] leading-5 sm:leading-6 pl-4 relative ${theme.textBody}`}
                >
                  <span className={`absolute left-0 font-bold ${theme.accentStrong}`}>-</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className={`text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded border ${theme.border} ${theme.textDim}`}
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
