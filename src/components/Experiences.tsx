import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Star, MapPin } from "lucide-react";
import kayakExperience1 from '/lovable-uploads/046b34ab-a616-43b8-a9e3-6ccdbd43c2a8.png';
import kayakExperience2 from '/lovable-uploads/66f5ace9-ded1-4e7c-852f-c597a4e85239.png';

const experiences = [
  {
    title: "Passeio Águas Cristalinas",
    description: "Explore as piscinas naturais em caiaques transparentes, perfeito para toda a família",
    image: kayakExperience1,
    duration: "30 minutos",
    maxPeople: "2 pessoas",
    rating: 5,
    location: "Piscinas Naturais",
    price: "R$ 130",
    highlights: ["Águas cristalinas", "Caiaque transparente", "Fotos incluídas"]
  },
  {
    title: "Aventura Rochosa",
    description: "Navegue entre formações rochosas únicas e descubra cenários incríveis",
    image: kayakExperience2,
    duration: "45 minutos",
    maxPeople: "2 pessoas",
    rating: 5,
    location: "Formações Rochosas",
    price: "R$ 180",
    highlights: ["Paisagens únicas", "Guia especializado", "Equipamentos inclusos"]
  }
];

const Experiences = () => {
  return (
    <section id="experiencias" className="py-20 bg-gradient-beach">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            Nossas Experiências
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Escolha a aventura perfeita para você e sua família. Todas as experiências incluem equipamentos de segurança e guias especializados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <Card key={index} className="overflow-hidden shadow-ocean hover:shadow-float transition-all duration-300 group">
              <div className="relative">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center gap-1">
                    <Star className="text-yellow-400 fill-current" size={16} />
                    <span className="text-sm font-medium">{experience.rating}.0</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-deep-blue mb-3">{experience.title}</h3>
                <p className="text-muted-foreground mb-4">{experience.description}</p>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-ocean">
                    <Clock size={16} />
                    {experience.duration}
                  </div>
                  <div className="flex items-center gap-1 text-ocean">
                    <Users size={16} />
                    {experience.maxPeople}
                  </div>
                  <div className="flex items-center gap-1 text-ocean">
                    <MapPin size={16} />
                    {experience.location}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-deep-blue mb-2">Incluído:</h4>
                  <ul className="space-y-1">
                    {experience.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-2 h-2 bg-turquoise rounded-full"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-ocean">{experience.price}</div>
                  <Button className="bg-gradient-ocean hover:opacity-90 text-white">
                    Reservar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
