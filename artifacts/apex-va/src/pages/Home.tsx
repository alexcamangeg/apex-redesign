import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { MidCTA } from "@/components/sections/MidCTA";
import { Contact } from "@/components/sections/Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Simple Logo Cloud / Social Proof Section */}
        <section className="py-12 border-y border-border bg-card">
          <div className="container mx-auto px-6 md:px-12 text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">Trusted by visionary founders at</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="font-serif text-2xl font-bold">Acme Corp</span>
              <span className="font-serif text-2xl font-bold">Globex</span>
              <span className="font-serif text-2xl font-bold">Soylent</span>
              <span className="font-serif text-2xl font-bold">Initech</span>
              <span className="font-serif text-2xl font-bold hidden md:inline-block">Umbrella</span>
            </div>
          </div>
        </section>

        <Services />

        {/* About / Lifestyle section */}
        <section id="about" className="py-24 md:py-32 bg-background">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-secondary/20 translate-x-4 translate-y-4 rounded-sm" />
                <img
                  src="/images/lifestyle.png"
                  alt="Relaxed entrepreneur enjoying coffee"
                  className="relative z-10 w-full h-auto object-cover rounded-sm shadow-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Our Philosophy</h2>
                <h3 className="text-4xl md:text-5xl font-serif text-foreground mb-6">We believe your time is your most valuable asset.</h3>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    Apex was founded on a simple premise: brilliant minds shouldn't be bogged down by administrative friction. We partner with leaders who want to stay in their zone of genius.
                  </p>
                  <p>
                    Our virtual assistants aren't just order-takers. They are proactive problem solvers, meticulously vetted and trained to anticipate your needs before you even articulate them.
                  </p>
                </div>
                
                <div className="mt-10 grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-serif text-primary mb-2">98%</div>
                    <div className="text-sm text-foreground font-medium">Client Retention Rate</div>
                  </div>
                  <div>
                    <div className="text-4xl font-serif text-primary mb-2">15+</div>
                    <div className="text-sm text-foreground font-medium">Hours saved weekly per client</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <MidCTA />
        
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
