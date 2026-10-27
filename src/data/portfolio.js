export const NAV = [
  { id: "about", label: "about.js" },
  { id: "experience", label: "experience.js" },
  { id: "skills", label: "skills.js" },
  { id: "projects", label: "projects.js" },
  { id: "certs", label: "certificate.js" },
  { id: "contact", label: "contact.js" },
];

export const EXPERIENCE = [
  {
    role: "Web Development Intern",
    company: "Employment Express Verband LLP",
    duration: "Aug 2026 – Present",
    bullets: [
      "Contributed to building Mylat, a new company product from the ground up, focusing on frontend development and UI implementation.",
      "Developed a responsive landing page for Annadhara Nepal's flood-relief campaign, creating a campaign-focused web experience.",
      "Developed and integrated a blog page for AtRisk AI, supporting content publishing and improving website content organization.",
      "Redesigned the Anitech website UI, improving page layouts, navigation, visual consistency, and responsive behavior across devices.",
      "Conducted technical and on-page SEO audits for AtRisk AI using Screaming Frog, identifying issues related to metadata, broken links, redirects, indexing, and site structure.",
      "Audited website usability, accessibility, and frontend quality, implementing fixes to improve responsiveness and user experience."
    ],
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "SEO",
      "Screaming Frog",
    ],
  },
];

export const PROJECTS = [
  {
    name: "ForgeFlow",
    tagline: "AI LinkedIn content automation platform",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "BullMQ", "Redis", "LinkedIn API"],
    bullets: [
      "Full-stack platform to create, manage, schedule and publish LinkedIn posts from one workspace",
      "AI content generation with tunable audience, tone, creativity, length and hashtags",
      "JWT auth + LinkedIn OAuth 2.0 with protected routes and token management",
      "BullMQ + Redis background jobs for scheduled, asynchronous publishing",
    ],
    demo: "https://forgeflow01.vercel.app/",
  },
  {
    name: "QuickBite",
    tagline: "Food ordering web app",
    stack: ["React.js", "JavaScript", "CSS"],
    bullets: [
      "Scalable ordering app with a modular, component-based architecture",
      "Dynamic product listings and cart state managed via React hooks",
      "Rendering optimized with hooks for smoother performance",
      "Fully responsive UI across mobile, tablet and desktop",
    ],
    demo: "https://quickbite01.vercel.app/",
  },
  {
    name: "Convox",
    tagline: "Real-time chat platform",
    stack: ["React.js", "Socket.IO", "Node.js", "Express.js"],
    bullets: [
      "Real-time, bidirectional chat built on Socket.IO",
      "Live messaging, typing indicators and presence via WebSockets",
      "Responsive chat UI with state handled through React hooks",
      "Frontend on Vercel, backend deployed separately with CORS configured",
    ],
    demo: "https://convox01.vercel.app/",
  },
];

export const SKILLS = [
  { group: "Frontend", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)"] },
  { group: "Backend", items: ["Node.js", "Express.js", "REST APIs"] },
  { group: "Programming", items: ["C", "C++", "JavaScript"] },
  { group: "Tools", items: ["Git", "GitHub", "Vercel"] },
];

export const CERTS = [
  {
    name: "Namaste React Certification",
    detail: "React.js — hooks, component architecture, performance optimization",
    link: "#",
  },
  {
    name: "AI-ML Virtual Internship (Google & AICTE)",
    detail: "Foundational AI/ML concepts with practical applications",
    link: "#",
  },
  {
    name: "IBM AI Certification",
    detail: "Foundational AI/ML concepts with practical applications",
    link: "#",
  },
];

export const CONTACT_EMAIL = "kush.bhardwaj.dev@outlook.com";
export const CONTACT_PHONE = "+91-9758886745";

export const SOCIAL_LINKS = {
  github: "https://github.com/kushB645",
  linkedin: "https://linkedin.com/in/kushbhardwaj01",
};
