import { useState, useEffect } from "react";
import { Mail, Menu, X, FileCode } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { NAV, SOCIAL_LINKS } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./ui/ThemeToggle";

export default function Navbar({ theme }) {
  const active = useActiveSection(NAV);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const activeItem = NAV.find((item) => item.id === active) || NAV[0];

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-200 ${theme.border} ${theme.headerBg}`}
    >
      {/* Top Navbar Row */}
      <div className="max-w-5xl mx-auto flex items-center justify-between px-3 sm:px-4 h-13 sm:h-14">
        {/* Left: Window Dots + Desktop Tabs / Mobile Active File */}
        <div className="flex items-center min-w-0 flex-1 h-full">
          {/* Window dots */}
          <div className="flex items-center gap-1.5 sm:gap-2 pr-2.5 sm:pr-3 py-2 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block shadow-sm shadow-rose-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block shadow-sm shadow-amber-400/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block shadow-sm shadow-emerald-500/40" />
          </div>

          {/* Mobile active file title */}
          <div className="flex items-center gap-1.5 lg:hidden text-xs truncate">
            <span className={`font-semibold ${theme.accent}`}>~/kush</span>
            <span className={theme.textFaint}>/</span>
            <span className={`font-mono truncate ${theme.textPrimary}`}>{activeItem?.label}</span>
          </div>

          {/* Desktop tabs: hidden below 1024px, visible on lg+ */}
          <nav
            className="hidden lg:flex items-center h-full min-w-0 flex-1 overflow-x-auto no-scrollbar ml-1 sm:ml-2"
            aria-label="Desktop tabs"
          >
            {NAV.map((item) => {
              const isActive = active === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`shrink-0 px-2.5 xl:px-3.5 h-full text-xs font-mono border-b-2 transition-colors whitespace-nowrap ${
                    isActive
                      ? `${theme.tabActive} bg-indigo-500/[0.04]`
                      : `${theme.tabInactive} hover:bg-white/[0.02]`
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Right: ThemeToggle + Hire me + Mobile Menu Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 z-10">
          <ThemeToggle theme={theme} />

          <button
            onClick={() => scrollTo("contact")}
            className={`shrink-0 flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs font-semibold transition-all ${theme.btnPrimary} shadow-sm active:scale-95`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden min-[400px]:inline">Hire me</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden shrink-0 p-1.5 sm:p-2 rounded-md border text-xs transition-colors ${theme.border} ${theme.textDim} ${theme.hoverText} hover:bg-white/[0.04]`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Horizontal Quick-Scroll Tab Strip (shown below 1024px so tabs NEVER collide with right buttons) */}
      <div className={`lg:hidden border-t ${theme.border} bg-black/[0.02] dark:bg-black/20`}>
        <div className="max-w-5xl mx-auto px-2 sm:px-3 pr-4 flex items-center overflow-x-auto no-scrollbar">
          {NAV.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={`mobile-tab-${item.id}`}
                onClick={() => scrollTo(item.id)}
                className={`shrink-0 px-3 py-2 text-[11px] font-mono border-b-2 whitespace-nowrap transition-colors ${
                  isActive ? theme.tabActive : theme.tabInactive
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile/Tablet Explorer Drawer (shown when hamburger is toggled) */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-t transition-all ${theme.border} ${theme.editorBg} px-4 py-4 shadow-2xl backdrop-blur-xl`}
        >
          <div className="max-w-5xl mx-auto space-y-3">
            <div className="flex items-center justify-between text-[11px] font-mono tracking-wider uppercase text-slate-500 pb-1">
              <span>// WORKSPACE EXPLORER</span>
              <span className="text-[10px] text-indigo-400">{NAV.length} files</span>
            </div>

            <div className="grid gap-1">
              {NAV.map((item) => {
                const isActive = active === item.id;
                return (
                  <button
                    key={`menu-${item.id}`}
                    onClick={() => scrollTo(item.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-xs font-mono transition-colors text-left ${
                      isActive
                        ? `bg-indigo-500/10 ${theme.accentStrong} font-semibold border ${theme.border}`
                        : `${theme.textBody} hover:bg-white/[0.04] ${theme.hoverText}`
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <FileCode className={`w-3.5 h-3.5 ${isActive ? theme.accentStrong : theme.textFaint}`} />
                      <span>{item.label}</span>
                    </div>
                    {isActive && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400">
                        active
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Mobile Explorer Drawer Footer */}
            <div className={`pt-3 border-t ${theme.border} flex items-center justify-between text-xs`}>
              <a
                href="/Kush_s_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className={`underline underline-offset-4 text-xs ${theme.textPrimary} ${theme.hoverText}`}
              >
                View Resume
              </a>
              <div className="flex items-center gap-3">
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`${theme.textDim} ${theme.hoverText} p-1`}
                  aria-label="GitHub profile"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`${theme.textDim} ${theme.hoverText} p-1`}
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
