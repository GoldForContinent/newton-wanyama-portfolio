import { motion } from "framer-motion";
import { School, TrendingUp, GraduationCap, Building2, Trophy } from "lucide-react";

const cards = [
  {
    icon: School,
    period: "2008–2015",
    title: "Nzoia Sugar Primary",
    detail: "Born near Kenya's sugar belt, watched agricultural economics unfold in real time. Early exposure to commodity markets shaped future research interests.",
  },
  {
    icon: TrendingUp,
    period: "2016–2019",
    title: "Mabuusi Secondary",
    detail: "Discovered a passion for mathematics and economics. Built strong analytical foundations that would later drive econometric research.",
  },
  {
    icon: GraduationCap,
    period: "2021–2025",
    title: "Kabarak University",
    detail: "BSc Economics & Finance, Second Class Honours. Specialized in econometrics, time series analysis, and macroeconomic modelling.",
  },
  {
    icon: Building2,
    period: "2025",
    title: "Kabarak SACCO Attachment",
    detail: "Applied econometric theory to real financial data. Gained hands-on experience with member lending patterns and financial risk assessment.",
  },
];

const highlight = {
  icon: Trophy,
  period: "2024",
  title: "Top 10 Economic Researcher",
  detail: "Vice Chancellor's Recognition for outstanding research on exchange rate volatility and economic growth in Kenya (2002–2024).",
};

const Journey = () => (
  <section id="journey" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">Educational Journey</h2>
        <p className="text-muted-foreground">From Kenya's sugar belt to university research excellence</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 hover-lift"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Icon size={20} />
              </div>
              <span className="text-xs text-primary font-heading font-semibold">{c.period}</span>
              <h3 className="font-heading font-semibold mt-1 mb-2 text-sm">{c.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{c.detail}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Highlight card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card glow-border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center text-primary shrink-0">
          <Trophy size={24} />
        </div>
        <div>
          <span className="text-xs text-primary font-heading font-semibold">{highlight.period}</span>
          <h3 className="font-heading font-semibold mt-0.5 mb-1">{highlight.title}</h3>
          <p className="text-sm text-muted-foreground">{highlight.detail}</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Journey;
