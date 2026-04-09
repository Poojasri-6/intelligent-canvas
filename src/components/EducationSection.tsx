import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Award } from "lucide-react";

const certifications = [
  "Deloitte — Data Analytics",
  "AI Fundamentals Certification",
  "Cloud Foundations",
  "Infosys — Technology Certifications",
  "NPTEL — Advanced Coursework",
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
            <div>
              <h4 className="font-semibold text-foreground">B.E. Computer Science</h4>
              <p className="text-muted-foreground text-sm mt-1">2022 – 2026</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-primary font-display font-bold text-2xl">8.31</span>
                <span className="text-muted-foreground text-sm">CGPA</span>
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
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <span className="w-2 h-2 rounded-full gradient-accent flex-shrink-0" />
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
