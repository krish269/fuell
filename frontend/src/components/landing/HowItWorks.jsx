import React from "react";
import { motion } from "framer-motion";
import { Lock, Flame, Trophy } from "lucide-react";
import { HOW_IT_WORKS } from "@/data/landing";

const ICON_MAP = { Lock, Flame, Trophy };

const HowItWorks = () => (
  <section
    id="how"
    data-testid="how-section"
    className="relative py-24 lg:py-32 px-6 bg-[#0A0A0A] border-y-2 border-[#D4FF00]/20"
  >
    <div className="max-w-7xl mx-auto">
      <div className="mb-16">
        <div className="font-mono-display text-xs uppercase tracking-[0.3em] text-[#D4FF00] mb-4">
          [ THE METHOD ]
        </div>
        <h2 className="font-anton text-5xl md:text-7xl uppercase leading-[0.9] tracking-tighter text-white">
          How Fuel <span className="marker-red">rewires</span> your brain
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {HOW_IT_WORKS.map((step, i) => {
          const Icon = ICON_MAP[step.icon];
          return (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`how-step-${i + 1}`}
              className="relative bg-[#111111] border-2 border-white/10 p-8 hover:border-[#D4FF00] transition-colors group"
            >
              <div className="font-anton text-9xl text-stroke leading-none mb-4 group-hover:text-[#D4FF00] group-hover:[-webkit-text-stroke:0] transition-all">
                {step.num}
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Icon size={28} className="text-[#D4FF00]" strokeWidth={2.5} />
                <h3 className="font-anton text-3xl uppercase text-white">{step.title}</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default HowItWorks;
