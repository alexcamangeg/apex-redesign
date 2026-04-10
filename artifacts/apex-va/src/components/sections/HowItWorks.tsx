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

        {/* Desktop zigzag layout */}
        <div className="hidden md:block max-w-4xl mx-auto relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-center mb-16 last:mb-0 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Text side */}
                <div className={`w-[calc(50%-48px)] ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}>
                  <h4 className="text-2xl font-serif font-medium text-foreground mb-3 leading-snug">{step.title}</h4>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{step.description}</p>
                </div>

                {/* Center badge */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
                  <div className="w-16 h-16 border border-primary/30 bg-background flex items-center justify-center group hover:bg-primary hover:border-primary transition-colors">
                    <span className="text-xl font-serif font-bold text-primary group-hover:text-primary-foreground transition-colors">{step.number}</span>
                  </div>
                </div>

                {/* Empty opposite side */}
                <div className="w-[calc(50%-48px)]" />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile single-column layout */}
        <div className="md:hidden max-w-xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-5 mb-10 last:mb-0 group"
            >
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-12 h-12 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                  <span className="text-base font-serif font-bold text-primary group-hover:text-primary-foreground transition-colors">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-4 min-h-[32px]" />
                )}
              </div>
              <div className="pt-2 pb-4">
                <h4 className="text-xl font-serif font-medium text-foreground mb-2 leading-snug">{step.title}</h4>
                <p className="text-muted-foreground text-base leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-20">
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
