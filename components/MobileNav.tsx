"use client";

import { useEffect, useId, useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const id = useId();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center rounded-md bg-secondary ring-1 ring-white/10 px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors"
      >
        <span className="sr-only">Toggle menu</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      {open && (
        <div className="fixed inset-0 z-30">
          <div className="absolute inset-0 bg-[#202636]/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div
            id={id}
            className="absolute right-4 top-16 w-[min(90vw,320px)] rounded-xl bg-secondary ring-1 ring-white/10 p-4 text-sm text-white shadow-xl"
          >
            <nav className="flex flex-col gap-2">
              <a href="#services" onClick={() => setOpen(false)} className="rounded-md hover:bg-white/10 px-3 py-2 transition-colors">Services</a>
              <a href="#work" onClick={() => setOpen(false)} className="rounded-md hover:bg-white/10 px-3 py-2 transition-colors">Work</a>
              <a href="#contact" onClick={() => setOpen(false)} className="rounded-md hover:bg-white/10 px-3 py-2 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}


