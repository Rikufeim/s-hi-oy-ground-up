import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/layout/PageHero";
import { ContactPromoSection } from "@/components/home/ContactPromoSection";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
    title: "Talonpohjat",
    description:
      "Tukeva pohja kantaa koko rakennuksen elinkaaren ajan. Kaivamme, tiivistämme ja tasaamme maapohjan 3D-mittauksen avulla, niin että perustustyö voi alkaa ilman yllätyksiä.",
    features: [
      "Perustusten kaivuu ja maapohjan valmistelu",
      "Tiivistys ja tasaus 3D-ohjauksella",
      "Vesieristys ja salaojitus tarvittaessa",
      "Yhteinen lopputarkastus ennen seuraavaa työvaihetta",
    ],
    image: talonpohjaJcb,
  },
  {
    title: "Maansiirtotyöt",
    description:
      "Hoidamme kuljetukset ja täyttötyöt omalla kalustollamme, pienistä pihaprojekteista suurempiin urakoihin.",
    features: [
      "Maanpohjan tasaus ja täyttötyöt",
      "Maa-ainesten kuljetus omalla kalustolla",
      "Poistotyöt ja loppusiivous",
      "Sovitussa aikataulussa pysyminen",
    ],
    image: homeKuljetus,
  },
  {
    title: "Kaivinkoneurakointi",
    description: "Modernit kaivinkoneet ja ammattitaitoiset kuljettajat vaativimpiinkin kohteisiin.",
    features: ["Kaivuu- ja täyttötyöt", "Rakennustyömaiden valmistelu", "Jäteveden kaivot", "Pohjaveden hallinta"],
    image: homeKaivinkone,
  },
  {
    title: "Metsämuokkaukset",
    description:
      "Onnistunut istutus alkaa hyvin muokatusta maasta. Teemme laikkumätästyksen ja äestyksen niin, että taimet pääsevät kasvamaan hyvästä alusta.",
    features: [
      "Laikkumätästys istutuksia varten",
      "Äestys ja maanpinnan tasaus",
      "Metsämaan muokkaus uudistusaloille",
      "Työ tehdään maaston ja kasvupaikan mukaan",
    ],
    image: metsamuokkaus,
  },
  {
    title: "Teiden pohjatyöt",
    description:
      "Kestävä tie alkaa kestävästä pohjasta. Rakennamme tienpohjat suunnitelman mukaan, niin ettei routa tai vesi pääse yllättämään myöhemmin.",
    features: [
      "Tienpohjatyöt suunnitelmien mukaan",
      "Kulkuväylien ja liittymien tasaus",
      "Kuivatus huomioidaan jo pohjatyössä",
    ],
    image: homeKivipiha,
  },
  {
    title: "Pihojen pohjatyöt",
    description:
      "Piha on rakennuksen käyntikortti. Teemme pohjatyöt niin, että päällyste, pysäköintialue tai kivetys pysyy siistinä vuodesta toiseen.",
    features: [
      "Piha-alueiden pohjan valmistelu",
      "Maanpohjan tasaus ja tiivistys",
      "Pysäköintialueiden pohjatyöt",
      "Valmis alusta seuraavalle urakoitsijalle",
    ],
    image: pihatieSora,
  },
  {
    title: "Ojitukset",
    description:
      "Vettynyt pelto tai metsä ei tuota. Kaivamme ja kunnostamme ojat sekä salaojitukset niin, että kuivatus toimii taas kunnolla.",
    features: [
      "Peltojen ja metsien ojitus",
      "Salaojitustyöt",
      "Vanhojen ojien kunnostus ja perkaus",
      "Toimiva kuivatus koko kasvukaudeksi",
    ],
    image: metsamuokkaus,
  },
  {
    title: "Sähköverkkojen maakaapeloinnit",
    description:
      "Kaapelityömaa on oma lajinsa — tarkkuutta, säännöksiä ja tiivistä yhteistyötä verkkoyhtiön kanssa. Meillä on siihen vuosien kokemus.",
    features: [
      "Kaapeliojien kaivuu ja putkitukset",
      "Kaapelien asennus ja suojaus",
      "Yhteistyö sähköverkkoyhtiöiden kanssa",
      "Työ tehdään turvamääräysten mukaisesti",
    ],
    image: maakaapelointi,
  },
  {
    title: "Kuljettajapalvelut",
    description:
      "Tarvitsetko osaavan kuljettajan omaan kalustoosi ruuhka-ajaksi tai pidemmäksi projektiksi? Kuljettajamme tuntevat koneet ja työmaakäytännöt.",
    features: [
      "Kokenut kuljettaja omaan tai meidän kalustoon",
      "Joustavasti lyhyt- tai pitkäaikaiseen tarpeeseen",
      "Perehtynyt työmaan turvallisuuskäytäntöihin",
    ],
    image: kantojyrsinta,
  },
];

const highlights = [
  {
    title: "Maanrakennustyöt",
    description:
      "Meillä on kattava valikoima erilaisia työkoneita ja osaavat tekijät. Toteutamme sekä pienet että suuret maanrakennustyöt tehokkaasti ja huolellisesti.",
  },
  {
    title: "Sähköverkkojen maakaapelointi",
    description:
      "Teemme maanrakennustyöt sähköverkkojen maakaapelointia varten. Palvelumme kattaa kaapeliojien kaivuutyöt, putkitukset ja kaapelien suojaamisen.",
  },
];

const Palvelut = () => {
  return (
    <Layout>
      <PageHero
        blur="sm"
        image={homeKaivinkone}
        imageAlt="Kaivinkoneurakointi"
        eyebrow="Palvelumme"
        title="Maanrakennustyöt ja sähköverkkojen maakaapeloinnit Pohjois-Pohjanmaalla"
        description="Meillä on pitkä kokemus erilaisista maanrakennusalan töistä ja sähköverkkojen maakaapeloinneista."
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {highlights.map((item) => (
              <div key={item.title} className="space-y-5">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                    {item.title}
                  </h2>
                  <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
                <Link
                  to="/yhteystiedot"
                  className="inline-flex items-center text-foreground font-medium hover:text-primary transition-colors group"
                >
                  Ota yhteyttä
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8 md:pb-12">
        <div className="container-custom">
          <div className="max-w-3xl border-t border-border pt-12 md:pt-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Palveluitamme</h2>
            <p className="text-muted-foreground text-lg">
              Yksityisille tarjoamamme palvelut ovat kotitalousvähennyskelpoisia. Lisätietoa löydät
              Verohallinnon sivuilta.
            </p>
          </div>
        </div>
      </section>

      {services.map((service, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={service.title}
            className={cn(isEven ? "bg-background" : "bg-muted")}
          >
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 md:py-24">
                <div className={cn("space-y-6", !isEven && "lg:order-2")}>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                      {service.title}
                    </h2>
                    <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button asChild className="btn-primary">
                    <Link to="/yhteystiedot" className="flex items-center">
                      Ota yhteyttä
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>

                <div className={cn(!isEven && "lg:order-1")}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <ContactPromoSection />
    </Layout>
  );
};

export default Palvelut;
