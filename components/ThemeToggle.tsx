"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("theme") as Theme | null;
      if (saved === "dark") {
        applyDark();
        setTheme("dark");
      } else {
        applyLight();
        setTheme("light");
      }
    } catch {
      // noop
    }
  }, []);

  const applyLight = () => {
    const root = document.documentElement;
    root.setAttribute("data-theme", "light");
    root.classList.remove("dark");
  };

  const applyDark = () => {
    const root = document.documentElement;
    root.classList.add("dark");
    root.removeAttribute("data-theme");
  };

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "light") applyLight(); else applyDark();
    try { localStorage.setItem("theme", next); } catch { /* noop */ }
  };

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center rounded-md bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs font-medium text-white/90 hover:bg-white/10 transition-colors"
      aria-label="Toggle color theme"
    >
      {mounted ? (theme === "dark" ? "Light mode" : "Dark mode") : "Theme"}
    </button>
  );
}


