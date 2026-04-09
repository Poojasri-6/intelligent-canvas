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
    title: "AI Digital Presence Systems",
    description: "AI-driven digital ecosystems with automation, analytics, and LLM integration for multiple enterprise websites.",
    stack: ["React", "Next.js", "LLM APIs", "n8n", "Analytics"],
    achievements: ["Built aramanalytics.com & deeptrust.tech", "Full AI automation pipelines", "Scalable multi-site architecture"],
    link: "https://aramanalytics.com",
  },
  {
    title: "LLM Content Intelligence Platform",
    description: "Multi-CMS integration platform with AI-powered search, summarization, tagging, and knowledge graph construction.",
    stack: ["Python", "OpenAI", "WordPress", "Drupal", "Joomla"],
    achievements: ["Multi-CMS integration", "AI search & summarization", "Knowledge graph generation"],
  },
  {
    title: "Airplane Delay Prediction System",
    description: "Machine learning model achieving 87% accuracy for predicting flight delays, deployed as a web application.",
    stack: ["Python", "Scikit-learn", "Flask", "Pandas"],
    achievements: ["87% prediction accuracy", "Real-time Flask web app", "Feature engineering pipeline"],
  },
  {
    title: "Crop Recommendation System (XAI)",
    description: "Hybrid XGBoost + CNN system with SHAP explainability for crop recommendations and disease detection.",
    stack: ["XGBoost", "CNN", "SHAP", "TensorFlow", "Python"],
    achievements: ["Explainable AI with SHAP", "Hybrid ML approach", "Disease detection module"],
  },
  {
    title: "EDA Automation System",
    description: "Automated exploratory data analysis with profiling, visualization generation, and analytics pipeline.",
    stack: ["Python", "Pandas", "Matplotlib", "Automation"],
    achievements: ["Automated profiling", "Report generation", "Pipeline optimization"],
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
