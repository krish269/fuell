import React from "react";

const ProblemSection = () => (
  <section
    data-testid="problem-section"
    className="relative bg-[#FF2D2D] text-black py-32 px-6 overflow-hidden grain"
    style={{ clipPath: "polygon(0 3%, 100% 0, 100% 97%, 0 100%)" }}
  >
    <div className="max-w-6xl mx-auto relative z-10">
      <div className="font-mono-display text-xs uppercase tracking-[0.3em] mb-6 opacity-80">
        [ THE PROBLEM ]
      </div>

      <h2
        data-testid="problem-heading"
        className="font-anton text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] tracking-tighter"
      >
        THE ALGORITHM IS<br />
        <span className="marker-black">HIJACKING</span> YOUR BRAIN.
      </h2>

      <div className="mt-12 grid md:grid-cols-3 gap-8 text-lg md:text-xl font-medium">
        <p className="border-l-4 border-black pl-6">
          You open an app for <span className="font-black">&ldquo;just one minute&rdquo;</span> to check a message. An hour vanishes. You feel drained.
        </p>
        <p className="border-l-4 border-black pl-6">
          Social feeds are engineered by behavioral psychologists to drain your energy and feed you an endless loop of <span className="font-black">brainrot</span>.
        </p>
        <p className="border-l-4 border-black pl-6">
          This isn&apos;t your fault. Your phone has become a slot machine. <span className="font-black underline decoration-4">It&apos;s time to take your brain back.</span>
        </p>
      </div>
    </div>
  </section>
);

export default ProblemSection;
