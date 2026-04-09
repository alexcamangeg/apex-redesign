import { motion } from "framer-motion";
import { 
  CalendarCheck, 
  MailOpen, 
  PenTool, 
  Search, 
  MessageSquareText, 
  Layout, 
  FileText, 
  Briefcase 
} from "lucide-react";

const services = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Administrative Support",
    description: "Data entry, travel arrangements, expense tracking, and document preparation handled with absolute precision."
  },
  {
    icon: <MailOpen className="w-6 h-6" />,
    title: "Email Management",
    description: "Inbox zero is possible. We filter, organize, and draft responses to keep your communications flowing seamlessly."
  },
  {
    icon: <CalendarCheck className="w-6 h-6" />,
    title: "Calendar Management",
    description: "Strategic scheduling that protects your deep work blocks while ensuring you never miss a vital meeting."
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Content Creation",
    description: "Presentations, newsletters, and social media assets crafted to match your brand's unique voice and tone."
  },
  {
    icon: <MessageSquareText className="w-6 h-6" />,
    title: "Social Media Management",
    description: "Consistent posting, community engagement, and analytics tracking to grow your digital presence."
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Website Management",
    description: "Content updates, blog posting, and basic maintenance to keep your digital storefront polished."
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Research & Analysis",
    description: "Competitor analysis, lead generation, and market research synthesized into actionable insights."
  },
  {
    icon: <FileText className="w-6 h-6" />,
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
              className="bg-card p-8 border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
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
