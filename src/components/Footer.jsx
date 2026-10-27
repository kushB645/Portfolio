import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { dark } = useTheme();

  return (
    <footer
      className={`max-w-5xl mx-auto px-4 py-8 sm:py-10 text-center text-[11px] font-mono border-t ${
        dark ? "border-white/5 text-slate-500" : "border-black/5 text-slate-400"
      }`}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} Kush Bhardwaj</span>
        <span className="opacity-80">Designed & built with React + Tailwind CSS</span>
      </div>
    </footer>
  );
}
