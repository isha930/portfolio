
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import useScrollAnimation from "@/hooks/useScrollAnimation";

// Import portfolio components
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import Background3D from "@/components/portfolio/Background3D";

const Index = () => {
  const isMobile = useIsMobile();
  
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-950 to-indigo-950 text-white">
      <Background3D isMobile={isMobile} />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
