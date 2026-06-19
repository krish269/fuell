import React from "react";
import { MARQUEE_WORDS } from "@/data/landing";

const Marquee = () => (
  <div
    data-testid="hero-marquee"
    className="relative bg-[#D4FF00] text-black border-y-4 border-black overflow-hidden -rotate-2 my-4 z-20"
  >
    <div className="flex animate-marquee whitespace-nowrap py-3 font-anton text-3xl md:text-4xl uppercase tracking-wider">
      {[0, 1].map((dup) => (
        <div key={dup} className="flex shrink-0">
          {MARQUEE_WORDS.map((word, i) => (
            <span key={`${dup}-${i}`} className="mx-6">
              {word}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Marquee;
