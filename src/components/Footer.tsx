import { Heart, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "À propos": [
      { label: "Notre mission", href: "#" },
      { label: "L'équipe", href: "#" },
      { label: "Partenaires", href: "#" },
      { label: "Contact", href: "#" },
    ],
    "Services": [
      { label: "MindCare Bot", href: "#" },
      { label: "Suivi émotionnel", href: "#" },
      { label: "Aide professionnelle", href: "#" },
      { label: "Communauté", href: "#" },
    ],
    "Ressources": [
      { label: "Articles", href: "#" },
      { label: "Témoignages", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Guide d'utilisation", href: "#" },
    ],
  };

  return (
    <footer className=" border-t border-border bg-white dark:bg-black text-black dark:text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-warm flex items-center justify-center">
                <Heart className="w-6 h-6 " />
              </div>
              <span className="text-xl font-bold">
                MindCare <span className="text-primary">Hub</span>
              </span>
            </div>
            <p className=" mb-6 max-w-sm">
              Votre espace bienveillant pour le bien-être émotionnel et la santé mentale. 
              Accessible, confidentiel et humain.
            </p>
            <div className="space-y-2 text-sm ">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@mindcarehub.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Paris, France</span>
              </div>
            </div>
          </div>

          {/* Link sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-sm  hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm ">
            <p>© 2024 MindCare Hub. Tous droits réservés.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                CGU
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;