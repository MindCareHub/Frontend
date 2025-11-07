import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Video, FileText, Star, Quote } from "lucide-react";
import Navigation from "@/components/Navigation";

const Testimonials = () => {
  const videoTestimonials = [
    {
      id: 1,
      title: "De l'anxiété à la sérénité",
      author: "Marie, 28 ans",
      category: "Anxiété",
      thumbnail: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=300&fit=crop",
      duration: "8:45"
    },
    {
      id: 2,
      title: "Reconstruire après une dépression",
      author: "Thomas, 35 ans",
      category: "Dépression",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      duration: "12:20"
    },
    {
      id: 3,
      title: "Apprendre à s'aimer",
      author: "Sophie, 24 ans",
      category: "Confiance en soi",
      thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop",
      duration: "6:30"
    }
  ];

  const writtenTestimonials = [
    {
      id: 1,
      title: "Un nouveau départ",
      author: "Lucas",
      excerpt: "MindCare Hub m'a aidé à retrouver l'espoir quand tout semblait sombre. Grâce au soutien que j'ai reçu ici, j'ai appris à gérer mes émotions et à voir la vie différemment.",
      category: "Dépression",
      rating: 5
    },
    {
      id: 2,
      title: "Je ne suis plus seule",
      author: "Amélie",
      excerpt: "La communauté MindCare est incroyable. Pour la première fois, je me sens comprise et soutenue. Les ateliers de groupe m'ont vraiment changé la vie.",
      category: "Solitude",
      rating: 5
    },
    {
      id: 3,
      title: "Des outils concrets",
      author: "David",
      excerpt: "Les exercices proposés par MindCare Bot sont vraiment efficaces. J'ai appris des techniques de respiration et de méditation qui m'aident au quotidien.",
      category: "Stress",
      rating: 5
    }
  ];

  const expertAdvice = [
    {
      id: 1,
      title: "Gérer l'anxiété au quotidien",
      author: "Dr. Sophie Martin",
      role: "Psychologue clinicienne",
      excerpt: "L'anxiété est une réaction naturelle, mais elle peut devenir envahissante. Voici mes conseils pour la gérer au quotidien...",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Sortir de la dépression",
      author: "Dr. Pierre Dubois",
      role: "Psychiatre",
      excerpt: "La dépression n'est pas une fatalité. Avec le bon accompagnement et les bonnes stratégies, il est possible de s'en sortir...",
      readTime: "7 min"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-8">
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-4">
              <Heart className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium">Inspiration & Motivation</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Témoignages & Conseils</h1>
            <p className=" max-w-2xl mx-auto">
              Découvrez des histoires inspirantes et des conseils d'experts pour votre parcours de bien-être
            </p>
          </div>

          <Tabs defaultValue="videos" className="space-y-6 ">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-white dark:bg-black text-black dark:text-white">
              <TabsTrigger value="videos" className="flex items-center gap-2 ">
                <Video className="w-4 h-4" />
                Vidéos
              </TabsTrigger>
              <TabsTrigger value="written" className="flex items-center gap-2 ">
                <FileText className="w-4 h-4" />
                Écrits
              </TabsTrigger>
              <TabsTrigger value="experts" className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                Experts
              </TabsTrigger>
            </TabsList>

            <TabsContent value="videos" className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-white dark:bg-black text-black dark:text-white">
                {videoTestimonials.map((video, index) => (
                  <Card key={video.id} className="group hover:shadow-glow transition-smooth hover:-translate-y-1 overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                        <Button size="lg" className="rounded-full">
                          <Video className="w-5 h-5 mr-2" />
                          Regarder
                        </Button>
                      </div>
                      <Badge className="absolute top-2 right-2 bg-black/60 text-white">
                        {video.duration}
                      </Badge>
                    </div>
                    <CardHeader>
                      <Badge className="w-fit mb-2" variant="secondary">{video.category}</Badge>
                      <CardTitle className="text-lg ">{video.title}</CardTitle>
                      <CardDescription>{video.author}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="written" className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {writtenTestimonials.map((story, index) => (
                  <Card key={story.id} className="hover:shadow-glow transition-smooth hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <Badge className="w-fit mb-2" variant="secondary">{story.category}</Badge>
                      <CardTitle className="text-xl">{story.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <span>{story.author}</span>
                        <div className="flex ml-2">
                          {[...Array(story.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative">
                        <Quote className="w-8 h-8  absolute -top-2 -left-2" />
                        <p className="text-sm  italic pl-6">
                          {story.excerpt}
                        </p>
                      </div>
                      <Button variant="ghost" className="w-full mt-4">
                        Lire la suite
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="experts" className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                {expertAdvice.map((advice, index) => (
                  <Card key={advice.id} className="hover:shadow-glow transition-smooth hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                          <Star className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-1">{advice.title}</CardTitle>
                          <CardDescription>
                            <span className="font-medium ">{advice.author}</span>
                            <br />
                            {advice.role}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm  mb-4">
                        {advice.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{advice.readTime} de lecture</Badge>
                        <Button variant="ghost">Lire l'article</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
