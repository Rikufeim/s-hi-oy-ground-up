import { useMemo } from "react";
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
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import homeKuljetus from "@/assets/home-kuljetus.png";
import homeKaivinkone from "@/assets/home-kaivinkone.png";
import homeKivipiha from "@/assets/home-kivipiha.png";
import talonpohjaJcb from "@/assets/referenssit/talonpohja-jcb.png";
import metsamuokkaus from "@/assets/referenssit/metsamuokkaus.png";
import maakaapelointi from "@/assets/referenssit/maakaapelointi.png";
import pihatieSora from "@/assets/referenssit/pihatie-sora.png";
import kantojyrsinta from "@/assets/referenssit/kantojyrsinta.png";

const services = [
  {
    icon: Home,
    title: "Talonpohjat",
    description: "Ammattitaidolla toteutetut talonpohjat ja perustatukset. Varmistamme tukevat rakenteet.",
    features: [
      "Perustusten kaivuu ja valmistelu",
      "Maanpohjan tiivistys ja tasaus",
      "Vesieristys ja tiivistys",
      "Lopputarkastus ja hyväksyntä",
    ],
    href: "/palvelut/talonpohjat",
    image: talonpohjaJcb,
  },
  {
    icon: Truck,
    title: "Maansiirtotyöt",
    description: "Tehokkaat maansiirtotyöt ja maa-ainesten kuljetukset kaikenkokoisiin projekteihin.",
    features: ["Maanpohjan tasaus", "Maa-ainesten kuljetus", "Täyttö- ja poistotyöt", "Lopputasoitus"],
    href: "/palvelut/maansiirtotyot",
    image: homeKuljetus,
  },
  {
    icon: Construction,
    title: "Kaivinkoneurakointi",
    description: "Modernit kaivinkoneet ja ammattitaitoiset kuljettajat vaativimpiinkin kohteisiin.",
    features: ["Kaivuu- ja täyttötyöt", "Rakennustyömaiden valmistelu", "Jäteveden kaivot", "Pohjaveden hallinta"],
    href: "/palvelut/kaivinkoneurakointi",
    image: homeKaivinkone,
  },
  {
    icon: TreePine,
    title: "Metsämuokkaukset",
    description: "Metsämaan muokkaus istutuksia ja uudistamista varten. Laikkumätästys ja äestys.",
    features: ["Metsämaan muokkaus", "Laikkumätästys", "Äestys ja tasaus", "Istutusvalmistelut"],
    href: "/palvelut/metsamuokkaukset",
    image: metsamuokkaus,
  },
  {
    icon: Route,
    title: "Teiden pohjatyöt",
    description: "Tiealueiden pohjatyöt suunnitelmien mukaan laadukkaasti toteutettuna.",
    features: ["Tienpohjatyöt", "Kulkuväylien tasaus"],
    href: "/palvelut/teiden-pohjatyot",
    image: homeKivipiha,
  },
  {
    icon: Home,
    title: "Pihojen pohjatyöt",
    description: "Piha-alueiden pohjatyöt huolellisesti valmiiksi jatkorakentamista varten.",
    features: ["Piha-alueiden valmistelu", "Maanpohjan tasaus", "Pysäköintialueiden pohjatyöt"],
    href: "/palvelut/pihojen-pohjatyot",
    image: pihatieSora,
  },
  {
    icon: Waves,
    title: "Ojitukset",
    description: "Peltojen ja metsien ojitus sekä salaojitustyöt. Parannamme maan kuivatusta.",
    features: ["Peltojen ojitus", "Salaojitustyöt", "Kuivatusjärjestelmät", "Ojien kunnossapito"],
    href: "/palvelut/ojitukset",
    image: metsamuokkaus,
  },
  {
    icon: Zap,
    title: "Sähköverkkojen maakaapeloinnit",
    description: "Sähköverkkojen maakaapeloinnit. Turvallinen ja huomaamaton sähkönjakelu.",
    features: ["Sähköverkon maakaapelointi", "Kaapelien asennus", "Turvallinen toteutus", "Lopputarkastus"],
    href: "/palvelut/maakaapelointi",
    image: maakaapelointi,
  },
  {
    icon: Users,
    title: "Kuljettajapalvelut",
    description: "Kokeneet kuljettajat vuokrattavissa kalustoosi. Ammattitaito käytössäsi.",
    features: ["Kokeneet kuljettajat", "Moderni kalusto", "Joustava palvelu", "Ammattitaitoinen toteutus"],
    href: "/palvelut/kuljettajapalvelut",
    image: kantojyrsinta,
  },
];

const carouselImages = [
  talonpohjaJcb,
  homeKuljetus,
  homeKaivinkone,
  metsamuokkaus,
  homeKivipiha,
  pihatieSora,
  maakaapelointi,
  kantojyrsinta,
];

export function Services() {
  const repeatedCarouselImages = useMemo(() => [...carouselImages, ...carouselImages], []);

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="mb-12 overflow-hidden rounded-2xl border border-border/60 bg-card/60 py-4">
          <div className="hero-carousel-track">
            {repeatedCarouselImages.map((image, index) => (
              <div key={`${image}-${index}`} className="hero-carousel-item">
                <img
                  src={image}
                  alt="Sähi Oy referenssikuva"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Maanrakennustyöt</h2>
            <p className="text-muted-foreground mb-6">
              Meillä on kattava valikoima erilaisia työkoneita ja osaavat tekijät. Toteutamme sekä
              pienet että suuret maanrakennustyöt tehokkaasti ja huolellisesti.
            </p>
            <Button asChild className="btn-primary">
              <Link to="/yhteystiedot">Ota yhteyttä</Link>
            </Button>
          </div>
          <div className="bg-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Sähköverkkojen maakaapelointi</h2>
            <p className="text-muted-foreground mb-6">
              Teemme maanrakennustyöt sähköverkkojen maakaapelointia varten. Palvelumme kattaa
              kaapeliojien kaivuutyöt, putkitukset ja kaapelien suojaamisen.
            </p>
            <Button asChild className="btn-primary">
              <Link to="/yhteystiedot">Ota yhteyttä</Link>
            </Button>
          </div>
        </div>

        <div className="max-w-3xl mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Palvelumme</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Palveluitamme</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Yksityisille tarjoamamme palvelut ovat kotitalousvähennyskelpoisia. Lisätietoa löydät
            Verohallinnon sivuilta.
          </p>
        </div>

        <div className="space-y-32">
          {services.slice(0, 4).map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.title}
                className={`${service.image ? "grid grid-cols-1 lg:grid-cols-2" : "max-w-3xl"} gap-12 items-center min-h-screen py-16 ${
                  !isEven && service.image ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={service.image && !isEven ? "lg:order-2" : ""}>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">{service.description}</p>
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
                      <span>Ota yhteyttä</span>
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                {service.image && (
                  <div className={isEven ? "" : "lg:order-1"}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
