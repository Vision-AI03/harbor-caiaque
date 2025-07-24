import { Card } from "@/components/ui/card";

const Gallery = () => {
  const galleryImages = [
    {
      src: '/lovable-uploads/5a07b1e6-9040-476d-97cf-0080f5250090.png',
      alt: 'Veleiro Harbor Experience',
      caption: 'Passeios de veleiro também disponíveis'
    },
    {
      src: '/lovable-uploads/eb2959e2-c281-4423-b58d-42c994bb7683.png',
      alt: 'Feedback cliente satisfeito',
      caption: 'Nossos clientes adoram a experiência'
    },
    {
      src: '/lovable-uploads/830e3252-ca66-4abf-8837-79de5c3aceac.png',
      alt: 'Depoimento cliente',
      caption: 'Trabalho e atendimento de excelência'
    },
    {
      src: '/lovable-uploads/5bd05b8b-7657-4d81-b2bc-b06d9262d295.png',
      alt: 'Cliente feliz',
      caption: 'Experiência incrível garantida'
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