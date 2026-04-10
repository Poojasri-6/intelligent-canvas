import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  "Deloitte Data Analytics Simulation",
  "AI Fundamentals — Great Learning",
  "Cloud Foundations — Great Learning",
  "Cybersecurity — Great Learning",
  "Infosys Springboard (Network, Testing)",
  "UI/UX Design — Coursera",
  "NPTEL (Python, OOPS, Java Patterns)",
];

const EducationSection = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading title="Education & Certifications" />

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="glass-card rounded-xl p-8 hover-glow h-full">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-primary" size={24} />
              <h3 className="font-display text-xl font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-foreground">B.E. Computer Science & Engineering</h4>
                <p className="text-primary text-sm font-medium">Ramco Institute of Technology</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-muted-foreground text-xs">2022 – 2026</span>
                  <span className="text-muted-foreground text-xs">•</span>
                  <span className="text-primary font-bold text-lg">8.44</span>
                  <span className="text-muted-foreground text-xs">CGPA</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                <div>
                  <p className="text-foreground text-sm font-semibold">HSC (12th)</p>
                  <p className="text-primary font-bold text-lg">85.6%</p>
                </div>
                <div>
                  <p className="text-foreground text-sm font-semibold">SSLC (10th)</p>
                  <p className="text-primary font-bold text-lg">80.4%</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="glass-card rounded-xl p-8 hover-glow h-full">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary" size={24} />
              <h3 className="font-display text-xl font-bold text-foreground">Certifications</h3>
            </div>
            <ul className="grid gap-2">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <span className="w-1.5 h-1.5 rounded-full gradient-accent flex-shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default EducationSection;
