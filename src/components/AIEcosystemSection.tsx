import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Bot, Workflow, FileText, BarChart3 } from "lucide-react";

const ecosystems = [
  {
    icon: Workflow,
    title: "LLM Workflows",
    desc: "End-to-end pipelines connecting LLMs with data sources, APIs, and business logic for intelligent automation.",
  },
  {
    icon: Bot,
    title: "Agent-Based Systems",
    desc: "Autonomous AI agents that reason, plan, and execute complex multi-step tasks with minimal human intervention.",
  },
  {
    icon: FileText,
    title: "Content Automation",
    desc: "AI-powered content generation, curation, and management systems integrated with multi-CMS platforms.",
  },
  {
    icon: BarChart3,
    title: "Intelligent Dashboards",
    desc: "Real-time analytics dashboards with AI-driven insights, anomaly detection, and predictive capabilities.",
  },
];

const AIEcosystemSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <SectionHeading title="AI + Automation Ecosystems I Build" subtitle="Designing intelligent systems that transform how businesses operate" />

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {ecosystems.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <div className="glass-card rounded-xl p-8 hover-glow group">
              <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AIEcosystemSection;
