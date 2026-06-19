import React from "react";
import { ASSETS, TRAJECTORY_STATS } from "@/data/landing";
import PhoneMockup from "./PhoneMockup";

const TrajectorySection = () => (
  <section
    id="trajectory"
    data-testid="trajectory-section"
    className="relative bg-[#D4FF00] text-black py-24 lg:py-32 px-6 overflow-hidden grain"
  >
    <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="font-mono-display text-xs uppercase tracking-[0.3em] mb-6">
          [ TRAJECTORY ANALYSIS ]
        </div>

        <h2 className="font-anton text-6xl md:text-7xl uppercase leading-[0.85] tracking-tighter">
          Reclaim
        </h2>

        <div
          data-testid="trajectory-figure"
          className="font-anton text-[28vw] md:text-[18vw] lg:text-[15vw] leading-[0.85] tracking-tighter text-black"
        >
          $54,750
        </div>

        <div className="font-anton text-4xl md:text-5xl uppercase leading-none">
          of wasted time. Per year.
        </div>

        <p className="mt-8 text-lg md:text-xl font-medium max-w-xl">
          Your attention is your single most valuable asset. Fuel shows you the dollar value of every hour you reclaim — and the compound trajectory of a life off the algorithm.
        </p>

        <div className="mt-10 flex flex-wrap gap-8">
          {TRAJECTORY_STATS.map((stat) => (
            <div
              key={stat.label}
              data-testid={`stat-${stat.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            >
              <div className="font-anton text-5xl">{stat.value}</div>
              <div className="font-mono-display text-xs uppercase tracking-[0.2em] opacity-70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <PhoneMockup src={ASSETS.phones.home} className="max-w-sm" tilt={3} />
      </div>
    </div>
  </section>
);

export default TrajectorySection;
