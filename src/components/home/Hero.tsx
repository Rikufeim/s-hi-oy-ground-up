import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-excavator.jpg";
export function Hero() {
  return <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Kaivinkone työssä maanrakennuskohteessa" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl space-y-8 animate-fade-in">
          

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-left">
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
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary text-lg bg-transparent">
              <a href="tel:+358401234567" className="flex items-center">
                <Phone className="mr-2 w-5 h-5" />
                <span>Soita meille</span>
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
    </section>;
}