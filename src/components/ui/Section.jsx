export default function Section({ id, tab, title, theme, children }) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-3.5 sm:px-4 py-8 sm:py-12 scroll-mt-24 sm:scroll-mt-20">
      <div className={`flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 text-[11px] font-mono ${theme.textFaint}`}>
        <span>/</span>
        <span>{tab}</span>
      </div>

      <h2 className={`text-xs font-mono mb-4 sm:mb-5 tracking-wide ${theme.accentStrong} opacity-90`}>{title}</h2>

      {children}
    </section>
  );
}
