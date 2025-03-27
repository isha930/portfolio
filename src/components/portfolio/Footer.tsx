
import React from "react";
import { Linkedin, Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-purple-500/20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.linkedin.com/in/isha-durge-929b75278/" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors">
            <Github size={24} />
          </a>
          <a href="mailto:ishadurge7@gmail.com" className="hover:text-fuchsia-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Isha Durge. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Built with <Heart size={14} className="inline text-fuchsia-400" /> using React & Three.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
