import { Link } from "react-router-dom";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { CookieSettings } from "@/components/legal/CookieSettings";
import { COMPANY } from "@/lib/company";

const Evasteet = () => {
  return (
    <LegalPageLayout title="Evästekäytäntö">
      <section>
        <h2>1. Mitä evästeet ovat?</h2>
        <p>
          Evästeet ovat pieniä tekstitiedostoja, joita verkkosivusto voi tallentaa laitteellesi.
          Niitä käytetään muun muassa sivuston toiminnan varmistamiseen ja käyttäjäasetusten
          muistamiseen.
        </p>
      </section>

      <section>
        <h2>2. Miten käytämme evästeitä?</h2>
        <p>
          {COMPANY.name} käyttää evästeitä ja vastaavia tekniikoita ({COMPANY.website}) seuraaviin
          tarkoituksiin:
        </p>
        <ul>
          <li>
            <strong>Välttämättömät:</strong> evästevalintasi tallentaminen (localStorage), jotta
            banneria ei näytetä joka käynnillä uudelleen
          </li>
          <li>
            <strong>Valinnaiset:</strong> analytiikka- ja markkinointievästeet vain suostumuksellasi
            (tällä hetkellä emme käytä kolmannen osapuolen analytiikkaa ilman erillistä hyväksyntää)
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Evästeluettelo</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg">
            <thead>
              <tr className="bg-muted text-left">
                <th className="p-3 font-semibold text-foreground">Nimi / tyyppi</th>
                <th className="p-3 font-semibold text-foreground">Tarkoitus</th>
                <th className="p-3 font-semibold text-foreground">Kesto</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-t border-border">
                <td className="p-3">sahi-cookie-consent</td>
                <td className="p-3">Evästeasetusten tallennus (välttämätön)</td>
                <td className="p-3">Toistaiseksi / kunnes poistat</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          Sivusto lataa fontit Google Fonts -palvelusta. Fonttipyynnöt voivat siirtää teknisiä
          tietoja (esim. IP-osoite) Googlen palvelimille. Lisätietoja:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Googlen tietosuojakäytäntö
          </a>
          .
        </p>
      </section>

      <section>
        <h2>4. Evästeasetukset</h2>
        <p>Voit muuttaa valintaasi milloin tahansa alla olevista painikkeista.</p>
        <CookieSettings />
      </section>

      <section>
        <h2>5. Selaimen asetukset</h2>
        <p>
          Voit estää evästeet myös selaimesi asetuksista. Huomioi, että välttämättömien evästeiden
          esto voi vaikuttaa sivuston toimintaan.
        </p>
      </section>

      <section>
        <h2>6. Lisätietoja</h2>
        <p>
          Henkilötietojen käsittelystä kerrotaan{" "}
          <Link to="/tietosuoja" className="text-primary hover:underline">
            tietosuojaselosteessa
          </Link>
          . Kysymykset:{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">
            {COMPANY.email}
          </a>
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default Evasteet;
