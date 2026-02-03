import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Matti Korhonen",
    role: "Omakotitalon rakentaja",
    content:
      "Sähi Oy hoiti talonpohjamme mallikkaasti ja aikataulussa. Ammattitaitoinen porukka ja moderni kalusto. Suosittelen lämpimästi!",
    rating: 5,
  },
  {
    name: "Sähköverkko Oy",
    role: "Yritysasiakas",
    content:
      "Olemme tehneet yhteistyötä Sähi Oy:n kanssa useissa maakaapelointiprojekteissa. Työn laatu on aina korkealla tasolla ja aikataulut pitävät.",
    rating: 5,
  },
  {
    name: "Liisa Mäkinen",
    role: "Maanviljelijä",
    content:
      "Peltojen ojitustyöt tehtiin huolellisesti ja lopputulos oli erinomainen. Kuivatus toimii nyt moitteettomasti.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-secondary text-secondary-foreground">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Asiakaspalautteet
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
            Mitä asiakkaamme sanovat
          </h2>
          <p className="text-white/80 text-lg">
            Asiakastyytyväisyys on meille tärkeintä. Lue, mitä tyytyväiset asiakkaamme
            kertovat yhteistyöstä kanssamme.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm"
            >
              <CardContent className="p-8 space-y-6">
                <Quote className="w-10 h-10 text-primary opacity-50" />
                <p className="text-white/90 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-primary fill-current"
                    />
                  ))}
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
