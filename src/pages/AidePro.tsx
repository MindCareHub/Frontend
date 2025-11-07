
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Stethoscope, MapPin, Phone, Mail, Heart, Building, Users, Search } from "lucide-react";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Professional = () => {
  const clinics = [
    {
      id: 1,
      name: "Centre MindCare Paris",
      type: "Clinique psychiatrique",
      address: "12 Rue de la Santé, 75014 Paris",
      phone: "+33 1 45 67 89 00",
      email: "contact@mindcareparis.fr",
      services: ["Consultations", "Urgences", "Hospitalisation"],
      mindcareAccess: true
    },
    {
      id: 2,
      name: "Clinique du Bien-Être Lyon",
      type: "Centre de santé mentale",
      address: "25 Avenue des Lumières, 69003 Lyon",
      phone: "+33 4 78 90 12 34",
      email: "info@bienetre-lyon.fr",
      services: ["Thérapies de groupe", "Suivi individuel", "Ateliers"],
      mindcareAccess: true
    }
  ];

  const psychologists = [
    {
      id: 1,
      name: "Dr. Sophie Martin",
      specialty: "Anxiété et dépression",
      experience: "15 ans d'expérience",
      location: "Paris 15ème",
      phone: "+33 1 42 34 56 78",
      email: "sophie.martin@psy.fr",
      mindcareAccess: true,
      price: "60€/séance"
    },
    {
      id: 2,
      name: "Dr. Pierre Dubois",
      specialty: "Troubles du comportement",
      experience: "10 ans d'expérience",
      location: "Lyon 3ème",
      phone: "+33 4 72 11 22 33",
      email: "p.dubois@psy.fr",
      mindcareAccess: true,
      price: "50€/séance"
    },
    {
      id: 3,
      name: "Dr. Amélie Rousseau",
      specialty: "Thérapie familiale",
      experience: "12 ans d'expérience",
      location: "Marseille 8ème",
      phone: "+33 4 91 44 55 66",
      email: "a.rousseau@psy.fr",
      mindcareAccess: false,
      price: "70€/séance"
    }
  ];

  const organizations = [
    {
      id: 1,
      name: "I'm The Code",
      description: "Organisation partenaire proposant des ateliers de développement personnel et des clubs de parole mensuels",
      services: ["Ateliers hebdomadaires", "Clubs de parole", "Mentorat"],
      contact: "contact@imthecode.org"
    },
    {
      id: 2,
      name: "Écoute et Partage",
      description: "Association d'entraide et de soutien psychologique gratuit pour les personnes en difficulté",
      services: ["Ligne d'écoute 24/7", "Groupes de soutien", "Accompagnement social"],
      contact: "aide@ecoutepartage.fr"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-4">
              <Stethoscope className="w-4 h-4 text-accent-foreground" />
              <span className="text-sm font-medium">MindCare Access</span>
            </div>
            <h1 className="text-4xl font-bold mb-4">Aide Professionnelle</h1>
            <p className=" max-w-2xl mx-auto">
              Trouvez un professionnel de santé mentale près de chez vous avec des tarifs accessibles
            </p>
          </div>

          <Card className="mb-8 shadow-soft animate-fade-in border-2 bg-white dark:bg-black text-black dark:text-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-warm flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 " />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">Programme MindCare Access</h3>
                  <p className="text-sm  mb-4">
                    Grâce à nos partenariats, bénéficiez de consultations à prix réduit ou gratuites. 
                    Les établissements et professionnels marqués du badge MindCare Access proposent des tarifs solidaires.
                  </p>
                  <div className="flex gap-2">
                    <Badge className="bg-primary/20 text-primary">Séances gratuites</Badge>
                    <Badge className="bg-primary/20 text-primary">Tarifs réduits</Badge>
                    <Badge className="bg-primary/20 text-primary">Sans avance de frais</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mb-6 ">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 " />
              <Input 
                placeholder="Rechercher par ville, spécialité..." 
                className="pl-10 bg-white dark:bg-black text-black dark:text-white"
              />
            </div>
          </div>

          <Tabs defaultValue="psychologists" className="space-y-6 ">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 bg-white dark:bg-black text-black dark:text-white">
              <TabsTrigger value="psychologists" className="flex items-center gap-2 ">
                <Users className="w-4 h-4" />
                Psychologues
              </TabsTrigger>
            
              <TabsTrigger value="organizations" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Associations
              </TabsTrigger>
            </TabsList>

            <TabsContent value="psychologists" className="space-y-4 animate-fade-in bg-white dark:bg-black text-black dark:text-white">
              {psychologists.map((psy, index) => (
                <Card key={psy.id} className="hover:shadow-glow transition-smooth animate-fade-in bg-white dark:bg-black text-black dark:text-white" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="">
                    <div className="flex items-start justify-between ">
                      <div className="flex-1 ">
                        <div className="flex items-center gap-2 mb-2 ">
                          <CardTitle className="text-xl">{psy.name}</CardTitle>
                          {psy.mindcareAccess && (
                            <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30">
                              MindCare Access
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="space-y-1">
                          <p className="font-medium ">{psy.specialty}</p>
                          <p>{psy.experience}</p>
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">{psy.price}</p>
                        {psy.mindcareAccess && (
                          <p className="text-xs ">ou gratuit*</p>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm ">
                        <MapPin className="w-4 h-4" />
                        {psy.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4" />
                        {psy.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm ">
                        <Mail className="w-4 h-4" />
                        {psy.email}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1">Prendre rendez-vous</Button>
                      <Button className="bg-white dark:bg-black text-black dark:text-white">Voir le profil</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

          

            <TabsContent value="organizations" className="space-y-4 animate-fade-in">
              {organizations.map((org, index) => (
                <Card key={org.id} className="hover:shadow-glow transition-smooth animate-fade-in bg-white dark:bg-black text-black dark:text-white" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                        <Heart className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 text-black dark:text-white">{org.name}</CardTitle>
                        <CardDescription className="text-base text-black dark:text-white">{org.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-black dark:text-white" >
                      <div>
                        <p className="text-sm font-medium mb-2">Services proposés :</p>
                        <div className="flex gap-2 flex-wrap text-black dark:text-white">
                          {org.services.map((service, idx) => (
                            <Badge key={idx} variant="outline">{service}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm  pt-2">
                        <Mail className="w-4 h-4" />
                        {org.contact}
                      </div>
                      <Button className="w-full">En savoir plus</Button>
                    </div>
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

export default Professional;
