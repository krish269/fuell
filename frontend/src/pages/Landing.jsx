import React, { useEffect } from "react";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import ProblemSection from "@/components/landing/ProblemSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import HowItWorks from "@/components/landing/HowItWorks";
import WhoForSection from "@/components/landing/WhoForSection";
import TrajectorySection from "@/components/landing/TrajectorySection";
import PrivacySection from "@/components/landing/PrivacySection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Landing = () => {
  useEffect(() => {
    document.title = "Fuel — Stop Doomscrolling. Start Winning.";
  }, []);

  return (
    <main className="bg-[#0A0A0A] text-white min-h-screen">
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
    </main>
  );
};

export default Landing;
