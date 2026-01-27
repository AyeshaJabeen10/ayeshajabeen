import { portfolioData } from "@/data/portfolioData";
import { Code2, Brain, Users } from "lucide-react";

const skillCategories = [
  { key: "AI_ML", label: "AI & Machine Learning", icon: Brain },
  { key: "programming", label: "Programming", icon: Code2 },
  { key: "web", label: "Web Development", icon: Code2 },
  { key: "databases", label: "Databases", icon: Code2 },
  { key: "tools", label: "Tools & Platforms", icon: Code2 },
];

export const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <Code2 size={24} />
          <h2 className="section-title mb-0">Skills</h2>
        </div>
        <p className="section-subtitle">Technologies and tools I work with</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            {skillCategories.map(({ key, label, icon: Icon }) => {
              const skillList = skills.technical[key as keyof typeof skills.technical];
              if (!skillList) return null;
              
              return (
                <div key={key} className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon size={16} />
                    <span className="text-sm font-medium uppercase tracking-wide">
                      {label}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span key={skill} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-3">
              <Users size={16} />
              <span className="text-sm font-medium uppercase tracking-wide">
                Interpersonal
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.soft.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
