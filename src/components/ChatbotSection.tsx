import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { MessageCircle, ExternalLink } from "lucide-react";

const ChatbotSection = () => (
  <section className="section-padding particle-bg">
    <div className="container mx-auto">
      <AnimatedSection>
        <div className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center hover-glow">
          <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-6">
            <MessageCircle size={32} className="text-primary-foreground" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Conversational AI Systems
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Built an intelligent chatbot system for{" "}
            <a href="https://kottravai.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              kottravai.in
            </a>{" "}
            — demonstrating expertise in conversational AI, natural language understanding, and 
            seamless user interaction design. These AI-powered chatbots handle complex queries, 
            provide contextual responses, and continuously improve through feedback loops.
          </p>
          <a
            href="https://kottravai.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
          >
            View Live <ExternalLink size={14} />
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ChatbotSection;
