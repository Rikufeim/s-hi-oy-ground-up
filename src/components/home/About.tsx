import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import homeKaivinkone from "@/assets/home-kaivinkone.png";
import homeKivipiha from "@/assets/home-kivipiha.png";

const features = [
  "Yli 5 vuoden kokemus alalta",
  "Moderni ja tehokas kalusto",
  "Ammattitaitoiset työntekijät",
  "Kotitalousvähennyskelpoinen palvelu",
  "Joustava ja nopea palvelu",
  "Tyytyväisyystakuu",
];

export function About() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src={homeKaivinkone}
                    alt="Kaivinkone työmaalla"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src={homeKivipiha}
                    alt="Maanrakennustyömaa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-xl">
              <p className="text-4xl font-bold">5+</p>
              <p className="text-sm">vuotta kokemusta</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Meistä
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                Luotettava perheyritys Pohjois-Pohjanmaalta
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sähi Oy on vuonna 2020 perustettu perheyritys, joka tarjoaa kattavia
                maanrakennus- ja maakaapelointipalveluita Pohjois-Pohjanmaan alueella.
                Yrityksemme perustajat Kimmo, Tuomas ja Henri Toppila tuovat mukanaan
                vuosien kokemuksen ja ammattitaidon.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Tax Deduction Info */}
            <div className="bg-muted rounded-xl p-6 border-l-4 border-primary">
              <h3 className="font-bold text-foreground mb-2">
                Kotitalousvähennys
              </h3>
              <p className="text-muted-foreground text-sm">
                Yksityisasiakkaat voivat hyödyntää kotitalousvähennystä palveluissamme.
                <a
                  href="https://www.vero.fi/henkiloasiakkaat/verokortti-ja-veroilmoitus/tulot-ja-vahennykset/kotitalousvahennys/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline ml-1"
                >
                  Lue lisää Verohallinnon sivuilta →
                </a>
              </p>
            </div>

            <Button asChild size="lg" className="btn-primary">
              <Link to="/yritys">
                Lue lisää meistä
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
