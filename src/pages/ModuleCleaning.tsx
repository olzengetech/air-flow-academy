import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Droplet, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import moduleCleaningImage from "@/assets/module-cleaning.jpg";

const ModuleCleaning = () => {
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
          <h1 className="text-4xl font-bold mb-4">Limpeza e Manutenção</h1>
          <p className="text-lg text-muted-foreground">
            Aprenda técnicas corretas de limpeza e manutenção preventiva
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="overflow-hidden">
              <div className="relative aspect-video">
                <img 
                  src={moduleCleaningImage} 
                  alt="Limpeza de filtro HVAC"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 border-t">
                <h3 className="text-xl font-semibold mb-2">Limpeza de Filtros</h3>
                <p className="text-muted-foreground">
                  Os filtros são essenciais para a eficiência do sistema. Aprenda a limpá-los corretamente.
                </p>
              </div>
            </Card>

            {/* Cleaning Procedures */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Procedimentos de Limpeza</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Limpeza Semanal",
                    items: [
                      "Limpar superfícies externas com pano úmido",
                      "Verificar acúmulo de gordura nos filtros",
                      "Limpar painel de controle"
                    ]
                  },
                  {
                    title: "Limpeza Mensal",
                    items: [
                      "Remover e lavar filtros de gordura",
                      "Limpar interior da coifa",
                      "Verificar funcionamento do motor"
                    ]
                  },
                  {
                    title: "Limpeza Trimestral",
                    items: [
                      "Limpeza profunda dos dutos",
                      "Verificar vedações e conexões",
                      "Lubrificar partes móveis do motor"
                    ]
                  }
                ].map((section, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Droplet className="h-5 w-5 text-primary" />
                      {section.title}
                    </h4>
                    <ul className="space-y-2 ml-7">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>

            {/* Products Recommended */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Produtos Recomendados</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: "Desengraxante Neutro", use: "Limpeza geral" },
                  { name: "Desengordurante Alcalino", use: "Gordura pesada" },
                  { name: "Pano de Microfibra", use: "Superfícies delicadas" },
                  { name: "Escova Macia", use: "Filtros e grades" }
                ].map((product, index) => (
                  <div key={index} className="p-4 rounded-lg bg-muted">
                    <p className="font-medium mb-1">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.use}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Checklist de Manutenção</h3>
              <div className="space-y-3">
                {[
                  { task: "Limpar filtros", frequency: "Semanal" },
                  { task: "Verificar motor", frequency: "Mensal" },
                  { task: "Limpar dutos", frequency: "Trimestral" },
                  { task: "Inspeção completa", frequency: "Semestral" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                    <input type="checkbox" className="h-4 w-4 rounded border-border" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.task}</p>
                      <p className="text-xs text-muted-foreground">{item.frequency}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-destructive/5 border-destructive/20">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-2 text-destructive">Avisos Importantes</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Nunca use produtos abrasivos</li>
                    <li>• Sempre desligue a energia antes</li>
                    <li>• Use EPIs adequados</li>
                    <li>• Não molhe componentes elétricos</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Frequência Recomendada</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg bg-primary/5">
                  <span className="text-sm font-medium">Próxima Manutenção</span>
                  <span className="text-sm text-primary font-semibold">Em 7 dias</span>
                </div>
                <Button className="w-full">Criar Lembrete</Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModuleCleaning;
