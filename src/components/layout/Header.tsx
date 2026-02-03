import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Etusivu", href: "/" },
  { name: "Palvelut", href: "/palvelut" },
  { name: "Referenssit", href: "/referenssit" },
  { name: "Yritys", href: "/yritys" },
  { name: "Blogi", href: "/blogi" },
  { name: "Yhteystiedot", href: "/yhteystiedot" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">S</span>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "font-bold text-xl transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}>
                Sähi Oy
              </span>
              <span className={cn(
                "text-xs transition-colors",
                isScrolled ? "text-muted-foreground" : "text-white/80"
              )}>
                Maanrakennus
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "font-medium transition-colors hover:text-primary",
                  location.pathname === item.href
                    ? "text-primary"
                    : isScrolled
                    ? "text-foreground"
                    : "text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+358401234567"
              className={cn(
                "flex items-center space-x-2 font-medium transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>040 123 4567</span>
            </a>
            <Button asChild className="btn-primary">
              <Link to="/yhteystiedot">Pyydä tarjous</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            ) : (
              <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-4 py-3 font-medium transition-colors hover:bg-muted rounded-lg",
                    location.pathname === item.href
                      ? "text-primary bg-muted"
                      : "text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4 space-y-3">
                <a
                  href="tel:+358401234567"
                  className="flex items-center space-x-2 text-foreground font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>040 123 4567</span>
                </a>
                <Button asChild className="w-full btn-primary">
                  <Link to="/yhteystiedot">Pyydä tarjous</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
