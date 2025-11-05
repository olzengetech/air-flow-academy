import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ModuleCard } from "@/components/ModuleCard";
import { ProgressDashboard } from "@/components/ProgressDashboard";
import { Button } from "@/components/ui/button";
import { 
  Box, 
  Wrench, 
  Sparkles, 
  GraduationCap, 
  Wind,
  Gauge,
  Settings,
  ArrowRight
} from "lucide-react";

import module3dImage from "@/assets/module-3d.jpg";
import moduleAssemblyImage from "@/assets/module-assembly.jpg";
import moduleCleaningImage from "@/assets/module-cleaning.jpg";
import moduleLessonsImage from "@/assets/module-lessons.jpg";

const Index = () => {
  const modules = [
    {
      title: "Aprendizado 3D Interativo",
      description: "Explore modelos tridimensionais de coifas e exaustores. Rotacione, desmonte e descubra cada componente.",
      image: module3dImage,
      icon: <Box className="h-6 w-6" />,
      progress: 35,
      level: "Básico" as const,
      link: "/modulo/3d"
    },
    {
      title: "Montagem e Desmontagem",
      description: "Aprenda passo a passo como montar e desmontar equipamentos HVAC com tutoriais visuais práticos.",
      image: moduleAssemblyImage,
      icon: <Wrench className="h-6 w-6" />,
      progress: 20,
      level: "Intermediário" as const,
      link: "/modulo/montagem"
    },
    {
      title: "Limpeza e Manutenção",
      description: "Técnicas corretas de limpeza de filtros, motores e dutos. Aprenda manutenção preventiva e corretiva.",
      image: moduleCleaningImage,
      icon: <Sparkles className="h-6 w-6" />,
      progress: 0,
      level: "Intermediário" as const,
      link: "/modulo/limpeza"
    },
    {
      title: "Aulas e Conceitos",
      description: "Lições interativas sobre HVAC, fluxo de ar, pressão e ventilação com quizzes e certificação.",
      image: moduleLessonsImage,
      icon: <GraduationCap className="h-6 w-6" />,
      progress: 10,
      level: "Básico" as const,
      link: "/modulo/aulas"
    }
  ];

  const concepts = [
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Ventilação",
      description: "Entenda os princípios de circulação de ar e renovação atmosférica"
    },
    {
      icon: <Gauge className="h-8 w-8" />,
      title: "Pressão e Vazão",
      description: "Aprenda sobre CFM, pressão estática e dimensionamento de dutos"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Sistemas HVAC",
      description: "Domine aquecimento, ventilação e ar condicionado profissional"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Modules Section */}
      <section id="modules" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Módulos de Aprendizado
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Aprenda no seu ritmo com nossos módulos interativos e práticos
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {modules.map((module, index) => (
              <ModuleCard key={index} {...module} />
            ))}
          </div>
        </div>
      </section>

      <ProgressDashboard />

      {/* Concepts Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conceitos Fundamentais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Domine os conceitos essenciais de sistemas HVAC
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {concepts.map((concept, index) => (
              <div 
                key={index}
                className="group p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                  {concept.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {concept.title}
                </h3>
                <p className="text-muted-foreground">
                  {concept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Pronto para Começar?
            </h2>
            <p className="text-xl opacity-90">
              Junte-se a milhares de profissionais que já dominam sistemas HVAC com nossa plataforma
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 shadow-xl hover:shadow-2xl transition-all"
              >
                Começar Gratuitamente
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Wind className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">HVACeducator</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 HVACeducator. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
