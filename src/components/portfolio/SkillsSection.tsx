import React from "react";
import {
  Code,
  Server,
  Globe,
  Database,
  Cpu,
  Terminal,
  Laptop,
  CloudCog,
  GitBranch,
  Layers,
  FileCode,
  ShieldCheck,
  Settings,
  Cloud,
  Package,
  Network,
  Zap
} from "lucide-react";

/* ===================== SKILLS DATA ===================== */

const skills = [
  {
    category: "Languages",
    items: [
      { name: "C#", icon: <Code className="h-5 w-5 text-purple-400" /> },
      { name: "JavaScript (ES6+)", icon: <Code className="h-5 w-5 text-yellow-400" /> },
      { name: "Java", icon: <Cpu className="h-5 w-5 text-red-400" /> },
      { name: "Python", icon: <Terminal className="h-5 w-5 text-yellow-300" /> },
      { name: "C", icon: <FileCode className="h-5 w-5 text-gray-400" /> },
      { name: "SQL", icon: <Database className="h-5 w-5 text-blue-300" /> }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: <Globe className="h-5 w-5 text-blue-400" /> },
      { name: "Tailwind CSS", icon: <Layers className="h-5 w-5 text-teal-400" /> },
      { name: "HTML5", icon: <Laptop className="h-5 w-5 text-orange-400" /> },
      { name: "CSS3", icon: <Laptop className="h-5 w-5 text-blue-400" /> },
      { name: "Material UI", icon: <Layers className="h-5 w-5 text-indigo-400" /> },
      { name: "Bootstrap", icon: <Layers className="h-5 w-5 text-purple-400" /> },
      { name: "Vite", icon: <Zap className="h-5 w-5 text-purple-500" /> }
    ]
  },
  {
    category: "Backend & APIs",
    items: [
      { name: "ASP.NET Core", icon: <Server className="h-5 w-5 text-purple-400" /> },
      { name: ".NET Core", icon: <Settings className="h-5 w-5 text-indigo-400" /> },
      { name: "Node.js", icon: <Server className="h-5 w-5 text-green-400" /> },
      { name: "Express.js", icon: <Network className="h-5 w-5 text-gray-400" /> },
      { name: "REST APIs", icon: <Network className="h-5 w-5 text-blue-400" /> },
      { name: "JWT / OAuth", icon: <ShieldCheck className="h-5 w-5 text-blue-500" /> }
    ]
  },
  {
    category: "Databases & Tools",
    items: [
      { name: "SQL Server", icon: <Database className="h-5 w-5 text-red-400" /> },
      { name: "PostgreSQL", icon: <Database className="h-5 w-5 text-blue-300" /> },
      { name: "Git", icon: <GitBranch className="h-5 w-5 text-orange-400" /> },
      { name: "Postman", icon: <Package className="h-5 w-5 text-orange-500" /> },
      { name: "Firebase", icon: <Cloud className="h-5 w-5 text-yellow-400" /> },
      { name: "Azure", icon: <CloudCog className="h-5 w-5 text-blue-500" /> },
      { name: "Vercel", icon: <CloudCog className="h-5 w-5 text-white" /> }
    ]
  }
];

/* ===================== COMPONENT ===================== */

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="max-w-5xl mx-auto bg-purple-900/15 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
          {skills.map((skillCategory, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold text-purple-300 mb-3">
                {skillCategory.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg bg-purple-800/20 hover:bg-purple-800/35 transition"
                  >
                    <div className="p-2 bg-purple-900/40 rounded-md">
                      {skill.icon}
                    </div>
                    <span className="text-sm text-white font-medium">
                      {skill.name}
                    </span>
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
