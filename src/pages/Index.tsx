import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import AIEcosystemSection from "@/components/AIEcosystemSection";
import ChatbotSection from "@/components/ChatbotSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <ScrollProgress />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <ShowcaseSection />
    <AIEcosystemSection />
    <ChatbotSection />
    <EducationSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
