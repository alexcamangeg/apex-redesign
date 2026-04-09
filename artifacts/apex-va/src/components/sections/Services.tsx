import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Globe, Headphones, Check } from "lucide-react";

const services = [
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "Lead Generation Systems",
    description:
      "We build outbound and follow-up systems designed to create a steady flow of qualified opportunities.",
    features: [
      "Targeted outreach strategies",
      "Lead capture and follow-up structure",
      "Appointment-setting support",
      "Consistent pipeline development",
    ],
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "High-Converting Websites",
    description:
      "Your website should convert visitors into real opportunities—not just exist online.",
    features: [
      "Conversion-focused design",
      "Clear messaging and structure",
      "Mobile-optimized experience",
      "Integrated lead capture forms",
    ],
  },
  {
    icon: <Headphones className="w-7 h-7" />,
    title: "Virtual Assistant Support",
    description:
      "Execution is where most businesses fall short. We provide trained support to help you stay consistent.",
    features: [
      "Outbound calling and follow-up",
      "Lead management and organization",
      "CRM updates and tracking",
      "Administrative support",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export function Services() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-16 md:py-28 bg-muted/20">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Services</h2>
          <h3 className="text-3xl md:text-5xl font-serif text-foreground mb-5 md:mb-6 leading-tight">
            Solutions built to generate consistent opportunities and improve how your business operates.
          </h3>
        </div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10 md:mb-20"
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
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 md:mb-6">
                {service.description}
              </p>
              <ul className="space-y-3 mt-auto">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                    <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* How It All Works Together */}
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
                How It All Works Together
              </div>
              <h4 className="text-2xl md:text-4xl font-serif text-foreground mb-4 leading-snug">
                Most businesses struggle because their systems are disconnected.
              </h4>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
                We combine your website, outreach, and support into one structured system designed
                to generate and capture opportunities consistently.
              </p>
              <p className="text-foreground font-medium italic">
                This isn't just a service—it's a complete growth system.
              </p>
            </div>
            <div>
              <Button
                size="lg"
                className="rounded-none h-12 md:h-14 px-10 text-base group w-full sm:w-auto"
                onClick={() => scrollToSection("contact")}
                data-testid="button-services-cta"
              >
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
