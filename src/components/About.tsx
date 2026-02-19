import { motion } from "framer-motion";

const skills = [
  { title: "Financial Modeling", desc: "Financial statement analysis, budgeting frameworks, and economic forecasting using Excel and analytical tools" },
  { title: "Quantitative Analysis", desc: "Statistical analysis, data interpretation, economic research methodologies, and trend analysis for decision-making" },
  { title: "Data Research & Analytics", desc: "Web research, data annotation, quality assurance, and business intelligence with attention to accuracy standards" },
  { title: "Market Research", desc: "Company analysis, industry trends evaluation, and competitive landscape assessment" },
  { title: "Business Intelligence", desc: "Data-driven insights, workflow optimization, and performance metrics analysis using modern tools" },
  { title: "Risk Assessment", desc: "Data quality control, compliance verification, and accuracy validation in financial contexts" },
];

const About = () => (
  <section id="about" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* About text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-5"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">About Me</h2>

          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">Numbers tell stories; and I help organizations understand theirs.</span> I'm Newton Wanyama, a finance professional with a strong foundation in economics and quantitative analysis. With a Bachelor's degree in Economics and Finance from Kabarak University, I combine analytical rigor with a genuine passion for understanding Kenya's economic landscape.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">My Journey:</span> My path to finance was built on developing the ability to see patterns, solve problems, and create value. At Kabarak University, I built a strong theoretical foundation in econometrics, macroeconomic modeling, and financial analysis. My industrial attachment at Kabarak SACCO allowed me to apply these skills to real financial data.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            <span className="text-foreground font-medium">What I Believe:</span> I believe finance is more than a support function; it's a strategic partner. I believe technology should enhance, not replace, human insight. And I believe continuous improvement isn't a destination; it's a mindset.
          </p>

          <p className="text-primary font-medium text-sm mt-6">
            Finance is my profession. Problem-solving is my passion. Excellence is my standard.
          </p>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {skills.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-4"
              >
                <h4 className="font-heading font-semibold text-sm mb-1">{s.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lanyard card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-end"
        >
          <div className="glass-card glow-border p-6 text-center w-full max-w-[280px]">
            <div className="text-xs text-primary font-heading font-semibold uppercase tracking-wider mb-1">Kabarak University Graduate</div>
            <p className="text-[10px] text-muted-foreground mb-4">School of Business & Economics</p>
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 mx-auto mb-4">
              <img
                src="/newtonhero.png"
                alt="Newton Wanyama"
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-heading font-semibold">Newton Wanyama</h4>
            <p className="text-xs text-muted-foreground">Economics & Finance</p>
            <p className="text-xs text-muted-foreground">Class of 2025</p>
            <p className="text-xs text-primary font-semibold mt-3">SECOND CLASS HONOURS</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
