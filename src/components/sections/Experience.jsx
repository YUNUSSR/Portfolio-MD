import experience from "../../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="py-16 space-y-6"
      data-aos="fade-up"
    >
      <h3 className="text-2xl font-semibold">Experience</h3>
      <p className="text-slate-400 text-sm">
        Roles where I worked across recruitment, fitness, finance and data, and business intelligence.
      </p>

      <div className="space-y-4">
        {experience
          .sort((a, b) => a.order - b.order)
          .map((item, index) => (
            <article
              key={item.title}
              className="border border-slate-800 rounded-xl p-4 sm:p-5 bg-slate-900/40 hover:bg-slate-900/70 transition transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <h4 className="text-lg font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {item.company} • {item.location}
                  </p>
                </div>
                <span className="text-xs text-slate-400">
                  {item.period}
                </span>
              </div>

              <p className="text-sm text-slate-300 mt-2">
                {item.description}
              </p>

              <ul className="mt-3 space-y-1 text-xs text-slate-400 list-disc list-inside">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
      </div>
    </section>
  );
}

export default Experience;
