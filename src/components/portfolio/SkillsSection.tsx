import React from "react";
import { 
  Code, Server, Globe, Database, Cpu, Terminal, Laptop, CloudCog, GitBranch, Layers, 
  FileCode, ShieldCheck, Settings, Cloud, Search, Package, Network , Zap
} from "lucide-react";

// Skills categorized with proper icons
const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript (ES6+)", icon: <Code className="h-6 w-6 text-yellow-400" /> },
      { name: "Python", icon: <Terminal className="h-6 w-6 text-yellow-300" /> },
      { name: "Java", icon: <Cpu className="h-6 w-6 text-red-400" /> },
      { name: "C", icon: <FileCode className="h-6 w-6 text-gray-400" /> },
      { name: "SQL", icon: <Database className="h-6 w-6 text-blue-300" /> },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: <Globe className="h-6 w-6 text-blue-400" /> },
      { name: "Tailwind CSS", icon: <Laptop className="h-6 w-6 text-teal-400" /> },
      { name: "HTML5", icon: <Laptop className="h-6 w-6 text-orange-400" /> },
      { name: "CSS3", icon: <Laptop className="h-6 w-6 text-blue-400" /> },
      { name: "Material-UI", icon: <Layers className="h-6 w-6 text-indigo-500" /> },
      { name: "Vite", icon: <Zap className="h-6 w-6 text-purple-500" /> },
      { name: "Bootstrap", icon: <Layers className="h-6 w-6 text-purple-400" /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <Server className="h-6 w-6 text-green-400" /> },
      { name: "Express.js", icon: <Network className="h-6 w-6 text-gray-400" /> },
      { name: "RESTful APIs", icon: <Network className="h-6 w-6 text-indigo-400" /> },
      { name: "JWT & OAuth 2.0", icon: <ShieldCheck className="h-6 w-6 text-blue-500" /> },
      { name: "WebSockets", icon: <Settings className="h-6 w-6 text-purple-500" /> },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: <GitBranch className="h-6 w-6 text-red-400" /> },
      { name: "PostgreSQL", icon: <Database className="h-6 w-6 text-blue-300" /> },
      { name: "Firebase", icon: <Cloud className="h-6 w-6 text-orange-400" /> },
      { name: "Vercel", icon: <CloudCog className="h-6 w-6 text-white" /> },
      { name: "Render", icon: <CloudCog className="h-6 w-6 text-indigo-400" /> },
      { name: "Azure", icon: <Cloud className="h-6 w-6 text-blue-500" /> },
      { name: "Postman", icon: <Package className="h-6 w-6 text-orange-500" /> },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center reveal">
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">My Skills ✨</span>
        </h2>
        <div className="max-w-4xl mx-auto bg-purple-900/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 reveal">
          {skills.map((skillCategory, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold text-purple-300 mb-4">{skillCategory.category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group text-center p-4 hover:bg-purple-800/30 rounded-lg transition-colors duration-300">
                    <div className="flex flex-col items-center">
                      <div className="mb-3 p-3 bg-purple-900/40 rounded-full">{skill.icon}</div>
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
