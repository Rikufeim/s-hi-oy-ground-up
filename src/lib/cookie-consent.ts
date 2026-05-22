export const COOKIE_CONSENT_KEY = "sahi-cookie-consent";
export const COOKIE_CONSENT_EVENT = "cookie-consent-changed";

export type CookieConsentChoice = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

export function getCookieConsent(): CookieConsentChoice | null {
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsentChoice;
  } catch {
    return null;
  }
}

export function hasCookieConsent(): boolean {
  return getCookieConsent() !== null;
}

export function saveCookieConsent(analytics: boolean, marketing: boolean): void {
  const choice: CookieConsentChoice = {
    necessary: true,
    analytics,
    marketing,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(choice));
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

export function resetCookieConsent(): void {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  window.dispatchEvent(new Event(COOKIE_CONSENT_EVENT));
}

export function hasAnalyticsConsent(): boolean {
  return getCookieConsent()?.analytics === true;
}
