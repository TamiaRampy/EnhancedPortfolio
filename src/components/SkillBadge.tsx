
import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  skill: string;
  delay: number;
}

const SkillBadge = ({ skill, delay }: SkillBadgeProps) => {
  return (
    <Badge
      variant="secondary"
      className="justify-center py-2 px-4 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 hover:from-primary/20 hover:to-accent/20 transition-all duration-300 hover:scale-105 animate-fade-scale cursor-default"
      style={{ animationDelay: `${delay}ms` }}
    >
      {skill}
    </Badge>
  );
};

export default SkillBadge;
