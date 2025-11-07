import Navigation from "@/components/Navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Calendar, BookOpen, Music, Video, Smile } from "lucide-react";

const emotionTrendData = [
  { date: "Lun", score: 6 },
  { date: "Mar", score: 7 },
  { date: "Mer", score: 5 },
  { date: "Jeu", score: 8 },
  { date: "Ven", score: 7 },
  { date: "Sam", score: 9 },
  { date: "Dim", score: 8 },
];

const emotionDistribution = [
  { name: "Joie", value: 40, color: "hsl(150, 60%, 70%)" },
  { name: "Neutre", value: 30, color: "hsl(200, 30%, 85%)" },
  { name: "Stress", value: 20, color: "hsl(180, 65%, 65%)" },
  { name: "Tristesse", value: 10, color: "hsl(0, 70%, 60%)" },
];

const recommendations = [
  {
    title: "Méditation guidée du matin",
    category: "Exercice",
    icon: BookOpen,
    duration: "10 min",
  },
  {
    title: "Playlist calme et apaisante",
    category: "Musique",
    icon: Music,
    duration: "45 min",
  },
  {
    title: "Techniques de gestion du stress",
    category: "Vidéo",
    icon: Video,
    duration: "15 min",
  },
];

const Dashboard = () => {
  const overallScore = 7.4;

  return (
    <div className="min-h-screen text-black dark:text-white bg-white dark:bg-black">
      <Navigation />

      <div className="container max-w-7xl mx-auto p-4 space-y-6">
        {/* HEADER */}
        <div className="flex items-center justify-between animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold mb-2">Tableau de bord</h1>
            <p>Vue d'ensemble de votre bien-être émotionnel</p>
          </div>
          <Button
            variant="outline"
            className="transition-smooth text-black dark:text-white bg-white dark:bg-black"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Actualiser
          </Button>
        </div>

        {/* 3 CARDS TOP */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* SCORE */}
          <Card className="shadow-gentle animate-fade-in text-black dark:text-white bg-white dark:bg-black">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Score de positivité
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold gradient-calm bg-clip-text text-transparent">
                {overallScore}/10
              </div>
              <p className="text-xs mt-1">+12% par rapport à la semaine dernière</p>
            </CardContent>
          </Card>

          {/* ENTRIES */}
          <Card className="shadow-gentle animate-fade-in text-black dark:text-white bg-white dark:bg-black" style={{ animationDelay: "0.1s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Entrées cette semaine
              </CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">15</div>
              <p className="text-xs mt-1">Moyenne de 2.1 entrées par jour</p>
            </CardContent>
          </Card>

          {/* DOMINANT EMOTION */}
          <Card className="shadow-gentle animate-fade-in text-black dark:text-white bg-white dark:bg-black" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Émotion dominante
              </CardTitle>
              <Smile className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">Joie</div>
              <p className="text-xs mt-1">40% de vos émotions cette semaine</p>
            </CardContent>
          </Card>
        </div>

        {/* LINE & PIE CHART */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* LINE CHART */}
          <Card className="shadow-gentle animate-fade-in text-black dark:text-white bg-white dark:bg-black">
            <CardHeader>
              <CardTitle>Tendance du bien-être</CardTitle>
              <CardDescription>Évolution du score quotidien (0-10)</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={emotionTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* PIE CHART */}
          <Card className="shadow-gentle animate-fade-in text-black dark:text-white bg-white dark:bg-black">
            <CardHeader>
              <CardTitle>Répartition des émotions</CardTitle>
              <CardDescription>Distribution cette semaine</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={emotionDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.name} ${entry.value}%`}
                    outerRadius={100}
                    dataKey="value"
                  >
                    {emotionDistribution.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* RECOMMENDATIONS */}
        <Card className="shadow-soft animate-fade-in text-black dark:text-white bg-white dark:bg-black" style={{ animationDelay: "0.1s" }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Recommandations
            </CardTitle>
            <CardDescription>Contenus personnalisés pour vous</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {recommendations.map((rec, index) => (
              <Card key={index} className="border text-black dark:text-white bg-white dark:bg-black">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <rec.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm mb-1">{rec.title}</h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Badge variant="outline" className="text-xs">
                          {rec.category}
                        </Badge>
                        <span>{rec.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
