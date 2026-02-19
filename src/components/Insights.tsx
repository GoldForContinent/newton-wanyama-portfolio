import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, BarChart3 } from "lucide-react";

const eras = [
  {
    icon: AlertTriangle,
    period: "2002–2010",
    title: "High Volatility Era",
    stat: "±8.4%",
    statLabel: "avg annual volatility",
    context: "Political uncertainty, post-election violence, and constitutional transition drove significant exchange rate swings that rippled through Kenya's young economy.",
  },
  {
    icon: TrendingUp,
    period: "2010–2019",
    title: "Stabilization & Growth",
    stat: "5.2%",
    statLabel: "avg GDP growth",
    context: "Post-constitution stability ushered in a decade of consistent growth, improved monetary policy, and strengthened institutional frameworks.",
  },
  {
    icon: BarChart3,
    period: "2020–2024",
    title: "COVID Disruption & Recovery",
    stat: "KES 145.2",
    statLabel: "KES/USD (2024)",
    context: "Pandemic disruption created structural breaks in established models. New patterns of depreciation emerged alongside fiscal pressure and global supply chain realignment.",
  },
];

const Insights = () => (
  <section id="insights" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">Research Insights</h2>
        <p className="text-muted-foreground">Three eras of Kenya's economic landscape</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {eras.map((era, i) => {
          const Icon = era.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 hover-lift"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Icon size={20} />
                </div>
                <span className="text-xs text-primary font-heading font-semibold">{era.period}</span>
              </div>
              <h3 className="font-heading font-semibold mb-2">{era.title}</h3>
              <div className="mb-3">
                <span className="text-2xl font-heading font-bold text-gradient">{era.stat}</span>
                <span className="text-xs text-muted-foreground ml-2">{era.statLabel}</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{era.context}</p>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass-card glow-border p-6 text-center"
      >
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          <span className="text-foreground font-medium">"Exchange rate volatility explains 34% of GDP variation (2002–2024),</span>{" "}
          with interest rates as the primary transmission channel accounting for 42% of the total effect."
        </p>
      </motion.div>
    </div>
  </section>
);

export default Insights;
