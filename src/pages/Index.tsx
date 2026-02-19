import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Research from "@/components/Research";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <Hero />
    <Metrics />
    <Research />
    <Journey />
    <Skills />
    <Insights />
    <Testimonials />
    <Contact />
    <Footer />
  </div>
);

export default Index;
