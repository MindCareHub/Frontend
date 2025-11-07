import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  MessageCircle, 
  Heart, 
  Users, 
  FileText, 
  Shield, 
  Stethoscope,
  TrendingUp,
  Sparkles
} from "lucide-react";

const quickAccessItems = [
  {
    icon: MessageCircle,
    title: "MindCare Bot",
    description: "Discutez avec notre assistant empathique disponible 24/7",
    color: "primary",
    action: "Commencer à discuter",
    href: "/chatbot"
  },
  {
    icon: TrendingUp,
    title: "Mon bien-être",
    description: "Suivez l'évolution de vos émotions et votre progression",
    color: "secondary",
    action: "Voir mon tableau de bord",
    href: "/dashboard"
  },
  {
    icon: Sparkles,
    title: "Témoignages inspirants",
    description: "Découvrez des histoires de résilience et d'espoir",
    color: "accent",
    action: "Lire les témoignages",
    href: "/testimonials"
  },
  {
    icon: Stethoscope,
    title: "Aide professionnelle",
    description: "Trouvez un psychologue ou une clinique partenaire",
    color: "muted",
    action: "Trouver de l'aide",
    href: "/professional"
  },
  {
    icon: Shield,
    title: "Signalement anonyme",
    description: "Dénoncez en toute sécurité et confidentialité",
    color: "destructive",
    action: "Faire un signalement",
    href: "/report"
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Rejoignez des groupes de parole et ateliers bienveillants",
    color: "primary",
    action: "Rejoindre la communauté",
    href: "/community"
  }
];

const QuickAccessCards = () => {
  return (
    <section className="py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">
            Comment pouvons-nous vous aider ?
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Explorez nos services conçus pour votre bien-être émotionnel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {quickAccessItems.map((item, index) => (
            <Card 
              key={item.title}
              className="group hover:shadow-glow bg-white dark:bg-black text-black dark:text-white transition-smooth hover:-translate-y-1 animate-fade-in border-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth bg-white dark:bg-black text-black dark:text-white">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to={item.href}>
                    {item.action}
                    <span className="ml-auto group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessCards;
