import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Smile, Frown, Meh } from "lucide-react";
import { toast } from "sonner";
import Footer from "@/components/Footer";
import { getJournalEntries, createJournalEntry } from "@/api/journal";

interface JournalEntry {
  id: string;
  date: string;
  content: string;
  emotion: string; // maintenant totalement dynamique
}

const emotionConfig: Record<string, { icon: any; color: string }> = {
  joie: { icon: Smile, color: "bg-secondary text-secondary-foreground" },
  tristesse: { icon: Frown, color: "bg-destructive text-destructive-foreground" },
  neutre: { icon: Meh, color: "bg-muted text-muted-foreground" },
  stress: { icon: Frown, color: "bg-accent text-accent-foreground" },
  // tu peux rajouter d'autres émotions détectées par l'API ici
};

const Journal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [newEntry, setNewEntry] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Charger les entrées depuis l'API
  const fetchEntries = async () => {
    try {
      const data = await getJournalEntries(20, 0); // limit / offset
      const formattedEntries = data.entries.map((e: any) => ({
        id: e.id,
        date: e.created_at || new Date().toISOString(),
        content: e.entry_text,
        emotion: e.emotion || "neutre",
      }));
      setEntries(formattedEntries);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  // Création d'une nouvelle entrée
  const handleSubmit = async () => {
    if (!newEntry.trim()) return;
    setIsSubmitting(true);

    try {
      const savedEntry = await createJournalEntry(newEntry);
      const formattedEntry: JournalEntry = {
        id: savedEntry.id,
        date: savedEntry.created_at || new Date().toISOString(),
        content: savedEntry.entry_text,
        emotion: savedEntry.emotion || "neutre",
      };
      setEntries((prev) => [formattedEntry, ...prev]);
      setNewEntry("");
      toast.success("Entrée de journal enregistrée");
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
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
              const config = emotionConfig[entry.emotion] || { icon: Meh, color: "bg-muted text-muted-foreground" };
              const EmotionIcon = config.icon;

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
                      <Badge className={`${config.color} transition-smooth`}>
                        <EmotionIcon className="mr-1 h-3 w-3" />
                        {entry.emotion} {/* Affiche l’émotion telle que renvoyée par l’API */}
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
