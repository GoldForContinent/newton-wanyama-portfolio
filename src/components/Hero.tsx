import { motion } from "framer-motion";
import { ArrowDown, Download, ImagePlus } from "lucide-react";
import { useTypedText } from "@/hooks/useTypedText";
import { useState } from "react";

const typedStrings = [
  "Economics & Finance Graduate",
  "Kabarak University Alumni",
  "Quantitative Analyst",
  "Finance Professional",
];

const Hero = () => {
  const typed = useTypedText(typedStrings);
  const [heroImage, setHeroImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setHeroImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

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
              Economics and Finance graduate from Kabarak University with a passion for quantitative analysis, 
              financial modeling, and economic research. Ready to add value from day one.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#research"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:brightness-110 transition-all duration-300"
              >
                View Portfolio
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

            <div className="flex items-center gap-6 mt-8">
              <div className="text-center">
                <span className="text-2xl font-heading font-bold text-foreground">4+</span>
                <p className="text-[10px] text-muted-foreground">Years of Study</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <span className="text-2xl font-heading font-bold text-foreground">1</span>
                <p className="text-[10px] text-muted-foreground">Research Project</p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <span className="text-2xl font-heading font-bold text-foreground">Top 10</span>
                <p className="text-[10px] text-muted-foreground">Researcher</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {heroImage ? (
                <div className="w-[380px] h-[460px] rounded-2xl overflow-hidden border-2 border-primary/20 shadow-[0_0_40px_hsl(38_92%_50%/0.1)]">
                  <img
                    src={heroImage}
                    alt="Newton Wanyama"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <label className="w-[380px] h-[460px] rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 flex flex-col items-center justify-center cursor-pointer hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                  <ImagePlus size={48} className="text-primary/40 mb-4" />
                  <span className="text-sm text-muted-foreground font-medium">Click to upload photo</span>
                  <span className="text-xs text-muted-foreground/60 mt-1">Newton's profile image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/10 rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
