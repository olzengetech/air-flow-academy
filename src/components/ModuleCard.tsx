import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight, Lock } from "lucide-react";
import { Badge } from "./ui/badge";
import { Link } from "react-router-dom";
interface ModuleCardProps {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  progress?: number;
  locked?: boolean;
  level?: "Básico" | "Intermediário" | "Avançado";
  link?: string;
}
export const ModuleCard = ({
  title,
  description,
  image,
  icon,
  progress = 0,
  locked = false,
  level = "Básico",
  link = "#"
}: ModuleCardProps) => {
  const levelColors = {
    "Básico": "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
    "Intermediário": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    "Avançado": "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20"
  };
  return <Card className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
        
        {/* Icon Badge */}
        <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
          {icon}
        </div>

        {/* Level Badge */}
        <Badge className={`absolute top-4 right-4 ${levelColors[level]}`}>
          {level}
        </Badge>

        {locked && <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
            <Lock className="h-8 w-8 text-muted-foreground" />
          </div>}
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm line-clamp-2 text-blue-700">
            {description}
          </p>
        </div>

        {/* Progress Bar */}
        {!locked && progress > 0 && <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progresso</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary transition-all duration-500" style={{
            width: `${progress}%`
          }} />
            </div>
          </div>}

        {/* Action Button */}
        {locked ? <Button className="w-full" variant="outline" disabled>
            Bloqueado
          </Button> : <Link to={link} className="block">
            <Button className="w-full group/btn">
              {progress > 0 ? "Continuar" : "Iniciar"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>}
      </div>
    </Card>;
};