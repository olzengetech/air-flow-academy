import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Wrench, 
  ArrowLeft, 
  ArrowRight,
  PlayCircle,
  CheckCircle,
  Clock,
  AlertTriangle,
  Hammer
} from "lucide-react";

const ModuleAssembly = () => {
  const tutorials = [
    {
      id: 1,
      title: "Desmontagem de Coifa Doméstica",
      level: "Básico",
      duration: "12 min",
      steps: 8,
      completed: false,
      description: "Aprenda a desmontar uma coifa residencial com segurança",
      tools: ["Chave phillips", "Chave de fenda", "Alicate"]
    },
    {
      id: 2,
      title: "Montagem de Coifa Doméstica",
      level: "Básico",
      duration: "15 min",
      steps: 10,
      completed: false,
      description: "Passo a passo completo para montar e instalar coifas",
      tools: ["Chave phillips", "Nível", "Trena", "Furadeira"]
    },
    {
      id: 3,
      title: "Troca de Filtros e Manutenção",
      level: "Intermediário",
      duration: "10 min",
      steps: 6,
      completed: false,
      description: "Como substituir filtros metálicos e de carvão corretamente",
      tools: ["Chave phillips", "Luvas"]
    },
    {
      id: 4,
      title: "Instalação de Exaustor Industrial",
      level: "Intermediário",
      duration: "25 min",
      steps: 15,
      completed: false,
      description: "Montagem completa de sistema de exaustão industrial",
      tools: ["Kit ferramentas", "Furadeira", "Parafusadeira", "Nível laser"]
    },
    {
      id: 5,
      title: "Montagem de Dutos e Conexões",
      level: "Avançado",
      duration: "30 min",
      steps: 18,
      completed: false,
      description: "Técnicas profissionais de instalação de dutos HVAC",
      tools: ["Tesoura de chapa", "Rebitadeira", "Fita metalizada"]
    }
  ];

  const safetyTips = [
    "Sempre desligue a energia elétrica antes de iniciar",
    "Use equipamentos de proteção individual (EPI)",
    "Siga a ordem correta de desmontagem",
    "Organize e identifique todas as peças removidas"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos Módulos
            </Button>
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Wrench className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Montagem e Desmontagem
                </h1>
                <p className="text-muted-foreground mt-2">
                  Tutoriais práticos passo a passo para instalar e desmontar equipamentos HVAC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Warning */}
      <section className="py-8 bg-amber-500/10 border-y border-amber-500/20">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-amber-900 dark:text-amber-100 mb-2">
                  Segurança em Primeiro Lugar
                </h3>
                <ul className="space-y-1 text-sm text-amber-800 dark:text-amber-200">
                  {safetyTips.map((tip, index) => (
                    <li key={index}>• {tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tutorials List */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Tutoriais Disponíveis</h2>
            <div className="space-y-6">
              {tutorials.map((tutorial) => (
                <Card 
                  key={tutorial.id}
                  className="p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold">{tutorial.title}</h3>
                        <Badge className={
                          tutorial.level === "Básico" 
                            ? "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                            : tutorial.level === "Intermediário"
                            ? "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                            : "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20"
                        }>
                          {tutorial.level}
                        </Badge>
                        {tutorial.completed && (
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {tutorial.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {tutorial.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <PlayCircle className="h-4 w-4" />
                          {tutorial.steps} passos
                        </span>
                      </div>

                      {/* Tools needed */}
                      <div>
                        <p className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Hammer className="h-4 w-4" />
                          Ferramentas necessárias:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {tutorial.tools.map((tool, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 rounded-full bg-muted text-xs font-medium"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button>
                      <PlayCircle className="mr-2 h-4 w-4" />
                      {tutorial.completed ? 'Revisar' : 'Iniciar'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Info Card */}
            <Card className="p-6 mt-8 bg-primary/5 border-primary/20">
              <div className="flex gap-4">
                <Wrench className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Dicas para os Tutoriais</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Assista o tutorial completo antes de começar</li>
                    <li>• Prepare todas as ferramentas necessárias</li>
                    <li>• Tire fotos durante a desmontagem para facilitar a montagem</li>
                    <li>• Siga a ordem dos passos rigorosamente</li>
                    <li>• Em caso de dúvida, revise o passo anterior</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Navigation */}
            <div className="mt-12 flex justify-between items-center">
              <Link to="/modulo/3d">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior: 3D
                </Button>
              </Link>
              <Link to="/modulo/limpeza">
                <Button>
                  Próximo: Limpeza
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModuleAssembly;
