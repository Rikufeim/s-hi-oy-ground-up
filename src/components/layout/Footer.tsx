import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  { name: "Talonpohjat", href: "/palvelut#talonpohjat" },
  { name: "Maansiirtotyöt", href: "/palvelut#maansiirtotyot" },
  { name: "Kaivinkoneurakointi", href: "/palvelut#kaivinkoneurakointi" },
  { name: "Metsämuokkaukset", href: "/palvelut#metsamuokkaukset" },
  { name: "Teiden ja pihojen pohjatyöt", href: "/palvelut#teiden-ja-pihojen-pohjatyot" },
  { name: "Ojitukset", href: "/palvelut#ojitukset" },
  { name: "Maakaapelointi", href: "/palvelut#maakaapelointi" },
  { name: "Kuljettajapalvelut", href: "/palvelut#kuljettajapalvelut" },
];

const quickLinks = [
  { name: "Etusivu", href: "/" },
  { name: "Palvelut", href: "/palvelut" },
  { name: "Referenssit", href: "/referenssit" },
  { name: "Yritys", href: "/yritys" },
  { name: "Yhteystiedot", href: "/yhteystiedot" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white">Sähi Oy</span>
                <span className="text-xs text-white/70">Maanrakennus</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Luotettava maanrakennusyritys Pohjois-Pohjanmaalla. Tarjoamme laadukkaita
              maanrakennus- ja maakaapelointipalveluita ammattitaidolla jo vuodesta 2020.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg text-white mb-6">Palvelut</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-white mb-6">Pikalinkit</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/80 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg text-white mb-6">Yhteystiedot</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+358401234567"
                  className="flex items-start space-x-3 text-white/80 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">040 123 4567</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@sahioy.fi"
                  className="flex items-start space-x-3 text-white/80 hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">info@sahioy.fi</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-white/80">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p>Niitynmaantie 700</p>
                    <p>92330 Siikajoki</p>
                  </div>
                </div>
              </li>
              <li className="text-white/60 text-sm pt-2">
                Y-tunnus: 3114115-6
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Sähi Oy. Kaikki oikeudet pidätetään.
            </p>
            <div className="flex space-x-6">
              <Link to="/tietosuoja" className="text-white/60 hover:text-white text-sm transition-colors">
                Tietosuoja
              </Link>
              <Link to="/evasteet" className="text-white/60 hover:text-white text-sm transition-colors">
                Evästeet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
