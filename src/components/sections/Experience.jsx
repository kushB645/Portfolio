import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "../../data/portfolio";
import Section from "../ui/Section";

export default function Experience({ theme }) {
  return (
    <Section
      id="experience"
      tab="experience.js"
      title="// experience"
      theme={theme}
    >
      <div className="relative">
        {/* Timeline line */}
        <div
          className={`absolute left-[9px] top-2 bottom-2 w-px ${theme.border}`}
        />

        <div className="space-y-8">
          {EXPERIENCE.map((experience) => (
            <article
              key={`${experience.company}-${experience.role}`}
              className="relative pl-6 sm:pl-8"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-1.5 w-4 h-4 sm:w-[19px] sm:h-[19px] rounded-full border flex items-center justify-center ${theme.border} ${theme.editorBg}`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${theme.accentStrong.replace(
                    "text-",
                    "bg-",
                  )}`}
                />
              </div>

              <div
                className={`rounded-lg border p-4 sm:p-6 transition-colors ${theme.border} ${theme.card} ${theme.hoverBorder}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Briefcase
                        className={`w-4 h-4 shrink-0 ${theme.accentStrong}`}
                      />

                      <h3
                        className={`text-sm sm:text-base font-semibold ${theme.textPrimary}`}
                      >
                        {experience.role}
                      </h3>
                    </div>

                    <p className={`mt-1 text-xs sm:text-sm font-mono ${theme.accent}`}>
                      {experience.company}
                    </p>
                  </div>

                  <span
                    className={`self-start text-[11px] sm:text-xs px-2 py-0.5 sm:py-1 rounded border font-mono ${theme.border} ${theme.textDim}`}
                  >
                    {experience.duration}
                  </span>
                </div>

                <ul className="mt-4 sm:mt-5 space-y-2">
                  {experience.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className={`text-xs sm:text-[13px] leading-5 sm:leading-6 pl-4 relative ${theme.textBody}`}
                    >
                      <span
                        className={`absolute left-0 font-bold ${theme.accentStrong}`}
                      >
                        -
                      </span>

                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
                  {experience.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded border ${theme.border} ${theme.textDim}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}