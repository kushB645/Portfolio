import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/sections/Body";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Certifications from "./components/sections/Certifications";
import Contact from "./components/sections/Contact";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function Portfolio() {
  const { dark } = useTheme();

  const theme = dark
    ? {
        page: "bg-[#0B0D12] text-slate-200",
        headerBg: "bg-[#0B0D12]/90",
        border: "border-white/10",
        card: "bg-white/[0.02]",
        editorBg: "bg-[#0E1117]",
        editorHeaderBg: "bg-white/[0.02]",
        textPrimary: "text-slate-100",
        textBody: "text-slate-400",
        textDim: "text-slate-500",
        textFaint: "text-slate-600",
        accent: "text-indigo-300",
        accentStrong: "text-indigo-400",
        hoverBorder: "hover:border-indigo-400/40",
        hoverText: "hover:text-indigo-300",
        tabActive: "border-indigo-400 text-indigo-300",
        tabInactive: "border-transparent text-slate-500 hover:text-slate-300",
        btnPrimary: "bg-indigo-500 text-[#0B0D12] hover:bg-indigo-400",
        inputBg: "bg-white/[0.03]",
        inputBorder: "border-white/10 focus:border-indigo-400/60",
      }
    : {
        page: "bg-[#F7F7F5] text-slate-800",
        headerBg: "bg-[#F7F7F5]/90",
        border: "border-black/10",
        card: "bg-white",
        editorBg: "bg-white",
        editorHeaderBg: "bg-black/[0.03]",
        textPrimary: "text-slate-900",
        textBody: "text-slate-600",
        textDim: "text-slate-500",
        textFaint: "text-slate-400",
        accent: "text-indigo-600",
        accentStrong: "text-indigo-600",
        hoverBorder: "hover:border-indigo-500/50",
        hoverText: "hover:text-indigo-600",
        tabActive: "border-indigo-500 text-indigo-600",
        tabInactive: "border-transparent text-slate-400 hover:text-slate-600",
        btnPrimary: "bg-indigo-600 text-white hover:bg-indigo-500",
        inputBg: "bg-white",
        inputBorder: "border-black/10 focus:border-indigo-500/60",
      };

  return (
    <div className={`min-h-screen font-mono transition-colors duration-300 ${theme.page}`}>
      <Navbar theme={theme} />
      <Body theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Certifications theme={theme} />
      <Contact theme={theme} />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
