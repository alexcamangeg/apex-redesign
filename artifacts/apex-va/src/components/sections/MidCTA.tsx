import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function MidCTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium uppercase tracking-wider text-primary-foreground/70 mb-6"
          >
            Ready to grow?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8"
          >
            Stop leaving leads on the table.{" "}
            <span className="italic">Let's build your system.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto font-light"
          >
            Most businesses don't have a lead problem — they have a system problem. We fix that.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              variant="secondary"
              className="rounded-none h-14 px-10 text-lg bg-background text-foreground hover:bg-background/90 transition-colors group"
              onClick={() => scrollToSection("contact")}
              data-testid="button-mid-cta"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-none h-14 px-10 text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              onClick={() => scrollToSection("contact")}
              data-testid="button-mid-cta-secondary"
            >
              Book a Call
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
