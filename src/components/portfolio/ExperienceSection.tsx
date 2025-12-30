import React from "react";
import { GraduationCap, Users, Briefcase } from "lucide-react";

/* ===================== DATA ===================== */

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

// Experience data
const experience = [
  {
    role: "C# .NET Full Stack Developer Intern",
    company: "Samsung Electro-Mechanics Software India",
    period: "June 2025 – Present",
    description:
      "Delivered 4+ production-ready React + Tailwind CSS dashboards serving 5,000+ enterprise users, reducing manual reporting time by 15+ hours weekly.\n" +
      "Engineered 12+ scalable .NET Core APIs, reducing average data retrieval time by 28% and improving system throughput by 22%.\n" +
      "Built 20+ reusable JavaScript modules and optimized asynchronous API calls, cutting client-server latency by 25% and enhancing front-end performance by 18%.\n" +
      "Developed and tuned 20+ complex SQL stored procedures with advanced indexing, improving query performance by 35% and reducing database load by 40%.",
    techStack: ["C#", ".NET Core", "React", "Tailwind CSS", "SQL Server"]
  }
];

// Leadership & Community data
const leadership = [
  {
    title: "Technical Mentor",
    organization: "Konnextions",
    period: "Present",
    description:
      "Conducted 10+ workshops on advanced programming and cloud computing for 200+ participants.\n" +
      "Launched 'Code Warriors' hackathon series, engaging 200+ students.\n" +
      "Coordinated industry panels connecting 300+ attendees with technology professionals."
  },
  {
    title: "Volunteer",
    organization: "National Service Scheme",
    period: "Present",
    description:
      "Dedicated 240+ hours to community initiatives such as blood drives and literacy campaigns.\n" +
      "Mobilized awareness programs benefiting 3,000+ residents.\n" +
      "Managed logistics for large-scale events, increasing community engagement by 30%."
  }
];

/* ===================== COMPONENT ===================== */

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 z-10">
        {/* ===================== HEADING ===================== */}
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center reveal">
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Experience & Education
          </span>
        </h2>

        {/* ===================== EXPERIENCE ===================== */}
        <div className="mb-12 bg-purple-900/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 reveal">
          <div className="flex items-center mb-6">
            <Briefcase className="text-fuchsia-400 mr-3" />
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>

          {experience.map((item, index) => (
            <div
              key={index}
              className={`mb-6 ${
                index !== experience.length - 1
                  ? "border-b border-purple-500/20 pb-6"
                  : ""
              }`}
            >
              <h4 className="text-xl font-semibold text-white">
                {item.role}
              </h4>

              <div className="flex justify-between items-center mb-2">
                <span className="text-fuchsia-400">{item.company}</span>
                <span className="text-gray-400 text-sm">{item.period}</span>
              </div>

              <p className="text-gray-300 whitespace-pre-line">
                {item.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {item.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ===================== EDUCATION ===================== */}
<div className="mb-12 bg-purple-900/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 reveal">
  <div className="flex items-center mb-6">
    <GraduationCap className="text-fuchsia-400 mr-3" />
    <h3 className="text-2xl font-bold">Education</h3>
  </div>

  {education.map((item, index) => (
    <div
      key={index}
      className={`mb-6 ${
        index !== education.length - 1
          ? "border-b border-purple-500/20 pb-6"
          : ""
      }`}
    >
      <h4 className="text-xl font-semibold text-white">
        {item.degree}
      </h4>

      <div className="flex justify-between items-center mb-2">
        <span className="text-fuchsia-400">
          {item.institution}
        </span>
        <span className="text-gray-400 text-sm">
          {item.period}
        </span>
      </div>

      <p className="text-gray-300">
        {item.description}
      </p>
    </div>
  ))}
</div>


        {/* ===================== LEADERSHIP ===================== */}
        <div className="mt-12 bg-purple-900/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 reveal">
          <div className="flex items-center mb-6">
            <Users className="text-fuchsia-400 mr-3" />
            <h3 className="text-2xl font-bold">Leadership & Community</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leadership.map((item, index) => (
              <div
                key={index}
                className="p-4 bg-purple-800/20 rounded-lg"
              >
                <h4 className="text-xl font-semibold text-white">
                  {item.title}
                </h4>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-fuchsia-400">
                    {item.organization}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {item.period}
                  </span>
                </div>

                <p className="text-gray-300 whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
