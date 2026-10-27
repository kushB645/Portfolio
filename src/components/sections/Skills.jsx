import { SKILLS } from "../../data/portfolio";
import Section from "../ui/Section";

export default function Skills({ theme }) {
  return (
    <Section id="skills" tab="skills.js" title="// skills" theme={theme}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {SKILLS.map((skill) => (
          <div key={skill.group} className={`rounded-lg border p-3.5 sm:p-5 transition-colors ${theme.border} ${theme.card} ${theme.hoverBorder}`}>
            <p className={`text-[11px] font-mono uppercase tracking-wider mb-2.5 sm:mb-3 ${theme.accent}`}>
              {skill.group}
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className={`text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded border transition-colors ${theme.border} ${theme.textBody}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
