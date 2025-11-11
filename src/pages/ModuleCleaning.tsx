import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Sparkles, 
  ArrowLeft, 
  ArrowRight,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Droplets,
  Shield,
  Clock
} from "lucide-react";

const ModuleCleaning = () => {
  const cleaningGuides = [
    {
      id: 1,
      title: "Limpeza de Filtros Metálicos",
      level: "Básico",
      frequency: "Mensal",
      duration: "20 min",
      completed: false,
      description: "Aprenda a limpar filtros metálicos com produtos adequados",
      supplies: ["Detergente neutro", "Água quente", "Escova macia", "Luvas"]
    },
    {
      id: 2,
      title: "Substituição de Filtros de Carvão",
      level: "Básico",
      frequency: "Trimestral",
      duration: "10 min",
      completed: false,
      description: "Quando e como trocar filtros de carvão ativado",
      supplies: ["Filtro novo", "Chave phillips"]
    },
    {
      id: 3,
      title: "Limpeza Externa da Coifa",
      level: "Básico",
      frequency: "Semanal",
      duration: "15 min",
      completed: false,
      description: "Manutenção da superfície externa e acabamentos",
      supplies: ["Produto limpa inox", "Pano macio", "Água", "Álcool"]
    },
    {
      id: 4,
      title: "Limpeza de Motor e Turbina",
      level: "Intermediário",
      frequency: "Semestral",
      duration: "45 min",
      completed: false,
      description: "Manutenção preventiva do sistema de exaustão",
      supplies: ["Desengraxante", "Pincel", "Panos", "EPI completo"]
    },
    {
      id: 5,
      title: "Limpeza de Dutos",
      level: "Intermediário",
      frequency: "Anual",
      duration: "60 min",
      completed: false,
      description: "Remoção de gordura acumulada nos dutos de ventilação",
      supplies: ["Escova flexível", "Desengraxante industrial", "Aspirador"]
    },
    {
      id: 6,
      title: "Manutenção Preventiva Completa",
      level: "Avançado",
      frequency: "Anual",
      duration: "90 min",
      completed: false,
      description: "Inspeção e manutenção completa de sistemas HVAC",
      supplies: ["Kit ferramentas", "Produtos químicos", "Equipamentos de medição"]
    }
  ];

  const maintenanceTips = [
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Frequência Regular",
      description: "Mantenha um cronograma consistente de limpeza"
    },
    {
      icon: <Droplets className="h-5 w-5" />,
      title: "Produtos Adequados",
      description: "Use produtos específicos para cada superfície"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Segurança",
      description: "Sempre desligue o equipamento antes da limpeza"
    },
    {
      icon: <AlertCircle className="h-5 w-5" />,
      title: "Inspeção",
      description: "Verifique desgaste e componentes danificados"
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
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Limpeza e Manutenção
                </h1>
                <p className="text-muted-foreground mt-2">
                  Técnicas corretas de limpeza e manutenção preventiva de sistemas HVAC
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Boas Práticas</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {maintenanceTips.map((tip, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {tip.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cleaning Guides */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-6">Guias de Limpeza</h2>
            <div className="space-y-6">
              {cleaningGuides.map((guide) => (
                <Card 
                  key={guide.id}
                  className="p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold">{guide.title}</h3>
                        <Badge className={
                          guide.level === "Básico" 
                            ? "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20"
                            : guide.level === "Intermediário"
                            ? "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20"
                            : "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20"
                        }>
                          {guide.level}
                        </Badge>
                        {guide.completed && (
                          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                        )}
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {guide.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {guide.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {guide.frequency}
                        </span>
                      </div>

                      {/* Supplies needed */}
                      <div>
                        <p className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Droplets className="h-4 w-4" />
                          Materiais necessários:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {guide.supplies.map((supply, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 rounded-full bg-muted text-xs font-medium"
                            >
                              {supply}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button>
                      <Sparkles className="mr-2 h-4 w-4" />
                      {guide.completed ? 'Revisar' : 'Iniciar'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Warning Card */}
            <Card className="p-6 mt-8 bg-amber-500/5 border-amber-500/20">
              <div className="flex gap-4">
                <AlertCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Avisos Importantes</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Nunca use produtos abrasivos em superfícies de inox</li>
                    <li>• Sempre desligue a energia antes de iniciar a limpeza</li>
                    <li>• Use equipamentos de proteção individual (EPI)</li>
                    <li>• Deixe os componentes secarem completamente antes de remontar</li>
                    <li>• Consulte o manual do fabricante para recomendações específicas</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Navigation */}
            <div className="mt-12 flex justify-between items-center">
              <Link to="/modulo/montagem">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Anterior: Montagem
                </Button>
              </Link>
              <Link to="/">
                <Button>
                  Voltar ao Início
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

export default ModuleCleaning;
