import { Link, useLocation } from "react-router-dom";
import { Home, MessageCircle, BookOpen, BarChart3, LogOut, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ThemeToggleButton } from "./common/ThemeToggleButton";

const Navigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const mainNav = [
    { path: "/", icon: Home, label: "Accueil" },
    { path: "/chatbot", icon: MessageCircle, label: "Chatbot" },
    { path: "/journal", icon: BookOpen, label: "Journal" },
    { path: "/dashboard", icon: BarChart3, label: "Tableau de bord" },
  ];

  const moreNav = [
    { path: "/evenements", label: "Évènements" },
    { path: "/aide", label: "Aide" },
    { path: "/temoignages", label: "Témoignages" },
  ];
 


  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white dark:bg-black text-black dark:text-white backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full gradient-calm" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            MindCare Hub
          </span>
        </Link>

        {/* NAV */}
        <div className="flex items-center space-x-1">
          {/* Liens principaux */}
          {mainNav.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={isActive(item.path) ? "default" : "ghost"}
                size="sm"
                className="transition-smooth"
              >
                <item.icon className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">{item.label}</span>
              </Button>
            </Link>
          ))}

          {/* MENU MORE */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="transition-smooth">
                <MoreHorizontal className="h-5 w-5" />
                <span className="hidden sm:inline ml-2">More</span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-40">
              {moreNav.map((item) => (
                <DropdownMenuItem key={item.path} asChild>
                  <Link to={item.path}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Déconnexion */}
          <Link to="/auth">
            <Button variant="ghost" size="sm">
              <LogOut className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Déconnexion</span>
            </Button>
          </Link>

          {/* Mode sombre */}
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
