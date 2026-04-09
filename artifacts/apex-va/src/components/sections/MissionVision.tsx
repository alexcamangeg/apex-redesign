import { motion } from "framer-motion";

export function MissionVision() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Who We Are</h2>
          <p className="text-lg text-muted-foreground">
            We build systems that solve inconsistent lead flow and operational inefficiencies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-card border border-border p-10"
          >
            <div className="text-primary text-sm font-medium uppercase tracking-wider mb-6 flex items-center gap-3">
              <div className="w-8 h-px bg-primary" />
              Our Mission
            </div>
            <p className="text-foreground text-xl leading-relaxed font-serif">
              Our mission is to help businesses generate more opportunities, operate more efficiently, and scale with confidence by combining strategic outbound systems, optimized websites, and performance-driven support teams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="bg-primary p-10"
          >
            <div className="text-primary-foreground text-sm font-medium uppercase tracking-wider mb-6 flex items-center gap-3">
              <div className="w-8 h-px bg-primary-foreground" />
              Our Vision
            </div>
            <p className="text-primary-foreground text-xl leading-relaxed font-serif">
              We build systems that give businesses control over their growth. Apex Agency exists to eliminate inconsistency in lead generation, operations, and execution by providing scalable solutions powered by skilled virtual assistants and high-converting digital infrastructure.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-12 max-w-5xl mx-auto text-center"
        >
          <p className="text-2xl md:text-3xl font-serif text-muted-foreground italic">
            Built for performance.{" "}
            <span className="text-foreground">Focused on results.</span>{" "}
            Designed to scale.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
