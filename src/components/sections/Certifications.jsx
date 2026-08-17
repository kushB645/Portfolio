import { ExternalLink } from "lucide-react";
import { CERTS } from "../../data/portfolio";
import Section from "../ui/Section";

export default function Certifications({ theme }) {
  return (
    <Section id="certs" tab="certs.js" title="// certifications" theme={theme}>
      <div className="space-y-3">
        {CERTS.map((certification) => (
          <a
            key={certification.name}
            href={certification.link}
            target="_blank"
            rel="noreferrer"
            className={`flex items-start justify-between gap-4 rounded-lg border p-4 transition-colors ${theme.border} ${theme.card} ${theme.hoverBorder}`}
          >
            <div>
              <p className={`text-sm font-medium ${theme.textPrimary}`}>
                {certification.name}
              </p>
              <p className={`text-xs mt-1 ${theme.textDim}`}>{certification.detail}</p>
            </div>

            <ExternalLink className={`w-3.5 h-3.5 mt-1 shrink-0 ${theme.textDim}`} />
          </a>
        ))}
      </div>
    </Section>
  );
}
