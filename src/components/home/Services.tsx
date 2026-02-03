import { Link } from "react-router-dom";
import { 
  Home, 
  Truck, 
  Construction, 
  TreePine, 
  Route, 
  Waves,
  Zap,
  Users,
  ArrowRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Talonpohjat",
    description: "Ammattitaidolla toteutetut talonpohjat ja perustatukset. Varmistamme tukevat rakenteet.",
    href: "/palvelut/talonpohjat",
  },
  {
    icon: Truck,
    title: "Maansiirtotyöt",
    description: "Tehokkaat maansiirtotyöt ja maa-ainesten kuljetukset kaikenkokoisiin projekteihin.",
    href: "/palvelut/maansiirtotyot",
  },
  {
    icon: Construction,
    title: "Kaivinkoneurakointi",
    description: "Modernit kaivinkoneet ja ammattitaitoiset kuljettajat vaativimpiinkin kohteisiin.",
    href: "/palvelut/kaivinkoneurakointi",
  },
  {
    icon: TreePine,
    title: "Metsämuokkaukset",
    description: "Metsämaan muokkaus istutuksia ja uudistamista varten. Laikkumätästys ja äestys.",
    href: "/palvelut/metsamuokkaukset",
  },
  {
    icon: Route,
    title: "Teiden ja pihojen pohjatyöt",
    description: "Tie- ja piharakentamisen pohjatyöt suunnitelmien mukaan laadukkaasti toteutettuna.",
    href: "/palvelut/tiet-ja-pihat",
  },
  {
    icon: Waves,
    title: "Ojitukset",
    description: "Peltojen ja metsien ojitus sekä salaojitustyöt. Parannamme maan kuivatusta.",
    href: "/palvelut/ojitukset",
  },
  {
    icon: Zap,
    title: "Maakaapelointi",
    description: "Sähköverkkojen maakaapeloinnit. Turvallinen ja huomaamaton sähkönjakelu.",
    href: "/palvelut/maakaapelointi",
  },
  {
    icon: Users,
    title: "Kuljettajapalvelut",
    description: "Kokeneet kuljettajat vuokrattavissa kalustoosi. Ammattitaito käytössäsi.",
    href: "/palvelut/kuljettajapalvelut",
  },
];

export function Services() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Palvelumme
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            Kattavat maanrakennuspalvelut
          </h2>
          <p className="text-muted-foreground text-lg">
            Tarjoamme monipuolisia maanrakennus- ja maakaapelointipalveluita yksityis- ja
            yritysasiakkaille Pohjois-Pohjanmaalla.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link key={service.title} to={service.href}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-card">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                      <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary font-medium text-sm pt-2">
                      Lue lisää
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/palvelut"
            className="inline-flex items-center text-primary font-semibold hover:underline"
          >
            Katso kaikki palvelumme
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
