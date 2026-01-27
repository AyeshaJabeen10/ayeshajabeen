import { portfolioData } from "@/data/portfolioData";
import { MapPin, ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-20"
    >
      <div className="section-container text-center">
        <div className="animate-fade-up">
          <p className="text-muted-foreground text-sm md:text-base uppercase tracking-widest mb-4">
            {personal.title}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
            {personal.name}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            {personal.tagline}
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10">
            <MapPin size={16} />
            <span className="text-sm">{personal.location}</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#contact" className="btn-primary">
              <Mail size={18} />
              Get in Touch
            </a>
            <a
              href={personal.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Download Resume
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="p-3 rounded-full border border-border hover:bg-secondary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          aria-label="Scroll to About"
        >
          <ArrowDown size={24} className="text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};
