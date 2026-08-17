import { useState } from "react";
import { Check, Send } from "lucide-react";
import { CONTACT_EMAIL } from "../../data/portfolio";

export default function ContactForm({ theme }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));

    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: null }));
    }
  };

  const validate = () => {
    const next = {};

    if (!form.name.trim()) next.name = "Enter your name";

    if (!form.email.trim()) {
      next.email = "Enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Enter a valid email";
    }

    if (!form.message.trim()) next.message = "Enter a message";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) return;

    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setSent(true);
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSent(false), 4000);
  };

  const fieldClass = (field) =>
    `w-full rounded-md border px-3 py-2 text-xs outline-none transition-colors ${theme.inputBg} ${
      errors[field] ? "border-rose-500/60" : theme.inputBorder
    }`;

  return (
    <form onSubmit={handleSubmit} className={`rounded-lg border p-6 sm:p-8 ${theme.border} ${theme.card}`}>
      <p className={`text-sm mb-5 ${theme.textBody}`}>
        Open to internship and entry-level frontend roles — send a message and it&apos;ll open in
        your mail client, prefilled and ready to send.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={`block text-[11px] mb-1.5 ${theme.textDim}`} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className={fieldClass("name")}
          />
          {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className={`block text-[11px] mb-1.5 ${theme.textDim}`} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@email.com"
            className={fieldClass("email")}
          />
          {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="mt-4">
        <label className={`block text-[11px] mb-1.5 ${theme.textDim}`} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={form.message}
          onChange={update("message")}
          placeholder="What would you like to say?"
          className={fieldClass("message")}
        />
        {errors.message && <p className="text-[11px] text-rose-500 mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className={`mt-5 flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold transition-colors ${theme.btnPrimary}`}
      >
        {sent ? (
          <>
            <Check className="w-3.5 h-3.5" /> Message ready
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" /> Send message
          </>
        )}
      </button>
    </form>
  );
}
