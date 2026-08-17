import { useEffect, useState } from "react";

export function useActiveSection(navItems) {
  const [active, setActive] = useState(navItems[0]?.id ?? "");

  useEffect(() => {
    const handler = () => {
      let current = navItems[0]?.id ?? "";

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element && element.getBoundingClientRect().top < 140) {
          current = item.id;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();

    return () => window.removeEventListener("scroll", handler);
  }, [navItems]);

  return active;
}
