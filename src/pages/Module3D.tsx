import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, RotateCw, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { Link } from "react-router-dom";
import module3dImage from "@/assets/module-3d.jpg";

const Module3D = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container pt-24 pb-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos Módulos
            </Button>
          </Link>
          <h1 className="text-4xl font-bold mb-4">Aprendizado 3D Interativo</h1>
          <p className="text-lg text-muted-foreground">
            Explore modelos tridimensionais de coifas e exaustores de forma interativa
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main 3D Viewer */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <img 
                  src={module3dImage} 
                  alt="Modelo 3D HVAC"
                  className="w-full h-full object-contain"
                />
                
                {/* 3D Controls Overlay */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button size="icon" variant="secondary" className="bg-background/80 backdrop-blur">
                    <RotateCw className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-background/80 backdrop-blur">
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-background/80 backdrop-blur">
                    <ZoomOut className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="bg-background/80 backdrop-blur">
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>

                {/* Info Badge */}
                <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur text-primary-foreground px-4 py-2 rounded-lg">
                  <p className="text-sm font-medium">Clique e arraste para rotacionar</p>
                </div>
              </div>

              <div className="p-6 border-t">
                <h3 className="text-xl font-semibold mb-4">Componentes do Sistema</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Motor de Exaustão", status: "Visível" },
                    { name: "Filtro de Gordura", status: "Visível" },
                    { name: "Duto de Ventilação", status: "Oculto" },
                    { name: "Sistema Elétrico", status: "Oculto" }
                  ].map((component, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                      <span className="text-sm font-medium">{component.name}</span>
                      <span className="text-xs text-muted-foreground">{component.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Component Details */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Detalhes do Componente</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Motor de Exaustão</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    O motor é o coração do sistema de exaustão, responsável por criar o fluxo de ar necessário para remover fumaça e vapores.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-xs text-muted-foreground">Potência</p>
                      <p className="font-semibold">750W</p>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <p className="text-xs text-muted-foreground">Vazão de Ar</p>
                      <p className="font-semibold">900 m³/h</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Progress Card */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Seu Progresso</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Componentes Explorados</span>
                    <span className="font-medium">4/12</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-1/3" />
                  </div>
                </div>
                <Button className="w-full">Próximo Componente</Button>
              </div>
            </Card>

            {/* Lessons List */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Lições</h3>
              <div className="space-y-3">
                {[
                  { title: "Introdução ao Sistema", done: true },
                  { title: "Motor e Ventilador", done: true },
                  { title: "Sistema de Filtragem", done: false },
                  { title: "Dutos e Conexões", done: false },
                  { title: "Sistema Elétrico", done: false }
                ].map((lesson, index) => (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg border ${
                      lesson.done 
                        ? 'bg-primary/5 border-primary/20' 
                        : 'bg-muted border-border'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`h-6 w-6 rounded-full flex items-center justify-center ${
                        lesson.done 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted-foreground/20'
                      }`}>
                        {lesson.done && (
                          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className="text-sm font-medium">{lesson.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Module3D;
