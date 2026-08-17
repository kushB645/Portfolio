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

      <div className="mt-5 grid sm:grid-cols-2 gap-3 text-xs">
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className={`flex items-center gap-2 transition-colors ${theme.textDim} ${theme.hoverText}`}
        >
          <Mail className="w-3.5 h-3.5" />
          {CONTACT_EMAIL}
        </a>

        <a
          href={`tel:${CONTACT_PHONE}`}
          className={`flex items-center gap-2 transition-colors ${theme.textDim} ${theme.hoverText}`}
        >
          <Phone className="w-3.5 h-3.5" />
          {CONTACT_PHONE}
        </a>

        <a
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 transition-colors ${theme.textDim} ${theme.hoverText}`}
        >
          <FaGithub className="w-3.5 h-3.5" />
          github.com/kushB645
        </a>

        <a
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-2 transition-colors ${theme.textDim} ${theme.hoverText}`}
        >
          <FaLinkedinIn className="w-3.5 h-3.5" />
          linkedin.com/in/kushbhardwaj01
        </a>
      </div>
    </Section>
  );
}
