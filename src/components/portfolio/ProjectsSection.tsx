
import React from "react";
import { ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Project data
const projects = [
  {
    title: "Interactive Code Editor",
    description: "A collaborative real-time code editor supporting multiple programming languages with persistent session storage.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    demoLink: "https://code-editor-five-black.vercel.app/",
    githubLink: "#",
    technologies: ["React.js", "Node.js", "CodeMirror"]
  },
  {
    title: "AI-Powered Trip Planner",
    description: "An intelligent travel planner generating personalized itineraries with Azure Maps and Bing APIs integration.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
    demoLink: "https://ai-trip-generator-psi.vercel.app/",
    githubLink: "#",
    technologies: ["React.js", "Node.js", "Azure Maps", "Bing APIs", "Firebase"]
  },
  {
    title: "Real-Time Chat Application",
    description: "A scalable messaging platform supporting real-time chat with WebSocket and secure JWT authentication.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=2070&auto=format&fit=crop",
    demoLink: "https://pern-chat-app-frontend-3byh.onrender.com/login",
    githubLink: "#",
    technologies: ["Node.js", "Express.js", "WebSocket", "PostgreSQL"]
  },
  {
    title: "E-Commerce Bookstore Platform",
    description: "A full-stack commerce solution handling 100+ books, featuring search, authentication, and cart functionality.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop",
    demoLink: "https://book-store-psi-five.vercel.app/",
    githubLink: "#",
    technologies: ["React.js", "Node.js", "PostgreSQL", "Google Books API"]
  }
];




const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center reveal">
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">My Projects 🚀</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-purple-900/20 backdrop-blur-sm border border-purple-500/20 overflow-hidden reveal">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
              />
              <CardHeader>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-800/50 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-purple-500 bg-purple-900/40 text-white hover:bg-purple-800"
                  >
                    <ExternalLink size={16} className="mr-2" /> Live Demo
                  </Button>
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-purple-500 bg-purple-900/40 text-white hover:bg-purple-800"
                  >
                    <Code size={16} className="mr-2" /> Code
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
