import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Section from "../ui/Section";
import { SOCIAL_LINKS } from "../../data/portfolio";

export default function About({ theme }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section id="about" tab="about.js" title="// about" theme={theme}>
      <div
        className={`rounded-lg border p-5 sm:p-6 ${theme.border} ${theme.card}`}
      >
        <p
          className={`text-2xl font-semibold tracking-tight mb-5 ${theme.textPrimary}`}
        >
          Hey, I&apos;m Kush.
        </p>

        <div className={`space-y-4 text-sm leading-7 ${theme.textBody}`}>
          <p>
            I&apos;m a frontend developer focused on building fast, responsive,
            and user-friendly web applications.
          </p>

          <p>
            I started coding through curiosity-driven projects and gradually
            developed a strong interest in creating clean and scalable
            interfaces using React and modern web technologies.
          </p>

          <p>
            Right now, I&apos;m focused on improving performance, writing
            maintainable code, and building real-world projects that solve
            practical problems.
          </p>

          <p>
            Currently pursuing B.Tech in Computer Science, I&apos;m actively
            looking for internship or entry-level opportunities where I can
            learn, contribute, and grow as a developer.
          </p>

          <p>
            Outside coding, I enjoy solving DSA problems and exploring new tools
            in the frontend ecosystem.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-xs">
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 underline underline-offset-4 ${theme.textPrimary} ${theme.hoverText}`}
          >
            <FaLinkedinIn className="w-3.5 h-3.5" />
            LinkedIn
          </a>

          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center gap-2 underline underline-offset-4 ${theme.textPrimary} ${theme.hoverText}`}
          >
            <FaGithub className="w-3.5 h-3.5" />
            GitHub
          </a>
        </div>

        <p
          className={`pt-5 mt-5 border-t ${theme.border} text-sm ${theme.textBody}`}
        >
          Looking to collaborate?{" "}
          <button
            onClick={() => scrollTo("contact")}
            className={`underline underline-offset-4 ${theme.textPrimary} ${theme.hoverText}`}
          >
            Check the Contact page
          </button>
        </p>
      </div>
    </Section>
  );
}
