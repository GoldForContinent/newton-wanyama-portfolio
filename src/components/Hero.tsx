import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { useTypedText } from "@/hooks/useTypedText";
import MiniChart from "./MiniChart";

const typedStrings = [
  "Econometrician",
  "Macroeconomic Analyst",
  "Time Series Specialist",
  "Born 2002",
  "Top 10 Researcher",
];

const timelineEvents = [
  { year: "2002", label: "Born" },
  { year: "2008", label: "Primary School" },
  { year: "2016", label: "Secondary" },
  { year: "2021", label: "Kabarak University" },
  { year: "2024", label: "Top Research Award" },
];

const Hero = () => {
  const typed = useTypedText(typedStrings);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: Math.random() * 4 + 2 + "px",
            height: Math.random() * 4 + 2 + "px",
            left: Math.random() * 100 + "%",
            bottom: "-10px",
            animationDuration: Math.random() * 15 + 10 + "s",
            animationDelay: Math.random() * 10 + "s",
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-subtle" />
              Available for opportunities
            </motion.div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] mb-4">
              Newton
              <br />
              <span className="text-gradient">Wanyama</span>
            </h1>

            <div className="h-8 mb-6">
              <span className="text-lg sm:text-xl text-muted-foreground font-heading">
                {typed}
              </span>
              <span className="typing-cursor" />
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-lg mb-8">
              A fresh economic mind analyzing the Kenya I grew up in (2002–2024). 
              My research examines exchange rate fluctuations that shaped my generation's economic reality.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#research"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:brightness-110 transition-all duration-300"
              >
                Explore Research
                <ArrowDown size={16} />
              </a>
              <a
                href="#connect"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-accent transition-all duration-300"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right - mini chart */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="glass-card p-6">
              <h3 className="text-sm font-heading font-medium text-muted-foreground mb-1">KES/USD Exchange Rate</h3>
              <p className="text-xs text-muted-foreground/70 mb-4">2002 – 2024 · Newton's Lifetime</p>
              <MiniChart />
            </div>
          </motion.div>
        </div>

        {/* Timeline strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 lg:mt-24"
        >
          <div className="relative">
            <div className="absolute top-3 left-0 right-0 h-px bg-border" />
            <div className="flex justify-between overflow-x-auto pb-2">
              {timelineEvents.map((evt, i) => (
                <div key={i} className="flex flex-col items-center min-w-[100px]">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary border-2 border-background z-10 mb-2" />
                  <span className="text-xs font-heading font-semibold text-primary">{evt.year}</span>
                  <span className="text-[10px] text-muted-foreground text-center">{evt.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
