import projects from "../../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-10 space-y-6"
      data-aos="fade-up"
    >
      <h3 className="text-2xl font-semibold">Projects</h3>
      <p className="text-slate-400 text-sm">
        A selection of my work in Power BI and web development.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="border border-slate-800 rounded-xl p-4 hover:border-blue-400 transition transform hover:-translate-y-1"
            data-aos="zoom-in"
            data-aos-delay={index * 120}
          >
            <h4 className="text-lg font-semibold mb-1">
              {project.title}
            </h4>
            <p className="text-sm text-slate-400 mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-slate-300 mb-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 rounded-full bg-slate-900 border border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-blue-400 hover:underline"
              >
                View on GitHub
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
