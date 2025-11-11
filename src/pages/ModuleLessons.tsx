import { Header } from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  ArrowLeft, 
  ArrowRight, 
  BookOpen, 
  Wind,
  Gauge,
  ThermometerSun,
  Fan,
  Filter,
  Settings2,
  CheckCircle2,
  Lock
} from "lucide-react";

const ModuleLessons = () => {
  const lessons = [
    {
      id: 1,
      title: "Introdução aos Sistemas HVAC",
      level: "Básico",
      duration: "15 min",
      completed: true,
      locked: false,
      topics: ["O que é HVAC", "História e evolução", "Aplicações práticas"],
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Princípios de Ventilação",
      level: "Básico",
      duration: "20 min",
      completed: true,
      locked: false,
      topics: ["Circulação de ar", "Renovação atmosférica", "Tipos de ventilação"],
      icon: <Wind className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Coifas Domésticas",
      level: "Básico",
      duration: "25 min",
      completed: false,
      locked: false,
      topics: ["Tipos de coifas", "Funcionamento", "Instalação básica"],
      icon: <Filter className="h-5 w-5" />
    },
    {
      id: 4,
      title: "Exaustores e Ventiladores",
      level: "Intermediário",
      duration: "30 min",
      completed: false,
      locked: false,
      topics: ["Tipos de exaustores", "Capacidade e CFM", "Escolha adequada"],
      icon: <Fan className="h-5 w-5" />
    },
    {
      id: 5,
      title: "Pressão e Vazão de Ar",
      level: "Intermediário",
      duration: "35 min",
      completed: false,
      locked: false,
      topics: ["CFM e pressão estática", "Cálculo de vazão", "Dimensionamento"],
      icon: <Gauge className="h-5 w-5" />
    },
    {
      id: 6,
      title: "Aquecimento e Climatização",
      level: "Intermediário",
      duration: "40 min",
      completed: false,
      locked: false,
      topics: ["Sistemas de aquecimento", "Ar condicionado", "Integração HVAC"],
      icon: <ThermometerSun className="h-5 w-5" />
    },
    {
      id: 7,
      title: "Dutos e Distribuição de Ar",
      level: "Avançado",
      duration: "45 min",
      completed: false,
      locked: true,
      topics: ["Projeto de dutos", "Perda de carga", "Otimização"],
      icon: <Settings2 className="h-5 w-5" />
    },
    {
      id: 8,
      title: "Sistemas Industriais",
      level: "Avançado",
      duration: "50 min",
      completed: false,
      locked: true,
      topics: ["HVAC industrial", "Cozinhas profissionais", "Normas técnicas"],
      icon: <Settings2 className="h-5 w-5" />
    }
  ];

  const levelColors = {
    "Básico": "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
    "Intermediário": "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    "Avançado": "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20"
  };

  const completedLessons = lessons.filter(l => l.completed).length;
  const progressPercentage = (completedLessons / lessons.length) * 100;

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
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Aulas e Conceitos HVAC
                </h1>
                <p className="text-muted-foreground mt-2">
                  Do básico ao avançado: domine os fundamentos de sistemas HVAC
                </p>
              </div>
            </div>

            {/* Progress Card */}
            <Card className="p-6 mt-8">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-semibold">Seu Progresso</h3>
                  <p className="text-sm text-muted-foreground">
                    {completedLessons} de {lessons.length} lições completadas
                  </p>
                </div>
                <div className="text-2xl font-bold text-primary">
                  {Math.round(progressPercentage)}%
                </div>
              </div>
              <Progress value={progressPercentage} className="h-3" />
            </Card>
          </div>
        </div>
      </section>

      {/* Lessons List */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl space-y-6">
            {lessons.map((lesson) => (
              <Card 
                key={lesson.id}
                className={`p-6 transition-all duration-300 ${
                  lesson.locked 
                    ? 'opacity-60' 
                    : 'hover:shadow-lg hover:border-primary/50 cursor-pointer'
                }`}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl flex-shrink-0 ${
                    lesson.completed 
                      ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                      : lesson.locked
                      ? 'bg-muted text-muted-foreground'
                      : 'bg-primary/10 text-primary'
                  }`}>
                    {lesson.locked ? <Lock className="h-6 w-6" /> : lesson.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold">
                            {lesson.title}
                          </h3>
                          {lesson.completed && (
                            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <Badge className={levelColors[lesson.level as keyof typeof levelColors]}>
                            {lesson.level}
                          </Badge>
                          <span className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            {lesson.duration}
                          </span>
                        </div>
                      </div>
                      <Button 
                        disabled={lesson.locked}
                        className="flex-shrink-0"
                      >
                        {lesson.completed ? 'Revisar' : lesson.locked ? 'Bloqueado' : 'Começar'}
                        {!lesson.locked && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Button>
                    </div>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2">
                      {lesson.topics.map((topic, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 rounded-full bg-muted text-xs font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="max-w-4xl mt-12 flex justify-between items-center">
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </Link>
            <Link to="/modulo/3d">
              <Button>
                Próximo: Aprendizado 3D
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModuleLessons;
