import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

export const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <GraduationCap size={24} />
          <h2 className="section-title mb-0">Education</h2>
        </div>
        <p className="section-subtitle">My academic background</p>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-foreground rounded-full -translate-x-[9px]" />
              
              <div className="experience-card ml-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">
                      {edu.degree}
                      {edu.field && <span className="font-normal text-muted-foreground"> – {edu.field}</span>}
                    </h3>
                    <p className="text-muted-foreground mt-1">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={14} />
                      <span>{edu.duration}</span>
                    </div>
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                      {edu.score}
                    </span>
                  </div>
                </div>

                {edu.subjects && edu.subjects.length > 0 && (
                  <div className="mt-4">
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <BookOpen size={14} />
                      <span className="text-xs font-medium uppercase tracking-wide">Key Subjects</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="px-2 py-1 bg-secondary text-xs rounded font-medium"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
