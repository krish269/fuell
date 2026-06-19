import React from "react";
import { ASSETS, APP_STORE_URL, PRIVACY_URL, EULA_URL } from "@/data/landing";

const FOOTER_LINKS = [
  { href: PRIVACY_URL, label: "Privacy Policy", testid: "footer-privacy" },
  { href: EULA_URL, label: "Terms (EULA)", testid: "footer-eula" },
  { href: APP_STORE_URL, label: "App Store", testid: "footer-appstore" },
];

const Footer = () => (
  <footer
    data-testid="footer"
    className="bg-black border-t-2 border-[#D4FF00]/20 px-6 py-12"
  >
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="flex items-center gap-3">
        <img src={ASSETS.logo} alt="Fuel" className="w-10 h-10 rounded-xl" />
        <div>
          <div className="font-anton text-2xl uppercase text-white tracking-tight leading-none">
            FUEL
          </div>
          <div className="font-mono-display text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-1">
            Focus · Habit · App Blocker
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-6 font-mono-display text-xs uppercase tracking-[0.2em] text-zinc-400">
        {FOOTER_LINKS.map((link) => (
          <a
            key={link.testid}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            data-testid={link.testid}
            className="hover:text-[#D4FF00] transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>

    <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 font-mono-display text-[10px] uppercase tracking-[0.25em] text-zinc-600 text-center md:text-left">
      © 2026 Fuel — Built to break the cycle.
    </div>
  </footer>
);

export default Footer;
