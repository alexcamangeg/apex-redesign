import { useLocation, Link } from "wouter";

const darkGreen = "#000000";
const textMain = "#ffffff";
const textMuted = "rgba(255,255,255,0.7)";
const textHeading = "#ffffff";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [location, navigate] = useLocation();
  const isHome = location === "/";

  const scrollToSection = (id: string) => {
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
    <footer className="py-16 md:py-24" style={{ backgroundColor: darkGreen, color: textMain }}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <img src="/images/logo.jpeg" alt="Apex Virtual Assistance" className="h-20 w-auto mb-6" style={{ mixBlendMode: "screen" }} loading="lazy" decoding="async" />
            </Link>
            <p className="max-w-sm text-lg" style={{ color: textMuted }}>
              Lead generation systems, high-converting websites, and performance-driven support for service businesses.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6" style={{ color: textHeading }}>Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><button onClick={() => scrollToSection("services")} className="transition-colors" style={{ color: textMuted }} data-testid="footer-link-services">Services</button></li>
              <li><button onClick={() => scrollToSection("about")} className="transition-colors" style={{ color: textMuted }} data-testid="footer-link-about">About Us</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="transition-colors" style={{ color: textMuted }} data-testid="footer-link-contact">Contact</button></li>
              <li><a href="/careers" className="transition-colors" style={{ color: textMuted }} data-testid="footer-link-careers">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6" style={{ color: textHeading }}>Contact</h4>
            <ul className="flex flex-col gap-4">
              <li style={{ color: textMuted }}>apexva.business@gmail.com</li>
              <li style={{ color: textMuted }}>+1 (832) 303-2497</li>
              <li className="mt-4" style={{ color: textMuted }}>Working with clients worldwide.</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: `1px solid rgba(255,255,255,0.15)` }}>
          <p className="text-sm" style={{ color: textMuted }}>
            &copy; {currentYear} Apex Virtual Assistance. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm" style={{ color: textMuted }}>
            <a href="#" style={{ color: textMuted }}>Privacy Policy</a>
            <a href="#" style={{ color: textMuted }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
