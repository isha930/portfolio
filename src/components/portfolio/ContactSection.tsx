import React, { useState } from "react";
import { Mail, Globe, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    try {
      const response = await emailjs.send(
        "service_br3o7d4", 
        "template_nctl5bs", 
        formData, 
        "PZGchh0HvZL_m_zHG"
      );

      if (response.status === 200) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      toast({
        title: "Error",
        description: "Failed to send the email. Try again later.",
        variant: "destructive"
      });
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
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
  );
};

export default ContactSection;
