
import React from "react";
import { Code, Server, Globe, Database, Cpu, Terminal, Laptop, CloudCog } from "lucide-react";

// Skills data with icons
const skills = [
  { name: "JavaScript", icon: <Code className="h-6 w-6 text-yellow-400" /> },
  { name: "React", icon: <Globe className="h-6 w-6 text-blue-400" /> },
  { name: "Node.js", icon: <Server className="h-6 w-6 text-green-400" /> },
  { name: "TypeScript", icon: <Code className="h-6 w-6 text-blue-600" /> },
  { name: "HTML/CSS", icon: <Laptop className="h-6 w-6 text-orange-400" /> },
  { name: "PostgreSQL", icon: <Database className="h-6 w-6 text-blue-300" /> },
  { name: "Python", icon: <Terminal className="h-6 w-6 text-yellow-300" /> },
  { name: "AWS", icon: <CloudCog className="h-6 w-6 text-orange-300" /> },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center reveal">
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">My Skills ✨</span>
        </h2>
        <div className="max-w-3xl mx-auto bg-purple-900/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group text-center p-4 hover:bg-purple-800/30 rounded-lg transition-colors duration-300">
                <div className="flex flex-col items-center">
                  <div className="mb-3 p-3 bg-purple-900/40 rounded-full">{skill.icon}</div>
                  <span className="text-white font-medium">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
