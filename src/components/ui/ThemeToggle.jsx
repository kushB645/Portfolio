import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle({ theme }) {
  const { dark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`ml-auto shrink-0 flex items-center gap-1.5 px-3 py-1.5 my-2 rounded-md border text-[11px] transition-colors ${theme.border} ${theme.textDim} ${theme.hoverText}`}
    >
      {dark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
      {dark ? "light" : "dark"}
    </button>
  );
}
