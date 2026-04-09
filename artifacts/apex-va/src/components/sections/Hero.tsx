import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-16 overflow-hidden bg-background">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">Premium Virtual Assistance</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] mb-8">
              Reclaim your time. <br />
              <span className="text-primary italic">Elevate your business.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
              Expert-level administrative, operational, and creative support for busy professionals who demand precision and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="rounded-none h-14 px-8 text-base group"
                onClick={() => scrollToSection("contact")}
                data-testid="button-hero-book"
              >
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-none h-14 px-8 text-base border-primary/20 hover:bg-primary/5"
                onClick={() => scrollToSection("services")}
                data-testid="button-hero-services"
              >
                Explore Services
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:h-[700px] w-full"
          >
            <div className="absolute inset-0 bg-primary/10 -rotate-3 rounded-sm scale-105" />
            <img
              src="/images/hero.png"
              alt="Professional woman working at a modern desk"
              className="relative z-10 w-full h-full object-cover rounded-sm shadow-2xl"
            />
            
            {/* Floating Trust Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 md:-left-16 bg-card p-6 shadow-xl z-20 border border-border max-w-xs"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-muted border-2 border-card overflow-hidden">
                      <div className="w-full h-full bg-primary/20 flex items-center justify-center text-xs font-medium text-primary">
                        {String.fromCharCode(64 + i)}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-sm font-medium text-foreground">Trusted by 50+ founders</div>
              </div>
              <p className="text-xs text-muted-foreground">Delivering 10,000+ hours of reclaimed time for our partners.</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
