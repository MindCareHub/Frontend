import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Smile, Frown, Meh } from "lucide-react";
import { toast } from "sonner";
import Footer from "@/components/Footer";

interface JournalEntry {
  id: string;
  date: string;
  content: string;
  emotion: "joy" | "sadness" | "neutral" | "stress";
}

const emotionConfig = {
  joy: { icon: Smile, label: "Joie", color: "bg-secondary text-secondary-foreground" },
  sadness: { icon: Frown, label: "Tristesse", color: "bg-destructive text-destructive-foreground" },
  neutral: { icon: Meh, label: "Neutre", color: "bg-muted text-muted-foreground" },
  stress: { icon: Frown, label: "Stress", color: "bg-accent text-accent-foreground" },
};

const Journal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: "1",
      date: "2024-01-15",
      content: "Aujourd'hui était une belle journée. J'ai passé du temps avec des amis et je me sens vraiment bien.",
      emotion: "joy",
    },
    {
      id: "2",
      date: "2024-01-14",
      content: "Journée difficile au travail. Je me sens un peu dépassé par tout ce que j'ai à faire.",
      emotion: "stress",
    },
  ]);
  const [newEntry, setNewEntry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const detectEmotion = (text: string): JournalEntry["emotion"] => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes("heureux") || lowerText.includes("belle") || lowerText.includes("bien")) {
      return "joy";
    }
    if (lowerText.includes("triste") || lowerText.includes("mal") || lowerText.includes("difficile")) {
      return "sadness";
    }
    if (lowerText.includes("stress") || lowerText.includes("dépassé") || lowerText.includes("inquiet")) {
      return "stress";
    }
    return "neutral";
  };

  const handleSubmit = async () => {
    if (!newEntry.trim()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const emotion = detectEmotion(newEntry);
      const entry: JournalEntry = {
        id: Date.now().toString(),
        date: new Date().toISOString().split("T")[0],
        content: newEntry,
        emotion,
      };

      setEntries((prev) => [entry, ...prev]);
      setNewEntry("");
      setIsSubmitting(false);
      toast.success("Entrée de journal enregistrée");
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container max-w-6xl mx-auto p-4 space-y-6">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Journal Émotionnel</h1>
          <p className="text-muted-foreground">Exprimez vos pensées et suivez vos émotions au fil du temps</p>
        </div>

        <Card className="shadow-gentle animate-fade-in">
          <CardHeader>
            <CardTitle>Nouvelle entrée</CardTitle>
            <CardDescription>Que ressentez-vous aujourd'hui ?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={newEntry}
              onChange={(e) => setNewEntry(e.target.value)}
              placeholder="Écrivez vos pensées, émotions, et réflexions..."
              className="min-h-[150px] transition-smooth"
            />
            <Button
              onClick={handleSubmit}
              disabled={!newEntry.trim() || isSubmitting}
              className="gradient-calm hover:opacity-90 transition-smooth"
            >
              {isSubmitting ? "Enregistrement..." : "Enregistrer l'entrée"}
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Entrées précédentes</h2>
            <Button variant="outline" size="sm" className="transition-smooth">
              <Calendar className="mr-2 h-4 w-4" />
              Filtrer
            </Button>
          </div>

          <div className="grid gap-4">
            {entries.map((entry, index) => {
              const EmotionIcon = emotionConfig[entry.emotion].icon;
              return (
                <Card key={entry.id} className="shadow-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {new Date(entry.date).toLocaleDateString("fr-FR", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <Badge className={`${emotionConfig[entry.emotion].color} transition-smooth`}>
                        <EmotionIcon className="mr-1 h-3 w-3" />
                        {emotionConfig[entry.emotion].label}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground leading-relaxed">{entry.content}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default Journal;
