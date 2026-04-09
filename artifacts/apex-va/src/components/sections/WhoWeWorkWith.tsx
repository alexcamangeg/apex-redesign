import { motion } from "framer-motion";
import { Car, Home, Sparkles, Stethoscope } from "lucide-react";

const industries = [
  {
    icon: <Car className="w-7 h-7" />,
    label: "Car Sales Professionals",
    description: "Helping dealerships and independent sales professionals generate and follow up on leads at scale."
  },
  {
    icon: <Home className="w-7 h-7" />,
    label: "Roofing Companies",
    description: "Building outbound systems and websites that turn homeowners into booked appointments."
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    label: "Med Spas",
    description: "Converting online interest into filled treatment schedules with a clear digital presence."
  },
  {
    icon: <Stethoscope className="w-7 h-7" />,
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
    <section id="who-we-work-with" className="py-16 md:py-28 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Who We Work With</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            We work with service-based businesses that rely on predictable lead generation—not inconsistent marketing.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card border border-border p-6 md:p-8 group hover:border-primary/40 transition-colors"
            >
              <div className="text-primary mb-5 group-hover:scale-110 transition-transform origin-left">
                {industry.icon}
              </div>
              <h4 className="text-lg md:text-xl font-serif font-medium text-foreground mb-3">{industry.label}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
