import { Layout } from "@/components/layout/Layout";
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
    description: "Ammattitaidolla toteutetut talonpohjat ja perustatukset. Varmistamme tukevat rakenteet kaikille rakennustyypeille.",
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

const Palvelut = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Palvelumme
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Kattavat maanrakennuspalvelut
            </h1>
            <p className="text-white/80 text-xl">
              Tarjoamme monipuolisia maanrakennus- ja maakaapelointipalveluita 
              yksityis- ja yritysasiakkaille Pohjois-Pohjanmaalla.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link key={service.title} to={service.href}>
                  <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-8 space-y-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h2 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary font-medium pt-2">
                        Lue lisää
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Palvelut;
