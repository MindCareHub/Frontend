import { useState } from "react";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Heart, Users, Calendar, MessageCircle, MapPin, Clock, UserPlus } from "lucide-react";
import Navigation from "@/components/Navigation";

const Community = () => {
  const posts = [
    {
      id: 1,
      author: "Utilisateur anonyme",
      avatar: "UA",
      time: "Il y a 2h",
      content: "Aujourd'hui j'ai réussi à sortir faire une promenade. Petit pas, mais je suis fière de moi 🌸",
      likes: 24,
      comments: 8,
      category: "Victoire personnelle"
    },
    {
      id: 2,
      author: "Membre de la communauté",
      avatar: "MC",
      time: "Il y a 5h",
      content: "Quelqu'un aurait des conseils pour gérer l'anxiété avant de dormir ? Ça devient vraiment difficile...",
      likes: 12,
      comments: 15,
      category: "Demande d'aide"
    },
    {
      id: 3,
      author: "Utilisateur anonyme",
      avatar: "UA",
      time: "Il y a 1j",
      content: "Je voulais juste dire merci à cette communauté. Vous m'aidez vraiment à ne pas me sentir seul(e) ❤️",
      likes: 45,
      comments: 12,
      category: "Gratitude"
    }
  ];

  const workshops = [
    {
      id: 1,
      title: "Atelier de méditation guidée",
      organizer: "MindCare Hub",
      date: "15 Mars 2025",
      time: "18h00 - 19h30",
      location: "En ligne",
      participants: 28,
      maxParticipants: 30,
      category: "Méditation"
    },
    {
      id: 2,
      title: "Club de parole: Gérer l'anxiété",
      organizer: "I'm The Code",
      date: "20 Mars 2025",
      time: "19h00 - 21h00",
      location: "Paris 11ème",
      participants: 12,
      maxParticipants: 15,
      category: "Groupe de parole"
    },
    {
      id: 3,
      title: "Atelier d'art-thérapie",
      organizer: "MindCare Hub",
      date: "25 Mars 2025",
      time: "14h00 - 16h00",
      location: "Lyon 3ème",
      participants: 8,
      maxParticipants: 12,
      category: "Art-thérapie"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-4">
              <Users className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium">Ensemble vers le mieux-être</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Communauté MindCare</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Partagez, échangez et soutenez-vous mutuellement dans un espace bienveillant
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-soft animate-fade-in text-center bg-white dark:bg-black text-black dark:text-white">
              <CardContent className="pt-6">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold mb-1">2,847</p>
                <p className="text-sm text-muted-foreground">Membres actifs</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft animate-fade-in text-center bg-white dark:bg-black text-black dark:text-white" style={{ animationDelay: "0.1s" }}>
              <CardContent className="pt-6">
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-3xl font-bold mb-1">1,234</p>
                <p className="text-sm text-muted-foreground">Publications</p>
              </CardContent>
            </Card>

            <Card className="shadow-soft animate-fade-in text-center bg-white dark:bg-black text-black dark:text-white" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-6 bg-white dark:bg-black text-black dark:text-white">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2 bg-white dark:bg-black  dark:text-white" />
                <p className="text-3xl font-bold mb-1">48</p>
                <p className="text-sm text-muted-foreground">Événements/mois</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="posts" className="space-y-6">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
             
              <TabsTrigger value="events" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Événements
              </TabsTrigger>
            </TabsList>

           
            <TabsContent value="events" className="space-y-4 animate-fade-in ">
              <Card className="shadow-soft border-2 bg-gradient-to-br from-primary/5 to-accent/5 bg-white dark:bg-black text-black dark:text-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-warm flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-2">Événements organisés mensuellement</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        En partenariat avec des organisations comme I'm The Code, nous proposons des ateliers et clubs de parole pour échanger et progresser ensemble.
                      </p>
                      <Badge className="bg-primary/20 text-primary">Gratuit pour les membres</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {workshops.map((workshop, index) => (
                <Card key={workshop.id} className="hover:shadow-glow transition-smooth animate-fade-in bg-white dark:bg-black text-black dark:text-white" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2">{workshop.category}</Badge>
                        <CardTitle className="text-xl mb-2">{workshop.title}</CardTitle>
                        <CardDescription>Organisé par {workshop.organizer}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        {workshop.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        {workshop.time}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        {workshop.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        {workshop.participants}/{workshop.maxParticipants} participants
                      </div>
                    </div>
                    <Button className="w-full">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Participer à l'atelier
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
