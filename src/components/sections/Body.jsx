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
    <section className="max-w-5xl mx-auto px-3.5 sm:px-4 pt-8 sm:pt-14 pb-12 sm:pb-18">
      <div
        className={`rounded-lg border overflow-hidden shadow-2xl shadow-black/10 ${theme.border} ${theme.editorBg}`}
      >
        {/* Editor header */}
        <div
          className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 border-b ${theme.border} ${theme.editorHeaderBg}`}
        >
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />

          <span className={`ml-2 sm:ml-3 text-[11px] font-mono ${theme.textDim}`}>about.js</span>
        </div>

        {/* Code */}
        <div className="p-4 sm:p-7 md:p-10 text-xs sm:text-sm md:text-base leading-6 sm:leading-7 overflow-x-auto no-scrollbar">
          {heroLines.map((line, index) => (
            <div key={index} className="flex min-w-max font-mono">
              <span className={`w-5 sm:w-6 select-none shrink-0 ${theme.textFaint}`}>
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
          <span className="inline-block w-1.5 sm:w-2 h-3.5 sm:h-4 bg-indigo-400 ml-5 sm:ml-6 animate-pulse align-middle" />
        </div>
      </div>

      {/* Description */}
      <p
        className={`mt-6 sm:mt-8 max-w-2xl text-xs sm:text-sm md:text-[15px] leading-relaxed ${theme.textBody}`}
      >
        I build responsive, user-friendly web applications with React and a
        strong grounding in data structures and algorithms — currently looking
        for an internship or entry-level role where I can ship real product.
      </p>

      {/* Social links */}
      <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 px-3.5 py-2 rounded-md border text-xs transition-colors ${theme.border} ${theme.textBody} ${theme.hoverBorder} ${theme.hoverText} hover:bg-white/[0.03]`}
        >
          <FaGithub className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>

        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 px-3.5 py-2 rounded-md border text-xs transition-colors ${theme.border} ${theme.textBody} ${theme.hoverBorder} ${theme.hoverText} hover:bg-white/[0.03]`}
        >
          <FaLinkedinIn className="w-3.5 h-3.5" />
          <span>LinkedIn</span>
        </a>

        <a
          href="/Kush_s_resume.pdf"
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-semibold transition-colors ${theme.btnPrimary} shadow-sm`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>View resume</span>
        </a>
      </div>
    </section>
  );
}
