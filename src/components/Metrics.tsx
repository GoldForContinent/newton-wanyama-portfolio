import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Trophy, BarChart3 } from "lucide-react";

const metrics = [
  { icon: Calendar, value: 22, suffix: " Years", label: "of Data Analyzed (2002–2024)" },
  { icon: Clock, value: 8, suffix: " Months", label: "Intensive Research" },
  { icon: Trophy, value: 10, prefix: "Top ", label: "Economic Researcher (Kabarak)" },
  { icon: BarChart3, value: 4, label: "Macroeconomic Indicators" },
];

function useCountUp(target: number, inView: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 1500;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);
  return count;
}

const MetricCard = ({ metric, index }: { metric: typeof metrics[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(metric.value, inView);
  const Icon = metric.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="glass-card p-6 hover-lift text-center"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
        <Icon size={22} />
      </div>
      <div className="text-3xl font-heading font-bold text-foreground mb-1">
        {metric.prefix}{count}{metric.suffix}
      </div>
      <p className="text-sm text-muted-foreground">{metric.label}</p>
    </motion.div>
  );
};

const Metrics = () => (
  <section className="py-20 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((m, i) => (
          <MetricCard key={i} metric={m} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Metrics;
