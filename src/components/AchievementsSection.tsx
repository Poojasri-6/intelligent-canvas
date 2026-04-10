import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { Trophy, Code2, Users, Star } from "lucide-react";

const items = [
  {
    icon: Code2,
    title: "Competitive Programming",
    details: [
      "HackerRank: Java Gold, Python Silver",
      "CodeChef: 300+ problems solved",
      "LeetCode: 20+ problems (Active)",
    ],
  },
  {
    icon: Trophy,
    title: "Sports & Competitions",
    details: [
      "State-level Squash Player",
      "Hackathon Participant (Cybersecurity CTF)",
    ],
  },
  {
    icon: Users,
    title: "Leadership & Community",
    details: [
      "Class Representative",
      "Event Anchor & Speaker",
      "Rotary Member",
    ],
  },
];

const AchievementsSection = () => (
  <section id="achievements" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading title="Achievements & Activities" subtitle="Recognition and extracurricular contributions" />

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <div className="glass-card rounded-xl p-6 hover-glow h-full">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-4">{item.title}</h3>
              <ul className="space-y-3">
                {item.details.map((detail) => (
                  <li key={detail} className="text-muted-foreground text-sm flex items-start gap-2">
                    <Star size={14} className="text-primary mt-0.5 flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
