import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SOCIAL_LINKS,
} from "../../data/portfolio";
import Section from "../ui/Section";
import ContactForm from "./ContactForm";

export default function Contact({ theme }) {
  return (
    <Section id="contact" tab="contact.js" title="// contact" theme={theme}>
      <ContactForm theme={theme} />

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs font-mono">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className={`flex items-center gap-2 py-1 transition-colors ${theme.textDim} ${theme.hoverText} break-all sm:break-normal`}
        >
          <Mail className="w-3.5 h-3.5 shrink-0" />
          <span>{CONTACT_EMAIL}</span>
        </a>

        <a
          href={`tel:${CONTACT_PHONE}`}
          className={`flex items-center gap-2 py-1 transition-colors ${theme.textDim} ${theme.hoverText}`}
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>{CONTACT_PHONE}</span>
        </a>

        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 py-1 transition-colors ${theme.textDim} ${theme.hoverText}`}
        >
          <FaGithub className="w-3.5 h-3.5 shrink-0" />
          <span>github.com/kushB645</span>
        </a>

        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 py-1 transition-colors ${theme.textDim} ${theme.hoverText}`}
        >
          <FaLinkedinIn className="w-3.5 h-3.5 shrink-0" />
          <span>linkedin.com/in/kushbhardwaj01</span>
        </a>
      </div>
    </Section>
  );
}
