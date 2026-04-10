import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Mail, Linkedin, Send, MapPin } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:srimpooja@gmail.com?subject=Contact from ${form.name}&body=${form.message}`;
  };

  return (
    <section id="contact" className="section-padding particle-bg">
      <div className="container mx-auto">
        <SectionHeading title="Get In Touch" subtitle="Let's build intelligent systems together" />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in discussing new AI projects, innovative ideas, 
                or opportunities to collaborate on building intelligent systems. Feel free to reach out!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:srimpooja@gmail.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={18} className="text-primary" />
                  </div>
                  srimpooja@gmail.com
                </a>

                <a
                  href="https://linkedin.com/in/pooja-mani-aa540b255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Linkedin size={18} className="text-primary" />
                  </div>
                  LinkedIn Profile
                </a>

                <a
                  href="https://github.com/Poojasri-6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-primary" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.562 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </div>
                  GitHub Profile
                </a>

                <div className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  Rajapalayam, Tamil Nadu
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <form onSubmit={handleSubmit} className="glass-card rounded-xl p-6 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
                required
              />
              <textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                required
              />
              <button
                type="submit"
                className="w-full gradient-accent text-primary-foreground py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
