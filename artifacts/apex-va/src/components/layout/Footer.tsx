import { SiInstagram, SiFacebook } from "react-icons/si";
import { Linkedin } from "lucide-react";

const darkGreen = "hsl(142 60% 12%)";
const textMain = "hsl(142 30% 90%)";
const textMuted = "hsl(142 20% 65%)";
const textHeading = "hsl(142 40% 95%)";
const accent = "hsl(142 72% 45%)";
const socialBg = "hsl(142 60% 18%)";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
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
            <img src="/images/logo.jpeg" alt="Apex Virtual Assistance" className="h-20 w-auto mb-6" style={{ mixBlendMode: "screen" }} />
            <p className="max-w-sm mb-8 text-lg" style={{ color: textMuted }}>
              Premium virtual assistance for busy entrepreneurs, startups, and professionals who want to reclaim their time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-sm transition-colors" style={{ backgroundColor: socialBg, color: textMain }} data-testid="link-social-linkedin">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 rounded-sm transition-colors" style={{ backgroundColor: socialBg, color: textMain }} data-testid="link-social-instagram">
                <SiInstagram size={20} />
              </a>
              <a href="#" className="p-2 rounded-sm transition-colors" style={{ backgroundColor: socialBg, color: textMain }} data-testid="link-social-facebook">
                <SiFacebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6" style={{ color: textHeading }}>Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><button onClick={() => scrollToSection("services")} className="transition-colors" style={{ color: textMuted }} data-testid="footer-link-services">Services</button></li>
              <li><button onClick={() => scrollToSection("about")} className="transition-colors" style={{ color: textMuted }} data-testid="footer-link-about">About Us</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="transition-colors" style={{ color: textMuted }} data-testid="footer-link-contact">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-6" style={{ color: textHeading }}>Contact</h4>
            <ul className="flex flex-col gap-4">
              <li style={{ color: textMuted }}>hello@apexvirtualassistance.com</li>
              <li style={{ color: textMuted }}>+1 (555) 123-4567</li>
              <li className="mt-4" style={{ color: textMuted }}>San Francisco, CA<br />Working with clients worldwide.</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderTop: `1px solid hsl(142 40% 22%)` }}>
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
