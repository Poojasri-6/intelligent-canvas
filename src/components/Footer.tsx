import { Heart, Linkedin, Mail, Github } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border bg-secondary/30">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
        <div className="text-left">
          <h3 className="text-xl font-display font-bold text-foreground mb-2">Poojasri M</h3>
          <p className="text-muted-foreground text-sm max-w-xs">
            AI Engineer specializing in scalable ML systems, LLM-powered applications, and Java Full-Stack development.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/pooja-mani-aa540b255"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/Poojasri-6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:srimpooja@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-sm flex items-center gap-1">
          © 2024 Poojasri M. Built with <Heart size={14} className="text-primary" /> and AI
        </p>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
          <a href="/llms.txt" className="text-muted-foreground hover:text-primary transition-colors">AI Docs</a>
          <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
