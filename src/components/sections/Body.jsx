import { FileText, Circle } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useTypewriter } from "../../hooks/useTypewriter";
import { SOCIAL_LINKS } from "../../data/portfolio";

const HERO_LINES = [
  "const developer = {",
  "  name: 'Kush Bhardwaj',",
  "  role: 'Frontend Developer',",
  "  frontend: ['React', 'JavaScript', 'Tailwind CSS'],",
  "  backend: ['Node.js', 'Express.js'],",
  "  tools: ['Git', 'GitHub', 'Vercel'],",
  "  status: 'open to work',",
  "};",
];

export default function Body({ theme }) {
  const heroLines = useTypewriter(HERO_LINES, 16);

  return (
    <section className="max-w-5xl mx-auto px-4 pt-16 pb-20">
      <div
        className={`rounded-lg border overflow-hidden shadow-2xl shadow-black/10 ${theme.border} ${theme.editorBg}`}
      >
        {/* Editor header */}
        <div
          className={`flex items-center gap-2 px-4 py-2.5 border-b ${theme.border} ${theme.editorHeaderBg}`}
        >
          <Circle className="w-2.5 h-2.5 fill-rose-500 text-rose-500" />
          <Circle className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
          <Circle className="w-2.5 h-2.5 fill-emerald-500 text-emerald-500" />

          <span className={`ml-3 text-[11px] ${theme.textDim}`}>about.js</span>
        </div>

        {/* Code */}
        <div className="p-6 sm:p-10 text-sm sm:text-base leading-7 overflow-x-auto">
          {heroLines.map((line, index) => (
            <div key={index} className="flex min-w-max">
              <span className={`w-6 select-none shrink-0 ${theme.textFaint}`}>
                {index + 1}
              </span>

              <span>
                {line?.split(/('[^']*')/).map((part, partIndex) =>
                  part?.startsWith("'") ? (
                    <span key={partIndex} className="text-amber-500">
                      {part}
                    </span>
                  ) : (
                    <span key={partIndex} className={theme.accent}>
                      {part}
                    </span>
                  ),
                )}
              </span>
            </div>
          ))}

          {/* Cursor */}
          <span className="inline-block w-2 h-4 bg-indigo-400 ml-6 animate-pulse align-middle" />
        </div>
      </div>

      {/* Description */}
      <p
        className={`mt-8 max-w-2xl text-sm sm:text-[15px] leading-relaxed ${theme.textBody}`}
      >
        I build responsive, user-friendly web applications with React and a
        strong grounding in data structures and algorithms — currently looking
        for an internship or entry-level role where I can ship real product.
      </p>

      {/* Social links */}
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-md border text-xs transition-colors ${theme.border} ${theme.textBody} ${theme.hoverBorder} ${theme.hoverText}`}
        >
          <FaGithub className="w-3.5 h-3.5" />
          GitHub
        </a>

        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-md border text-xs transition-colors ${theme.border} ${theme.textBody} ${theme.hoverBorder} ${theme.hoverText}`}
        >
          <FaLinkedinIn className="w-3.5 h-3.5" />
          LinkedIn
        </a>

        <a
          href="/Kush_s_resume.pdf"
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold transition-colors ${theme.btnPrimary}`}
        >
          <FileText className="w-3.5 h-3.5" />
          View resume
        </a>
      </div>
    </section>
  );
}
