import React from "react";
import { motion } from "framer-motion";
import { Apple, ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { APP_STORE_URL, ASSETS } from "@/data/landing";
import PhoneMockup from "./PhoneMockup";
import Marquee from "./Marquee";

const HERO_PHONES = [
  { src: ASSETS.phones.home, tilt: -3 },
  { src: ASSETS.phones.spendFuel, tilt: 2 },
  { src: ASSETS.phones.challenges, tilt: -2 },
  { src: ASSETS.phones.socialLite, tilt: 3 },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Hero = () => (
  <section
    id="top"
    data-testid="hero-section"
    className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-16 px-6 overflow-hidden bg-[#0A0A0A]"
  >
    {/* Ambient glow */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#D4FF00] opacity-[0.07] blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#FF2D2D] opacity-[0.08] blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto text-center z-10">
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6 }}
        data-testid="hero-badge"
        className="inline-flex items-center gap-2 border-2 border-[#D4FF00] bg-black px-4 py-2 mb-8 font-mono-display text-xs uppercase tracking-[0.25em] text-[#D4FF00]"
      >
        <Sparkles size={14} className="text-[#FF2D2D]" />
        The Dopamine Detox Engine
      </motion.div>

      <motion.h1
        {...fadeUp}
        transition={{ duration: 0.7, delay: 0.1 }}
        data-testid="hero-heading"
        className="font-anton text-[14vw] md:text-[10vw] lg:text-[9rem] xl:text-[11rem] leading-[0.82] tracking-tighter uppercase text-white"
      >
        STOP <br className="md:hidden" />
        DOOM<span className="text-[#FF2D2D]">SCROLL</span>ING.
        <br />
        START <span className="marker-lime">WINNING.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        data-testid="hero-subtitle"
        className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-zinc-300 leading-relaxed"
      >
        Lock out the addictive features inside your apps. Earn{" "}
        <span className="text-[#D4FF00] font-bold">FUEL</span> for staying focused. Level up your habits. Your streak starts now.
      </motion.p>

      <motion.div
        {...fadeUp}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-10 flex flex-col sm:flex-row gap-5 justify-center items-center"
      >
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noreferrer"
          data-testid="hero-cta-download"
          className="group inline-flex items-center gap-3 bg-[#D4FF00] text-black font-anton uppercase text-xl md:text-2xl px-8 py-5 border-2 border-[#D4FF00] hover:bg-black hover:text-[#D4FF00] transition-all shadow-[6px_6px_0px_0px_#FF2D2D] active:translate-y-1 active:shadow-[2px_2px_0px_0px_#FF2D2D]"
        >
          <Apple size={26} /> Download on App Store
          <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href="#how"
          data-testid="hero-cta-method"
          className="inline-flex items-center gap-2 text-white font-mono-display uppercase text-sm tracking-[0.2em] hover:text-[#D4FF00] transition-colors"
        >
          See the method <ChevronDown size={18} />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7 }}
        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto"
      >
        {HERO_PHONES.map((phone, i) => (
          <PhoneMockup
            key={i}
            src={phone.src}
            tilt={phone.tilt}
            data-testid={`hero-phone-${i}`}
          />
        ))}
      </motion.div>

      <div className="mt-12 font-mono-display text-xs uppercase tracking-[0.3em] text-zinc-500">
        Free · iPhone · No data tracking
      </div>
    </div>

    <Marquee />
  </section>
);

export default Hero;
