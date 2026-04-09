import { motion } from "framer-motion";

const iconColor = "#6ee7a0";
const iconSize = 48;

const services = [
  {
    icon: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="14" width="36" height="26" rx="2" stroke={iconColor} strokeWidth="2" strokeLinejoin="round"/>
        <path d="M16 14V10C16 8.9 16.9 8 18 8H30C31.1 8 32 8.9 32 10V14" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <path d="M6 24H42" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 24V28" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <path d="M28 24V28" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="3" fill={iconColor} fillOpacity="0.2" stroke={iconColor} strokeWidth="1.5"/>
      </svg>
    ),
    title: "Administrative Support",
    description: "Data entry, travel arrangements, expense tracking, and document preparation handled with absolute precision."
  },
  {
    icon: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="36" height="28" rx="3" stroke={iconColor} strokeWidth="2"/>
        <path d="M6 16L24 27L42 16" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 32H20" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <path d="M14 26H18" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="36" cy="34" r="6" fill="hsl(142 72% 7%)" stroke={iconColor} strokeWidth="1.5"/>
        <path d="M33.5 34L35.5 36L38.5 32" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Email Management",
    description: "Inbox zero is possible. We filter, organize, and draft responses to keep your communications flowing seamlessly."
  },
  {
    icon: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="10" width="36" height="32" rx="2" stroke={iconColor} strokeWidth="2"/>
        <path d="M6 20H42" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 6V14" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <path d="M32 6V14" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <rect x="14" y="26" width="6" height="6" rx="1" fill={iconColor} fillOpacity="0.3" stroke={iconColor} strokeWidth="1.5"/>
        <rect x="28" y="26" width="6" height="6" rx="1" stroke={iconColor} strokeWidth="1.5"/>
        <rect x="21" y="26" width="6" height="6" rx="1" stroke={iconColor} strokeWidth="1.5"/>
      </svg>
    ),
    title: "Calendar Management",
    description: "Strategic scheduling that protects your deep work blocks while ensuring you never miss a vital meeting."
  },
  {
    icon: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 38L16 36L36 16L32 12L12 32L10 38Z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 12L36 8L40 12L36 16L32 12Z" stroke={iconColor} strokeWidth="2" strokeLinejoin="round"/>
        <path d="M12 32L16 36" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 42H24" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="22" cy="28" r="2" fill={iconColor} fillOpacity="0.4"/>
      </svg>
    ),
    title: "Content Creation",
    description: "Presentations, newsletters, and social media assets crafted to match your brand's unique voice and tone."
  },
  {
    icon: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="22" r="10" stroke={iconColor} strokeWidth="2"/>
        <path d="M14 30L8 38" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <path d="M34 30L40 38" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <path d="M20 18C20 18 22 16 24 18C26 20 28 18 28 18" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 24H28" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="38" cy="12" r="5" fill="hsl(142 72% 7%)" stroke={iconColor} strokeWidth="1.5"/>
        <path d="M36 12H40M38 10V14" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Social Media Management",
    description: "Consistent posting, community engagement, and analytics tracking to grow your digital presence."
  },
  {
    icon: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="40" height="28" rx="2" stroke={iconColor} strokeWidth="2"/>
        <path d="M16 36V42" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <path d="M32 36V42" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 42H38" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 30H44" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        <rect x="12" y="14" width="10" height="10" rx="1" stroke={iconColor} strokeWidth="1.5" fill={iconColor} fillOpacity="0.15"/>
        <path d="M26 16H36" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M26 20H32" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Website Management",
    description: "Content updates, blog posting, and basic maintenance to keep your digital storefront polished."
  },
  {
    icon: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="22" r="14" stroke={iconColor} strokeWidth="2"/>
        <path d="M32 32L42 42" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 22H30" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 14V30" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="22" cy="22" r="5" stroke={iconColor} strokeWidth="1.5" fill={iconColor} fillOpacity="0.15"/>
      </svg>
    ),
    title: "Research & Analysis",
    description: "Competitor analysis, lead generation, and market research synthesized into actionable insights."
  },
  {
    icon: (
      <svg width={iconSize} height={iconSize} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6C16 6 10 11 10 18C10 22 12 25.5 16 27.5V34L22 30H24C32 30 38 25 38 18C38 11 32 6 24 6Z" stroke={iconColor} strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="18" cy="18" r="2" fill={iconColor}/>
        <circle cx="24" cy="18" r="2" fill={iconColor}/>
        <circle cx="30" cy="18" r="2" fill={iconColor}/>
        <path d="M20 36C20 36 20 42 24 42C28 42 28 36 28 36" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Customer Service",
    description: "Warm, professional handling of client inquiries, onboarding, and support tickets."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-6">Everything you need to scale, seamlessly.</h3>
          <p className="text-lg text-muted-foreground">
            We don't just complete tasks; we build systems. Our comprehensive suite of services is designed to handle the operational weight of your business.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card p-8 border border-border hover:border-primary/40 transition-colors group"
            >
              <div className="mb-6 opacity-90 group-hover:opacity-100 transition-opacity">
                {service.icon}
              </div>
              <h4 className="text-xl font-serif font-medium text-foreground mb-3">{service.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
