import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-hvac.jpg";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Sistema HVAC Profissional" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-primary/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20 pb-12">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Aprenda HVAC de forma interativa</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Domine Sistemas
            <span className="block bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
              HVAC com Facilidade
            </span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprenda tudo sobre coifas, exaustores e ventilação com nosso sistema educacional interativo em 3D. Do básico ao avançado.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="text-lg px-8 shadow-lg hover:shadow-xl transition-all">
              Começar Aprendizado
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Ver Demonstração
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground mt-1 bg-sky-950">Lições Interativas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">3D</div>
              <div className="text-sm text-muted-foreground mt-1 bg-sky-950">Modelos Realistas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground mt-1 bg-blue-950">Prático</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};