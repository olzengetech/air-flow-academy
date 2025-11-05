import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Award, BookOpen, Clock, Trophy } from "lucide-react";

export const ProgressDashboard = () => {
  const stats = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      label: "Lições Completadas",
      value: "12",
      total: "50",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: <Clock className="h-5 w-5" />,
      label: "Tempo de Estudo",
      value: "8.5h",
      total: "Total",
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: <Trophy className="h-5 w-5" />,
      label: "Pontuação",
      value: "850",
      total: "pontos",
      color: "text-yellow-600 dark:text-yellow-400"
    },
    {
      icon: <Award className="h-5 w-5" />,
      label: "Certificados",
      value: "2",
      total: "obtidos",
      color: "text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seu Progresso
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhe sua evolução no aprendizado de sistemas HVAC
          </p>
        </div>

        {/* Overall Progress */}
        <Card className="p-8 mb-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold">Progresso Geral</h3>
                <p className="text-muted-foreground">Continue aprendendo para desbloquear novos módulos</p>
              </div>
              <div className="text-4xl font-bold text-primary">24%</div>
            </div>
            <Progress value={24} className="h-4" />
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold">
                    {stat.value}
                    <span className="text-sm font-normal text-muted-foreground ml-1">
                      {stat.total}
                    </span>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
