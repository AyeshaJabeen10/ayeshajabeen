import { portfolioData } from "@/data/portfolioData";
import { Briefcase, Calendar, Building2 } from "lucide-react";

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="bg-secondary/30">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <Briefcase size={24} />
          <h2 className="section-title mb-0">Experience</h2>
        </div>
        <p className="section-subtitle">My professional journey</p>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <Building2 size={16} />
                    <span>{exp.organization}</span>
                  </div>
                </div>
                <div className="flex flex-col items-start md:items-end gap-1">
                  <span className="px-3 py-1 bg-secondary text-sm rounded-full font-medium">
                    {exp.type}
                  </span>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar size={14} />
                    <span>{exp.duration}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 flex-shrink-0" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
