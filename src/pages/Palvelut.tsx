import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  Truck, 
  Construction, 
  TreePine, 
  Route, 
  Waves,
  Zap,
  Users,
  ArrowRight,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Home,
    title: "Talonpohjat",
    description: "Ammattitaidolla toteutetut talonpohjat ja perustatukset. Varmistamme tukevat rakenteet kaikille rakennustyypeille.",
    features: [
      "Perustusten kaivuu ja valmistelu",
      "Maanpohjan tiivistys ja tasaus",
      "Vesieristys ja tiivistys",
      "Lopputarkastus ja hyväksyntä"
    ],
    href: "/palvelut/talonpohjat",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Truck,
    title: "Maansiirtotyöt",
    description: "Tehokkaat maansiirtotyöt ja maa-ainesten kuljetukset kaikenkokoisiin projekteihin.",
    features: [
      "Maanpohjan tasaus",
      "Maa-ainesten kuljetus",
      "Täyttö- ja poistotyöt",
      "Lopputasoitus"
    ],
    href: "/palvelut/maansiirtotyot",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Construction,
    title: "Kaivinkoneurakointi",
    description: "Modernit kaivinkoneet ja ammattitaitoiset kuljettajat vaativimpiinkin kohteisiin.",
    features: [
      "Kaivuu- ja täyttötyöt",
      "Rakennustyömaiden valmistelu",
      "Jäteveden kaivot",
      "Pohjaveden hallinta"
    ],
    href: "/palvelut/kaivinkoneurakointi",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: TreePine,
    title: "Metsämuokkaukset",
    description: "Metsämaan muokkaus istutuksia ja uudistamista varten. Laikkumätästys ja äestys.",
    features: [
      "Metsämaan muokkaus",
      "Laikkumätästys",
      "Äestys ja tasaus",
      "Istutusvalmistelut"
    ],
    href: "/palvelut/metsamuokkaukset",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Route,
    title: "Teiden ja pihojen pohjatyöt",
    description: "Tie- ja piharakentamisen pohjatyöt suunnitelmien mukaan laadukkaasti toteutettuna.",
    features: [
      "Tienpohjatyöt",
      "Piha-alueiden valmistelu",
      "Pysäköintialueiden rakentaminen",
      "Kulkuväylien tasaus"
    ],
    href: "/palvelut/tiet-ja-pihat",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Waves,
    title: "Ojitukset",
    description: "Peltojen ja metsien ojitus sekä salaojitustyöt. Parannamme maan kuivatusta.",
    features: [
      "Peltojen ojitus",
      "Salaojitustyöt",
      "Kuivatusjärjestelmät",
      "Ojien kunnossapito"
    ],
    href: "/palvelut/ojitukset",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Zap,
    title: "Maakaapelointi",
    description: "Sähköverkkojen maakaapeloinnit. Turvallinen ja huomaamaton sähkönjakelu.",
    features: [
      "Sähköverkon maakaapelointi",
      "Kaapelien asennus",
      "Turvallinen toteutus",
      "Lopputarkastus"
    ],
    href: "/palvelut/maakaapelointi",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Users,
    title: "Kuljettajapalvelut",
    description: "Kokeneet kuljettajat vuokrattavissa kalustoosi. Ammattitaito käytössäsi.",
    features: [
      "Kokeneet kuljettajat",
      "Moderni kalusto",
      "Joustava palvelu",
      "Ammattitaitoinen toteutus"
    ],
    href: "/palvelut/kuljettajapalvelut",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const Palvelut = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
    }
  }, [location]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in">
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

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-32">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              const serviceId = service.title
                .toLowerCase()
                .replace(/ä/g, 'a')
                .replace(/ö/g, 'o')
                .replace(/ /g, '-');
              
              return (
                <div
                  key={service.title}
                  id={serviceId}
                  className={`${service.image ? 'grid grid-cols-1 lg:grid-cols-2' : 'max-w-3xl'} gap-12 items-center min-h-screen py-16 scroll-mt-32 animate-fade-in ${
                    !isEven && service.image ? "lg:flex-row-reverse" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Content */}
                  <div className={service.image && !isEven ? "lg:order-2" : ""}>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="btn-primary">
                      <Link to="/yhteystiedot" className="flex items-center">
                        <span>Pyydä tarjous</span>
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                  </div>

                  {/* Image */}
                  {service.image && (
                    <div className={isEven ? "" : "lg:order-1"}>
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Palvelut;
