export default function Education({ education }) {
  return (
    <section id="formation" className="py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Formation</h2>
        <div className="space-y-3">
          {education.map(ed => (
            <div key={ed.id} className="border border-slate-700 rounded-lg p-4">
              <h3 className="font-semibold">{ed.degree}</h3>
              <p className="text-sm text-slate-300">{ed.school}</p>
              <p className="text-xs text-slate-400">
                {ed.start_year} – {ed.end_year} · {ed.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
