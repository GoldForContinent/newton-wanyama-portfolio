import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const econSkills = [
  { name: "Financial Modeling & Analysis", pct: 85 },
  { name: "Econometrics & Time Series", pct: 88 },
  { name: "Quantitative Analysis", pct: 82 },
  { name: "Data Research & Interpretation", pct: 90 },
];

const tools = [
  { name: "Excel", size: "text-lg" },
  { name: "EViews", size: "text-base" },
  { name: "Stata", size: "text-base" },
  { name: "SPSS", size: "text-sm" },
  { name: "Power BI", size: "text-sm" },
  { name: "Python", size: "text-sm" },
];

const focus = [
  "Exchange Rate Dynamics",
  "Financial Statement Analysis",
  "Budget Frameworks & Forecasting",
  "Macroeconomic Indicators",
  "Risk Assessment & Compliance",
];

const SkillBar = ({ name, pct }: { name: string; pct: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-foreground">{name}</span>
        <span className="text-primary font-heading font-semibold">{pct}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-bar-fill" style={{ width: visible ? `${pct}%` : "0%" }} />
      </div>
    </div>
  );
};

const Skills = () => (
  <section id="methodology" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">Technical Skills</h2>
        <p className="text-muted-foreground">Core competencies and analytical toolkit</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6"
        >
          <h3 className="font-heading font-semibold mb-5">Core Competencies</h3>
          {econSkills.map(s => <SkillBar key={s.name} {...s} />)}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6"
        >
          <h3 className="font-heading font-semibold mb-5">Software & Tools</h3>
          <div className="flex flex-wrap gap-2">
            {tools.map(t => (
              <span
                key={t.name}
                className={`px-3 py-1.5 rounded-lg border border-border bg-accent/50 text-foreground font-medium hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default ${t.size}`}
              >
                {t.name}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6"
        >
          <h3 className="font-heading font-semibold mb-5">Areas of Focus</h3>
          <ul className="space-y-3">
            {focus.map(f => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Skills;
