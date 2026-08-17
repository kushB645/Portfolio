export default function Section({ id, tab, title, theme, children }) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-4 py-10 scroll-mt-20">
      <div className={`flex items-center gap-2 mb-6 text-[11px] ${theme.textFaint}`}>
        <span>/</span>
        <span>{tab}</span>
      </div>

      <h2 className={`text-xs mb-5 ${theme.accentStrong} opacity-80`}>{title}</h2>

      {children}
    </section>
  );
}
