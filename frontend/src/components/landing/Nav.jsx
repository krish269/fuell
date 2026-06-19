import React from "react";
import { Apple } from "lucide-react";
import { ASSETS, APP_STORE_URL } from "@/data/landing";

const NAV_LINKS = [
  { id: "features", label: "Features" },
  { id: "how", label: "Method" },
  { id: "who", label: "Who" },
  { id: "trajectory", label: "Trajectory" },
];

const Nav = () => (
  <nav
    data-testid="main-nav"
    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0A0A0A]/80 border-b border-[#D4FF00]/20"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
      <a href="#top" data-testid="nav-logo" className="flex items-center gap-3">
        <img
          src={ASSETS.logo}
          alt="Fuel"
          className="w-10 h-10 rounded-xl border-2 border-black"
        />
        <span className="font-anton text-2xl uppercase text-white tracking-tight">
          FUEL
        </span>
      </a>

      <div className="hidden md:flex items-center gap-8 font-mono-display text-xs uppercase tracking-[0.2em] text-zinc-400">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            data-testid={`nav-${link.id}`}
            className="hover:text-[#D4FF00] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noreferrer"
        data-testid="nav-cta-download"
        className="inline-flex items-center gap-2 bg-[#D4FF00] text-black font-anton uppercase text-sm md:text-base px-4 md:px-6 py-2.5 border-2 border-[#D4FF00] hover:bg-black hover:text-[#D4FF00] transition-all shadow-[4px_4px_0px_0px_#FF2D2D] active:translate-y-1 active:shadow-[1px_1px_0px_0px_#FF2D2D]"
      >
        <Apple size={18} /> Get Fuel
      </a>
    </div>
  </nav>
);

export default Nav;
