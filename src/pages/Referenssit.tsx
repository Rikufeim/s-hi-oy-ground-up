import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import pihakivetys from "@/assets/referenssit/pihakivetys.png";
import talonpohjaJcb from "@/assets/referenssit/talonpohja-jcb.png";
import metsamuokkaus from "@/assets/referenssit/metsamuokkaus.png";
import pihaAlueKivet from "@/assets/referenssit/piha-alue-kivet.png";
import maakaapelointi from "@/assets/referenssit/maakaapelointi.png";
import pihatieSora from "@/assets/referenssit/pihatie-sora.png";
import kantojyrsinta from "@/assets/referenssit/kantojyrsinta.png";

const projects = [
  {
    title: "Kivimuurin ja piharakenteiden toteutus",
    location: "Oulu",
    description: "Rakensimme näyttävän kivimuurin sekä viimeistelimme piha-alueen muodot ja pintarakenteet.",
    image: pihakivetys,
  },
  {
    title: "Omakotitalon pohjatyöt",
    location: "Siikajoki",
    description: "Teimme omakotitalokohteen kattavat pohjatyöt mittatarkasti perustuksia varten.",
    image: talonpohjaJcb,
  },
  {
    title: "Metsämuokkaus urakointi",
    location: "Pohjois-Pohjanmaa",
    description: "Suoritimme metsämaan muokkausta ja kulku-uran valmistelua tehokkaasti vaativassa maastossa.",
    image: metsamuokkaus,
  },
  {
    title: "Pihan kiviasennukset",
    location: "Raahe",
    description: "Toteutimme piha-alueelle kiviasennukset ja maaston muotoilun toimivaksi kokonaisuudeksi.",
    image: pihaAlueKivet,
  },
  {
    title: "Maakaapeloinnin kaivuutyöt",
    location: "Liminka",
    description: "Kaivoimme ja valmistelimme kaapelilinjat turvallisesti sähköverkon maakaapelointia varten.",
    image: maakaapelointi,
  },
  {
    title: "Pihatien kantavat rakennekerrokset",
    location: "Kempele",
    description: "Rakensimme pihatien pohjat ja murskekerrokset kestävyyttä sekä hyvää kuivatusratkaisua varten.",
    image: pihatieSora,
  },
  {
    title: "Kantojyrsintä metsäkohteessa",
    location: "Pyhäjoki",
    description: "Poistimme kantoja tehokkaasti erikoisvarusteisella kalustolla jatkotöiden nopeuttamiseksi.",
    image: kantojyrsinta,
  },
];

const Referenssit = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Referenssit
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Toteutetut projektit
            </h1>
            <p className="text-white/80 text-xl">
              Tutustu valittuihin referensseihimme ja lue asiakkaidemme kokemuksia.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-foreground mb-12">Projekteja</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <span className="text-primary text-sm font-medium">{project.location}</span>
                  <h3 className="text-xl font-bold text-foreground mt-1 mb-3">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Referenssit;
