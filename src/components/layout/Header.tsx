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
  { name: "Yhteystiedot", href: "/yhteystiedot" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "absolute inset-x-0 top-0 z-50 w-full",
        "bg-transparent"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className={cn(
              "font-bold text-xl transition-colors",
              "text-primary"
            )}>
              Sähi Oy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 ml-auto mr-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "font-medium transition-colors hover:text-primary",
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Phone Number */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:+358401234567"
              className={cn(
                "flex items-center space-x-2 font-medium transition-colors",
                "text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>040 123 4567</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-transparent border-t border-white/20">
            <div className="py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-4 py-3 font-medium transition-colors hover:bg-white/10 rounded-lg",
                    location.pathname === item.href
                      ? "text-primary bg-white/10"
                      : "text-white"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <a
                  href="tel:+358401234567"
                  className="flex items-center space-x-2 text-white font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>040 123 4567</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
