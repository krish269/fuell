import React from "react";
import { Apple, ArrowRight } from "lucide-react";
import { APP_STORE_URL } from "@/data/landing";

const FinalCTA = () => (
  <section
    data-testid="final-cta-section"
    className="relative py-32 px-6 bg-[#0A0A0A] text-center overflow-hidden"
  >
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#D4FF00] opacity-[0.06] blur-3xl" />
    </div>

    <div className="relative max-w-5xl mx-auto z-10">
      <div className="font-mono-display text-xs uppercase tracking-[0.3em] text-[#D4FF00] mb-6">
        [ STOP WAITING ]
      </div>

      <h2 className="font-anton text-6xl md:text-8xl lg:text-9xl uppercase leading-[0.85] tracking-tighter text-white">
        Start <span className="text-[#FF2D2D]">living.</span>
      </h2>

      <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-zinc-400">
        Break the cycle. Cure your digital addiction. Become completely unstoppable. Download Fuel today, reclaim your lost hours, and start your very first streak.
      </p>

      <div className="mt-12 flex justify-center">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noreferrer"
          data-testid="final-cta-download"
          className="group inline-flex items-center gap-3 bg-[#D4FF00] text-black font-anton uppercase text-2xl md:text-3xl px-10 py-6 border-2 border-[#D4FF00] hover:bg-black hover:text-[#D4FF00] transition-all shadow-[8px_8px_0px_0px_#FF2D2D] active:translate-y-1 active:shadow-[2px_2px_0px_0px_#FF2D2D]"
        >
          <Apple size={32} /> Get Fuel Now
          <ArrowRight size={26} className="group-hover:translate-x-2 transition-transform" />
        </a>
      </div>

      <div className="mt-8 font-mono-display text-xs uppercase tracking-[0.3em] text-zinc-500">
        Free · In-App Purchases · iPhone Only
      </div>
    </div>
  </section>
);

export default FinalCTA;
