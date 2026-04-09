import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto text-center">
      <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
        © 2024 Poojasri M. Built with <Heart size={14} className="text-primary" /> and AI
      </p>
    </div>
  </footer>
);

export default Footer;
