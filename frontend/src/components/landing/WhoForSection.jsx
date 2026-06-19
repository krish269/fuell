import React from "react";
import { motion } from "framer-motion";
import { Brain, Activity, Zap, Target } from "lucide-react";
import { PERSONAS } from "@/data/landing";

const ICON_MAP = { Brain, Activity, Zap, Target };

const WhoForSection = () => (
  <section
    id="who"
    data-testid="who-section"
    className="bg-[#0A0A0A] py-24 lg:py-32 px-6"
  >
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <h2 className="font-anton text-5xl md:text-7xl uppercase leading-[0.9] tracking-tighter text-white max-w-2xl">
          Built for <span className="marker-lime">anyone</span> who&apos;s done losing.
        </h2>
        <div className="font-mono-display text-xs uppercase tracking-[0.3em] text-zinc-500">
          [ WHO IS FUEL FOR? ]
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {PERSONAS.map((persona, i) => {
          const Icon = ICON_MAP[persona.icon];
          return (
            <motion.div
              key={persona.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              data-testid={`persona-${persona.tag.toLowerCase().replace(" ", "-")}`}
              className={`group relative p-8 border-2 transition-all ${
                persona.invert
                  ? "bg-[#D4FF00] text-black border-black hover:shadow-brutal-red"
                  : "bg-[#111111] text-white border-white/10 hover:border-[#D4FF00] hover:shadow-brutal-lime"
              }`}
            >
              <Icon
                size={36}
                strokeWidth={2.5}
                className={persona.invert ? "text-black mb-6" : "text-[#D4FF00] mb-6"}
              />
              <div className="font-anton text-3xl uppercase mb-3 tracking-tight">
                {persona.tag}
              </div>
              <p
                className={`text-sm leading-relaxed ${
                  persona.invert ? "text-black/80 font-medium" : "text-zinc-400"
                }`}
              >
                {persona.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhoForSection;
