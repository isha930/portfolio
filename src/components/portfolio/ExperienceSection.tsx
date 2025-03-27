import React from "react";
import { GraduationCap, Users } from "lucide-react";

// Education data
const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Kalinga Institute of Industrial Technology, Bhubaneswar, India",
    period: "Aug 2022 – July 2026",
    description: "CGPA: 9.07/10.0"
  },
  {
    degree: "Higher Secondary Education",
    institution: "Fiitjee Junior College, Visakhapatnam, India",
    period: "Aug 2020 – May 2022",
    description: "Score: 92%"
  }
];

// Leadership & Community data
const leadership = [
  {
    title: "Technical Mentor",
    organization: "Konnextions",
    period: "Present",
    description: "Conducted 10+ workshops on advanced programming and cloud computing for 200+ participants.\nLaunched 'Code Warriors' hackathon series, engaging 200+ students in collaborative coding challenges.\nCoordinated industry panels connecting 300+ attendees with technology professionals."
  },
  {
    title: "Volunteer",
    organization: "National Service Scheme",
    period: "Present",
    description: "Dedicated 240+ hours to community initiatives like blood drives and literacy campaigns.\nMobilized awareness programs benefiting 3,000+ residents in underserved communities.\nManaged logistics for large-scale events, increasing community engagement by 30%."
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center reveal">
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Education & Volunteering
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <p className="text-gray-300 whitespace-pre-line">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
