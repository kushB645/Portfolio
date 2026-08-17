import { Circle } from "lucide-react";
import { NAV } from "../data/portfolio";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ui/ThemeToggle";

export default function Navbar({ theme }) {
  const active = useActiveSection(NAV);
  const { dark } = useTheme();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur ${theme.border} ${theme.headerBg}`}
    >
      <div className="max-w-5xl mx-auto flex items-center gap-1 px-4 overflow-x-auto">
        <div className={`flex items-center gap-2 pr-4 py-3 shrink-0 ${theme.textDim}`}>
          <Circle className="w-2.5 h-2.5 fill-rose-500 text-rose-500" />
          <Circle className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
          <Circle className="w-2.5 h-2.5 fill-emerald-500 text-emerald-500" />
        </div>

        {NAV.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`shrink-0 px-4 py-3 text-xs border-b-2 transition-colors ${
              active === item.id ? theme.tabActive : theme.tabInactive
            }`}
          >
            {item.label}
          </button>
        ))}

        <ThemeToggle theme={theme} />
      </div>
    </header>
  );
}
