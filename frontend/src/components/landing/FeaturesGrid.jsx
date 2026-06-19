import React from "react";
import { motion } from "framer-motion";
import { ASSETS, FEATURES } from "@/data/landing";
import PhoneMockup from "./PhoneMockup";

const FeatureCard = ({ feature }) => {
  const isLime = feature.accent === "lime";
  const borderColor = isLime ? "border-[#D4FF00]" : "border-[#FF2D2D]";
  const tagColor = isLime ? "bg-[#D4FF00]" : "bg-[#FF2D2D]";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
      data-testid={`feature-${feature.id}`}
      className={`relative bg-[#111111] border-2 ${borderColor} overflow-hidden ${
        feature.large ? "md:col-span-2" : ""
      }`}
    >
      <div
        className={`p-6 lg:p-8 gap-6 lg:gap-8 h-full ${
          feature.large ? "flex flex-col md:flex-row md:items-center" : "flex flex-col"
        }`}
      >
        <div className={`flex flex-col ${feature.large ? "md:flex-1" : ""}`}>
          <div className="font-mono-display text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-3">
            // FEATURE
          </div>
          <h3
            className={`font-anton uppercase tracking-tight leading-[0.95] text-white ${
              feature.large ? "text-3xl md:text-4xl lg:text-5xl" : "text-2xl md:text-3xl"
            }`}
          >
            {feature.title}
          </h3>
          <p className="mt-4 text-zinc-400 leading-relaxed text-sm md:text-base">
            {feature.desc}
          </p>
        </div>

        <div
          className={`flex justify-center ${
            feature.large ? "md:flex-1 md:max-w-md" : "mt-4"
          }`}
        >
          <PhoneMockup
            src={ASSETS.phones[feature.image]}
            alt={feature.title}
            className={feature.large ? "max-h-[480px]" : "max-h-[340px]"}
          />
        </div>
      </div>

      <div className={`absolute top-0 right-0 ${tagColor} text-black font-anton px-3 py-1 text-xs uppercase`}>
        ◆
      </div>
    </motion.article>
  );
};

const FeaturesGrid = () => (
  <section
    id="features"
    data-testid="features-section"
    className="relative bg-[#0A0A0A] py-24 lg:py-32 px-6"
  >
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 max-w-3xl">
        <div className="font-mono-display text-xs uppercase tracking-[0.3em] text-[#D4FF00] mb-4">
          [ MEET FUEL ]
        </div>
        <h2 className="font-anton text-5xl md:text-7xl lg:text-8xl uppercase leading-[0.9] tracking-tighter text-white">
          Your new <span className="marker-lime">trajectory</span><br />
          starts here.
        </h2>
        <p className="mt-6 text-lg text-zinc-400 max-w-2xl">
          Fuel isn&apos;t another guilt-trip screen time app. It&apos;s a complete dopamine detox engine
          that uses cognitive behavioral psychology to{" "}
          <span className="text-[#D4FF00] font-bold">rewire your habits</span> — selectively locking the addictive bits while keeping your phone useful.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGrid;
