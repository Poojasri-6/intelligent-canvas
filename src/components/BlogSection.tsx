import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { BookOpen, ArrowRight, Calendar, User } from "lucide-react";
import { motion } from "framer-motion";

const articles = [
  {
    title: "The Shift to Agentic AI: Why Workflows Matter More Than Models",
    excerpt: "Exploring the transition from prompt-based interactions to autonomous agents capable of reasoning and executing multi-step business processes.",
    date: "April 5, 2024",
    author: "Poojasri M",
    category: "AI Strategy",
    link: "#",
  },
  {
    title: "Architecting Scalable RAG Pipelines for Enterprise Knowledge",
    excerpt: "A deep dive into Retrieval Augmented Generation, vector databases, and ensuring low-latency intelligence at scale.",
    date: "March 28, 2024",
    author: "Poojasri M",
    category: "Technical",
    link: "#",
  },
  {
    title: "Bridging the Gap: From ML Research to Production Deployment",
    excerpt: "Practical insights on building robust data pipelines and model monitoring systems for mission-critical AI applications.",
    date: "March 15, 2024",
    author: "Poojasri M",
    category: "Engineering",
    link: "#",
  },
];

const BlogSection = () => (
  <section id="blog" className="section-padding particle-bg">
    <div className="container mx-auto">
      <SectionHeading title="Insights & Thought Leadership" subtitle="Articles and perspectives on the evolving landscape of AI and automation" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((post, i) => (
          <AnimatedSection key={post.title} delay={i * 0.1}>
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl overflow-hidden hover-glow h-full flex flex-col group bg-secondary/20 border-border/50"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4 text-xs font-medium uppercase tracking-wider text-primary">
                  <span>{post.category}</span>
                </div>
                
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="pt-6 border-t border-border/50 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <a href={post.link} className="flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all">
                    Read More <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <button className="border border-primary/40 text-foreground px-8 py-3 rounded-lg font-medium inline-flex items-center gap-2 hover:border-primary hover:bg-primary/10 transition-all">
          <BookOpen size={18} /> View All Insights
        </button>
      </div>
    </div>
  </section>
);

export default BlogSection;
