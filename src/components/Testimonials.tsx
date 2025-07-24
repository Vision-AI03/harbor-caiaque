import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lucas Malafaia",
    rating: 5,
    comment: "Vale a pena demais! 👏👏👏👏",
    time: "45min",
    verified: true
  },
  {
    name: "Cliente Satisfeito",
    rating: 5,
    comment: "Sensacional! Muito obrigada. Parabéns pelo trabalho e pelo atendimento! 👏👏",
    time: "Hoje",
    verified: true
  },
  {
    name: "Aventureiro",
    rating: 5,
    comment: "Ameeeiiii! Obrigadaaaa vcs. Que experiência incrível! ❤️",
    time: "Ontem",
    verified: true
  }
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-deep-blue mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mais de 500 aventureiros já viveram experiências inesquecíveis conosco
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden shadow-ocean hover:shadow-float transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="absolute top-4 right-4 text-turquoise opacity-20">
                  <Quote size={32} />
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-deep-blue">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.time}</p>
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 text-green-600">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-xs">Verificado</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-gradient-ocean text-white px-6 py-3 rounded-full">
            <span className="text-lg font-bold">100%</span>
            <span>de Satisfação dos Clientes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;