import { Button } from "@/components/ui/button";
import { ArrowDown, Calendar } from "lucide-react";
import heroImage from '/lovable-uploads/ce0d685c-c768-4964-b914-893eca398b36.png';

const Hero = () => {
  const handleBookClick = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Caiaques Harbor Experience" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/60 to-ocean/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            Explore o Paraíso
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-sand">
            Descubra as águas cristalinas do Nordeste brasileiro com nossos caiaques transparentes
          </p>
          
          {/* Botão centralizado */}
          <div className="flex justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-ocean hover:opacity-90 text-white shadow-ocean text-lg px-8 py-4"
              onClick={handleBookClick}
            >
              <Calendar className="mr-2" size={20} />
              Reserve Agora
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-turquoise mb-2">500+</div>
              <div className="text-sand">Aventuras Realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-turquoise mb-2">10+</div>
              <div className="text-sand">Locais Paradisíacos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-turquoise mb-2">100%</div>
              <div className="text-sand">Satisfação Garantida</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ArrowDown className="animate-bounce text-white" size={32} />
      </div>
    </section>
  );
};

export default Hero;
