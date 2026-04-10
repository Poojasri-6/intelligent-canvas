import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  stack: string[];
  achievements: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "AI Content Intelligence Platform (LLM CMS)",
    description: "Production-ready CMS with AI-powered search, summarization, and tagging integrated with MySQL and Groq API.",
    stack: ["Next.js", "TypeScript", "MySQL", "Groq API", "JWT"],
    achievements: ["JWT Authentication", "AI Summarization & Tagging", "Knowledge Graph Construction", "NLQ Search"],
  },
  {
    title: "Enterprise Digital Platform with Automation",
    description: "Highly automated business platforms with behavior analysis and SEO optimization for multiple live clients.",
    stack: ["React.js", "Node.js", "LLM APIs", "Automation"],
    achievements: ["Email Automation system", "Behavior Analysis engine", "Live at aramanalytics.com & deeptrust.tech"],
    link: "https://aramanalytics.com",
  },
  {
    title: "Airplane Delay Prediction System",
    description: "Machine learning model achieving 87% accuracy for predicting flight delays, featuring a real-time prediction API.",
    stack: ["Python", "XGBoost", "Flask", "Pandas"],
    achievements: ["87% prediction accuracy", "Real-time Prediction REST API", "High-performance XGBoost model"],
  },
  {
    title: "Crop Recommendation System (Explainable AI)",
    description: "Hybrid ML + CNN system for soil and image-based crop predictions with an integrated interactive chatbot.",
    stack: ["Hybrid ML", "CNN", "XGBoost", "Python", "Chatbot"],
    achievements: ["Soil + Image-based predictions", "Explainable AI (XAI) integration", "Interactive Chatbot interface"],
  },
  {
    title: "Automated EDA System",
    description: "Statistical reporting tool that generates deep correlations and outlier detections, significantly reducing analysis time.",
    stack: ["Python", "ydata-profiling", "Pandas", "Automation"],
    achievements: ["70% reduction in manual effort", "Statistical Report Generation", "Correlation & Outlier Detection"],
  },
  {
    title: "Train Ticket Booking System",
    description: "Full-stack MERN application for managing train reservations with role-based access control.",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    achievements: ["Role-based Access Control", "Seat Availability Management", "End-to-end Booking Workflow"],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <AnimatedSection delay={index * 0.1}>
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="glass-card rounded-xl overflow-hidden hover-glow h-full flex flex-col group"
    >
      {/* Accent top bar */}
      <div className="h-1 gradient-accent" />
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <ExternalLink size={16} />
            </a>
          )}
        </div>

        <p className="text-muted-foreground text-sm mb-4 flex-1">{project.description}</p>

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                {tech}
              </span>
            ))}
          </div>

          <ul className="space-y-1">
            {project.achievements.map((a) => (
              <li key={a} className="text-xs text-muted-foreground flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  </AnimatedSection>
);

const ProjectsSection = () => (
  <section id="projects" className="section-padding">
    <div className="container mx-auto">
      <SectionHeading title="Projects" subtitle="Featured work showcasing AI engineering and full-stack development" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
