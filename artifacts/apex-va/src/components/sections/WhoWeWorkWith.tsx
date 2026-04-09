import { motion } from "framer-motion";
import { Car, Home, Sparkles, Stethoscope } from "lucide-react";

const industries = [
  {
    icon: <Car className="w-8 h-8" />,
    label: "Car Sales Professionals",
    description: "Helping dealerships and independent sales professionals generate and follow up on leads at scale."
  },
  {
    icon: <Home className="w-8 h-8" />,
    label: "Roofing Companies",
    description: "Building outbound systems and websites that turn homeowners into booked appointments."
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    label: "Med Spas",
    description: "Converting online interest into filled treatment schedules with a clear digital presence."
  },
  {
    icon: <Stethoscope className="w-8 h-8" />,
    label: "Dental Practices",
    description: "Helping practices attract new patients and reduce the friction between interest and booked visits."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export function WhoWeWorkWith() {
  return (
    <section id="who-we-work-with" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Who We Work With</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Built for service businesses that depend on consistent lead flow.
          </h3>
          <p className="text-lg text-muted-foreground">
            We work with service-based businesses that depend on consistent lead flow to grow.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card border border-border p-8 group hover:border-primary/40 transition-colors"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform origin-left">
                {industry.icon}
              </div>
              <h4 className="text-xl font-serif font-medium text-foreground mb-3">{industry.label}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
