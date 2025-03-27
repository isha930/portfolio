
import React, { useEffect, useState } from "react";
import * as THREE from "three";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ChevronDown, 
  ExternalLink, 
  Code, 
  Globe, 
  Award,
  Briefcase,
  GraduationCap,
  Heart,
  Users,
  Sparkles,
  Coffee,
  Zap,
  Rocket,
  Star,
  LucideIcon
} from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useIsMobile } from "@/hooks/use-mobile";

// Project data
const projects = [
  {
    title: "Interactive Code Editor",
    description: "A real-time code editor that allows users to write, edit, and preview HTML, CSS, and JavaScript code instantly.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    demoLink: "https://code-editor-five-black.vercel.app/",
    githubLink: "#",
    technologies: ["React", "CodeMirror", "JavaScript"]
  },
  {
    title: "AI-Powered Trip Planner",
    description: "An intelligent travel planner that leverages AI to generate personalized trip itineraries based on user preferences.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
    demoLink: "https://ai-trip-generator-psi.vercel.app/",
    githubLink: "#",
    technologies: ["Next.js", "OpenAI API", "TailwindCSS"]
  },
  {
    title: "Real-Time Chat Application",
    description: "A full-featured chat platform with real-time messaging, user authentication, and message history.",
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?q=80&w=2070&auto=format&fit=crop",
    demoLink: "https://pern-chat-app-frontend-3byh.onrender.com/login",
    githubLink: "#",
    technologies: ["PostgreSQL", "Express", "React", "Node.js", "Socket.io"]
  },
  {
    title: "E-Commerce Bookstore",
    description: "A comprehensive online bookstore with product listings, search functionality, shopping cart, and checkout process.",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1974&auto=format&fit=crop",
    demoLink: "https://book-store-psi-five.vercel.app/",
    githubLink: "#",
    technologies: ["React", "Redux", "Firebase", "Stripe API"]
  }
];

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

const Index = () => {
  const isMobile = useIsMobile();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(section => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Initialize Three.js background
  useEffect(() => {
    if (isMobile) return; // Skip 3D background on mobile devices
    
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ 
      canvas,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: new THREE.Color('#8a2be2'),
      transparent: true,
      opacity: 0.8
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    camera.position.z = 3;
    
    // Mouse effect
    let mouseX = 0;
    let mouseY = 0;
    
    document.addEventListener('mousemove', (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0005;
      
      // Responsive to mouse
      particlesMesh.rotation.x += mouseY * 0.0005;
      particlesMesh.rotation.y += mouseX * 0.0005;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
      // Update camera
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      
      // Update renderer
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
    
    return () => {
      canvas.remove();
      window.removeEventListener('resize', () => {});
    };
  }, [isMobile]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill out all fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate sending email
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Success!",
        description: "Your message has been sent successfully!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
    
    // For actual email sending, you would implement a fetch or axios call to your backend
    // Example:
    // try {
    //   const response = await fetch('/api/send-email', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       name: formData.name,
    //       email: formData.email,
    //       message: formData.message,
    //       to: 'ishadurge7@gmail.com'
    //     })
    //   });
    //   
    //   if (response.ok) {
    //     toast({
    //       title: "Success!",
    //       description: "Your message has been sent successfully!",
    //     });
    //     setFormData({ name: "", email: "", message: "" });
    //   } else {
    //     toast({
    //       title: "Error",
    //       description: "Failed to send message. Please try again.",
    //       variant: "destructive"
    //     });
    //   }
    // } catch (error) {
    //   toast({
    //     title: "Error",
    //     description: "An unexpected error occurred. Please try again.",
    //     variant: "destructive"
    //   });
    // } finally {
    //   setIsSubmitting(false);
    // }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-950 to-indigo-950 text-white">
      <canvas 
        id="bg-canvas" 
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />
      
      {/* Navigation */}
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
      
      {/* Hero Section */}
      <section className="min-h-screen pt-24 flex flex-col justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left pb-10 md:pb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="block">Hi, I'm Isha Durge</span>
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Full Stack Developer</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">Crafting elegant solutions with code ✨</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact">
                <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 text-white border-none">
                  Contact Me
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline" className="border-purple-500 text-white hover:bg-purple-950">
                  View My Work <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop"
                alt="Isha Durge"
                className="w-full h-full object-cover rounded-full border-4 border-purple-500/50 relative z-10"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <a href="#about" className="animate-bounce">
            <ChevronDown size={32} className="text-white/70" />
          </a>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4 z-10 reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="max-w-3xl mx-auto bg-purple-900/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
            <p className="text-lg mb-6">
              Oh, you know, just the usual—building and scaling full-stack applications, optimizing real-time systems, and integrating AI like a pro. 🚀 From handling 1,000+ concurrent users in a code editor to designing ultra-responsive APIs, I focus on performance, scalability, and seamless UX. 💻
            </p>
            <p className="text-lg mb-6">
              I consider myself a code-poet who writes elegant solutions by day and debugs mysterious errors by night. ☕ When I'm not staring at a screen wondering why my code works (or doesn't), I'm probably exploring new technologies or explaining to my friends why tabs are superior to spaces. 🤓
            </p>
            <p className="text-lg">
              Beyond tech, I've dedicated 240+ hours to community service, mobilized awareness programs for 3,000+ people, and managed large-scale events—sharpening my communication, leadership, and problem-solving skills along the way. ✨ Let's build something amazing together! 🔥
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center reveal">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">My Projects</span>
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
                    <Button variant="outline" size="sm" className="border-purple-500 text-white hover:bg-purple-800">
                      <ExternalLink size={16} className="mr-2" /> Live Demo
                    </Button>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="border-purple-500 text-white hover:bg-purple-800">
                      <Code size={16} className="mr-2" /> Code
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
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
      
      {/* Experience & Education Section */}
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
      
      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4 z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center reveal">
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            <div className="bg-purple-900/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-fuchsia-400 mr-4" />
                  <span>ishadurge7@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Globe className="text-fuchsia-400 mr-4" />
                  <span>www.ishadurge.dev</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="text-fuchsia-400 mr-4" />
                  <a 
                    href="https://www.linkedin.com/in/isha-durge-929b75278/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-fuchsia-400 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center">
                  <Github className="text-fuchsia-400 mr-4" />
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-fuchsia-400 transition-colors"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Let's create something amazing together! ✨</h4>
                <p className="text-gray-300">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. 🚀
                </p>
              </div>
            </div>
            
            <div className="bg-purple-900/20 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message 📩</h3>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      className="bg-purple-800/30 border-purple-500/30 text-white focus-visible:ring-fuchsia-500"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      className="bg-purple-800/30 border-purple-500/30 text-white focus-visible:ring-fuchsia-500"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      className="bg-purple-800/30 border-purple-500/30 text-white focus-visible:ring-fuchsia-500 min-h-[120px]"
                      placeholder="Your message here..."
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message ✉️"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
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
    </div>
  );
};

export default Index;
