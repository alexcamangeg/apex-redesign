import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Lock } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, navigate] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (!isHome) {
      sessionStorage.setItem("apex_scroll_target", id);
      navigate("/");
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm py-2 md:py-4" : "bg-transparent py-2 md:py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
          <img src="/images/logo.jpeg" alt="Apex Agency" className="h-14 md:h-20 w-auto" style={{ mixBlendMode: "screen" }} loading="eager" decoding="async" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" data-testid="link-services">Services</button>
          <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" data-testid="link-how-it-works">How It Works</button>
          <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" data-testid="link-about">About</button>
          <button onClick={() => scrollToSection("contact")} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" data-testid="link-contact">Contact</button>
          <Link href="/careers" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors" data-testid="link-careers">Careers</Link>
          <Button onClick={() => scrollToSection("contact")} variant="default" className="rounded-none px-6" data-testid="button-nav-book">
            Book a Call
          </Button>
          <Link href="/admin" title="Admin" className="text-foreground/30 hover:text-foreground/60 transition-colors">
            <Lock size={15} />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-6 shadow-lg">
          <button onClick={() => scrollToSection("services")} className="text-left text-lg font-medium text-foreground" data-testid="link-mobile-services">Services</button>
          <button onClick={() => scrollToSection("how-it-works")} className="text-left text-lg font-medium text-foreground" data-testid="link-mobile-how-it-works">How It Works</button>
          <button onClick={() => scrollToSection("about")} className="text-left text-lg font-medium text-foreground" data-testid="link-mobile-about">About</button>
          <button onClick={() => scrollToSection("contact")} className="text-left text-lg font-medium text-foreground" data-testid="link-mobile-contact">Contact</button>
          <Link href="/careers" onClick={() => setMobileMenuOpen(false)} className="text-left text-lg font-medium text-foreground" data-testid="link-mobile-careers">Careers</Link>
          <Button onClick={() => scrollToSection("contact")} variant="default" className="rounded-none w-full" data-testid="button-mobile-book">
            Book a Discovery Call
          </Button>
          <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-sm text-foreground/40 hover:text-foreground/60 transition-colors">
            <Lock size={14} /> Admin
          </Link>
        </div>
      )}
    </header>
  );
}
