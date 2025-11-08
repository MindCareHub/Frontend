
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
      name: "Centre MindCare Benin",
      type: "Clinique psychiatrique",
      address: "Akpakpa, Cotonou, Bénin",
      phone: "+229 21 30 45 67",
      email: "mindcarebenin@gmail.com",
      services: ["Consultations", "Urgences", "Hospitalisation"],
      mindcareAccess: true
    },
    {
      id: 2,
      name: "Cabinet PsySanté",
      type: "Cabinet de psychologues",
      address: "Abomey-Calavi, Bénin",
      phone: "+229 22 34 56 78",
      email: "cabinetpysante@gmail.com",
      services: ["Thérapies individuelles", "Groupes de soutien"],
      mindcareAccess: true
    }
  ];

 const psychologists = [
  {
    id: 1,
    name: "Dr. Mireille ADJAHO",
    specialty: "Gestion du stress et anxiété",
    experience: "12 ans d'expérience",
    location: "Cotonou – Fidjrossè",
    phone: "+229 97 45 23 18",
    email: "mireille.adjaho@psy-bj.com",
    mindcareAccess: true,
    price: "20 000 FCFA / séance"
  },
  {
    id: 2,
    name: "Dr. Rodrigue HOUNGBÉ",
    specialty: "Troubles du comportement et thérapie cognitive",
    experience: "8 ans d'expérience",
    location: "Porto-Novo – Tokpota",
    phone: "+229 61 22 47 80",
    email: "r.houngbe@psy-bj.com",
    mindcareAccess: true,
    price: "15 000 FCFA / séance"
  },
  {
    id: 3,
    name: "Dr. Clarisse AHOUANSOU",
    specialty: "Thérapie familiale et conjugale",
    experience: "14 ans d'expérience",
    location: "Parakou – Zongo",
    phone: "+229 96 84 50 12",
    email: "clarisse.ahouansou@psy-bj.com",
    mindcareAccess: false,
    price: "25 000 FCFA / séance"
  }
];

 const organizations = [
  {
    id: 1,
    name: "ONG Racines",
    description:
      "Organisation béninoise engagée dans la santé mentale, le développement personnel et l’accompagnement des jeunes.",
    services: ["Ateliers de développement personnel", "Groupes de parole", "Accompagnement psychologique"],
    contact: "contact@ongracines.org"
  },
  {
    id: 2,
    name: "Centre Arc-en-Ciel",
    description:
      "Centre d’écoute et de soutien psychosocial offrant une aide gratuite et confidentielle pour les personnes en détresse.",
    services: ["Ligne d'écoute", "Conseils psychosociaux", "Orientation familiale"],
    contact: "info@arcenciel-bj.org"
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
