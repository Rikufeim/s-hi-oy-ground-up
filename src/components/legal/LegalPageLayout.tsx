import { ReactNode } from "react";
import { Layout } from "@/components/layout/Layout";
import { LEGAL_UPDATED } from "@/lib/company";

interface LegalPageLayoutProps {
  title: string;
  children: ReactNode;
}

export function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <Layout>
      <section className="bg-muted section-padding">
        <div className="container-custom max-w-3xl">
          <p className="text-sm text-muted-foreground mb-2">Päivitetty {LEGAL_UPDATED}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-10">{title}</h1>
          <div className="legal-content">{children}</div>
        </div>
      </section>
    </Layout>
  );
}
