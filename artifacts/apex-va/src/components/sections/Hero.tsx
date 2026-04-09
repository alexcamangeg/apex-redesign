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
    <section className="relative min-h-[100dvh] flex items-center pt-28 pb-16 overflow-hidden bg-background">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8 max-w-full overflow-hidden">
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider truncate">Lead Generation · Websites · VA Support</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] mb-6 md:mb-8">
              We Help Service-Based Businesses{" "}
              <span className="text-primary italic">Generate More Qualified Leads</span>{" "}
              Consistently
            </h1>

            <p className="text-base md:text-xl text-muted-foreground mb-8 md:mb-10 max-w-lg leading-relaxed">
              Through high-converting websites and outbound systems designed to bring real opportunities—not just traffic.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-10">
              <Button
                size="lg"
                className="rounded-none h-12 md:h-14 px-8 text-base group w-full sm:w-auto"
                onClick={() => scrollToSection("contact")}
                data-testid="button-hero-book"
              >
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-none h-12 md:h-14 px-8 text-base border-primary/20 hover:bg-primary/5 w-full sm:w-auto"
                onClick={() => scrollToSection("how-it-works")}
                data-testid="button-hero-learn"
              >
                Learn More
              </Button>
            </div>

            <p className="text-sm text-muted-foreground border-l-2 border-primary/40 pl-4 italic leading-relaxed">
              Built for businesses that rely on consistent lead flow—not guesswork.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[280px] sm:h-[380px] lg:h-[700px] w-full"
          >
            <div className="absolute inset-0 bg-primary/10 -rotate-3 rounded-sm scale-105" />
            <img
              src="/images/hero.png"
              alt="Virtual assistants working at computers in a modern office"
              className="relative z-10 w-full h-full object-cover rounded-sm shadow-2xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
