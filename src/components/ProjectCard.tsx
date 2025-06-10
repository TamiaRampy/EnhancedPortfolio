
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
  delay: number;
}

const ProjectCard = ({ project, delay }: ProjectCardProps) => {
  return (
    <Card 
      className="glass border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:scale-105 group animate-fade-scale"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 pt-4">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300"
            onClick={() => window.open(project.liveUrl, '_blank')}
          >
            Live Demo
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
