
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
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Full Stack Developer 💻</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Oh, you know, just the usual—building and scaling full-stack applications, optimizing real-time systems, and integrating AI like a pro. 🤓 From handling 1,000+ concurrent users in a code editor to designing ultra-responsive APIs, I focus on performance, scalability, and seamless UX. Beyond tech, I've dedicated 240+ hours to community service, mobilized awareness programs for 3,000+ people, and managed large-scale events—sharpening my communication, leadership, and problem-solving skills along the way. 🚀
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact">
              <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white border-none">
                Contact Me 📧
              </Button>
            </a>
            <a href="#projects">
              <Button 
                variant="outline" 
                className="border-purple-500 bg-purple-900/40 text-white hover:bg-purple-800"
              >
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
