import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ArrowRight, Github, Phone } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import Navigation from "@/components/Navigation";
import ContactForm from "@/components/ContactForm";

const skills = ["HTML", "CSS", "JavaScript", "Java", "C++"];
const projects = [
  {
    title: "Resource System",
    description: "Full-stack resource management system with React, Node.js, and Stripe integration. Features include user authentication, resource management, and order processing.",
    technologies: ["HTML", "Node.js", "Firebase", "JavaScript", "CSS"],
    githubUrl: "https://github.com/Tashreeq12/SkillsBridge2.git",
    liveUrl: "https://xhantimbula.github.io/CodeCrussadersDigital/",
    image: "/Digital.png"
  },
  {
    title: "Rating App",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    technologies: ["Java","SQLite", "XML", ""],
    githubUrl: "https://github.com/TamiaRampy/AndroidRatingApp",
    video: "/RatingApp.mp4",
    image: "ratingApp.png",
    liveUrl: null // Explicitly set to null if no live demo
  },
  {
    title: "Travique Travel Planner",
    description: "Plan smarter, travel better. Personalized itineraries, expense tracking, and health tips – all in one place.",
    technologies: ["HTML", "Javascript", "Supabase", "CSS"],
    githubUrl: "https://github.com/aidan2125/Backend-testing",
    liveUrl: "https://aidan2125.github.io/Backend-testing/",
    image: "/Travique.PNG"
  },
  {
    title: "CAPACITI Placement Portal",
    description: "A full-stack job placement platform for graduates, built using React, Firebase, Supabase, and Tailwind CSS. It features user authentication, profile management, CV uploads, job applications, interviews, and real-time placement tracking.",
    technologies: ["React", "TypeScript", "Firebase", "Supabase", "Tailwind CSS"],
    githubUrl: "https://github.com/TamiaRampy/CAPACITI-Placement-Portal",
    liveUrl: "https://capacitiplacementportal.netlify.app",
    image: "https://cdn.builder.io/api/v1/image/assets%2Fdabfba3b76404070a0a969852649639b%2Ff6e5e749b22c42e897d5c31298906f8f?format=webp&width=800"
  }
];

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Navigation activeSection={activeSection} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-slide-up">
            <div className="group w-44 h-44 mx-auto mb-10 rounded-full bg-gradient-to-r from-primary to-accent p-1 shadow-xl animate-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden border-4 border-primary/30 transition-transform duration-300 group-hover:scale-110">
                <img
                  src="/Tamia Ramplin.jpeg"
                  alt="Tamia Ramplin"
                  className="w-full h-full object-cover object-center rounded-full"
                  draggable={false}
                />
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
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16 animate-fade-scale">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          </div>
          {/* About Me Card */}
          <div className="animate-slide-up mb-8">
            <Card className="glass border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg">
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Hi, I'm <span className="font-semibold">Tamia Ramplin</span>, an aspiring Software developer passionate about building innovative solutions and exploring emerging tech trends. I'm always eager to learn, solve problems, and make a real impact in the tech world. My main focus is web development, but I’m also diving into areas like machine learning and AI.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through my studies and personal projects, I have gained experience in technologies like HTML, CSS, JavaScript, and Java. I enjoy creating interactive and dynamic websites, and I’m always seeking new challenges to improve my skills.
                </p>
              </CardContent>
            </Card>
          </div>
          {/* Education Card */}
          <div className="animate-slide-up mb-8" style={{ animationDelay: '0.1s' }}>
            <Card className="border-primary/10 shadow-md bg-background/80">
              <CardHeader>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text text-center">
                  Education
                </h2>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 mb-2 text-muted-foreground">
                  <li> Tygerberg High School (2017-2021)</li>
                  <li> Richfield - Diploma in IT (2022 - 2024)</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          {/* Skills Section */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-muted/40 border-primary/10 shadow-md">
              <CardHeader>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text text-center">
                  Skills
                </h2>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {skills.map((skill, index) => (
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
              </CardContent>
            </Card>
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
                      <Phone className="w-5 h-5 text-primary" />
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
                      {/* LinkedIn SVG icon */}
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
                      </svg>
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
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

export const Head = () => (
  <>
    <title>Tamia Ramplin Portfolio</title>
    <meta name="description" content="Welcome to my portfolio! I'm Tamia Ramplin, an aspiring software developer. Explore my projects, skills, and get in touch!" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/faviconff.ico" />
  </>
);
