
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 z-10 reveal">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">About Me</span>
        </h2>
        <div className="max-w-3xl mx-auto bg-purple-900/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
          <p className="text-lg mb-6">
            I consider myself a code-poet who writes elegant solutions by day and debugs mysterious errors by night. ☕ When I'm not staring at a screen wondering why my code works (or doesn't), I'm probably exploring new technologies or explaining to my friends why tabs are superior to spaces. 🤓
          </p>
          <p className="text-lg">
            Beyond tech, I've dedicated 240+ hours to community service, mobilized awareness programs for 3,000+ people, and managed large-scale events—sharpening my communication, leadership, and problem-solving skills along the way. ✨ Let's build something amazing together! 🔥
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
