import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Etusivu", href: "/" },
  { name: "Palvelut", href: "/palvelut" },
  { name: "Referenssit", href: "/referenssit" },
  { name: "Yritys", href: "/yritys" },
  { name: "Yhteystiedot", href: "/yhteystiedot" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      <div className="container-custom">
        <div className="nav-bar">
          <nav className="flex items-center justify-between h-20 px-4 sm:px-6">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-xl text-primary transition-colors">Sähi Oy</span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8 ml-auto mr-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "font-medium transition-colors hover:text-primary",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-white/90"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center">
              <Button asChild className="btn-primary">
                <Link to="/yhteystiedot">Pyydä tarjous</Link>
              </Button>
            </div>

            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </nav>

          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-white/10 px-4 sm:px-6">
              <div className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "block px-4 py-3 font-medium transition-colors hover:bg-white/10 rounded-lg",
                      location.pathname === item.href
                        ? "text-primary bg-white/10"
                        : "text-white/90"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 pb-4">
                  <Button asChild className="w-full btn-primary">
                    <Link to="/yhteystiedot">Pyydä tarjous</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
