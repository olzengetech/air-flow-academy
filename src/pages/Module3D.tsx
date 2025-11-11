import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Box, 
  ArrowLeft, 
  ArrowRight, 
  RotateCw,
  Maximize2,
  Eye,
  Layers,
  Info
} from "lucide-react";

const Module3D = () => {
  const models = [
    {
      id: 1,
      title: "Coifa Doméstica Básica",
      level: "Básico",
      description: "Modelo básico de coifa residencial com filtros e motor",
      components: 5,
      available: true
    },
    {
      id: 2,
      title: "Exaustor Industrial",
      level: "Intermediário",
      description: "Sistema de exaustão industrial com dutos e ventiladores",
      components: 12,
      available: true
    },
    {
      id: 3,
      title: "Sistema HVAC Completo",
      level: "Avançado",
      description: "Sistema integrado de ventilação e climatização",
      components: 25,
      available: false
    }
  ];

  const features = [
    {
      icon: <RotateCw className="h-5 w-5" />,
      title: "Rotação 360°",
      description: "Visualize de todos os ângulos"
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Desmontagem",
      description: "Explore cada componente"
    },
    {
      icon: <Maximize2 className="h-5 w-5" />,
      title: "Zoom Detalhado",
      description: "Amplie para ver detalhes"
    },
    {
      icon: <Info className="h-5 w-5" />,
      title: "Informações",
      description: "Aprenda sobre cada peça"
    }
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
                <Box className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Aprendizado 3D Interativo
                </h1>
                <p className="text-muted-foreground mt-2">
                  Explore modelos tridimensionais de sistemas HVAC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Recursos Interativos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3D Models Section */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Modelos Disponíveis</h2>
            <div className="space-y-6">
              {models.map((model) => (
                <Card 
                  key={model.id}
                  className={`p-6 transition-all duration-300 ${
                    model.available 
                      ? 'hover:shadow-lg hover:border-primary/50' 
                      : 'opacity-60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold">{model.title}</h3>
                        <Badge className={
                          model.level === "Básico" 
                            ? "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                            : model.level === "Intermediário"
                            ? "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                            : "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20"
                        }>
                          {model.level}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {model.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Layers className="h-4 w-4" />
                          {model.components} componentes
                        </span>
                      </div>
                    </div>
                    <Button disabled={!model.available}>
                      {model.available ? (
                        <>
                          <Eye className="mr-2 h-4 w-4" />
                          Explorar
                        </>
                      ) : (
                        'Em breve'
                      )}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Info Card */}
            <Card className="p-6 mt-8 bg-primary/5 border-primary/20">
              <div className="flex gap-4">
                <Info className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Como usar os modelos 3D</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Clique e arraste para rotacionar o modelo</li>
                    <li>• Use a roda do mouse para zoom</li>
                    <li>• Clique em componentes para ver informações detalhadas</li>
                    <li>• Use os botões de controle para desmontar/montar</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Navigation */}
            <div className="mt-12 flex justify-between items-center">
              <Link to="/modulo/aulas">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior: Aulas
                </Button>
              </Link>
              <Link to="/modulo/montagem">
                <Button>
                  Próximo: Montagem
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

export default Module3D;
