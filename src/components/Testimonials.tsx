import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Newton consistently demonstrates exceptional analytical abilities and a deep understanding of complex economic concepts. His research on exchange rate dynamics showed remarkable sophistication for an undergraduate student. He has the rare combination of technical prowess and analytical thinking that will serve him well in any finance role.",
    name: "Dr. Jane Mwangi",
    role: "Head of Economics, Kabarak University",
  },
  {
    quote: "During his attachment, Newton brought a fresh analytical perspective. His ability to apply econometric methods to real financial data impressed our team. He demonstrated intellectual curiosity, professional maturity, and a genuine passion for finance that is truly refreshing.",
    name: "Peter Kipchumba",
    role: "Finance Manager, Kabarak SACCO",
  },
];

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((idx - 1 + testimonials.length) % testimonials.length);
  const next = () => setIdx((idx + 1) % testimonials.length);

  return (
    <section className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">Testimonials</h2>
          <p className="text-muted-foreground">What professors and industry professionals say</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-10 text-center relative"
        >
          <Quote className="mx-auto text-primary/30 mb-6" size={36} />

          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonials[idx].quote}"
              </p>
              <p className="font-heading font-semibold text-sm">{testimonials[idx].name}</p>
              <p className="text-xs text-muted-foreground">{testimonials[idx].role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-lg border border-border hover:border-primary/40 hover:bg-accent transition-all text-muted-foreground hover:text-foreground">
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === idx ? "bg-primary w-6" : "bg-muted-foreground/30"}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-lg border border-border hover:border-primary/40 hover:bg-accent transition-all text-muted-foreground hover:text-foreground">
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
