import { Layout } from "@/components/layout/Layout";
import { Check } from "lucide-react";
import talonpohjaJcb from "@/assets/referenssit/talonpohja-jcb.png";

const values = [
  { title: "Luotettavuus", description: "Pidämme kiinni sovituista aikatauluista ja lupauksista." },
  { title: "Ammattitaito", description: "Vuosien kokemus ja jatkuva osaamisen kehittäminen." },
  { title: "Asiakaslähtöisyys", description: "Kuuntelemme asiakkaan tarpeita ja räätälöimme ratkaisut." },
  { title: "Laatu", description: "Emme tingi laadusta - teemme työt kerralla kunnolla." },
];

const team = [
  { name: "Kimmo Toppila", role: "Toimitusjohtaja" },
  { name: "Tuomas Toppila", role: "Työnjohtaja" },
  { name: "Henri Toppila", role: "Kaivinkoneurakoitsija" },
];

const Yritys = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Meistä
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Luotettava perheyritys
            </h1>
            <p className="text-white/80 text-xl">
              Sähi Oy on vuonna 2020 perustettu perheyritys, joka tarjoaa kattavia 
              maanrakennus- ja maakaapelointipalveluita Pohjois-Pohjanmaan alueella.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Tarinamme</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Sähi Oy syntyi perheyrityksen vahvasta perinteestä ja halusta tarjota 
                  laadukkaita maanrakennuspalveluita Pohjois-Pohjanmaalle.
                </p>
                <p>
                  Yrityksemme perustajat Kimmo, Tuomas ja Henri Toppila yhdistivät 
                  vuosien kokemuksensa ja ammattitaitonsa perustaessaan Sähi Oy:n.
                </p>
                <p>
                  Panostamme moderniin kalustoon ja jatkuvaan osaamisen kehittämiseen, 
                  jotta voimme tarjota asiakkaillemme parasta mahdollista palvelua.
                </p>
              </div>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden animate-fade-in" style={{ animationDelay: '200ms' }}>
              <img
                src={talonpohjaJcb}
                alt="Sähi Oy tiimi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Arvomme</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="bg-card p-6 rounded-xl animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Tiimimme</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={member.name} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-32 h-32 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-bold text-foreground text-lg">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Yritys;
