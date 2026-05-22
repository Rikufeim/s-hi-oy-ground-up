import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-excavator-new.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-secondary">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kaivinkone työssä maanrakennuskohteessa"
          className="w-full h-full object-cover object-[center_42%]"
        />
        <div className="absolute inset-0 hero-image-overlay" />
      </div>

      <div className="container-custom relative z-10 w-full pt-28 pb-20 md:pt-32 md:pb-28">
        <div className="max-w-2xl space-y-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.15] text-left">
            Maanrakennustöiden ammattilainen{" "}
            <span className="text-primary">Pohjois-Pohjanmaalta</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
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
    </section>
  );
}
