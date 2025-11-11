import { Wind } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Wind className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            HVACeducator
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#modules" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Módulos
          </a>
          <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </a>
          <Link to="/modulo/aulas">
            <Button variant="default" className="shadow-lg">
              Começar Agora
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
