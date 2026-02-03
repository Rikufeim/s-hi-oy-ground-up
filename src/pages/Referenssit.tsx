import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const projects = [
  {
    title: "Omakotitalon talonpohja",
    location: "Siikajoki",
    description: "Toteutimme kattavan talonpohjatyön omakotitalolle, sisältäen maansiirto-, tasaus- ja tiivistystyöt.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Maakaapelointiprojekti",
    location: "Raahe",
    description: "Laaja sähköverkon maakaapelointiurakka yhteistyössä paikallisen sähköyhtiön kanssa.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Piha-alueen rakentaminen",
    location: "Oulu",
    description: "Yritysasiakkaan piha-alueen pohjatyöt ja pysäköintialueen rakentaminen.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Peltojen ojitus",
    location: "Liminka",
    description: "Maatalousasiakkaan peltojen ojitustyöt kuivatuksen parantamiseksi.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const testimonials = [
  {
    name: "Matti Korhonen",
    role: "Omakotitalon rakentaja",
    content: "Sähi Oy hoiti talonpohjamme mallikkaasti ja aikataulussa. Ammattitaitoinen porukka!",
    rating: 5,
  },
  {
    name: "Sähköverkko Oy",
    role: "Yritysasiakas",
    content: "Olemme tehneet yhteistyötä useissa maakaapelointiprojekteissa. Työn laatu on korkealla tasolla.",
    rating: 5,
  },
];

const Referenssit = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Referenssit
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Toteutetut projektit
            </h1>
            <p className="text-white/80 text-xl">
              Tutustu valittuihin referensseihimme ja lue asiakkaidemme kokemuksia.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-foreground mb-12">Projekteja</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="text-primary text-sm font-medium">{project.location}</span>
                  <h3 className="text-xl font-bold text-foreground mt-1 mb-3">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-foreground mb-12">Asiakaspalautteet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-8 space-y-4">
                  <Quote className="w-10 h-10 text-primary opacity-50" />
                  <p className="text-foreground text-lg">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-primary fill-current" />
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Referenssit;
