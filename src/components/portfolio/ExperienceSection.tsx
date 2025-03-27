
import React from "react";
import { Briefcase, GraduationCap, Users } from "lucide-react";

// Experience data
const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2021 - Present",
    description: "Leading the frontend development team, implementing modern UI/UX designs, and optimizing application performance."
  },
  {
    title: "Full Stack Developer",
    company: "WebSolutions Ltd.",
    period: "2019 - 2021",
    description: "Developed full-stack applications using React, Node.js, and PostgreSQL. Implemented RESTful APIs and authentication systems."
  },
  {
    title: "Junior Web Developer",
    company: "CreativeMinds",
    period: "2017 - 2019",
    description: "Started as a junior developer working with HTML, CSS, and JavaScript to build responsive websites."
  }
];

// Education data
const education = [
  {
    degree: "Master of Computer Science",
    institution: "Tech University",
    period: "2015 - 2017",
    description: "Specialized in Web Technologies and Software Engineering"
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "State University",
    period: "2011 - 2015",
    description: "Graduated with honors, focus on Programming and Data Structures"
  }
];

// Leadership data
const leadership = [
  {
    title: "Tech Mentor",
    organization: "CodeForAll",
    period: "2020 - Present",
    description: "Mentoring underprivileged students in web development, conducting weekly workshops and code reviews."
  },
  {
    title: "Community Organizer",
    organization: "Women in Tech",
    period: "2019 - Present",
    description: "Organizing meetups, hackathons, and networking events for women in technology."
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center reveal">
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Experience & Education</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience */}
          <div className="bg-purple-900/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 reveal">
            <div className="flex items-center mb-6">
              <Briefcase className="text-fuchsia-400 mr-3" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            {experiences.map((item, index) => (
              <div key={index} className={`mb-6 ${index !== experiences.length - 1 ? 'border-b border-purple-500/20 pb-6' : ''}`}>
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-fuchsia-400">{item.company}</span>
                  <span className="text-gray-400 text-sm">{item.period}</span>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
          
          {/* Education */}
          <div className="bg-purple-900/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 reveal">
            <div className="flex items-center mb-6">
              <GraduationCap className="text-fuchsia-400 mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            {education.map((item, index) => (
              <div key={index} className={`mb-6 ${index !== education.length - 1 ? 'border-b border-purple-500/20 pb-6' : ''}`}>
                <h4 className="text-xl font-semibold text-white">{item.degree}</h4>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-fuchsia-400">{item.institution}</span>
                  <span className="text-gray-400 text-sm">{item.period}</span>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Leadership & Community */}
        <div className="mt-12 bg-purple-900/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 reveal">
          <div className="flex items-center mb-6">
            <Users className="text-fuchsia-400 mr-3" />
            <h3 className="text-2xl font-bold">Leadership & Community</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((item, index) => (
              <div key={index} className="p-4 bg-purple-800/20 rounded-lg">
                <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-fuchsia-400">{item.organization}</span>
                  <span className="text-gray-400 text-sm">{item.period}</span>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
