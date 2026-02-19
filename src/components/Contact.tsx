import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, Download, Send, Phone, MessageCircle, Check, X } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", type: "", message: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = encodeURIComponent(`New Contact: ${formData.type}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.type}\n\nMessage:\n${formData.message}`);
    
    // Open email client
    window.location.href = `mailto:newtonnyongesa05@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success popup
    setShowSuccess(true);
    
    // Reset form
    setFormData({ name: "", email: "", type: "", message: "" });
    
    // Hide popup after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <section id="connect" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-2">Let's Connect</h2>
          <p className="text-muted-foreground">Available for opportunities · Ready to add value from day one</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <a href="mailto:newtonnyongesa05@gmail.com" className="glass-card p-5 flex items-center gap-4 hover-lift block">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-xs text-muted-foreground">newtonnyongesa05@gmail.com</p>
              </div>
            </a>

            <a href="https://wa.me/254716261793" target="_blank" rel="noopener noreferrer" className="glass-card p-5 flex items-center gap-4 hover-lift block">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                <MessageCircle size={18} />
              </div>
              <div>
                <p className="text-sm font-medium">WhatsApp</p>
                <p className="text-xs text-muted-foreground">+254 716 261793</p>
              </div>
            </a>

            <a href="tel:+254716261793" className="glass-card p-5 flex items-center gap-4 hover-lift block">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-sm font-medium">Phone Call</p>
                <p className="text-xs text-muted-foreground">+254 716 261793</p>
              </div>
            </a>

            <a href="#" className="glass-card p-5 flex items-center gap-4 hover-lift block">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Linkedin size={18} />
              </div>
              <div>
                <p className="text-sm font-medium">LinkedIn</p>
                <p className="text-xs text-muted-foreground">/in/newtonwanyama</p>
              </div>
            </a>

            <button className="glass-card p-5 flex items-center gap-4 hover-lift w-full text-left">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <Download size={18} />
              </div>
              <div>
                <p className="text-sm font-medium">Download CV</p>
                <p className="text-xs text-muted-foreground">Newton Wanyama Resume (PDF)</p>
              </div>
            </button>

            <div className="glass-card p-5">
              <p className="text-xs text-muted-foreground">
                Kabarak University Graduate · Economics & Finance · Class of 2025 · Second Class Honours
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card p-6 space-y-4"
          >
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-accent border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-accent border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Inquiry Type</label>
              <select
                required
                value={formData.type}
                onChange={e => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-accent border border-border text-foreground text-sm focus:outline-none focus:border-primary/50 transition-colors"
              >
                <option value="">Select type</option>
                <option value="employment">Employment Opportunity</option>
                <option value="internship">Internship</option>
                <option value="collaboration">Collaboration</option>
                <option value="academic">Academic Discussion</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg bg-accent border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:brightness-110 transition-all"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-background border border-border rounded-lg p-6 max-w-sm w-full shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                    <Check className="text-green-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Message Received!</h3>
                    <p className="text-sm text-muted-foreground">I'll get back to you soon</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowSuccess(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  Your message has been sent to Newton Wanyama
                </p>
                <p className="text-xs text-primary font-medium mt-1">
                  newtonnyongesa05@gmail.com
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
