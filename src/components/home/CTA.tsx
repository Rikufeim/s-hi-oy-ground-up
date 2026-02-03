import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export function CTA() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Tarvitsetko maanrakennuspalveluita?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8">
            Ota yhteyttä ja pyydä ilmainen tarjous projektiisi. Vastaamme
            yhteydenottoihin nopeasti ja kartoitamme tarpeesi ammattitaidolla.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg"
            >
              <Link to="/yhteystiedot" className="flex items-center">
                <span>Pyydä tarjous</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg bg-transparent"
            >
              <a href="tel:+358401234567" className="flex items-center">
                <Phone className="mr-2 w-5 h-5" />
                <span>040 123 4567</span>
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-primary-foreground/80">
            <a
              href="tel:+358401234567"
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>040 123 4567</span>
            </a>
            <span className="hidden sm:block">•</span>
            <a
              href="mailto:info@sahioy.fi"
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>info@sahioy.fi</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
