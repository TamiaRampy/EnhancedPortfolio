import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, Code, User, Briefcase, ArrowRight, FileText } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import ContactForm from "@/components/ContactForm";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Intersection Observer for active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = [
    "React", "TypeScript", "JavaScript", "Node.js", "Python", 
    "HTML/CSS", "Git", "C++", "Java"
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and order processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "https://github.com/yourusername/ecommerce",
      liveUrl: "https://your-ecommerce.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://your-task-app.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with location-based forecasts, historical data visualization, and responsive design.",
      technologies: ["React", "Chart.js", "Weather API", "Tailwind"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://your-weather-app.com",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Navigation activeSection={activeSection} />
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-slide-up">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-primary to-accent p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                <User className="w-16 h-16 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Tamia Ramplin </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Aspiring Software Developer passionate about building innovative solutions & exploring emerging tech trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 text-white shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-scale">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-8">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Hi, I'm <span className="font-semibold">Tamia Ramplin</span>, an aspiring Software developer passionate about building innovative solutions and exploring emerging tech trends. I'm always eager to learn, solve problems, and make a real impact in the tech world. My main focus is web development, but I’m also diving into areas like machine learning and AI.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Through my studies and personal projects, I have gained experience in technologies like HTML, CSS, JavaScript, and Java. I enjoy creating interactive and dynamic websites, and I’m always seeking new challenges to improve my skills.
                  </p>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <ul className="list-disc pl-6 mb-4 text-muted-foreground">
                    <li>🎓 Tygerberg High School (2017-2021)</li>
                    <li>🎓 Richfield - Diploma in IT (2022 - 2024)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            {/* Skills Section */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6">Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {["HTML", "CSS", "JavaScript", "Java", "C++"].map((skill, index) => (
                  <SkillBadge key={skill} skill={skill} delay={index * 100} />
                ))}
              </div>
              <a
                href="/MyResume.pdf"
                className="inline-block px-6 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/80 transition"
                download
              >
                📄 Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-scale">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} delay={index * 200} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-scale">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Let's collaborate and bring your ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Mail className="w-6 h-6 mr-2 text-primary" />
                    Let's Connect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    I'm always interested in new opportunities and exciting projects. 
                    Feel free to reach out if you'd like to collaborate!
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <a href="mailto:tamiaramplin21@gmail.com" className="hover:underline text-primary">
                        tamiaramplin21@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 text-primary font-bold">📞</span>
                      <span>0677378576</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="w-5 h-5 text-primary" />
                      <a
                        href="https://github.com/TamiaRampy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-primary"
                      >
                        github.com/TamiaRampy
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5 text-primary" />
                      <a
                        href="https://www.linkedin.com/in/tamia-ramplin-305382265/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-primary"
                      >
                        linkedin.com/in/tamia-ramplin-305382265
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Tamia Ramplin
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
