import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Play, CheckCircle2, Circle } from "lucide-react";
import { Link } from "react-router-dom";
import moduleAssemblyImage from "@/assets/module-assembly.jpg";

const ModuleAssembly = () => {
  const steps = [
    {
      title: "Preparação das Ferramentas",
      description: "Separe todas as ferramentas necessárias: chaves, parafusos e manual",
      completed: true
    },
    {
      title: "Instalação da Base",
      description: "Fixe a base da coifa na parede usando os suportes corretos",
      completed: true
    },
    {
      title: "Montagem do Motor",
      description: "Encaixe o motor na estrutura principal e conecte os cabos elétricos",
      completed: false
    },
    {
      title: "Instalação dos Filtros",
      description: "Posicione os filtros de gordura nos encaixes apropriados",
      completed: false
    },
    {
      title: "Conexão dos Dutos",
      description: "Conecte os dutos de exaustão garantindo vedação adequada",
      completed: false
    },
    {
      title: "Testes Finais",
      description: "Realize testes de funcionamento e verificação de segurança",
      completed: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container pt-24 pb-12">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos Módulos
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Montagem e Desmontagem</h1>
          <p className="text-lg text-muted-foreground">
            Aprenda passo a passo como montar e desmontar equipamentos HVAC
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Video/Image Section */}
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <img 
                  src={moduleAssemblyImage} 
                  alt="Ferramentas de montagem HVAC"
                  className="w-full h-full object-cover"
                />
                <Button 
                  size="lg"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full h-16 w-16 p-0"
                >
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              </div>
              <div className="p-6 border-t">
                <h3 className="text-xl font-semibold mb-2">Tutorial em Vídeo</h3>
                <p className="text-muted-foreground">
                  Acompanhe o passo a passo visual da montagem completa de uma coifa profissional
                </p>
              </div>
            </Card>

            {/* Steps List */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Passos da Montagem</h3>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border transition-all ${
                      step.completed 
                        ? 'bg-primary/5 border-primary/20' 
                        : 'bg-card border-border hover:border-primary/30'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        {step.completed ? (
                          <CheckCircle2 className="h-6 w-6 text-primary" />
                        ) : (
                          <Circle className="h-6 w-6 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">
                          Passo {index + 1}: {step.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                      {!step.completed && (
                        <Button size="sm" variant="outline">
                          Iniciar
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Progresso do Módulo</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Passos Completados</span>
                    <span className="font-medium">2/6</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '33%' }} />
                  </div>
                </div>
                <div className="pt-4 border-t space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tempo estimado</span>
                    <span className="font-medium">45 min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Dificuldade</span>
                    <span className="font-medium">Intermediário</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Ferramentas Necessárias</h3>
              <div className="space-y-2">
                {[
                  "Chave Phillips",
                  "Chave de Fenda",
                  "Furadeira",
                  "Nível",
                  "Fita Métrica",
                  "Alicate"
                ].map((tool, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-lg font-semibold mb-2">⚠️ Segurança</h3>
              <p className="text-sm text-muted-foreground">
                Sempre desligue a energia antes de iniciar qualquer trabalho de instalação elétrica.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModuleAssembly;
