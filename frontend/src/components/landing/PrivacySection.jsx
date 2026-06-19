import React from "react";
import { ShieldCheck } from "lucide-react";
import { PRIVACY_BADGES } from "@/data/landing";

const PrivacySection = () => (
  <section
    data-testid="privacy-section"
    className="py-24 lg:py-32 px-6 bg-[#0A0A0A]"
  >
    <div className="max-w-5xl mx-auto">
      <div className="border-2 border-[#D4FF00] p-10 lg:p-16 relative bg-[#111111]">
        <ShieldCheck size={56} strokeWidth={2.5} className="text-[#D4FF00] mb-8" />
        <div className="font-mono-display text-xs uppercase tracking-[0.3em] text-[#D4FF00] mb-4">
          [ PRIVACY FIRST ]
        </div>
        <h2 className="font-anton text-5xl md:text-6xl uppercase leading-[0.9] tracking-tighter text-white">
          Your data is <span className="marker-lime">your data.</span>
        </h2>
        <p className="mt-6 text-lg text-zinc-300 max-w-2xl leading-relaxed">
          Fuel operates securely on your device. We don&apos;t track your browsing history. We don&apos;t spy on your usage.
          You&apos;re reclaiming your privacy while reclaiming your focus.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {PRIVACY_BADGES.map((badge) => (
            <span
              key={badge}
              className="font-mono-display text-xs uppercase tracking-[0.2em] bg-black border border-[#D4FF00]/40 text-[#D4FF00] px-3 py-2"
            >
              ✓ {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default PrivacySection;
