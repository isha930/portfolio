
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 flex flex-col justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left pb-10 md:pb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="block">Hi, I'm Isha Durge</span>
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Full Stack Developer</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">Crafting elegant solutions with code ✨</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact">
              <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white border-none">
                Contact Me
              </Button>
            </a>
            <a href="#projects">
              <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-950">
                View My Work <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 blur-2xl opacity-30 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop"
              alt="Isha Durge"
              className="w-full h-full object-cover rounded-full border-4 border-purple-500/50 relative z-10"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a href="#about" className="animate-bounce">
          <ChevronDown size={32} className="text-white/70" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
