import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  COOKIE_CONSENT_EVENT,
  hasCookieConsent,
  saveCookieConsent,
} from "@/lib/cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sync = () => setVisible(!hasCookieConsent());
    sync();
    window.addEventListener(COOKIE_CONSENT_EVENT, sync);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, sync);
  }, []);

  if (!visible) return null;

  const acceptNecessary = () => saveCookieConsent(false, false);
  const acceptAll = () => saveCookieConsent(true, true);

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] p-3"
      role="dialog"
      aria-label="Evästeilmoitus"
    >
      <div className="max-w-2xl mx-auto rounded-lg border border-border bg-card px-4 py-3 shadow-lg">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
          <div className="min-w-0">
            <p className="text-xs text-muted-foreground leading-snug">
              Käytämme evästeitä sivuston toimintaan.{" "}
              <Link to="/evasteet" className="text-primary hover:underline">
                Evästeet
              </Link>
              {" · "}
              <Link to="/tietosuoja" className="text-primary hover:underline">
                Tietosuoja
              </Link>
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <Button onClick={acceptNecessary} variant="outline" size="sm" className="h-8 text-xs px-3">
              Vain välttämättömät
            </Button>
            <Button onClick={acceptAll} size="sm" className="btn-primary h-8 text-xs px-3">
              Hyväksy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
