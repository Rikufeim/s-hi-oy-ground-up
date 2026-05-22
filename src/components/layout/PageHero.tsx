import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  variant?: "full" | "compact";
  objectPosition?: string;
  blur?: "sm" | "md";
  children?: ReactNode;
}

export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  align = "left",
  variant = "compact",
  objectPosition = "center",
  blur = "md",
  children,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-center overflow-hidden bg-secondary",
        variant === "full" ? "min-h-screen" : "min-h-[300px] md:min-h-[380px]"
      )}
    >
      <img
        src={image}
        alt={imageAlt}
        className={cn("page-hero__image", blur === "sm" ? "blur-sm" : "blur-md")}
        style={{ objectPosition }}
      />
      <div className="page-hero__overlay" aria-hidden />

      <div
        className={cn(
          "relative z-10 w-full container-custom animate-fade-in",
          variant === "full" ? "pt-28 pb-20 md:pt-32 md:pb-28" : "pt-28 pb-16 md:pt-32 md:pb-20"
        )}
      >
        <div
          className={cn(
            "space-y-6",
            align === "center" && "mx-auto max-w-2xl text-center",
            align === "left" && "max-w-3xl"
          )}
        >
          {eyebrow && (
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {eyebrow}
            </span>
          )}

          <h1
            className={cn(
              "font-bold text-white leading-tight",
              variant === "full"
                ? "text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                : "text-4xl md:text-5xl",
              eyebrow && "mt-0"
            )}
          >
            {title}
          </h1>

          {description && (
            <p
              className={cn(
                "text-white/85 leading-relaxed",
                variant === "full" ? "text-lg md:text-xl max-w-xl" : "text-xl",
                align === "center" && "mx-auto"
              )}
            >
              {description}
            </p>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
