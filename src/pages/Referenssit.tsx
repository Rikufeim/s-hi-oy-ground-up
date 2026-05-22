import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/layout/PageHero";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import pihakivetys from "@/assets/referenssit/pihakivetys.png";
import talonpohjaJcb from "@/assets/referenssit/talonpohja-jcb.png";
import metsamuokkaus from "@/assets/referenssit/metsamuokkaus.png";
import pihaAlueKivet from "@/assets/referenssit/piha-alue-kivet.png";
import maakaapelointi from "@/assets/referenssit/maakaapelointi.png";
import pihatieSora from "@/assets/referenssit/pihatie-sora.png";
import kantojyrsinta from "@/assets/referenssit/kantojyrsinta.png";

const referenceImages = [
  { src: pihakivetys, alt: "Kivimuuri ja piharakenteet" },
  { src: talonpohjaJcb, alt: "Talonpohjatyöt" },
  { src: metsamuokkaus, alt: "Metsämuokkaus" },
  { src: pihaAlueKivet, alt: "Pihan kiviasennukset" },
  { src: maakaapelointi, alt: "Maakaapeloinnin kaivuutyöt" },
  { src: pihatieSora, alt: "Pihatien rakennekerrokset" },
  { src: kantojyrsinta, alt: "Kantojyrsintä" },
];

const Referenssit = () => {
  const [selectedImage, setSelectedImage] = useState<(typeof referenceImages)[number] | null>(null);

  return (
    <Layout>
      <PageHero
        blur="sm"
        image={pihakivetys}
        imageAlt="Referenssikuvia"
        eyebrow="Referenssit"
        title="Toteutetut projektit"
        description="Valittuja kuvia toteutetuista kohteista."
      />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {referenceImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(image)}
                className="group relative overflow-hidden rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
                aria-label={`Avaa kuva: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-[calc(100%-2rem)] border-0 bg-transparent p-0 shadow-none">
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[85vh] w-full rounded-lg object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Referenssit;
