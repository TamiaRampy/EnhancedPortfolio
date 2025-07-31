import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ArrowRight } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
  video?: string; // Optional video field
}

interface ProjectCardProps {
  project: Project;
  delay: number;
}

const ProjectCard = ({ project, delay }: ProjectCardProps) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <Card
      className="glass border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:scale-105 group animate-fade-scale h-full flex flex-col"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardContent className="flex flex-col h-full p-6">
        {/* Project Title */}
        <h3 className="text-xl font-semibold text-black mb-4 text-center">{project.title}</h3>

        {/* Show video if toggled, otherwise show image */}
        <div className="mb-4">
          {project.video && showVideo ? (
            <video
              src={project.video}
              controls
              autoPlay
              className="w-full h-48 object-cover rounded-lg shadow"
              poster={project.image}
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg shadow"
            />
          )}
        </div>

        {/* Project Description */}
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
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

        {/* Buttons - Always at bottom */}
        <div className="flex gap-3 mt-auto">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
            onClick={() => window.open(project.githubUrl, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
          {/* Show Live Preview button for video projects */}
          {project.video && (
            <Button
              size="sm"
              className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300"
              onClick={() => setShowVideo((prev) => !prev)}
            >
              {showVideo ? "Hide Preview" : "Show Live Preview"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
          {/* Only show Live Demo button if liveUrl exists and no video */}
          {!project.video && project.liveUrl && (
            <Button
              size="sm"
              className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300"
              onClick={() => window.open(project.liveUrl, '_blank')}
            >
              Live Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
