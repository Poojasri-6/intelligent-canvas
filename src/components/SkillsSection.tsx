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
      { name: "TensorFlow / Keras", level: 90 },
      { name: "Scikit-learn / PyTorch", level: 88 },
      { name: "XGBoost", level: 92 },
      { name: "NLP (BERT, spaCy, NLTK)", level: 85 },
      { name: "CNNs / Computer Vision", level: 82 },
    ],
  },
  {
    title: "LLM & Agents",
    icon: "🤖",
    skills: [
      { name: "Groq / OpenAI API", level: 92 },
      { name: "Claude / Gemini APIs", level: 88 },
      { name: "Prompt Engineering", level: 95 },
      { name: "n8n / Make Automation", level: 85 },
    ],
  },
  {
    title: "Web Development",
    icon: "🌐",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "Node.js / Express.js", level: 85 },
      { name: "Flask / REST APIs", level: 88 },
      { name: "HTML5 / CSS3", level: 95 },
    ],
  },
  {
    title: "Databases & Data",
    icon: "🗄️",
    skills: [
      { name: "MySQL / SQL", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "ETL Pipelines", level: 80 },
      { name: "Data Modeling", level: 85 },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "⚙️",
    skills: [
      { name: "Git / GitHub / CI/CD", level: 92 },
      { name: "Docker", level: 80 },
      { name: "Vercel / Cloudflare", level: 88 },
      { name: "Linux (Ubuntu) / Bash", level: 78 },
    ],
  },
  {
    title: "Programming",
    icon: "💻",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 88 },
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "C", level: 75 },
    ],
  },
  {
    title: "Core Concepts",
    icon: "📚",
    skills: [
      { name: "OOPS / DSA", level: 90 },
      { name: "Microservices / MVC", level: 85 },
      { name: "SDLC / Agile / Scrum", level: 88 },
      { name: "Cybersecurity Basics", level: 75 },
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
