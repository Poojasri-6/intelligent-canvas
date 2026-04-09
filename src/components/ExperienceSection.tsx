import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="section-padding particle-bg">
    <div className="container mx-auto">
      <SectionHeading title="Experience" subtitle="Professional journey in AI engineering" />

      <AnimatedSection>
        <div className="max-w-3xl mx-auto">
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
                <span className="text-muted-foreground text-sm">2024 – Present</span>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 text-xs">▹</span>
                  Developed end-to-end AI systems including data pipelines, model training, and production deployment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 text-xs">▹</span>
                  Built LLM-based CMS platforms with intelligent content management and AI-powered search
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 text-xs">▹</span>
                  Designed and implemented automation workflows using n8n & Make for business process optimization
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 text-xs">▹</span>
                  Created analytics dashboards and data pipelines for real-time business intelligence
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
