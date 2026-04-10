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
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I am an AI & ML Engineer and Full Stack Developer with 10 months of hands-on internship experience spanning AI/ML engineering, full-stack web development, and cloud deployment. 
              My journey is driven by the challenge of building scalable, production-ready AI systems that solve complex real-world problems. 
              I bridge the gap between architectural research and practical software engineering, delivering products that are both innovative and efficient.
            </p>
            <p>
              Currently, I specialize in Generative AI, LLM orchestration, and automated data pipelines. 
              I have a proven track record of delivering enterprise-grade systems, achieving up to <strong>87% ML model accuracy</strong> 
              and a <strong>70% reduction in manual data analysis effort</strong> for client projects. 
              My expertise includes working with modern frameworks like React.js, Node.js, and Next.js, along with a suite of LLM APIs including Groq, OpenAI, Claude, and Gemini.
            </p>
            <p>
              I believe that the true power of technology lies in its ability to augment human potential. 
              Whether it's building LLM-powered CMS platforms with NLQ search or developing hybrid ML systems 
              for predictive analytics, I am committed to delivering value that is measurable and transformative. 
              I thrive in the intersection of AI Engineering, System Design, and Business Automation.
            </p>
            <p>
              When I'm not building intelligent systems, you can find me solving problems on CodeChef (300+ problems), 
              playing squash at a state level, or exploring the latest in cloud-native technologies and agentic workflows.
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
