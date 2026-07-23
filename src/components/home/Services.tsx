import { useMemo } from "react";
import { SplitFeatureSection } from "@/components/home/SplitFeatureSection";
import { ContactPromoSection } from "@/components/home/ContactPromoSection";
import homeKuljetus from "@/assets/home-kuljetus.png";
import homeKaivinkone from "@/assets/home-kaivinkone.png";
import homeKivipiha from "@/assets/home-kivipiha.png";
import talonpohjaJcb from "@/assets/referenssit/talonpohja-jcb.png";
import metsamuokkaus from "@/assets/referenssit/metsamuokkaus.png";
import maakaapelointi from "@/assets/referenssit/maakaapelointi.png";
import pihatieSora from "@/assets/referenssit/pihatie-sora.png";
import kantojyrsinta from "@/assets/referenssit/kantojyrsinta.png";

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

const maanrakennusFeatures = [
  "Kattava kalusto ja kokeneet ammattilaiset",
  "Talonpohjat, kaivuu- ja täyttötyöt",
  "Pienet pihaurakat ja laajemmat rakennuskohteet",
  "Tehokas ja huolellinen toteutus aikataulussa",
];

const maakaapelointiFeatures = [
  "Kaapeliojien kaivuutyöt ja putkitukset",
  "Kaapelien suojaus ja asennusvalmistelu",
  "Turvallinen ja säännösten mukainen toteutus",
  "Yhteistyö sähköverkkoyhtiöiden kanssa",
];

export function Services() {
  const repeatedCarouselImages = useMemo(() => [...carouselImages, ...carouselImages], []);

  return (
    <>
      <section className="bg-muted">
        <div className="w-full overflow-hidden">
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
      </section>

      <SplitFeatureSection
        title="Maanrakennustyöt"
        description="Meillä on kattava valikoima erilaisia työkoneita ja osaavat tekijät. Toteutamme sekä pienet että suuret maanrakennustyöt tehokkaasti ja huolellisesti Pohjois-Pohjanmaalla."
        features={maanrakennusFeatures}
        ctaLabel="Ota yhteyttä"
        ctaHref="/yhteystiedot"
        image={homeKaivinkone}
        imageAlt="Maanrakennustyöt kaivinkoneella"
      />

      <SplitFeatureSection
        title="Sähköverkkojen maakaapelointi"
        description="Teemme maanrakennustyöt sähköverkkojen maakaapelointia varten. Palvelumme kattaa kaapeliojien kaivuutyöt, putkitukset ja kaapelien suojaamisen."
        features={maakaapelointiFeatures}
        ctaLabel="Ota yhteyttä"
        ctaHref="/yhteystiedot"
        image={maakaapelointi}
        imageAlt="Sähköverkkojen maakaapelointi"
        reverse
      />

      <ContactPromoSection />
    </>
  );
}
