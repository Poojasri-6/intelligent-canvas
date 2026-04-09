import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { ExternalLink } from "lucide-react";

import imgAram from "@/assets/showcase/aramanalytics.png";
import imgDeeptrust from "@/assets/showcase/deeptrust.png";
import imgNamma from "@/assets/showcase/nammapuducherry.png";
import imgAnanthan from "@/assets/showcase/ananthanayyasamy.png";
import imgVaazhai from "@/assets/showcase/vaazhai.png";
import imgTensemi from "@/assets/showcase/tensemi.png";
import imgBjp from "@/assets/showcase/bjp4tenkasi.png";

const sites = [
  { name: "Aram Analytics", url: "aramanalytics.com", desc: "AI-driven analytics platform", img: imgAram },
  { name: "DeepTrust", url: "deeptrust.tech", desc: "AI trust & verification system", img: imgDeeptrust },
  { name: "Namma Puducherry", url: "nammapuducherry.org", desc: "Community digital presence", img: imgNamma },
  { name: "Ananthanayyasamy", url: "ananthanayyasamy.com", desc: "Professional portfolio", img: imgAnanthan },
  { name: "Vaazhai", url: "vaazhai.org", desc: "Organization website", img: imgVaazhai },
  { name: "TenSemi", url: "tensemi.com", desc: "Semiconductor tech platform", img: imgTensemi },
  { name: "BJP4Tenkasi", url: "bjp4tenkasi.com", desc: "Political digital presence", img: imgBjp },
];

const ShowcaseSection = () => (
  <section className="section-padding particle-bg">
    <div className="container mx-auto">
      <SectionHeading title="Work Showcase" subtitle="Digital presence systems and AI-integrated websites I've built" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {sites.map((site, i) => (
          <AnimatedSection key={site.url} delay={i * 0.08}>
            <motion.a
              href={`https://${site.url}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              className="glass-card rounded-xl overflow-hidden hover-glow block group"
            >
              {/* Screenshot preview */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={site.img}
                  alt={`${site.name} homepage`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                  <span className="text-xs text-foreground flex items-center gap-1 font-medium">
                    Visit Site <ExternalLink size={12} />
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h4 className="font-display font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                  {site.name}
                </h4>
                <p className="text-xs text-muted-foreground mt-1">{site.desc}</p>
                <p className="text-xs text-primary/60 mt-1.5">{site.url}</p>
              </div>
            </motion.a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ShowcaseSection;
