import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle({ theme }) {
  const { dark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`shrink-0 flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md border text-xs transition-colors ${theme.border} ${theme.textDim} ${theme.hoverText} hover:bg-white/[0.04]`}
    >
      {dark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-500" />}
      <span className="hidden sm:inline text-[11px] font-mono">{dark ? "light" : "dark"}</span>
    </button>
  );
}
