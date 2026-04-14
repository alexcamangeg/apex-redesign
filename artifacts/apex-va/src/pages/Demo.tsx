import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Globe,
  Headphones,
  Check,
  PhoneCall,
} from "lucide-react";

const demoSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start by understanding your business, your goals, and where your current lead flow is falling short.",
  },
  {
    number: "02",
    title: "Custom Strategy",
    description:
      "Based on what we learn, we build a tailored system—website, outreach, and support—designed around your specific needs.",
  },
  {
    number: "03",
    title: "Launch & Optimize",
    description:
      "We launch your system and continuously refine it to maximize results and keep your pipeline full.",
  },
];

const services = [
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Lead Generation Systems",
    description:
      "Targeted outreach and follow-up systems that create a steady flow of qualified opportunities for your business.",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "High-Converting Websites",
    description:
      "Conversion-focused websites with clear messaging, mobile optimization, and integrated lead capture forms.",
  },
  {
    icon: <Headphones className="w-7 h-7" />,
    title: "Virtual Assistant Support",
    description:
      "Trained VAs handling outbound calling, lead management, CRM updates, and administrative support.",
  },
];

const results = [
  "Consistent pipeline of qualified leads",
  "Higher website conversion rates",
  "Structured follow-up that doesn't drop the ball",
  "More time to focus on closing deals",
  "A system that works even when you're not",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Demo() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-16 md:mb-24"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to main site
            </Link>
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Demo
            </h2>
            <h1 className="text-4xl md:text-6xl font-serif text-foreground leading-tight mb-6">
              See How Apex Agency Works
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-4">
              Get a closer look at how we help service-based businesses generate
              more qualified leads through structured systems, high-converting
              websites, and dedicated virtual assistant support.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl">
              Walk through our process below and see what working with Apex
              looks like from day one.
            </p>
          </motion.div>

          {/* How We Work Section */}
          <section className="mb-16 md:mb-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center mb-12 md:mb-20"
            >
              <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Our Process
              </h2>
              <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-5 md:mb-6 leading-tight">
                Three steps to a system that generates results.
              </h3>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {demoSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex gap-5 md:gap-12 mb-10 md:mb-16 last:mb-0 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                      <span className="text-base md:text-xl font-serif font-bold text-primary group-hover:text-primary-foreground transition-colors">
                        {step.number}
                      </span>
                    </div>
                    {index < demoSteps.length - 1 && (
                      <div className="w-px h-10 md:h-16 bg-border mx-auto mt-4" />
                    )}
                  </div>
                  <div className="pt-2 md:pt-3 pb-4">
                    <h4 className="text-xl md:text-2xl font-serif font-medium text-foreground mb-2 md:mb-3 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Services Overview */}
          <section className="mb-16 md:mb-28">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center mb-12 md:mb-20"
            >
              <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                What You Get
              </h2>
              <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-5 md:mb-6 leading-tight">
                A complete growth system—not just a service.
              </h3>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card border border-border p-6 md:p-8 flex flex-col group hover:border-primary/40 transition-colors"
                >
                  <div className="text-primary mb-5 group-hover:scale-110 transition-transform origin-left">
                    {service.icon}
                  </div>
                  <h4 className="text-xl md:text-2xl font-serif font-medium text-foreground mb-3 md:mb-4">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Results */}
          <section className="mb-16 md:mb-28" id="demo-results">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto bg-card border border-border p-7 md:p-14"
            >
              <div className="flex flex-col gap-8 md:gap-10">
                <div>
                  <div className="text-primary text-sm font-medium uppercase tracking-wider mb-4 flex items-center gap-3">
                    <div className="w-8 h-px bg-primary" />
                    What to Expect
                  </div>
                  <h4 className="text-2xl md:text-4xl font-serif text-foreground mb-6 leading-snug">
                    Real outcomes from a structured system.
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {results.map((result, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-muted-foreground text-base leading-relaxed"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-primary text-primary-foreground p-10 md:p-16">
              <PhoneCall className="w-10 h-10 mx-auto mb-6 opacity-80" />
              <h3 className="text-3xl md:text-4xl font-serif mb-4">
                Ready to see it in action?
              </h3>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto font-light">
                Book a discovery call and we'll walk you through exactly how
                Apex can help your business generate more qualified leads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="rounded-none h-14 px-10 text-base bg-background text-foreground hover:bg-background/90 transition-colors group w-full sm:w-auto"
                    onClick={() => {
                      sessionStorage.setItem("apex_scroll_target", "contact");
                    }}
                    data-testid="button-demo-cta"
                  >
                    Book a Discovery Call
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
