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
              className="relative pl-8"
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-1.5 w-[19px] h-[19px] rounded-full border flex items-center justify-center ${theme.border} ${theme.editorBg}`}
              >
                <div
                  className={`w-1.5 h-1.5 rounded-full ${theme.accentStrong.replace(
                    "text-",
                    "bg-",
                  )}`}
                />
              </div>

              <div
                className={`rounded-lg border p-5 sm:p-6 transition-colors ${theme.border} ${theme.card} ${theme.hoverBorder}`}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2">
                      <Briefcase
                        className={`w-4 h-4 ${theme.accentStrong}`}
                      />

                      <h3
                        className={`text-base font-semibold ${theme.textPrimary}`}
                      >
                        {experience.role}
                      </h3>
                    </div>

                    <p className={`mt-1 text-sm ${theme.accent}`}>
                      {experience.company}
                    </p>
                  </div>

                  <span
                    className={`text-xs px-2 py-1 rounded border ${theme.border} ${theme.textDim}`}
                  >
                    {experience.duration}
                  </span>
                </div>

                <ul className="mt-5 space-y-2">
                  {experience.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className={`text-[13px] leading-6 pl-4 relative ${theme.textBody}`}
                    >
                      <span
                        className={`absolute left-0 ${theme.accentStrong}`}
                      >
                        -
                      </span>

                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {experience.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-[11px] px-2 py-0.5 rounded border ${theme.border} ${theme.textDim}`}
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