import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-excavator-new.png";
export function Hero() {
  return <section className="relative min-h-screen flex items-center bg-secondary">
      {/* Background Image */}
      <div className="absolute inset-x-0 bottom-0 top-20">
        <img
          src={heroImage}
          alt="Kaivinkone työssä maanrakennuskohteessa"
          className="w-full h-full object-cover object-[center_42%]"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Content */}
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-3xl space-y-8 animate-fade-in">
          

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-left">
            Maanrakennustöiden ammattilainen{" "}
            <span className="text-primary">Pohjois-Pohjanmaalta</span>
          </h1>

          <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
            Maanrakennustyöt vaativat erikoiskalustoa ja -osaamista, joten ne on syytä antaa
            ammattilaisten toteutettaviksi. Meillä on pitkä kokemus erilaisista maanrakennusalan
            töistä ja sähköverkkojen maakaapeloinneista.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="btn-primary text-lg">
              <Link to="/yhteystiedot">
                Ota yhteyttä
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>;
}