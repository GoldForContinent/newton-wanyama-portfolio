import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Download, TrendingUp } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const fullData = [
  { year: "2002", exchangeRate: 78.2, gdp: 2.1, inflation: 9.8, interestRate: 18.5 },
  { year: "2004", exchangeRate: 79.1, gdp: 3.4, inflation: 11.6, interestRate: 12.5 },
  { year: "2006", exchangeRate: 82.4, gdp: 4.2, inflation: 6.0, interestRate: 13.0 },
  { year: "2008", exchangeRate: 89.7, gdp: 1.8, inflation: 15.1, interestRate: 14.0 },
  { year: "2010", exchangeRate: 92.3, gdp: 5.6, inflation: 4.1, interestRate: 14.4 },
  { year: "2012", exchangeRate: 95.8, gdp: 4.8, inflation: 9.4, interestRate: 19.7 },
  { year: "2014", exchangeRate: 98.2, gdp: 5.2, inflation: 6.9, interestRate: 16.0 },
  { year: "2016", exchangeRate: 101.4, gdp: 5.8, inflation: 6.3, interestRate: 16.5 },
  { year: "2018", exchangeRate: 108.6, gdp: 6.2, inflation: 4.7, interestRate: 13.0 },
  { year: "2020", exchangeRate: 115.2, gdp: -0.3, inflation: 5.4, interestRate: 11.5 },
  { year: "2022", exchangeRate: 132.4, gdp: 4.9, inflation: 7.6, interestRate: 12.5 },
  { year: "2024", exchangeRate: 145.2, gdp: 5.4, inflation: 6.2, interestRate: 13.0 },
];

const seriesConfig = [
  { key: "exchangeRate", label: "Exchange Rate", color: "hsl(38, 92%, 50%)" },
  { key: "gdp", label: "GDP Growth %", color: "hsl(160, 60%, 50%)" },
  { key: "inflation", label: "Inflation %", color: "hsl(350, 70%, 55%)" },
  { key: "interestRate", label: "Interest Rate %", color: "hsl(220, 70%, 60%)" },
];

const Research = () => {
  const [activeSeries, setActiveSeries] = useState<Set<string>>(new Set(["exchangeRate", "gdp"]));

  const toggle = (key: string) => {
    const next = new Set(activeSeries);
    if (next.has(key)) { if (next.size > 1) next.delete(key); }
    else next.add(key);
    setActiveSeries(next);
  };

  return (
    <section id="research" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-medium mb-4">
            <TrendingUp size={14} />
            Featured Research
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
            Exchange Rate Volatility & Economic Growth
          </h2>
          <p className="text-muted-foreground">Kenya (2002–2024) · 22-Year Longitudinal Study</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-6"
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {seriesConfig.map(s => (
                <button
                  key={s.key}
                  onClick={() => toggle(s.key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                    activeSeries.has(s.key)
                      ? "border-primary/40 bg-primary/10 text-foreground"
                      : "border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className="inline-block w-2 h-2 rounded-full mr-1.5" style={{ backgroundColor: s.color }} />
                  {s.label}
                </button>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={fullData} margin={{ top: 5, right: 5, bottom: 0, left: -15 }}>
                <XAxis dataKey="year" tick={{ fontSize: 11, fill: "hsl(215 15% 55%)" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(215 15% 55%)" }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(216 45% 14%)",
                    border: "1px solid hsl(215 25% 28%)",
                    borderRadius: "8px",
                    fontSize: "12px",
                  }}
                />
                {seriesConfig.filter(s => activeSeries.has(s.key)).map(s => (
                  <Line
                    key={s.key}
                    type="monotone"
                    dataKey={s.key}
                    stroke={s.color}
                    strokeWidth={2}
                    dot={{ r: 3, fill: s.color }}
                    activeDot={{ r: 5 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-5 glow-border">
              <div className="flex items-center gap-3 mb-3">
                <Award className="text-primary" size={20} />
                <span className="text-sm font-heading font-semibold text-primary">Vice Chancellor's Recognition</span>
              </div>
              <p className="text-xs text-muted-foreground">Top 10 Economic Researcher 2024 · Kabarak University</p>
            </div>

            <div className="glass-card p-5">
              <h4 className="font-heading font-semibold text-sm mb-3">Research Abstract</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                This study investigates the dynamic relationship between exchange rate volatility and real GDP growth in Kenya over a 22-year period. Using Vector Error Correction Models (VECM) and Granger Causality tests, the research identifies interest rates as the primary transmission channel.
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 mt-1.5 rounded-full bg-primary shrink-0" />
                  Exchange rate volatility explains 34% of GDP variation
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 mt-1.5 rounded-full bg-primary shrink-0" />
                  Interest rates account for 42% of the transmission effect
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1 h-1 mt-1.5 rounded-full bg-primary shrink-0" />
                  COVID-19 period showed structural breaks in all models
                </li>
              </ul>
            </div>

            <button className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:brightness-110 transition-all">
              <Download size={16} />
              Download Abstract
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Research;
