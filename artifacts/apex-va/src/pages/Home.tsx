import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { WhoWeWorkWith } from "@/components/sections/WhoWeWorkWith";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { MissionVision } from "@/components/sections/MissionVision";
import { MidCTA } from "@/components/sections/MidCTA";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />

      <main>
        <Hero />
        <WhoWeWorkWith />
        <HowItWorks />
        <Services />
        <MissionVision />
        <MidCTA />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
