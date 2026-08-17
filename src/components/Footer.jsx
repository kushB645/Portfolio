import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { dark } = useTheme();

  return (
    <footer
      className={`max-w-5xl mx-auto px-4 py-10 text-center text-[11px] ${
        dark ? "text-slate-600" : "text-slate-400"
      }`}
    >
      kush01.vercel.app
    </footer>
  );
}
