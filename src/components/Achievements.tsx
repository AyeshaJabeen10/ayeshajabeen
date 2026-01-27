import { portfolioData } from "@/data/portfolioData";
import { Award, Check } from "lucide-react";

export const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="bg-secondary/30">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <Award size={24} />
          <h2 className="section-title mb-0">Achievements</h2>
        </div>
        <p className="section-subtitle">Recognition and certifications</p>

        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-card border border-border rounded-lg card-hover"
            >
              <div className="p-2 bg-primary text-primary-foreground rounded-full flex-shrink-0">
                <Check size={16} />
              </div>
              <p className="text-foreground">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
