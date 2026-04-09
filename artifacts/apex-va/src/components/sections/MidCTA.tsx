import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function MidCTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'url("/images/collaboration.png")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8"
          >
            Stop working <span className="italic text-secondary">in</span> your business. <br className="hidden md:block" />
            Start working <span className="italic text-secondary">on</span> it.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto font-light"
          >
            Partner with a dedicated expert who understands your goals and executes with precision.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              size="lg" 
              variant="secondary"
              className="rounded-none h-14 px-10 text-lg bg-secondary text-secondary-foreground hover:bg-white transition-colors"
              onClick={() => scrollToSection("contact")}
              data-testid="button-mid-cta"
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
