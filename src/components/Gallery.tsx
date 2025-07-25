import { Card } from "@/components/ui/card";

const Gallery = () => {
  const galleryImages = [
    {
      src: '/lovable-uploads/8ee6c8e6-313a-4fec-9fb6-fa73f0284961.png',
      alt: 'Vista aérea dos passeios de caiaque',
      caption: 'Grupos navegando pelas águas cristalinas'
    },
    {
      src: '/lovable-uploads/acb55242-495a-49da-91db-2485d856f8a3.png',
      alt: 'Casal em caiaque transparente',
      caption: 'Caiaque de fundo transparente para melhor experiência'
    },
    {
      src: '/lovable-uploads/bb8c8a55-27e0-4309-bd9b-73140b051d29.png',
      alt: 'Explorando formações rochosas',
      caption: 'Aventura entre as formações naturais únicas'
    },
    {
      src: '/lovable-uploads/57304dde-e658-457d-8929-1ae2674fad2f.png',
      alt: 'Passeio em águas cristalinas',
      caption: 'Momentos únicos em piscinas naturais'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            Galeria de Momentos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos momentos especiais vividos por nossos clientes nas águas cristalinas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-ocean transition-all duration-300">
              <div className="relative">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">{image.caption}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Quer ver mais? Siga-nos no Instagram!
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity cursor-pointer">
            <span>@harborcaiaque</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
