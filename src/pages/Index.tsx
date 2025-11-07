import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, BookOpen, BarChart3, Heart, Sparkles, Shield } from "lucide-react";
import heroImage from "@/assets/mentis.webp";
import Navigation from "@/components/Navigation";
import QuickAccessCards from "@/components/QuickAccessCards";
import Footer from "@/components/Footer";


const Index = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Dialogue bienveillant",
      description: "Exprimez vos émotions librement et recevez un soutien empathique à tout moment.",
    },
    {
      icon: BookOpen,
      title: "Journal personnel",
      description: "Notez vos pensées quotidiennes et observez vos émotions évoluer avec le temps.",
    },
    {
      icon: BarChart3,
      title: "Aperçus clairs",
      description: "Visualisez vos tendances émotionnelles et découvrez ce qui influence votre bien-être.",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Bienveillance",
      description: "Un espace chaleureux où vos émotions sont respectées et comprises.",
    },
    {
      icon: Shield,
      title: "Confidentialité",
      description: "Vos données restent privées et sécurisées, toujours sous votre contrôle.",
    },
    {
      icon: Sparkles,
      title: "Soutien intelligent",
      description: "Des outils intuitifs pour vous accompagner dans vos moments de doute et de joie.",
    },
  ];

  return (
    <div className="min-h-screen font-montserrat bg-white dark:bg-black text-black dark:text-white">
       <Navigation />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-soft dark:bg-black" />
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary  text-sm font-semibold">
                <Sparkles className="h-4 w-4" />
                Votre bien-être, notre priorité
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight ">
                Prenez soin de votre{" "}
                <span className="text-primary">santé mentale</span>
              </h1>
              <p className="text-lg  max-w-xl">
                MindCare Hub vous accompagne chaque jour avec des outils simples et chaleureux pour mieux comprendre vos émotions et retrouver votre équilibre.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/auth">
                  <Button size="lg" className="bg-primary font-montserrat hover:opacity-90 shadow-md transition-all">
                    Commencer gratuitement
                  </Button>
                </Link>
                <Link to="/chatbot">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all">
                    Essayer en invité
                  </Button>
                </Link>
              </div>
            </div>
          <div className="flex justify-center items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
  <img
    src={heroImage}
    alt="Bien-être mental"
    className="rounded-3xl shadow-gentle max-w-full h-auto object-contain"
    loading="eager"
    decoding="async"
  />
</div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center space-y-4 mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold ">
            Tout ce dont vous avez besoin
          </h2>
          <p className="text-lg  max-w-2xl mx-auto">
            Des outils simples et intuitifs pour mieux comprendre vos émotions et prendre soin de vous.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="shadow-md hover:shadow-lg bg-white dark:bg-black text-black dark:text-white transition-all animate-fade-in border-2 border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4 mx-auto">
                    <Icon className="h-6 w-6 " />
                  </div>
                  <CardTitle className="text-lg font-bold">{feature.title}</CardTitle>
                  <CardDescription className="text-black dark:text-white">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Values Section */}
             <QuickAccessCards />


      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <Card className="shadow-lg border-2 text-black dark:text-white border-primary/20 bg-primary-soft dark:bg-black animate-fade-in">
          <CardContent className="text-center space-y-6 py-12">
            <h2 className="text-3xl md:text-4xl font-bold ">
              Prêt à commencer votre voyage ?
            </h2>
            <p className="text-lg  max-w-2xl mx-auto">
              Rejoignez notre communauté et prenez soin de votre bien-être émotionnel dès aujourd'hui.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/auth">
                <Button size="lg" className="bg-primary text-white hover:opacity-90 shadow-md transition-all">
                  Créer un compte gratuit
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
<Footer />
     
    </div>
  );
};

export default Index;
