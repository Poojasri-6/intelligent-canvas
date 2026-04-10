import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="section-padding particle-bg">
    <div className="container mx-auto">
      <SectionHeading title="Experience" subtitle="Professional journey in AI engineering" />

      <AnimatedSection>
        <div className="max-w-3xl mx-auto space-y-12">
          {/* AI Engineer Intern - Aram Analytics */}
          <div className="glass-card rounded-xl p-8 hover-glow relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/20" />
            <div className="pl-8 relative">
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full gradient-accent -translate-x-[7px]" />
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <Briefcase className="text-primary" size={18} />
                <h3 className="font-display text-xl font-bold text-foreground">AI Engineer Intern</h3>
              </div>
              <div className="flex items-center gap-2 text-primary mb-4">
                <span className="font-medium">Aram Analytics</span>
                <span className="text-muted-foreground">•</span>
                <Calendar size={14} className="text-muted-foreground" />
                <span className="text-muted-foreground text-sm">Oct 2025 – Present</span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 text-xs">▹</span>
                  Developed full-stack AI applications and REST APIs using Node.js, React.js, Next.js, and Groq API
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 text-xs">▹</span>
                  Built LLM-powered CMS with JWT security, AI summarization, NLQ search, and Knowledge Graph integration
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 text-xs">▹</span>
                  Managed full ML lifecycle from data collection to deployment via Cloudflare & Vercel using Docker + CI/CD
                </li>
              </ul>
            </div>
          </div>

          {/* Frontend Intern - Strinkit Technologies */}
          <div className="glass-card rounded-xl p-8 hover-glow relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/20" />
            <div className="pl-8 relative">
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full gradient-accent -translate-x-[7px] opacity-60" />
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <Briefcase className="text-primary/70" size={18} />
                <h3 className="font-display text-xl font-bold text-foreground">Frontend Intern</h3>
              </div>
              <div className="flex items-center gap-2 text-primary/70 mb-4">
                <span className="font-medium">Strinkit Technologies</span>
                <span className="text-muted-foreground">•</span>
                <Calendar size={14} className="text-muted-foreground" />
                <span className="text-muted-foreground text-sm">Jul 2025 – Sep 2025</span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary/70 mt-1.5 text-xs">▹</span>
                  Built responsive UI using HTML, CSS, and JavaScript for client-facing applications
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary/70 mt-1.5 text-xs">▹</span>
                  Developed reusable React components and managed application state using modern hooks
                </li>
              </ul>
            </div>
          </div>

          {/* AI/ML Intern - Skill Upgrade */}
          <div className="glass-card rounded-xl p-8 hover-glow relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/20" />
            <div className="pl-8 relative">
              <div className="absolute left-0 top-2 w-3 h-3 rounded-full gradient-accent -translate-x-[7px] opacity-40" />
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <Briefcase className="text-primary/50" size={18} />
                <h3 className="font-display text-xl font-bold text-foreground">AI/ML Intern</h3>
              </div>
              <div className="flex items-center gap-2 text-primary/50 mb-4">
                <span className="font-medium">Skill Upgrade</span>
                <span className="text-muted-foreground">•</span>
                <Calendar size={14} className="text-muted-foreground" />
                <span className="text-muted-foreground text-sm">1 Month</span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary/50 mt-1.5 text-xs">▹</span>
                  Gained hands-on experience with Supervised, Unsupervised, and Neural Network models
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary/50 mt-1.5 text-xs">▹</span>
                  Built end-to-end Machine Learning workflows using Python and Scikit-learn
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ExperienceSection;
