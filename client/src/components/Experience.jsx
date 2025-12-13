export default function Experience({ experiences }) {
  return (
    <section id="expérience" className="py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Expériences professionnelles</h2>
        <div className="space-y-4">
          {experiences.map(exp => (
            <div key={exp.id} className="border border-slate-700 rounded-lg p-4">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <div>
                  <h3 className="font-semibold">{exp.title}</h3>
                  <p className="text-sm text-slate-300">
                    {exp.company} – {exp.location}
                  </p>
                </div>
                <span className="text-xs bg-slate-800 px-2 py-1 rounded">
                  {exp.start_date} – {exp.end_date}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-200">{exp.description}</p>
              <p className="mt-2 text-xs text-slate-400">
                <span className="font-semibold">Technologies :</span> {exp.technologies}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
