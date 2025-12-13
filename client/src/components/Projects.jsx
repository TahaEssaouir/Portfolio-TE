export default function Projects({ projects }) {
  return (
    <section id="projets" className="py-10 text-slate-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-white">Projets </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {projects.map(p => (
            <div key={p.id} className="border border-slate-700 rounded-lg p-4 flex flex-col">
              <span className="text-xs text-accent mb-1">{p.period}</span>
              <h3 className="font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-300 flex-1">{p.description}</p>
              <p className="mt-2 text-xs text-slate-400">
                <span className="font-semibold">Technologies :</span> {p.technologies}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
