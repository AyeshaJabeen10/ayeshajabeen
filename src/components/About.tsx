import { portfolioData } from "@/data/portfolioData";
import { User } from "lucide-react";

export const About = () => {
  const { about } = portfolioData;

  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <User size={24} />
          <h2 className="section-title mb-0">About Me</h2>
        </div>
        <p className="section-subtitle">Get to know me better</p>

        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {about.summary}
          </p>
        </div>
      </div>
    </section>
  );
};
