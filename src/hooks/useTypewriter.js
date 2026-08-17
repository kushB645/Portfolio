import { useEffect, useState } from "react";

export function useTypewriter(lines, speed = 18) {
  const [out, setOut] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      for (let li = 0; li < lines.length; li++) {
        const full = lines[li];

        for (let ci = 0; ci <= full.length; ci++) {
          if (cancelled) return;

          setOut((prev) => {
            const next = [...prev];
            next[li] = full.slice(0, ci);
            return next;
          });

          await new Promise((resolve) => setTimeout(resolve, speed));
        }
      }
    }

    run();

    return () => {
      cancelled = true;
    };
  }, [lines, speed]);

  return out;
}
