import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const services = [
  "Talonpohjat",
  "Maansiirtotyöt",
  "Kaivinkoneurakointi",
  "Metsämuokkaukset",
  "Teiden ja pihojen pohjatyöt",
  "Ojitukset",
  "Maakaapelointi",
  "Kuljettajapalvelut",
  "Muu palvelu",
];

const Yhteystiedot = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Kiitos yhteydenotostasi! Otamme sinuun yhteyttä pian.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-in">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Yhteystiedot
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Ota yhteyttä
            </h1>
            <p className="text-white/80 text-xl">
              Pyydä tarjous tai kysy lisätietoja palveluistamme. Vastaamme yhteydenottoihin nopeasti.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-6">Lähetä tarjouspyyntö</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nimi *</Label>
                    <Input id="name" name="name" required placeholder="Etunimi Sukunimi" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Puhelin *</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="040 123 4567" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Sähköposti *</Label>
                  <Input id="email" name="email" type="email" required placeholder="esimerkki@email.fi" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Palvelu</Label>
                  <Select name="service">
                    <SelectTrigger>
                      <SelectValue placeholder="Valitse palvelu" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Viesti *</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={5}
                    placeholder="Kerro projektistasi ja tarpeistasi..." 
                  />
                </div>

                <Button type="submit" className="w-full btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Lähetetään..." : "Lähetä viesti"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Yhteystiedot</h2>
                <ul className="space-y-6">
                  <li>
                    <a href="tel:+358401234567" className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Puhelin</p>
                        <p className="text-muted-foreground">040 123 4567</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@sahioy.fi" className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                        <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Sähköposti</p>
                        <p className="text-muted-foreground">info@sahioy.fi</p>
                      </div>
                    </a>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Osoite</p>
                      <p className="text-muted-foreground">
                        Niitynmaantie 700<br />
                        92330 Siikajoki
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Aukioloajat</p>
                      <p className="text-muted-foreground">
                        Ma-Pe: 7:00 - 17:00<br />
                        La-Su: Sopimuksen mukaan
                      </p>
                    </div>
                  </li>
                </ul>
                <p className="mt-6 text-muted-foreground text-sm">
                  Y-tunnus: 3114115-6
                </p>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden h-64 bg-muted">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=24.5%2C64.6%2C25.0%2C64.8&layer=mapnik&marker=64.7%2C24.75"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  title="Sähi Oy sijainti"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Yhteystiedot;
