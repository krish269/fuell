import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Zap, Target, Trophy, Flame, ShieldCheck, Brain,
  ArrowRight, Apple, Play, Sparkles, Lock, Activity,
  TrendingUp, ChevronDown, Camera, Award
} from "lucide-react";

const ASSETS = {
  appIcon: "https://customer-assets.emergentagent.com/job_fuel-timer-1/artifacts/2801rdtu_image.png",
  // screensA = Stop Doomscroll, Spend Fuel, Clean Feeds, Habits (panels 0..3)
  screensA: "https://customer-assets.emergentagent.com/job_fuel-timer-1/artifacts/tdxmxcpi_image.png",
  // screensB = Habits, Auto-Count Reps, Challenges, Trajectory (panels 0..3)
  screensB: "https://customer-assets.emergentagent.com/job_fuel-timer-1/artifacts/2zajq520_image.png",
};

const APP_STORE_URL = "https://apps.apple.com/in/app/fuel-screen-time-control/id6768048960";

// Each collage image contains 4 phone panels horizontally.
// We use bg-position to crop to a single phone panel.
// Container aspect needs to be ~ 0.5 (height : width) of single panel.
const PhoneCrop = ({ src, panel = 0, total = 4, className = "" }) => {
  // Each panel = 25% width. To show one panel, we scale background 400% wide.
  const positionX = (panel / (total - 1)) * 100;
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: `${total * 100}% 100%`,
        backgroundPosition: `${positionX}% 50%`,
        backgroundRepeat: "no-repeat",
      }}
      role="img"
    />
  );
};

const MarqueeStrip = () => (
  <div
    data-testid="hero-marquee"
    className="relative bg-[#D4FF00] text-black border-y-4 border-black overflow-hidden -rotate-2 my-4 z-20"
  >
    <div className="flex animate-marquee whitespace-nowrap py-3 font-anton text-3xl md:text-4xl uppercase tracking-wider">
      {Array.from({ length: 2 }).map((_, dup) => (
        <div key={dup} className="flex shrink-0">
          {[
            "STOP DOOMSCROLLING",
            "★",
            "EARN FUEL",
            "★",
            "BLOCK THE BRAINROT",
            "★",
            "BUILD STREAKS",
            "★",
            "RECLAIM YOUR LIFE",
            "★",
            "75 HARD READY",
            "★",
          ].map((t, i) => (
            <span key={`${dup}-${i}`} className="mx-6">{t}</span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const Nav = () => (
  <nav
    data-testid="main-nav"
    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0A0A0A]/80 border-b border-[#D4FF00]/20"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
      <a href="#top" data-testid="nav-logo" className="flex items-center gap-3">
        <img src={ASSETS.appIcon} alt="Fuel" className="w-10 h-10 rounded-xl border-2 border-black" />
        <span className="font-anton text-2xl uppercase text-white tracking-tight">FUEL</span>
      </a>
      <div className="hidden md:flex items-center gap-8 font-mono-display text-xs uppercase tracking-[0.2em] text-zinc-400">
        <a href="#features" data-testid="nav-features" className="hover:text-[#D4FF00] transition-colors">Features</a>
        <a href="#how" data-testid="nav-how" className="hover:text-[#D4FF00] transition-colors">Method</a>
        <a href="#who" data-testid="nav-who" className="hover:text-[#D4FF00] transition-colors">Who</a>
        <a href="#trajectory" data-testid="nav-trajectory" className="hover:text-[#D4FF00] transition-colors">Trajectory</a>
      </div>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noreferrer"
        data-testid="nav-cta-download"
        className="inline-flex items-center gap-2 bg-[#D4FF00] text-black font-anton uppercase text-sm md:text-base px-4 md:px-6 py-2.5 border-2 border-[#D4FF00] hover:bg-black hover:text-[#D4FF00] transition-all shadow-[4px_4px_0px_0px_#FF2D2D] active:translate-y-1 active:shadow-[1px_1px_0px_0px_#FF2D2D]"
      >
        <Apple size={18} /> Get Fuel
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section
    id="top"
    data-testid="hero-section"
    className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-16 px-6 overflow-hidden bg-[#0A0A0A]"
  >
    {/* Background gradient sphere */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[#D4FF00] opacity-[0.07] blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#FF2D2D] opacity-[0.08] blur-3xl" />
    </div>

    <div className="relative max-w-7xl mx-auto text-center z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        data-testid="hero-badge"
        className="inline-flex items-center gap-2 border-2 border-[#D4FF00] bg-black px-4 py-2 mb-8 font-mono-display text-xs uppercase tracking-[0.25em] text-[#D4FF00]"
      >
        <Sparkles size={14} className="text-[#FF2D2D]" />
        The Dopamine Detox Engine
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        data-testid="hero-heading"
        className="font-anton text-[14vw] md:text-[10vw] lg:text-[9rem] xl:text-[11rem] leading-[0.82] tracking-tighter uppercase text-white"
      >
        STOP <br className="md:hidden" /> DOOM<span className="text-[#FF2D2D]">SCROLL</span>ING.
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
        Lock out the addictive features inside your apps. Earn <span className="text-[#D4FF00] font-bold">FUEL</span> for staying focused.
        Level up your habits. Your streak starts now.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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

      {/* Hero phone showcase */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7 }}
        className="mt-20 relative"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, rotate: i % 2 ? 1.5 : -1.5 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="aspect-[1/2] bg-[#D4FF00] border-2 border-black shadow-brutal-black overflow-hidden"
              data-testid={`hero-phone-${i}`}
            >
              <PhoneCrop src={ASSETS.screensA} panel={i} className="w-full h-full" />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="mt-12 font-mono-display text-xs uppercase tracking-[0.3em] text-zinc-500">
        Free · iPhone · No data tracking
      </div>
    </div>

    <MarqueeStrip />
  </section>
);

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

const FeatureCard = ({ title, desc, screenshot, panel, large, testid, accent }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -6 }}
    data-testid={testid}
    className={`relative bg-[#111111] border-2 ${accent === 'red' ? 'border-[#FF2D2D]' : 'border-[#D4FF00]'} p-6 lg:p-8 flex flex-col overflow-hidden ${large ? "md:col-span-2 md:row-span-2" : ""}`}
  >
    <div className="flex-1 flex flex-col">
      <div className="font-mono-display text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-3">
        // FEATURE
      </div>
      <h3 className={`font-anton uppercase ${large ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"} tracking-tight leading-[0.95] text-white`}>
        {title}
      </h3>
      <p className="mt-4 text-zinc-400 leading-relaxed text-sm md:text-base">
        {desc}
      </p>
    </div>
    {screenshot && (
      <div className={`mt-6 relative ${large ? "h-[480px]" : "h-[320px]"} bg-[#D4FF00] border-2 border-black overflow-hidden`}>
        <PhoneCrop src={screenshot} panel={panel} className="w-full h-full" />
      </div>
    )}
    {/* corner tag */}
    <div className={`absolute top-0 right-0 ${accent === 'red' ? 'bg-[#FF2D2D]' : 'bg-[#D4FF00]'} text-black font-anton px-3 py-1 text-xs uppercase`}>
      ◆
    </div>
  </motion.div>
);

const FeaturesGrid = () => (
  <section id="features" data-testid="features-section" className="relative bg-[#0A0A0A] py-24 lg:py-32 px-6">
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
          that uses cognitive behavioral psychology to <span className="text-[#D4FF00] font-bold">rewire your habits</span> — selectively locking the addictive bits while keeping your phone useful.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <FeatureCard
          testid="feature-targeted-blocking"
          large
          title="Targeted Distraction Blocking"
          desc="Stop the brainrot at the source. Fuel hides Reels, Shorts, Explore, and For-You feeds — but keeps the utility intact. Check a DM without accidentally scrolling for 45 minutes. Your phone becomes a tool again. Not a slot machine."
          screenshot={ASSETS.screensA}
          panel={2}
          accent="lime"
        />
        <FeatureCard
          testid="feature-earn-fuel"
          title="Earn Fuel For Focus"
          desc="Every reclaimed hour is converted into FUEL. Your focus literally pays off."
          screenshot={ASSETS.screensA}
          panel={0}
          accent="red"
        />
        <FeatureCard
          testid="feature-spend-fuel"
          title="Spend Fuel To Browse"
          desc="Want 10 minutes of TikTok? It'll cost you. Pick 5, 10, or 15 minutes — then get back to life."
          screenshot={ASSETS.screensA}
          panel={1}
          accent="lime"
        />
        <FeatureCard
          testid="feature-habits"
          title="Choose Your Go-To Habits"
          desc="Hydration. Steps. Workouts. Reading. Journaling. Deep work. Build the stack that builds you."
          screenshot={ASSETS.screensB}
          panel={0}
          accent="lime"
        />
        <FeatureCard
          testid="feature-camera-reps"
          title="Auto-Count Reps With Camera"
          desc="Pose-tracking AI counts your pushups, squats and form. No cheating yourself."
          screenshot={ASSETS.screensB}
          panel={1}
          accent="red"
        />
        <FeatureCard
          testid="feature-challenges"
          large
          title="Commit With Built-In Challenges"
          desc="75 Hard. 75 Soft. 30 Hard. Choose your track and prove yourself for 30 or 75 days straight. Earn medals, build streaks, and become someone who finishes what they start."
          screenshot={ASSETS.screensB}
          panel={2}
          accent="lime"
        />
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    { num: "01", title: "BLOCK", desc: "Granular control. Hide the toxic features inside Instagram, TikTok, YouTube, X. Keep the parts that actually help.", icon: Lock },
    { num: "02", title: "EARN", desc: "Stay off the distractions. Log real-world habits. Every reclaimed hour converts into Fuel currency.", icon: Flame },
    { num: "03", title: "LEVEL UP", desc: "Spend Fuel mindfully. Take on 30-day and 75-day challenges. Watch your trajectory bend upward.", icon: Trophy },
  ];
  return (
    <section id="how" data-testid="how-section" className="relative py-24 lg:py-32 px-6 bg-[#0A0A0A] border-y-2 border-[#D4FF00]/20">
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
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`how-step-${i + 1}`}
                className="relative bg-[#111111] border-2 border-white/10 p-8 hover:border-[#D4FF00] transition-colors group"
              >
                <div className="font-anton text-9xl text-stroke leading-none mb-4 group-hover:text-[#D4FF00] group-hover:[-webkit-text-stroke:0] transition-all">
                  {s.num}
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={28} className="text-[#D4FF00]" strokeWidth={2.5} />
                  <h3 className="font-anton text-3xl uppercase text-white">{s.title}</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const WhoForSection = () => {
  const personas = [
    { tag: "STUDENTS", body: "Reclaim your focus during midterms. Stop letting shorts and reels destroy your study sessions.", icon: Brain },
    { tag: "PROFESSIONALS", body: "Protect your deep work. Maximize your productivity. Get more done in less time.", icon: Activity },
    { tag: "ADHD MINDS", body: "Remove the algorithmic traps that make executive dysfunction worse. Built for your brain.", icon: Zap },
    { tag: "YOU", body: "If you're tired of looking at your screen time report and feeling dread — Fuel was built for you.", icon: Target },
  ];
  return (
    <section id="who" data-testid="who-section" className="bg-[#0A0A0A] py-24 lg:py-32 px-6">
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
          {personas.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                data-testid={`persona-${p.tag.toLowerCase().replace(' ', '-')}`}
                className={`group relative p-8 border-2 transition-all ${
                  i === 3
                    ? "bg-[#D4FF00] text-black border-black hover:shadow-brutal-red"
                    : "bg-[#111111] text-white border-white/10 hover:border-[#D4FF00] hover:shadow-brutal-lime"
                }`}
              >
                <Icon size={36} strokeWidth={2.5} className={i === 3 ? "text-black mb-6" : "text-[#D4FF00] mb-6"} />
                <div className={`font-anton text-3xl uppercase mb-3 tracking-tight`}>
                  {p.tag}
                </div>
                <p className={`text-sm leading-relaxed ${i === 3 ? "text-black/80 font-medium" : "text-zinc-400"}`}>
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const TrajectorySection = () => (
  <section
    id="trajectory"
    data-testid="trajectory-section"
    className="relative bg-[#D4FF00] text-black py-24 lg:py-32 px-6 overflow-hidden grain"
  >
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            <div data-testid="stat-wasted">
              <div className="font-anton text-5xl">1,825h</div>
              <div className="font-mono-display text-xs uppercase tracking-[0.2em] opacity-70">Wasted / yr</div>
            </div>
            <div data-testid="stat-reclaimed">
              <div className="font-anton text-5xl">1,095h</div>
              <div className="font-mono-display text-xs uppercase tracking-[0.2em] opacity-70">Reclaimed / yr</div>
            </div>
            <div data-testid="stat-streak">
              <div className="font-anton text-5xl">75 days</div>
              <div className="font-mono-display text-xs uppercase tracking-[0.2em] opacity-70">Challenge ready</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[1/2] max-w-sm mx-auto bg-black border-4 border-black shadow-brutal-red-lg overflow-hidden">
            <PhoneCrop src={ASSETS.screensB} panel={3} className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PrivacySection = () => (
  <section data-testid="privacy-section" className="py-24 lg:py-32 px-6 bg-[#0A0A0A]">
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
          {["On-Device", "No Tracking", "No Selling Data", "Apple Privacy Verified"].map((t) => (
            <span key={t} className="font-mono-display text-xs uppercase tracking-[0.2em] bg-black border border-[#D4FF00]/40 text-[#D4FF00] px-3 py-2">
              ✓ {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

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
        Break the cycle. Cure your digital addiction. Become completely unstoppable.
        Download Fuel today, reclaim your lost hours, and start your very first streak.
      </p>
      <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
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

const Footer = () => (
  <footer data-testid="footer" className="bg-black border-t-2 border-[#D4FF00]/20 px-6 py-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="flex items-center gap-3">
        <img src={ASSETS.appIcon} alt="Fuel" className="w-10 h-10 rounded-xl" />
        <div>
          <div className="font-anton text-2xl uppercase text-white tracking-tight leading-none">FUEL</div>
          <div className="font-mono-display text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-1">Focus · Habit · App Blocker</div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-6 font-mono-display text-xs uppercase tracking-[0.2em] text-zinc-400">
        <a
          href="https://www.usefuelapp.com/privacy"
          target="_blank"
          rel="noreferrer"
          data-testid="footer-privacy"
          className="hover:text-[#D4FF00] transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
          target="_blank"
          rel="noreferrer"
          data-testid="footer-eula"
          className="hover:text-[#D4FF00] transition-colors"
        >
          Terms (EULA)
        </a>
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noreferrer"
          data-testid="footer-appstore"
          className="hover:text-[#D4FF00] transition-colors"
        >
          App Store
        </a>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 font-mono-display text-[10px] uppercase tracking-[0.25em] text-zinc-600 text-center md:text-left">
      © 2026 Fuel — Built to break the cycle.
    </div>
  </footer>
);

const Landing = () => {
  useEffect(() => {
    document.title = "Fuel — Stop Doomscrolling. Start Winning.";
  }, []);
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <Nav />
      <Hero />
      <ProblemSection />
      <FeaturesGrid />
      <HowItWorks />
      <WhoForSection />
      <TrajectorySection />
      <PrivacySection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Landing;
