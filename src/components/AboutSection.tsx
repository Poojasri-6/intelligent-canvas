import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Brain, Cpu, Code, Zap } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI/ML Engineering" },
  { icon: Cpu, label: "LLM & Agentic Systems" },
  { icon: Code, label: "End-to-End Development" },
  { icon: Zap, label: "Business Impact Focus" },
];

const AboutSection = () => (
  <section id="about" className="section-padding particle-bg">
    <div className="container mx-auto">
      <SectionHeading title="About Me" subtitle="Crafting intelligent solutions at the intersection of AI and engineering" />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              I'm an AI Engineer passionate about building intelligent systems that deliver measurable business impact. 
              With expertise spanning machine learning, deep learning, and large language models, I architect 
              end-to-end solutions — from raw data pipelines to production-ready deployments.
            </p>
            <p>
              My focus lies in developing LLM-powered applications and agentic AI workflows that automate 
              complex processes, enhance decision-making, and create scalable digital ecosystems. I combine 
              strong full-stack development skills with cutting-edge AI research to bridge the gap between 
              innovation and real-world implementation.
            </p>
            <p>
              Whether it's building content intelligence platforms, predictive analytics systems, or 
              AI-driven automation pipelines, I bring a systems-thinking approach that ensures reliability, 
              scalability, and impact at every layer of the stack.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="glass-card rounded-xl p-6 hover-glow text-center group"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium text-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
