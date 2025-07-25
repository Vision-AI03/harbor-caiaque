import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";

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

  // Componente do ícone do WhatsApp
  const WhatsAppIcon = ({ size = 20 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className="mr-2"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
    </svg>
  );

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
                  className="w-full bg-green-500 hover:bg-green-600 text-white text-lg py-4 transition-colors duration-200"
                  onClick={handleWhatsAppClick}
                >
                  <WhatsAppIcon size={20} />
                  Reservar pelo WhatsApp
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-ocean text-ocean hover:bg-ocean hover:text-white text-lg py-4 transition-colors duration-200"
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
