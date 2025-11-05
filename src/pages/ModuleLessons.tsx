import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Video, FileText, Award } from "lucide-react";
import { Link } from "react-router-dom";
import moduleLessonsImage from "@/assets/module-lessons.jpg";

const ModuleLessons = () => {
  const lessons = [
    {
      title: "Introdução ao HVAC",
      type: "Vídeo",
      duration: "15 min",
      completed: true,
      icon: <Video className="h-4 w-4" />
    },
    {
      title: "Princípios de Ventilação",
      type: "Leitura",
      duration: "10 min",
      completed: true,
      icon: <FileText className="h-4 w-4" />
    },
    {
      title: "Fluxo de Ar e Pressão",
      type: "Interativo",
      duration: "20 min",
      completed: false,
      icon: <BookOpen className="h-4 w-4" />
    },
    {
      title: "Dimensionamento de Dutos",
      type: "Vídeo",
      duration: "25 min",
      completed: false,
      icon: <Video className="h-4 w-4" />
    },
    {
      title: "Motores e Ventiladores",
      type: "Leitura",
      duration: "12 min",
      completed: false,
      icon: <FileText className="h-4 w-4" />
    }
  ];

  const quizzes = [
    { title: "Quiz: Conceitos Básicos", questions: 10, score: 80 },
    { title: "Quiz: Ventilação", questions: 15, score: null },
    { title: "Quiz: Sistemas HVAC", questions: 20, score: null }
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
          <h1 className="text-4xl font-bold mb-4">Aulas e Conceitos</h1>
          <p className="text-lg text-muted-foreground">
            Aprenda os fundamentos teóricos de sistemas HVAC com aulas interativas
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Featured Lesson */}
            <Card className="overflow-hidden">
              <div className="relative aspect-video">
                <img 
                  src={moduleLessonsImage} 
                  alt="Aulas HVAC"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="mb-2">Em Andamento</Badge>
                  <h3 className="text-xl font-bold text-white">Fluxo de Ar e Pressão</h3>
                </div>
              </div>
              <div className="p-6 border-t">
                <p className="text-muted-foreground mb-4">
                  Entenda como o ar se movimenta através dos sistemas HVAC e a importância da pressão adequada.
                </p>
                <Button>Continuar Aula</Button>
              </div>
            </Card>

            {/* Lessons List */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Todas as Aulas</h3>
              <div className="space-y-3">
                {lessons.map((lesson, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border transition-all ${
                      lesson.completed 
                        ? 'bg-primary/5 border-primary/20' 
                        : 'bg-card border-border hover:border-primary/30 cursor-pointer'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                        lesson.completed 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted'
                      }`}>
                        {lesson.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{lesson.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span>{lesson.type}</span>
                          <span>•</span>
                          <span>{lesson.duration}</span>
                        </div>
                      </div>
                      {lesson.completed ? (
                        <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                          Concluído
                        </Badge>
                      ) : (
                        <Button size="sm" variant="outline">Iniciar</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quizzes */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-6">Avaliações</h3>
              <div className="space-y-3">
                {quizzes.map((quiz, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg border bg-card hover:border-primary/30 transition-all cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold mb-1">{quiz.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {quiz.questions} questões
                        </p>
                      </div>
                      {quiz.score !== null ? (
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{quiz.score}%</div>
                          <div className="text-xs text-muted-foreground">Aprovado</div>
                        </div>
                      ) : (
                        <Button size="sm">Fazer Quiz</Button>
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
              <h3 className="text-lg font-semibold mb-4">Progresso do Curso</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Aulas Completadas</span>
                    <span className="font-medium">2/5</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '40%' }} />
                  </div>
                </div>
                <div className="pt-4 border-t space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tempo total</span>
                    <span className="font-medium">82 min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Média de quizzes</span>
                    <span className="font-medium">80%</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Conceitos Abordados</h3>
              <div className="space-y-2">
                {[
                  "Ventilação Mecânica",
                  "Pressão Estática",
                  "Vazão de Ar (CFM)",
                  "Eficiência Energética",
                  "Controle de Temperatura",
                  "Qualidade do Ar"
                ].map((concept, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{concept}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex gap-3 mb-4">
                <Award className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Certificado</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete todas as aulas e obtenha 80% nos quizzes para receber seu certificado.
                  </p>
                </div>
              </div>
              <div className="h-2 bg-background rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: '40%' }} />
              </div>
              <p className="text-xs text-muted-foreground mt-2">40% completo</p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModuleLessons;
