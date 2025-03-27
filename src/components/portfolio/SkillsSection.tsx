
import React from "react";

// Skills data
const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "TypeScript", level: 75 },
  { name: "HTML/CSS", level: 90 },
  { name: "PostgreSQL", level: 70 },
  { name: "Python", level: 65 },
  { name: "AWS", level: 60 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center reveal">
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">My Skills</span>
        </h2>
        <div className="max-w-3xl mx-auto bg-purple-900/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between mb-1">
                  <span className="text-white">{skill.name}</span>
                  <span className="text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-purple-900/50 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
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
