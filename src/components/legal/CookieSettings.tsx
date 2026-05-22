import { Button } from "@/components/ui/button";
import { getCookieConsent, resetCookieConsent, saveCookieConsent } from "@/lib/cookie-consent";
import { useState } from "react";

export function CookieSettings() {
  const [status, setStatus] = useState(() => getCookieConsent());

  const refresh = () => setStatus(getCookieConsent());

  return (
    <div className="rounded-xl border border-border bg-card p-6 space-y-4 not-prose">
      <p className="text-foreground font-medium">Nykyiset asetukset</p>
      {status ? (
        <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-5">
          <li>Välttämättömät: käytössä (aina)</li>
          <li>Analytiikka: {status.analytics ? "hyväksytty" : "ei käytössä"}</li>
          <li>Markkinointi: {status.marketing ? "hyväksytty" : "ei käytössä"}</li>
          <li className="list-none pl-0 pt-1 text-xs">
            Valinta tallennettu: {new Date(status.timestamp).toLocaleString("fi-FI")}
          </li>
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground">Et ole vielä tallentanut evästevalintaa.</p>
      )}
      <div className="flex flex-wrap gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            saveCookieConsent(false, false);
            refresh();
          }}
        >
          Vain välttämättömät
        </Button>
        <Button
          type="button"
          className="btn-primary"
          onClick={() => {
            saveCookieConsent(true, true);
            refresh();
          }}
        >
          Hyväksy kaikki
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={() => {
            resetCookieConsent();
            refresh();
          }}
        >
          Näytä evästebanneri uudelleen
        </Button>
      </div>
    </div>
  );
}
