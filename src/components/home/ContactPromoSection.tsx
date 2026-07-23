import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-excavator-new.png";

export function ContactPromoSection() {
  return (
    <section className="bg-muted section-padding">
      <div className="container-custom">
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-secondary shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%]">
            <div className="flex flex-col justify-center gap-6 p-10 md:p-14 lg:p-20">
              <span className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80">
                Pyydä tarjous
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Tarvitsetko maanrakennuspalveluita?
              </h2>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                Ota yhteyttä ja pyydä tarjous projektiisi.
              </p>

              <Button
                asChild
                size="lg"
                className="w-fit rounded-full bg-white px-8 text-foreground hover:bg-white/90 font-semibold"
              >
                <Link to="/yhteystiedot" className="flex items-center">
                  Pyydä tarjous
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative min-h-[280px] lg:min-h-full">
              <img
                src={heroImage}
                alt="Sähi Oy maanrakennustyöt"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
