import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-excavator.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kaivinkone työssä maanrakennuskohteessa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-3xl space-y-8 animate-fade-in">
          <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2">
            <span className="text-primary font-semibold text-sm">
              Luotettava kumppani vuodesta 2020
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Maanrakennustyöt ja sähköverkkojen maakaapeloinnit{" "}
            <span className="text-primary">Pohjois-Pohjanmaalla</span>
          </h1>

          <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
            Tarjoamme laadukkaita maanrakennus-, maansiirto- ja maakaapelointipalveluita
            ammattitaidolla. Moderni kalusto ja kokenut tiimi takaa projektisi onnistumisen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="btn-primary text-lg">
              <Link to="/yhteystiedot">
                Pyydä tarjous
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-secondary text-lg"
            >
              <a href="tel:+358401234567">
                <Phone className="mr-2 w-5 h-5" />
                Soita meille
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">5+</p>
              <p className="text-white/80 text-sm">Vuotta kokemusta</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">200+</p>
              <p className="text-white/80 text-sm">Toteutettua projektia</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">100%</p>
              <p className="text-white/80 text-sm">Tyytyväiset asiakkaat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
