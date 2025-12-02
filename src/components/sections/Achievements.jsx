// src/components/sections/Achievements.jsx
import achievements from "../../data/achievements";

function Achievements() {
  return (
    <section id="achievements" className="py-12 space-y-6" data-aos="fade-up">
      <h3 className="text-2xl font-semibold">Achievements</h3>
      <p className="text-slate-400 text-sm max-w-2xl">
        Selected achievements during my college and extracurricular activities.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((a, idx) => (
          <article
            key={`${a.title}-${idx}`}
            className="border border-slate-800 rounded-xl p-4 bg-slate-900/40 hover:bg-slate-900/60 transition transform hover:-translate-y-1"
            data-aos="fade-up"
            data-aos-delay={idx * 80}
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-semibold">{a.title}</h4>
                <p className="text-xs text-slate-400">
                  {a.org} • {a.period}
                </p>
              </div>
              <div className="flex flex-wrap gap-1">
                {a.tags?.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-sm text-slate-300 mt-3">{a.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
