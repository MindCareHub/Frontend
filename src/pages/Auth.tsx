import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { ThemeToggleButton } from "@/components/common/ThemeToggleButton";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (e: React.FormEvent, mode: "login" | "signup") => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success(mode === "login" ? "Connexion réussie !" : "Compte créé avec succès !");
      navigate("/chatbot");
    }, 1000);
  };

  const handleGuest = () => {
    toast.info("Vous naviguez en mode invité");
    navigate("/chatbot");
  };

  return (
    <div className="min-h-screen flex items-center justify-center gradient-soft p-4">
      <Card className="w-full max-w-md shadow-gentle animate-fade-in bg-white dark:bg-black text-black dark:text-white">
              <ThemeToggleButton  />

        <CardHeader className="text-center space-y-2 ">
          <div className="mx-auto h-16 w-16 rounded-full gradient-calm mb-4" />
          <CardTitle className="text-3xl">MindCare Hub</CardTitle>
          <CardDescription>Votre espace de bien-être mental</CardDescription>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Connexion</TabsTrigger>
              <TabsTrigger value="signup">Inscription</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login">
              <form onSubmit={(e) => handleAuth(e, "login")} className="space-y-4 ">
                <div className="space-y-2 ">
                  <Input
                    type="email"
                    placeholder="Email ou pseudo"
                    required
                    className="transition-smooth bg-white dark:bg-black text-black dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Mot de passe"
                    required
                    className="transition-smooth bg-white dark:bg-black text-black dark:text-white"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gradient-calm hover:opacity-90 transition-smooth"
                  disabled={isLoading}
                >
                  {isLoading ? "Connexion..." : "Se connecter"}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={(e) => handleAuth(e, "signup")} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email"
                    required
                    className="transition-smooth"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Pseudo"
                    required
                    className="transition-smooth bg-white dark:bg-black text-black dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Mot de passe"
                    required
                    className="transition-smooth bg-white dark:bg-black text-black dark:text-white"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full gradient-calm hover:opacity-90 transition-smooth"
                  disabled={isLoading}
                >
                  {isLoading ? "Création..." : "S'inscrire"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">Ou</span>
              </div>
            </div>
            
            <Button
              variant="outline"
              className="w-full mt-4 transition-smooth bg-white dark:bg-black text-black dark:text-white"
              onClick={handleGuest}
            >
              Continuer en mode invité
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Auth;
