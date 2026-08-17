import { SKILLS } from "../../data/portfolio";
import Section from "../ui/Section";

export default function Skills({ theme }) {
  return (
    <Section id="skills" tab="skills.js" title="// skills" theme={theme}>
      <div className="grid sm:grid-cols-2 gap-4">
        {SKILLS.map((skill) => (
          <div key={skill.group} className={`rounded-lg border p-4 ${theme.border} ${theme.card}`}>
            <p className={`text-[11px] uppercase tracking-wider mb-3 ${theme.accent}`}>
              {skill.group}
            </p>

            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className={`text-xs px-2.5 py-1 rounded border ${theme.border} ${theme.textBody}`}
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
