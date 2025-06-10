
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
    "HTML/CSS", "Git", "MongoDB", "PostgreSQL", "AWS"
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
              Hi, I'm <span className="gradient-text">Tamia</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Full-Stack Developer passionate about creating beautiful, functional web applications
              that solve real-world problems
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
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate developer with a love for clean code and innovative solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Code className="w-6 h-6 mr-2 text-primary" />
                    My Journey
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I'm a passionate full-stack developer with expertise in modern web technologies. 
                    I love creating efficient, scalable applications that provide excellent user experiences. 
                    My journey in programming started with curiosity and has evolved into a career dedicated 
                    to solving complex problems through code.
                  </p>
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      3+ Years Experience
                    </Badge>
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      20+ Projects
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <SkillBadge key={skill} skill={skill} delay={index * 100} />
                ))}
              </div>
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
                  <div className="space-y-4">
                    <a 
                      href="mailto:tamia@example.com"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span>tamia@example.com</span>
                    </a>
                    <a 
                      href="https://github.com/tamiarampy"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span>github.com/tamiarampy</span>
                    </a>
                    <a 
                      href="https://linkedin.com/in/tamia"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <span>linkedin.com/in/tamia</span>
                    </a>
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
            © 2024 Tamia Rampy. Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
