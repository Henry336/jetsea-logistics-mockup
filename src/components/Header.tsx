"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/88 backdrop-blur-md border-b border-slate-border">
      <div className="max-w-[1240px] mx-auto px-8 h-[74px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center no-underline">
          <Logo height={50} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-[34px]">
          {["Services", "About", "Network", "Track"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-body-text no-underline text-[15px] font-medium hover:text-azure transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-navy-800 text-white no-underline text-[14.5px] font-semibold px-5 py-[11px] rounded-md hover:bg-azure hover:-translate-y-px transition-all duration-200"
          >
            Get a Quote
            <span className="font-mono">→</span>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-navy-700 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-navy-700 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-navy-700 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-border px-8 py-4 flex flex-col gap-4">
          {["Services", "About", "Network", "Track"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-body-text no-underline text-[15px] font-medium hover:text-azure transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#quote"
            className="inline-flex items-center gap-2 bg-navy-800 text-white no-underline text-[14.5px] font-semibold px-5 py-[11px] rounded-md hover:bg-azure transition-colors w-fit"
            onClick={() => setMenuOpen(false)}
          >
            Get a Quote <span className="font-mono">→</span>
          </a>
        </div>
      )}
    </header>
  );
}
