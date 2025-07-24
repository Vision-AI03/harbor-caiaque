import { Heart, MapPin, Phone, Instagram, MessageCircle } from "lucide-react";
import harborLogo from '/lovable-uploads/28d188e0-bffc-42a2-9457-3a3742de26e1.png';

const Footer = () => {
  return (
    <footer className="bg-deep-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={harborLogo} alt="Harbor Logo" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold">HARBOR</h3>
                <p className="text-turquoise">CAIAQUE EXPERIENCE</p>
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Proporcionamos experiências únicas em caiaques transparentes nas águas cristalinas do Nordeste brasileiro. Aventura, segurança e memórias inesquecíveis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-turquoise transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-turquoise transition-colors">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-white/80 hover:text-turquoise transition-colors">Início</a></li>
              <li><a href="#experiencias" className="text-white/80 hover:text-turquoise transition-colors">Experiências</a></li>
              <li><a href="#depoimentos" className="text-white/80 hover:text-turquoise transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="text-white/80 hover:text-turquoise transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-turquoise" />
                <span className="text-white/80 text-sm">Nordeste, Brasil</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-turquoise" />
                <span className="text-white/80 text-sm">(11) 99999-9999</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 flex items-center justify-center gap-2">
            Feito com <Heart size={16} className="text-coral" /> pela equipe Harbor
          </p>
          <p className="text-white/60 text-sm mt-2">
            © 2024 Harbor Caiaque Experience. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;