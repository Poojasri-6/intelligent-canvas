import { useRef, useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

interface Skill {
  name: string;
  level: number;
}

interface Category {
  title: string;
  icon: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: "AI / Machine Learning",
    icon: "🧠",
    skills: [
      { name: "TensorFlow", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "XGBoost", level: 88 },
      { name: "NLP", level: 85 },
      { name: "Computer Vision", level: 80 },
    ],
  },
  {
    title: "LLM & Agents",
    icon: "🤖",
    skills: [
      { name: "Groq API", level: 90 },
      { name: "OpenAI API", level: 88 },
      { name: "Prompt Engineering", level: 92 },
      { name: "Agentic Workflows", level: 85 },
      { name: "n8n / Make", level: 82 },
    ],
  },
  {
    title: "Web Stack",
    icon: "🌐",
    skills: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 82 },
      { name: "Flask", level: 85 },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "⚙️",
    skills: [
      { name: "Docker", level: 78 },
      { name: "Git", level: 90 },
      { name: "Cloudflare", level: 80 },
      { name: "Vercel", level: 85 },
    ],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Programming",
    icon: "💻",
    skills: [
      { name: "Python", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 78 },
      { name: "C", level: 75 },
    ],
  },
];

const SkillBar = ({ name, level }: Skill) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-foreground">{name}</span>
        <span className="text-primary">{level}%</span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full gradient-accent rounded-full transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${level}%` : "0%",
          }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading title="Skills & Expertise" subtitle="Technologies and tools I work with to build intelligent systems" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <AnimatedSection key={cat.title} delay={i * 0.1}>
            <div className="glass-card rounded-xl p-6 hover-glow h-full">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-display font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
