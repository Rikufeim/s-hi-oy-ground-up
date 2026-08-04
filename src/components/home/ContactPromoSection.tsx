import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { COMPANY } from "@/lib/company";

export function ContactPromoSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Tarvitsetko maanrakennuspalveluita?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Ota yhteyttä ja pyydä ilmainen tarjous projektiisi. Vastaamme
            yhteydenottoihin nopeasti ja kartoitamme tarpeesi ammattitaidolla.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-lg"
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
              className="border-white text-white hover:bg-white hover:text-secondary text-lg bg-transparent"
            >
              <a href={`tel:${COMPANY.phoneTel}`} className="flex items-center">
                <Phone className="mr-2 w-5 h-5" />
                <span>{COMPANY.phone}</span>
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white/80">
            <a
              href={`tel:${COMPANY.phoneTel}`}
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>{COMPANY.phone}</span>
            </a>
            <span className="hidden sm:block">•</span>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center space-x-2 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>{COMPANY.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
