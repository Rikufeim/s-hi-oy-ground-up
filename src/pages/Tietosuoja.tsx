import { Link } from "react-router-dom";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { COMPANY } from "@/lib/company";

const Tietosuoja = () => {
  return (
    <LegalPageLayout title="Tietosuojaseloste">
      <section>
        <h2>1. Rekisterinpitäjä</h2>
        <p>
          {COMPANY.name}
          <br />
          Y-tunnus: {COMPANY.businessId}
          <br />
          {COMPANY.address}
          <br />
          Sähköposti:{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">
            {COMPANY.email}
          </a>
          <br />
          Puhelin:{" "}
          <a href={`tel:${COMPANY.phoneTel}`} className="text-primary hover:underline">
            {COMPANY.phone}
          </a>
        </p>
      </section>

      <section>
        <h2>2. Yhteyshenkilö tietosuoja-asioissa</h2>
        <p>
          Tietosuojaa koskevissa kysymyksissä voit ottaa yhteyttä rekisterinpitäjään yllä oleviin
          yhteystietoihin.
        </p>
      </section>

      <section>
        <h2>3. Henkilötietojen käsittelyn tarkoitus ja oikeusperuste</h2>
        <p>Käsittelemme henkilötietoja seuraaviin tarkoituksiin:</p>
        <ul>
          <li>yhteydenottojen ja tarjouspyyntöjen vastaaminen</li>
          <li>asiakassuhteen hoitaminen ja sopimusten toteuttaminen</li>
          <li>lakisääteisten velvoitteiden täyttäminen (esim. kirjanpito)</li>
          <li>verkkosivuston toiminnan varmistaminen ja tietoturva</li>
        </ul>
        <p>
          Käsittelyn oikeusperusteina ovat pääsääntöisesti sopimus, oikeutettu etu (esim.
          liiketoiminnan hoito) tai rekisteröidyn suostumus. Yhteydenottolomakkeella antamasi tiedot
          käsitellään tarjouspyyntösi käsittelemiseksi.
        </p>
      </section>

      <section>
        <h2>4. Käsiteltävät henkilötiedot</h2>
        <p>Voimme käsitellä esimerkiksi seuraavia tietoja:</p>
        <ul>
          <li>nimi</li>
          <li>puhelinnumero</li>
          <li>sähköpostiosoite</li>
          <li>viestin / tarjouspyynnön sisältö ja valittu palvelu</li>
          <li>yhteystiedot ja viestintä asiakassuhteessa</li>
        </ul>
      </section>

      <section>
        <h2>5. Tietojen säilytysaika</h2>
        <p>
          Säilytämme tietoja vain niin kauan kuin on tarpeen käsittelyn tarkoitukseen tai laki
          edellyttää. Tarjouspyyntöihin liittyviä tietoja säilytetään yleensä enintään 24 kuukautta
          tarjousprosessin päättymisestä, ellei asiakassuhde jatku. Kirjanpitoon liittyvät tiedot
          säilytetään kirjanpitolain mukaisesti.
        </p>
      </section>

      <section>
        <h2>6. Tietojen luovutus ja siirrot</h2>
        <p>
          Emme myy henkilötietojasi. Tietoja voidaan luovuttaa vain palvelun toteuttamiseksi
          tarpeellisille alihankkijoille (esim. sähköposti- tai hosting-palvelu) sopimuksin, jotka
          velvoittavat käsittelemään tietoja lain mukaisesti. Jos käytämme palveluita EU/ETA-alueen
          ulkopuolelta, varmistamme asianmukaisen suojan (esim. standardisopimuslausekkeet).
        </p>
      </section>

      <section>
        <h2>7. Rekisteröidyn oikeudet</h2>
        <p>Sinulla on EU:n tietosuoja-asetuksen mukaisesti oikeus:</p>
        <ul>
          <li>saada pääsy omiin tietoihisi</li>
          <li>pyytää oikaisua tai poistamista</li>
          <li>rajoittaa käsittelyä tai vastustaa käsittelyä</li>
          <li>siirtää tiedot järjestelmästä toiseen (soveltuvin osin)</li>
          <li>peruuttaa suostumus (jos käsittely perustuu suostumukseen)</li>
          <li>tehdä valitus valvontaviranomaiselle (Tietosuojavaltuutettu)</li>
        </ul>
        <p>
          Voit käyttää oikeuksiasi ottamalla yhteyttä:{" "}
          <a href={`mailto:${COMPANY.email}`} className="text-primary hover:underline">
            {COMPANY.email}
          </a>
        </p>
      </section>

      <section>
        <h2>8. Evästeet</h2>
        <p>
          Verkkosivustomme käyttää evästeitä. Lue lisää{" "}
          <Link to="/evasteet" className="text-primary hover:underline">
            evästekäytännöstä
          </Link>
          .
        </p>
      </section>

      <section>
        <h2>9. Tietoturva</h2>
        <p>
          Suojaamme henkilötietoja asianmukaisin teknisin ja organisatorisin toimenpitein, kuten
          pääsyn rajoittamisella ja suojatuilla yhteyksillä.
        </p>
      </section>

      <section>
        <h2>10. Muutokset selosteeseen</h2>
        <p>
          Voimme päivittää tätä selostetta. Ajantasainen versio on aina saatavilla tällä sivulla.
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default Tietosuoja;
