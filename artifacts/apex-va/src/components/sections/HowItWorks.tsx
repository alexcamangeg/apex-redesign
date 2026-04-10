import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "We identify your growth gaps",
    description: "We look at your current website, follow-up process, and lead flow to understand exactly where opportunities are being lost."
  },
  {
    number: "02",
    title: "We build your system",
    description: "We create a cleaner, more conversion-focused website and support structure designed to move visitors into action."
  },
  {
    number: "03",
    title: "We help you generate opportunities",
    description: "Our goal is to help you create a more consistent flow of qualified leads so your team always has real opportunities to work with."
  }
];

export function HowItWorks() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-28 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">How It Works</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-5 md:mb-6 leading-tight">
            A clear process. A predictable result.
          </h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            A simple system designed to identify gaps, build structure, and generate consistent opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-5 md:gap-12 mb-10 md:mb-16 last:mb-0 group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                  <span className="text-base md:text-xl font-serif font-bold text-primary group-hover:text-primary-foreground transition-colors">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-10 md:h-16 bg-border mx-auto mt-4" />
                )}
              </div>
              <div className="pt-2 md:pt-3 pb-4">
                <h4 className="text-xl md:text-2xl font-serif font-medium text-foreground mb-2 md:mb-3 leading-snug">{step.title}</h4>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Button
            size="lg"
            className="rounded-none h-12 md:h-14 px-8 md:px-10 text-base group w-full sm:w-auto"
            onClick={() => scrollToSection("contact")}
            data-testid="button-how-it-works-cta"
          >
            Book a Call
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
