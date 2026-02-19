import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "Newton's research on exchange rate dynamics (2002–2024) demonstrated exceptional analytical maturity. His ability to connect econometric theory with Kenya's real economic story placed him among our top students.",
    name: "Dr. Jane Mwangi",
    role: "Head of Economics, Kabarak University",
  },
  {
    quote: "During his attachment, Newton brought fresh analytical perspective. He applied time series methods to our member data that even some experienced analysts hadn't considered.",
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
