import { SiInstagram, SiFacebook } from "react-icons/si";
import { Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <img src="/images/logo.jpeg" alt="Apex Virtual Assistance" className="h-20 w-auto mb-6" style={{ mixBlendMode: "screen" }} />
            <p className="text-primary-foreground/80 max-w-sm mb-8 text-lg">
              Premium virtual assistance for busy entrepreneurs, startups, and professionals who want to reclaim their time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground transition-colors rounded-sm" data-testid="link-social-linkedin">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground transition-colors rounded-sm" data-testid="link-social-instagram">
                <SiInstagram size={20} />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground transition-colors rounded-sm" data-testid="link-social-facebook">
                <SiFacebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6 text-background">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><button onClick={() => scrollToSection("services")} className="text-primary-foreground/80 hover:text-secondary transition-colors" data-testid="footer-link-services">Services</button></li>
              <li><button onClick={() => scrollToSection("about")} className="text-primary-foreground/80 hover:text-secondary transition-colors" data-testid="footer-link-about">About Us</button></li>
              <li><button onClick={() => scrollToSection("contact")} className="text-primary-foreground/80 hover:text-secondary transition-colors" data-testid="footer-link-contact">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-xl mb-6 text-background">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="text-primary-foreground/80">hello@apexvirtualassistance.com</li>
              <li className="text-primary-foreground/80">+1 (555) 123-4567</li>
              <li className="text-primary-foreground/80 mt-4">San Francisco, CA<br/>Working with clients worldwide.</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {currentYear} Apex Virtual Assistance. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
