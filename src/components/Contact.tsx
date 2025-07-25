import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = "Olá! Gostaria de fazer uma reserva para o passeio de caiaque!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/harborcaiaque', '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-gradient-sunset">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Reserve Sua Aventura
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Entre em contato conosco e viva uma experiência única nas águas cristalinas do Nordeste
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="shadow-float">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-deep-blue mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-ocean" size={24} />
                  <div>
                    <p className="font-semibold">Localização</p>
                    <p className="text-muted-foreground">Praia de Muro alto, Pernambuco - Brasil</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="text-ocean" size={24} />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-muted-foreground">(11) 99999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Clock className="text-ocean" size={24} />
                  <div>
                    <p className="font-semibold">Horário de Funcionamento</p>
                    <p className="text-muted-foreground">Todos os dias: 8h às 17h</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-float">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-deep-blue mb-6">Faça sua Reserva</h3>
              
              <div className="space-y-4">
                <Button 
                  className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-4"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="mr-2" size={20} />
                  Reservar pelo WhatsApp
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-ocean text-ocean hover:bg-ocean hover:text-white text-lg py-4"
                  onClick={handleInstagramClick}
                >
                  <Instagram className="mr-2" size={20} />
                  Seguir no Instagram
                </Button>
              </div>
              
              <div className="mt-8 p-4 bg-secondary/20 rounded-lg">
                <h4 className="font-semibold text-deep-blue mb-2">Informações Importantes:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• É necessário reservar com antecedência</li>
                  <li>• Todos os equipamentos e guia especializado incluso</li>
                  <li>• Os pacotes que incluem crianças, são para crianças de até 8 anos (desde que esteja dentro do limite de peso do caiaque)</li>
                  <li>• O passeio guiado inclui um guia que acompanha todo o passeio com um caiaque ao lado, levando em pontos específicos e auxilia na fotos e vídeos</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
