import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SplitFeatureSectionProps {
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
}

export function SplitFeatureSection({
  title,
  description,
  features,
  ctaLabel,
  ctaHref,
  image,
  imageAlt,
  reverse = false,
}: SplitFeatureSectionProps) {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 md:py-24">
          <div className={cn("space-y-8", reverse && "lg:order-2")}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">{title}</h2>
              <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
            </div>

            <p className="text-lg text-white/80 leading-relaxed">{description}</p>

            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </span>
                  <span className="text-white/90">{feature}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="btn-primary rounded-full px-8">
              <Link to={ctaHref} className="flex items-center">
                {ctaLabel}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          <div className={cn("split-section-image relative overflow-hidden rounded-2xl", reverse && "lg:order-1")}>
            <img src={image} alt={imageAlt} className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:min-h-[420px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
