import { motion } from "framer-motion";
import { Building2, GraduationCap } from "lucide-react";

const experiences = [
  {
    icon: Building2,
    date: "MAY – AUGUST 2025",
    company: "KABARAK SACCO",
    role: "Finance Department – Industrial Attachment",
    responsibilities: "Financial Records Management, Budget Support, Financial Data Analysis, Accounts Payable/Receivable, Bank Reconciliation, Financial Reporting, Member Lending Analysis.",
    achievements: "Applied econometric theory to real financial data, analyzed member lending patterns, gained hands-on experience with financial risk assessment, mastered accounting software quickly.",
  },
  {
    icon: GraduationCap,
    date: "2021 – 2025",
    company: "KABARAK UNIVERSITY",
    role: "BSc Economics & Finance Student",
    responsibilities: "Coursework in Econometrics, Macroeconomics, Financial Analysis, Time Series Analysis, Monetary Economics, Statistics, and Research Methodology.",
    achievements: "Recognized as Top 10 Economic Researcher by the Vice Chancellor, completed comprehensive research on exchange rate volatility and economic growth in Kenya, Second Class Honours.",
  },
];

const Experience = () => (
  <section id="experience" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">Experience</h2>
        <p className="text-muted-foreground">Professional journey and key milestones</p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        <div className="space-y-8">
          {experiences.map((exp, i) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-6 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10 -translate-x-1.5 md:-translate-x-1.5 top-6" />

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-10 md:ml-0 md:w-1/2 glass-card p-6 hover-lift">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Icon size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] text-primary font-heading font-semibold uppercase tracking-wider">{exp.date}</span>
                      <h3 className="font-heading font-semibold text-sm">{exp.company}</h3>
                    </div>
                  </div>
                  <p className="text-xs text-foreground font-medium mb-2">{exp.role}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    <span className="text-foreground font-medium">Key Responsibilities:</span> {exp.responsibilities}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-medium">Key Achievements:</span> {exp.achievements}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
