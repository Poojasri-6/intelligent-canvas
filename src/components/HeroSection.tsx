import { useEffect, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { ArrowDown, Mail, FolderOpen } from "lucide-react";
import profileImg from "@/assets/pooja.jpeg";

function FloatingNodes() {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const pos = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05;
      ref.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#3B82F6" size={0.05} sizeAttenuation depthWrite={false} opacity={0.8} />
    </Points>
  );
}

const TypingText = () => {
  const texts = [
    "Building Intelligent Systems with AI, LLMs & Automation",
  ];
  const text = texts[0];

  return (
    <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + i * 0.03, duration: 0.1 }}
        >
          {char}
        </motion.span>
      ))}
      <span className="border-r-2 border-primary animate-typing-cursor ml-1">&nbsp;</span>
    </h1>
  );
};

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
          <ambientLight intensity={0.5} />
          <FloatingNodes />
        </Canvas>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/80 via-background/60 to-background" />

      <div className="container mx-auto relative z-10 py-20 mt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image (First on mobile, second on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex justify-center order-1 lg:order-2 mb-12 lg:mb-0 relative z-20"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-primary/30 glow-box relative z-30">
                <img src={profileImg} alt="Poojasri M" width={512} height={512} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -inset-4 rounded-full border border-primary/10 animate-rotate-slow z-10" />
              <div className="absolute -inset-8 rounded-full border border-primary/5 animate-rotate-slow z-0" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
            </div>
          </motion.div>

          {/* Intro Text (Second on mobile, first on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
              AI Engineer • Full-Stack AI Developer
            </p>

            <TypingText />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.6 }}
              className="text-muted-foreground text-lg mt-6 max-w-lg leading-relaxed"
            >
              AI Engineer specializing in scalable ML systems, LLM-powered applications, and agentic workflows
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 0.5 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="gradient-accent text-primary-foreground px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-all glow-box"
              >
                <FolderOpen size={18} /> View Projects
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="border border-primary/40 text-foreground px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:border-primary hover:bg-primary/10 transition-all"
              >
                <Mail size={18} /> Contact Me
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button onClick={() => scrollTo("#about")} className="text-muted-foreground hover:text-primary transition-colors animate-float">
            <ArrowDown size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
