function Education() {
  return (
    <section
      id="education"
      className="py-16 space-y-6"
      data-aos="fade-up"
    >
      <h3 className="text-2xl font-semibold">Education</h3>

      <div
        className="border border-slate-800 rounded-xl p-4 sm:p-5 bg-slate-900/40"
        data-aos="fade-right"
      >
        <h4 className="text-lg font-semibold">
          B.Sc in Computer Science
        </h4>
        <p className="text-sm text-slate-300">
          Jamal Mohamed College, Tiruchirappalli
        </p>
        <p className="text-xs text-slate-400 mt-1">
          Jun 2022 — Apr 2025 • GPA: 7.73
        </p>

        <div className="mt-3 space-y-1 text-xs text-slate-400">
          <p>Key focus: Programming fundamentals, databases, and web technologies.</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div
          className="border border-slate-800 rounded-xl p-4 bg-slate-900/30"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h5 className="text-sm font-semibold mb-1">
            Certifications
          </h5>
          <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
            <li>Deloitte Australia Data Analytics Job Simulation (Forage)</li>
            <li>Advanced Power BI Masterclass (Skill Nation)</li>
            <li>Generative AI Workshop (Data Shore)</li>
          </ul>
        </div>

        <div
          className="border border-slate-800 rounded-xl p-4 bg-slate-900/30"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <h5 className="text-sm font-semibold mb-1">
            Achievements
          </h5>
          <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
            <li>2nd Prize in Weightlifting – University Level</li>
            <li>2nd & 3rd Prize in Powerlifting – State & District Levels</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
