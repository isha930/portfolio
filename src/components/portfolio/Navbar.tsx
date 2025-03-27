
import React from "react";
import { Linkedin, Github } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-purple-500/20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
          Isha Durge
        </a>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-fuchsia-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-fuchsia-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-fuchsia-400 transition-colors">Skills</a>
          <a href="#experience" className="hover:text-fuchsia-400 transition-colors">Experience</a>
          <a href="#contact" className="hover:text-fuchsia-400 transition-colors">Contact</a>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/isha-durge-929b75278/" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors">
            <Github size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
