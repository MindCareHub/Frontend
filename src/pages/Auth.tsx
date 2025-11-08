import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { ThemeToggleButton } from "@/components/common/ThemeToggleButton";
import { login, signup } from "@/api/auth";

const Auth = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login"); // État pour gérer l'onglet actif

  const handleAuth = async (e, mode) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      let res;
      if (mode === "signup") {
        res = await signup(email, username, password);
        toast.success("Compte créé avec succès !");
        // Après inscription, basculer vers l'onglet login
        setActiveTab("login");
      } else {
        res = await login(email, password);
        toast.success("Connexion réussie !");
        // Sauvegarde du token JWT
        localStorage.setItem("token", res.data.access_token);
        navigate("/chatbot");
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.detail || "Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuest = () => {
    toast.info("Vous naviguez en mode invité");
    navigate("/chatbot");
  };

  return (
    <div className="min-h-screen flex items-center justify-center gradient-soft p-4">
      <Card className="w-full max-w-md shadow-gentle animate-fade-in bg-white dark:bg-black text-black dark:text-white">
        <ThemeToggleButton />

        <CardHeader className="text-center space-y-2 ">
          <div className="mx-auto h-16 w-16 rounded-full gradient-calm mb-4" />
          <CardTitle className="text-3xl">MindCare Hub</CardTitle>
          <CardDescription>Votre espace de bien-être mental</CardDescription>
        </CardHeader>

        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Connexion</TabsTrigger>
              <TabsTrigger value="signup">Inscription</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={(e) => handleAuth(e, "login")} className="space-y-4 ">
                <div className="space-y-2 ">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email ou pseudo"
                    required
                    className="transition-smooth bg-white dark:bg-black text-black dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="password"
                    name="password"
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
                    name="email"
                    placeholder="Email"
                    required
                    className="transition-smooth bg-white dark:bg-black text-black dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="text"
                    name="username"
                    placeholder="Pseudo"
                    required
                    className="transition-smooth bg-white dark:bg-black text-black dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="password"
                    name="password"
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
