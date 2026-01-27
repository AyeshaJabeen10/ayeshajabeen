import { portfolioData } from "@/data/portfolioData";
import { FolderGit2, ExternalLink } from "lucide-react";

export const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <FolderGit2 size={24} />
          <h2 className="section-title mb-0">Projects</h2>
        </div>
        <p className="section-subtitle">Some of my notable works</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="project-card group">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-lg font-semibold leading-tight group-hover:text-muted-foreground transition-colors">
                  {project.title}
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-secondary transition-colors flex-shrink-0"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-secondary text-xs rounded font-medium"
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
